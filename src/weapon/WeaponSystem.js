/**
 * WeaponSystem.js — Full firearm simulation for a 3A-grade FPS.
 *
 * Handles auto-fire, ammo, reload, viewmodel posing (hip/ADS), sway, recoil,
 * muzzle flash, casing ejection, world raycast hits, enemy damage, and hit feedback.
 * References `r.vmScene`/`r.vmCamera` for the viewmodel pass, separate from world.
 */
import * as THREE from 'three';
import { CFG } from '../core/Config.js';
import { GameState } from '../core/GameState.js';
import { bus } from '../core/Events.js';
import { buildHK416 } from './HK416.js';
import { buildM9 } from './M9.js';
import { spawnCasing, updateCasings } from './Casing.js';

// ── reusable temporaries (allocated once) ──
const _camDir = new THREE.Vector3();
const _right = new THREE.Vector3();
const _up = new THREE.Vector3();
const _spreadQ = new THREE.Quaternion();
const _ray = new THREE.Raycaster();
_ray.far = 120;
const _sphereOc = new THREE.Vector3();

// ── per-shot scratch buffers (never allocated in hot paths) ──
const _Y_UP = new THREE.Vector3(0, 1, 0);
const _euler = new THREE.Euler(0, 0, 0, 'YXZ');
const _worldMuzzle = new THREE.Vector3();
const _sc = new THREE.Vector3();
const _hitPt = new THREE.Vector3();
const _hitNorm = new THREE.Vector3();
const _casingOff = new THREE.Vector3();
const _casingVel = new THREE.Vector3();

export class WeaponSystem {
  /**
   * @param {import('../core/Renderer.js').GameRenderer} r
   * @param {import('../input/Input.js').Input} input
   * @param {object} player - PlayerController { recoil(kick), ads, isAlive, sprint }
   * @param {object} world - WorldBuilder { raycastables[] }
   * @param {object} particles - { burst(pos, count, opts) }
   * @param {object} fx - { muzzle(pos, dir, color, scale), impact(pos, normal, color), hitmark(pos), spark(pos) }
   * @param {import('../audio/AudioFX.js').AudioFX} audio
   */
  constructor(r, input, player, world, particles, fx, audio) {
    this.r = r;
    this.input = input;
    this.player = player;
    this.world = world;
    this.particles = particles;
    this.fx = fx;
    this.audio = audio;
    this.cfg = CFG.weapon;

    // ── weapon slot (primary / pistol) ──
    this._slot = 'primary';
    this._pistolCfg = CFG.pistol;

    // ── primary state ──
    this.ammo = this.cfg.magSize;
    this.reserve = this.cfg.reserve;
    this.cooldown = 0;
    this.fireInterval = 60 / this.cfg.rpm;
    this.reloadTimer = 0;
    this.reloading = false;

    // ── pistol state ──
    this._pistolAmmo = this._pistolCfg.magSize;
    this._pistolReserve = this._pistolCfg.reserve;
    this._pistolCooldown = 0;
    this._pistolReloadTimer = 0;
    this._pistolReloading = false;
    this._pistolFireInterval = 60 / this._pistolCfg.rpm;
    this._swapTimer = 0; // swap animation time

    // ── viewmodel target positions (in vmCamera space) ──
    // Gun model is ~0.87m long along -Z. We place it close to the camera so it
    // fills the view at the same FOV the world uses (CFG.fov, default 80).
    // Hip: bottom-right corner.  ADS: centered, pulled slightly closer.
    this._hipPos = new THREE.Vector3(0.24, -0.18, -0.26);
    this._adsPos = new THREE.Vector3(0.00, -0.09, -0.20);
    this._targetPos = new THREE.Vector3().copy(this._hipPos);
    this._currentPos = new THREE.Vector3().copy(this._hipPos);

    // ── spring-damper kick accumulators ──
    this._kickPos = new THREE.Vector3();
    this._kickRot = new THREE.Vector3();
    this._kickVelPos = new THREE.Vector3();
    this._kickVelRot = new THREE.Vector3();

    // ── sway phase ──
    this._swayTime = 0;

    // ── muzzle flash sprite (placed on viewmodel at muzzle anchor) ──
    const flashTex = this._createFlashTex();
    this._flashSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: flashTex,
      blending: THREE.AdditiveBlending,
      depthTest: true,
      depthWrite: false,
      opacity: 0,
      transparent: true,
      color: 0xffc27a,
    }));
    this._flashSprite.scale.set(0.18, 0.18, 1);
    this._flashSprite.visible = false;

    // ── muzzle point light (viewmodel, fills nearby surfaces) ──
    this._flashLight = new THREE.PointLight(0xffa53d, 0, 3);
    this._flashLight.visible = false;

    // ── build viewmodel ──
    this.viewmodel = new THREE.Group();
    this.viewmodel.name = 'ViewModelRoot';

    this._gun = buildHK416();
    this.viewmodel.add(this._gun);

    // muzzle flash sprite + light follow the gun as children
    if (this._gun.muzzle) {
      this._gun.muzzle.add(this._flashSprite);
      this._gun.muzzle.add(this._flashLight);
      this._flashSprite.position.set(0, 0, 0);
      this._flashLight.position.set(0, 0, 0);
    } else {
      this.viewmodel.add(this._flashSprite);
      this.viewmodel.add(this._flashLight);
    }

    this.viewmodel.position.copy(this._hipPos);
    r.vmScene.add(this.viewmodel);

    // ── vmScene lighting (MeshStandardMaterial needs lights) ──
    // The world lighting module only lights r.scene, not r.vmScene.
    if (!r.vmScene._weaponLit) {
      const vmAmbient = new THREE.AmbientLight('#8899bb', 1.4);
      r.vmScene.add(vmAmbient);
      const vmKey = new THREE.DirectionalLight('#ffe8d0', 2.2);
      vmKey.position.set(2, 3, 4);
      r.vmScene.add(vmKey);
      const vmFill = new THREE.DirectionalLight('#8899cc', 0.6);
      vmFill.position.set(-1, 0.5, -1);
      r.vmScene.add(vmFill);
      r.vmScene._weaponLit = true;
    }

    // ── viewmodel camera FOV ──
    // MUST match main camera FOV so perspective is consistent.
    r.vmCamera.fov = CFG.fov;
    r.vmCamera.near = 0.01;
    r.vmCamera.updateProjectionMatrix();

    // Scale gun to ~0.5m so it sits naturally in the close foreground.
    this._gun.scale.setScalar(0.55);

    // enable viewmodel rendering pass (demo mode disables it)
    r.renderViewModel = true;

    // ── publish initial state ──
    GameState.ammo = this.ammo;
    GameState.magSize = this.cfg.magSize;
    GameState.reserve = this.reserve;
    GameState.reloading = this.reloading;
    GameState.weaponName = this.cfg.name;
  }

  /** Wire enemy manager reference after construction (called from main.js). */
  setEnemyManager(em) { this._enemyManager = em; }

  /**
   * Swap between primary (HK416) and pistol slots.
   * Called from main.js on 1/2 digit key press.
   */

  /** Swap to primary weapon (HK416). */
  swapToPrimary() {
    if (this._slot === 'primary') return;
    this._savePistolState();
    this._slot = 'primary';
    this._swapTimer = 0.35;
    this._swapGunModel();
  }

  /** Swap to secondary pistol (M9). */
  swapToPistol() {
    if (this._slot === 'pistol') return;
    this._savePrimaryState();
    this._slot = 'pistol';
    this._swapTimer = 0.35;
    this._swapGunModel();
  }

  _savePrimaryState() {
    this._primaryAmmo = this.ammo;
    this._primaryReserve = this.reserve;
    this._primaryReloading = this.reloading;
    this._primaryCooldown = this.cooldown;
  }

  _savePistolState() {
    this._pistolAmmo = this.ammo;
    this._pistolReserve = this.reserve;
    this._pistolReloading = this.reloading;
    this._pistolCooldown = this.cooldown;
  }

  _swapGunModel() {
    // Detach reusable muzzle-flash children BEFORE disposing the old gun,
    // otherwise traverse+dispose destroys the flash sprite material permanently.
    if (this._flashSprite.parent) this._flashSprite.parent.remove(this._flashSprite);
    if (this._flashLight.parent) this._flashLight.parent.remove(this._flashLight);

    // Remove old gun from viewmodel
    if (this._gun) {
      this.viewmodel.remove(this._gun);
      this._gun.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
          else child.material.dispose();
        }
      });
    }

    if (this._slot === 'primary') {
      this._gun = buildHK416();
      this.cfg = CFG.weapon;
      this.ammo = this._primaryAmmo ?? this.cfg.magSize;
      this.reserve = this._primaryReserve ?? this.cfg.reserve;
      this.reloading = this._primaryReloading ?? false;
      this.cooldown = this._primaryCooldown ?? 0;
      this.fireInterval = 60 / this.cfg.rpm;
    } else {
      this._gun = buildM9();
      this.cfg = this._pistolCfg;
      this.ammo = this._pistolAmmo;
      this.reserve = this._pistolReserve;
      this.reloading = this._pistolReloading;
      this.cooldown = this._pistolCooldown;
      this.fireInterval = 60 / this.cfg.rpm;
    }

    this._gun.scale.setScalar(0.55);
    this.viewmodel.add(this._gun);

    // Re-attach muzzle flash to the new gun
    if (this._gun.muzzle) {
      this._gun.muzzle.add(this._flashSprite);
      this._gun.muzzle.add(this._flashLight);
      this._flashSprite.position.set(0, 0, 0);
      this._flashLight.position.set(0, 0, 0);
    }

    // Update GameState
    GameState.ammo = this.ammo;
    GameState.magSize = this.cfg.magSize;
    GameState.reserve = this.reserve;
    GameState.reloading = this.reloading;
    GameState.weaponName = this.cfg.name;
  }

  /* ─────────────────────────── helpers ─────────────────────────── */

  _createFlashTex() {
    const s = 64;
    const c = document.createElement('canvas');
    c.width = c.height = s;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,240,180,1)');
    g.addColorStop(0.12, 'rgba(255,200,110,0.95)');
    g.addColorStop(0.35, 'rgba(255,140,50,0.7)');
    g.addColorStop(0.65, 'rgba(255,70,10,0.15)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const tex = new THREE.CanvasTexture(c);
    tex.needsUpdate = true;
    return tex;
  }

  /* ─────────────────────────── public ─────────────────────────── */

  get ready() {
    return !this.reloading && this.cooldown <= 0 && this.ammo > 0;
  }

  reload() {
    if (this.reloading) return;
    if (this.ammo >= this.cfg.magSize) return;
    if (this.reserve <= 0) return;
    this.reloading = true;
    this.reloadTimer = this.cfg.reloadTime;
    GameState.reloading = true;
    this.audio.reload();
    bus.emit('weapon:reload', {});
  }

  fire() {
    if (!this.ready) return;

    // consume ammo
    this.ammo--;
    GameState.ammo = this.ammo;
    this.cooldown = this.fireInterval;

    // camera kick
    this.player.recoil(this.cfg.recoilKick);
    bus.emit('weapon:fire', {});

    // ── spread ──
    const ads = this.player.ads ?? 0;
    let spread = this.cfg.spreadBase;
    if (GameState.view.moving) spread = this.cfg.spreadMove;
    spread = spread + (this.cfg.spreadADS - spread) * ads;

    // ── fire direction from camera center, with spread cone ──
    this.r.camera.getWorldDirection(_camDir);
    _right.crossVectors(_camDir, _Y_UP).normalize();
    _up.crossVectors(_right, _camDir).normalize();

    const rx = (Math.random() - 0.5) * spread * 2;
    const ry = (Math.random() - 0.5) * spread * 2;
    _euler.set(ry, rx, 0);
    _spreadQ.setFromEuler(_euler);
    const fireDir = _camDir.clone().applyQuaternion(_spreadQ).normalize();

    // world-space muzzle position (~1.2m ahead, slightly right)
    const camPos = this.r.camera.position;
    _worldMuzzle.copy(camPos)
      .addScaledVector(_camDir, 1.2)
      .addScaledVector(_right, 0.04);

    // world muzzle flash (FX manager)
    this.fx.muzzle(_worldMuzzle, fireDir, 0xffc27a, 1);

    // audio
    this.audio.gunshot();

    // ── ray-sphere test vs enemies ──
    let bestEnemy = null;
    let bestId = null;
    let bestPt = null;
    let bestNorm = null;
    let bestDist = 120;
    let bestHS = false;

    const enemies = GameState.enemies || [];
    for (const e of enemies) {
      if (!e.group || !e.id || e.hp <= 0) continue;
      // Enemy bounds sphere centered at chest height (matches EnemyManager.hitEnemy)
      _sc.set(e.group.position.x, e.group.position.y + 1.05, e.group.position.z);
      const sr = 0.55;

      _sphereOc.subVectors(camPos, _sc);
      const a = fireDir.dot(fireDir);
      const b = 2 * _sphereOc.dot(fireDir);
      const c = _sphereOc.dot(_sphereOc) - sr * sr;
      const disc = b * b - 4 * a * c;
      if (disc < 0) continue;
      const sqrtD = Math.sqrt(disc);
      const t1 = (-b - sqrtD) / (2 * a);
      const t2 = (-b + sqrtD) / (2 * a);
      const t = (t1 >= 0 && t1 < t2) ? t1 : t2;
      if (t < 0 || t > 120) continue;
      if (t < bestDist) {
        bestDist = t;
        bestEnemy = e;
        bestId = e.id;
        _hitPt.copy(camPos).addScaledVector(fireDir, t);
        _hitNorm.copy(_hitPt).sub(_sc).normalize();
        bestHS = _hitPt.y > _sc.y + sr * 0.55;
        // Clone the hit point / normal since we reuse the scratch buffers
        bestPt = _hitPt.clone();
        bestNorm = _hitNorm.clone();
      }
    }

    // ── raycast vs world ──
    let worldPt = null;
    let worldNorm = null;
    let worldDist = Infinity;
    if (this.world.raycastables && this.world.raycastables.length) {
      _ray.set(camPos, fireDir);
      const hits = _ray.intersectObjects(this.world.raycastables, false);
      if (hits.length) {
        worldDist = hits[0].distance;
        worldPt = hits[0].point.clone();
        worldNorm = hits[0].face
          ? hits[0].face.normal.clone()
          : new THREE.Vector3(0, 1, 0);
      }
    }

    // ── hit resolution ──
    if (bestEnemy && bestDist <= worldDist) {
      const dmg = bestHS ? this.cfg.dmg * this.cfg.headMult : this.cfg.dmg;
      bus.emit('weapon:hit', {
        id: bestId,
        dmg,
        hitPos: bestPt,
        normal: bestNorm,
        headshot: bestHS,
      });
      this.audio.hitmarker();
      this.fx.hitmark(bestPt);
    } else if (worldPt && worldDist <= 120) {
      this.fx.impact(worldPt, worldNorm, 0xffc37a);
      if (this.particles && this.particles.burst) {
        this.particles.burst(worldPt, 4, { color: '#8a8378' });
      }
    }

    // ── viewmodel muzzle flash ──
    this._flashSprite.visible = true;
    this._flashSprite.material.opacity = 0.8 + Math.random() * 0.2;
    this._flashSprite.scale.set(
      0.14 + Math.random() * 0.08,
      0.14 + Math.random() * 0.08,
      1,
    );

    this._flashLight.visible = true;
    this._flashLight.intensity = 1.2;

    // ── viewmodel kick impulse ──
    const vk = this.cfg.viewKick;
    this._kickPos.z -= vk.pos * (0.7 + Math.random() * 0.6);
    this._kickPos.y += vk.pos * 0.3 * (0.7 + Math.random() * 0.6);
    this._kickRot.x += vk.rot * (0.7 + Math.random() * 0.6);
    this._kickRot.y -= vk.rot * 0.5 * (Math.random() - 0.5);

    // ── casing ejection ──
    if (Math.random() < this.cfg.shellFreq) {
      _casingOff.copy(_right).multiplyScalar(0.22);
      const ejectPos = _worldMuzzle.clone()
        .add(_casingOff)
        .add(_casingOff.set(0, 0.04, 0)); // vertical offset, reuses same scratch
      _casingVel.set(
        _right.x * 1.8 + (Math.random() - 0.5) * 1.2,
        2.5 + Math.random() * 1.5,
        1.5 + Math.random() * 1.0,
      );
      spawnCasing(this.r, ejectPos, _casingVel.clone());
    }
  }

  /* ─────────────────────────── update ─────────────────────────── */

  update(dt) {
    const d = Math.min(dt, 0.1);

    // tick casings
    updateCasings(d);

    // ── reload timer ──
    if (this.reloading) {
      this.reloadTimer -= d;
      if (this.reloadTimer <= 0) {
        const needed = this.cfg.magSize - this.ammo;
        const available = Math.min(this.reserve, needed);
        this.ammo += available;
        this.reserve -= available;
        this.reloading = false;
        this.reloadTimer = 0;
        GameState.ammo = this.ammo;
        GameState.reserve = this.reserve;
        GameState.reloading = false;
      }
    } else {
      // ── cooldown ──
      if (this.cooldown > 0) this.cooldown -= d;

      // ── auto-fire ──
      if (this.input.mouse.down && this.cooldown <= 0) {
        if (this.ammo > 0) {
          this.fire();
        } else if (this.reserve > 0 && !this.reloading) {
          this.reload();
        } else if (this.ammo <= 0 && this.reserve <= 0) {
          this.audio.empty();
        }
      }

      // ── manual reload ──
      if (this.input.has && this.input.has('KeyR')) {
        this.reload();
      }
    }

    // ── ADS blend ──
    const ads = this.player.ads ?? 0;
    this._targetPos.lerpVectors(this._hipPos, this._adsPos, ads);
    this._currentPos.lerp(this._targetPos, 1 - Math.exp(-14 * d));

    // ── sway ──
    this._swayTime += d;
    const sa = this.cfg.swayAmp;
    const swayX = Math.sin(this._swayTime * 2.7) * sa;
    const swayY = Math.cos(this._swayTime * 3.1) * sa * 0.7;
    const swayZ = Math.cos(this._swayTime * 2.3) * sa * 0.4;

    let moveSway = 0;
    if (GameState.view.moving) {
      moveSway = GameState.view.vel * 0.0012;
    }
    const mx = Math.sin(this._swayTime * 8.5) * moveSway;
    const my = Math.cos(this._swayTime * 7.8) * moveSway;

    // ── kick spring-damper (rapid decay) ──
    const stiffness = 38;
    const damp = 12;
    const kp = this._kickPos, kv = this._kickVelPos;
    kv.x += (-kp.x * stiffness - kv.x * damp) * d;
    kv.y += (-kp.y * stiffness - kv.y * damp) * d;
    kv.z += (-kp.z * stiffness - kv.z * damp) * d;
    kp.x += kv.x * d; kp.y += kv.y * d; kp.z += kv.z * d;

    const kr = this._kickRot, kvr = this._kickVelRot;
    kvr.x += (-kr.x * stiffness - kvr.x * damp) * d;
    kvr.y += (-kr.y * stiffness - kvr.y * damp) * d;
    kvr.z += (-kr.z * stiffness - kvr.z * damp) * d;
    kr.x += kvr.x * d; kr.y += kvr.y * d; kr.z += kvr.z * d;

    // ── compose final viewmodel transform ──
    this.viewmodel.position.set(
      this._currentPos.x + swayX + mx + kp.x,
      this._currentPos.y + swayY + my + kp.y,
      this._currentPos.z + swayZ + kp.z,
    );
    this.viewmodel.rotation.set(
      swayY * 0.8 + kr.x,
      swayX * 0.6 + kr.y,
      swayZ * 0.4 + kr.z,
    );

    // ── muzzle flash sprite fade ──
    if (this._flashSprite.visible) {
      let op = this._flashSprite.material.opacity - d * 30;
      if (op <= 0) { op = 0; this._flashSprite.visible = false; }
      this._flashSprite.material.opacity = op;
      this._flashSprite.scale.multiplyScalar(1 + d * 4);
    }

    // ── muzzle point light fade ──
    if (this._flashLight.visible) {
      let intensity = this._flashLight.intensity - d * 15;
      if (intensity <= 0) { intensity = 0; this._flashLight.visible = false; }
      this._flashLight.intensity = intensity;
    }

    // ── sync vmCamera to main camera each frame ──
    this.r.vmCamera.position.copy(this.r.camera.position);
    this.r.vmCamera.quaternion.copy(this.r.camera.quaternion);

    // ── publish to GameState ──
    GameState.ammo = this.ammo;
    GameState.reserve = this.reserve;
    GameState.reloading = this.reloading;
  }
}
