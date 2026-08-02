/**
 * EnemyManager — wave-driven AI hostiles for the FPS.
 *
 * Responsibilities:
 *  - Wave spawning (4 + wave*2 enemies, capped ~14), intermission pacing (6 s).
 *  - Per-frame AI: move, strafe, line-of-sight, burst-fire with tracers + muzzle flash.
 *  - Demo mode: static formation around map centre for screenshot QA.
 *  - Damage pipeline: player → enemy (hitEnemy / damageEnemy) with death animation.
 *
 * Tunable params live in Config.js under CFG.enemy.
 */

import * as THREE from 'three';
import { CFG } from '../core/Config.js';
import { GameState } from '../core/GameState.js';
import { bus } from '../core/Events.js';
import { CollisionWorld } from '../world/Collision.js';
import { createSoldier } from './SoldierRig.js';

/* ------------------------------------------------------------------ */
/*  Internal helpers                                                    */
/* ------------------------------------------------------------------ */

const _v3 = new THREE.Vector3();

/** Reusable scratch color for hit-flash — avoids per-frame allocation. */
const _hitFlashCol = new THREE.Color();

/** Return a random float in [a, b). */
const rand = (a, b) => a + Math.random() * (b - a);

/** Clamp val to [lo, hi]. */
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/* ------------------------------------------------------------------ */
/*  Ray-sphere intersection test (inlined for hot-path perf).          */
/* ------------------------------------------------------------------ */

/**
 * Test ray against a sphere. Returns { t, pos, normal } or null.
 * @param {THREE.Vector3} O  ray origin
 * @param {THREE.Vector3} D  ray direction (normalized)
 * @param {THREE.Vector3} C  sphere centre
 * @param {number} r          sphere radius
 */
function raySphere(O, D, C, r) {
  const oc = _v3.copy(O).sub(C);
  const b = oc.dot(D);
  const c = oc.dot(oc) - r * r;
  const disc = b * b - c;
  if (disc < 0) return null;
  const t = -b - Math.sqrt(disc);
  if (t < 0) return null;
  const pos = _v3.copy(O).addScaledVector(D, t);
  return { t, pos: pos.clone(), normal: pos.clone().sub(C).normalize() };
}

/* ================================================================== */
/*  EnemyManager                                                        */
/* ================================================================== */

export class EnemyManager {
  /**
   * @param {GameRenderer} r        r.scene, r.renderer, r.camera
   * @param {WorldBuilder} world    world.groundAt(x,z), world.update(), world.collides?
   * @param {PlayerController} player  player.pos, player.hp, player.damage(n), player.isAlive
   * @param {Particles} particles   particles.burst(pos, count, opts)
   * @param {FX} fx                fx.tracer(from,to,color), fx.muzzle(pos,dir,color,scale), fx.impact, fx.explosion
   * @param {AudioFX} audio        audio.enemyShot(), audio.hit(), audio.explosion()
   */
  constructor(r, world, player, particles, fx, audio) {
    this.r = r;
    this.world = world;
    this.player = player;
    this.particles = particles;
    this.fx = fx;
    this.audio = audio;

    /** @type {Array<{id:number, group:THREE.Group, rig:object, hp:number, maxHp:number,
     *   state:string, speed:number, fireCooldown:number, burstCount:number, burstTimer:number,
     *   strafeDir:number, strafeTimer:number, dyingTimer:number, dyingTargetRot:THREE.Vector3,
     *   dyingStartY:number, hitFlash:number, walkPhase:number}>} */
    this._enemies = [];
    this._nextId = 0;
    this._demoSpawned = false;

    this._muzzle = new THREE.Vector3();
    this._muzzleDir = new THREE.Vector3();

    // Reusable raycaster for line-of-sight checks (avoid per-shot allocation)
    this._losRay = new THREE.Raycaster();
    this._losRay.far = 120;

    // listen for weapon hits from WeaponSystem
    bus.on('weapon:hit', ({ id, dmg, hitPos, normal, headshot }) => {
      this.damageEnemy(id, dmg, hitPos, normal, headshot);
    });
  }

  /* ---------------------------------------------------------------- */
  /*  Public API                                                        */
  /* ---------------------------------------------------------------- */

  /** Kick off wave 1. */
  startGame() {
    this._clearAll();
    GameState.kills = 0;
    GameState.score = 0;
    this._startWave(1);
  }

  /**
   * Called every frame during live gameplay.
   * @param {number} dt  delta seconds
   */
  update(dt) {
    if (!GameState.started) return;

    const alive = this._enemies.filter(e => e.state !== 'dead');

    // --- wave logic ---
    if (alive.length === 0 && GameState.waveState === 'active') {
      GameState.waveState = 'intermission';
      GameState.waveTimer = 6;
    }

    if (GameState.waveState === 'intermission') {
      GameState.waveTimer -= dt;
      if (GameState.waveTimer <= 0) {
        const next = GameState.wave + 1;
        if (next <= CFG.enemy.waves) {
          this._startWave(next);
        } else {
          GameState.waveState = 'idle';
          GameState.missionComplete = true;
          bus.emit('mission:complete', {});
        }
      }
      this._updateDying(dt);
      this._syncGameState();
      return;
    }

    if (GameState.waveState === 'idle') {
      this._updateDying(dt);
      this._syncGameState();
      return;
    }

    // --- active wave: update each enemy ---
    const playerAlive = this.player.isAlive !== undefined ? this.player.isAlive : GameState.alive;

    for (const e of this._enemies) {
      if (e.state === 'dead') continue;
      if (e.state === 'dying') { this._updateDyingEnemy(dt, e); continue; }

      this._updateAI(dt, e, playerAlive);
      this._updateWalkAnim(dt, e);
      this._updateHitFlash(dt, e);

      // Out-of-bounds cleanup: remove enemies that stray >150m from origin
      const oobDist = e.group.position.lengthSq();
      if (oobDist > 22500) { // 150^2
        this._removeEnemy(e);
      }
    }

    this._syncGameState();
  }

  /**
   * Demo mode — static formation for visual-QA screenshots.
   * @param {number} dt
   * @param {THREE.Vector3} cameraPos
   */
  updateDemo(dt, cameraPos) {
    if (!this._demoSpawned) {
      this._spawnDemo(cameraPos);
      this._demoSpawned = true;
    }
    for (const e of this._enemies) {
      if (e.state === 'demo') {
        e.group.lookAt(cameraPos.x, e.group.position.y, cameraPos.z);
      }
    }
    this._syncGameState();
  }

  /**
   * Player damages an enemy (called from WeaponSystem).
   * @param {number} id     enemy id
   * @param {number} dmg    damage amount
   * @param {THREE.Vector3} hitPos   world-space hit position
   * @param {THREE.Vector3} hitNormal
   */
  damageEnemy(id, dmg, hitPos, hitNormal, headshot = false) {
    const e = this._enemies.find(en => en.id === id);
    if (!e || e.state === 'dead' || e.state === 'dying') return;

    // WeaponSystem already applies its own headshot multiplier (CFG.weapon.headMult)
    // before emitting 'weapon:hit', so we use dmg as-is. The headshot flag and
    // Y-coordinate heuristic are used only for killfeed / effect purposes here.
    const isHS = headshot || (hitPos && hitPos.y > 1.65);
    const finalDmg = dmg;

    e.hp -= finalDmg;
    e.hitFlash = 0.12;

    // stash headshot flag for killfeed
    if (isHS) e._lastHitHeadshot = true;

    if (hitPos) {
      this.particles.burst(hitPos, 6, { color: 0x8b0000, size: 0.06, speed: 2.5, life: 0.4 });
      this.fx.impact(hitPos, hitNormal, 0x8b0000);
    }
    this.audio.hit();

    if (e.hp <= 0) {
      this._killEnemy(e);
    }
  }

  /**
   * Raycast convenience for the weapon system.
   * Tests every alive enemy bounding-sphere. Returns closest hit or null.
   * @param {THREE.Vector3} origin
   * @param {THREE.Vector3} direction  normalized
   * @returns {{ id:number, pos:THREE.Vector3, normal:THREE.Vector3, enemy:object }|null}
   */
  hitEnemy(origin, direction) {
    let best = null;
    let bestT = Infinity;
    const D = direction.clone().normalize();

    for (const e of this._enemies) {
      if (e.state === 'dead' || e.state === 'dying') continue;
      const centre = new THREE.Vector3(e.group.position.x, e.group.position.y + 1.05, e.group.position.z);
      const hit = raySphere(origin, D, centre, 0.55);
      if (hit && hit.t < bestT) {
        bestT = hit.t;
        best = { id: e.id, pos: hit.pos, normal: hit.normal, enemy: e,
                 headshot: hit.pos.y > centre.y + 0.55 * 0.55 };
      }
    }
    return best;
  }

  /* ---------------------------------------------------------------- */
  /*  Wave spawning                                                    */
  /* ---------------------------------------------------------------- */

  _startWave(wave) {
    GameState.wave = wave;
    GameState.waveState = 'active';
    GameState.waveTimer = 0;
    bus.emit('enemy:wave', wave);

    const count = Math.min(4 + wave * 2, 14);
    const playerPos = this.player.pos || _v3.set(0, 0, 0);

    for (let i = 0; i < count; i++) {
      const pos = this._findSpawnPos(playerPos);
      if (pos) this._spawnEnemy(pos);
    }
  }

  /**
   * Find a valid spawn point 45-80m from the player, on ground, not in collision.
   * @param {THREE.Vector3} playerPos
   * @returns {THREE.Vector3|null}
   */
  _findSpawnPos(playerPos) {
    const half = CFG.world.mapSize;
    for (let attempt = 0; attempt < 30; attempt++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = rand(45, 80);
      const x = clamp(playerPos.x + Math.cos(angle) * dist, -half, half);
      const z = clamp(playerPos.z + Math.sin(angle) * dist, -half, half);
      const y = this.world.groundAt ? this.world.groundAt(x, z) : CFG.world.groundY;

      // ensure y is a reasonable number
      const safeY = typeof y === 'number' && isFinite(y) ? y : CFG.world.groundY;

      if (this.world.collides) {
        _v3.set(x, Math.max(safeY + 0.5, 0.5), z);
        if (this.world.collides(_v3)) {
          continue;
        }
      }

      return _v3.set(x, safeY, z);
    }
    const a = Math.random() * Math.PI * 2;
    return _v3.set(Math.cos(a) * 70, CFG.world.groundY, Math.sin(a) * 70);
  }

  /** Create one enemy rig + state, add to scene and tracking array. */
  _spawnEnemy(pos) {
    const id = this._nextId++;
    const rig = createSoldier(id);
    const group = rig;
    group.position.copy(pos);
    this.r.scene.add(group);

    const e = {
      id,
      group,
      rig,
      hp: CFG.enemy.health,
      maxHp: CFG.enemy.health,
      state: 'moving',
      speed: CFG.enemy.speed + rand(-0.3, 0.3),
      fireCooldown: rand(CFG.enemy.fireInterval[0], CFG.enemy.fireInterval[1]),
      burstCount: 0,
      burstTimer: 0,
      strafeDir: Math.random() < 0.5 ? -1 : 1,
      strafeTimer: rand(2, 4),
      dyingTimer: 0,
      dyingTargetRot: null,
      dyingStartY: 0,
      hitFlash: 0,
      walkPhase: Math.random() * Math.PI * 2,
    };

    this._enemies.push(e);
    return e;
  }

  /* ---------------------------------------------------------------- */
  /*  AI update                                                        */
  /* ---------------------------------------------------------------- */

  /**
   * Per-frame AI for one enemy.
   * @param {number} dt
   * @param {object} e          enemy record
   * @param {boolean} playerAlive
   */
  _updateAI(dt, e, playerAlive) {
    const pPos = this.player.pos;
    if (!pPos) return;

    const toPlayer = _v3.copy(pPos).sub(e.group.position);
    const dist = toPlayer.length();
    const dir = toPlayer.normalize();

    // face the player
    if (dist > 0.01) {
      e.group.lookAt(pPos.x, e.group.position.y, pPos.z);
    }

    // -- movement --
    let moveDir = dir.clone();
    e.strafeTimer -= dt;

    if (dist < 30 && dist > 8) {
      // strafe perpendicular to the player
      const perp = _v3.set(-dir.z, 0, dir.x).multiplyScalar(e.strafeDir);
      moveDir.copy(dir).multiplyScalar(0.2).add(perp);
      if (e.strafeTimer <= 0) {
        e.strafeDir *= -1;
        e.strafeTimer = rand(2, 4);
      }
    } else if (dist < 8) {
      // back away
      moveDir.copy(dir).multiplyScalar(-0.5);
    }

    moveDir.y = 0;
    if (moveDir.lengthSq() > 0.001) moveDir.normalize();

    const speed = e.state === 'firing' ? e.speed * 0.3 : e.speed;
    e.group.position.x += moveDir.x * speed * dt;
    e.group.position.z += moveDir.z * speed * dt;

    // Collision resolution against world geometry
    const resolved = CollisionWorld.resolveCircle(
      e.group.position.clone(),
      0.35,
      e.group.position.y,
      e.group.position.y + 1.8
    );
    e.group.position.x = resolved.x;
    e.group.position.z = resolved.z;

    if (this.world.groundAt) {
      e.group.position.y = this.world.groundAt(e.group.position.x, e.group.position.z);
    }

    // -- firing logic --
    const inRange = dist < CFG.enemy.fireRange;
    e.fireCooldown -= dt;

    // burst fire active
    if (e.burstCount > 0 && playerAlive) {
      e.burstTimer -= dt;
      e.state = 'firing';
      if (e.burstTimer <= 0) {
        this._fireShot(e, pPos);
        e.burstCount--;
        e.burstTimer = 0.08;
      }
      if (e.burstCount <= 0) {
        e.state = 'moving';
        e.fireCooldown = rand(CFG.enemy.fireInterval[0], CFG.enemy.fireInterval[1]);
      }
    } else if (e.fireCooldown <= 0 && inRange && playerAlive) {
      e.burstCount = Math.floor(rand(CFG.enemy.burst[0], CFG.enemy.burst[1] + 1));
      e.burstTimer = 0;
    }
  }

  /** Fire one shot from enemy e toward playerPos. */
  _fireShot(e, playerPos) {
    this._getMuzzleWorld(e);

    this.fx.tracer(this._muzzle.clone(), playerPos.clone(), 0xff6a4a);
    this._muzzleDir.copy(playerPos).sub(this._muzzle).normalize();
    this.fx.muzzle(this._muzzle.clone(), this._muzzleDir.clone(), 0xff7a4a, 0.8);
    this.audio.enemyShot(this._muzzle);

    // Line-of-sight check: only hit the player if there is no world geometry in between
    if (Math.random() >= CFG.enemy.accuracy) return;
    const losDir = _v3.copy(playerPos).sub(this._muzzle).normalize();
    const losOrigin = this._muzzle.clone();
    if (this.world.raycastables && this.world.raycastables.length) {
      this._losRay.set(losOrigin, losDir);
      this._losRay.far = playerPos.distanceTo(losOrigin) + 0.5;
      const hits = this._losRay.intersectObjects(this.world.raycastables, false);
      if (hits.length > 0) return; // blocked by world geometry
    }

    this.player.damage(CFG.enemy.dmgPerShot);
    if (!this.player.isAlive) {
      GameState.alive = false;
      bus.emit('game:over', {});
    }
  }

  /** Compute world-space muzzle position for enemy e. */
  _getMuzzleWorld(e) {
    const localMuzzle = _v3.set(0.36, 1.18, 0.46);
    this._muzzle.copy(localMuzzle).applyMatrix4(e.group.matrixWorld);
  }

  /* ---------------------------------------------------------------- */
  /*  Walk animation                                                   */
  /* ---------------------------------------------------------------- */

  _updateWalkAnim(dt, e) {
    const parts = e.rig.parts;
    if (!parts) return;

    const moving = e.state === 'moving';
    const rate = CFG.enemy.speed * 5;

    if (moving) {
      e.walkPhase += dt * rate;
    } else {
      e.walkPhase *= 0.9;
    }

    const p = e.walkPhase;
    const legSwing = 0.5;
    const armSwing = 0.4;
    const active = moving ? 1 : 0.2;

    if (parts.lLeg) parts.lLeg.rotation.x = Math.sin(p) * legSwing * active;
    if (parts.rLeg) parts.rLeg.rotation.x = Math.sin(p + Math.PI) * legSwing * active;
    if (parts.lArm) parts.lArm.rotation.x = Math.sin(p + Math.PI) * armSwing * active;
    if (parts.rArm) parts.rArm.rotation.x = Math.sin(p) * armSwing * active;
  }

  /* ---------------------------------------------------------------- */
  /*  Hit flash                                                        */
  /* ---------------------------------------------------------------- */

  _updateHitFlash(dt, e) {
    if (e.hitFlash > 0) {
      e.hitFlash -= dt;
      const t = clamp(e.hitFlash / 0.12, 0, 1);
      const torso = e.rig.parts.torso;
      if (torso && torso.material) {
        torso.material.emissive = _hitFlashCol.setHSL(0, 1, t * 0.4);
        torso.material.emissiveIntensity = t;
      }
    } else if (e.hitFlash <= 0 && e._flashActive) {
      e._flashActive = false;
      const torso = e.rig.parts.torso;
      if (torso && torso.material) {
        torso.material.emissive = _hitFlashCol.set(0x000000);
        torso.material.emissiveIntensity = 0;
      }
    }
    if (e.hitFlash > 0) e._flashActive = true;
  }

  /* ---------------------------------------------------------------- */
  /*  Death                                                            */
  /* ---------------------------------------------------------------- */

  /** Transition enemy to dying state. */
  _killEnemy(e) {
    e.state = 'dying';
    e.dyingTimer = 0.8;
    e.dyingStartY = e.group.position.y;

    // fall-back or fall-side rotation
    e.dyingTargetRot = new THREE.Vector3(
      Math.random() < 0.5 ? -Math.PI / 2 : 0,
      0,
      Math.random() < 0.5 ? 0 : (Math.random() < 0.5 ? 1 : -1) * Math.PI / 2
    );

    this.fx.explosion(e.group.position.clone(), 0.5);
    this.audio.explosion(e.group.position);
    this.particles.burst(e.group.position.clone().add(_v3.set(0, 1.0, 0)), 10, {
      color: 0x8b0000,
      size: 0.08,
      speed: 4,
      life: 0.6,
    });

    GameState.kills++;
    GameState.score += 100;
    bus.emit('enemy:killed', { id: e.id, pos: e.group.position.clone(), headshot: !!e._lastHitHeadshot });
  }

  /** Per-frame dying animation. */
  _updateDyingEnemy(dt, e) {
    e.dyingTimer -= dt;
    const t = clamp(1 - e.dyingTimer / 0.8, 0, 1);

    e.group.rotation.x += (e.dyingTargetRot.x - e.group.rotation.x) * Math.min(dt * 6, 1);
    e.group.rotation.z += (e.dyingTargetRot.z - e.group.rotation.z) * Math.min(dt * 6, 1);
    e.group.position.y = e.dyingStartY - t * 0.8;

    if (t > 0.3) {
      e.group.traverse(child => { if (child.isMesh) { child.castShadow = false; child.receiveShadow = false; } });
    }

    if (e.dyingTimer <= 0) {
      this._removeEnemy(e);
    }
  }

  /** Tick all dying enemies across the full array. */
  _updateDying(dt) {
    for (const e of this._enemies) {
      if (e.state === 'dying') this._updateDyingEnemy(dt, e);
    }
  }

  /** Remove enemy from scene and dispose resources. */
  _removeEnemy(e) {
    e.state = 'dead';
    this.r.scene.remove(e.group);
    e.group.traverse(child => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
        else child.material.dispose();
      }
    });
  }

  /* ---------------------------------------------------------------- */
  /*  Demo mode                                                        */
  /* ---------------------------------------------------------------- */

  /** Spawn ~10 static enemies in a loose formation around map centre. */
  _spawnDemo(cameraPos) {
    this._clearAll();
    const spawnY = this.world.groundAt ? this.world.groundAt(0, 0) : CFG.world.groundY;
    const count = 10;
    // Spread the squad into open street areas near map centre so they read
    // clearly from the cinematic flyover (not a single tight clump).
    const radius = 26;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rand(-0.15, 0.15);
      const r = radius + rand(-4, 4);
      const x = Math.cos(angle) * r;
      const z = Math.sin(angle) * r;
      const y = this.world.groundAt ? this.world.groundAt(x, z) : spawnY;

      const rig = createSoldier(i + 1000);
      const group = rig;
      group.position.set(x, y, z);
      group.lookAt(cameraPos.x, y, cameraPos.z);

      // some kneel for visual variety
      if (i % 3 === 0) {
        group.rotation.x = -0.5;
        group.position.y -= 0.35;
      }

      this.r.scene.add(group);

      this._enemies.push({
        id: this._nextId++,
        group,
        rig,
        hp: CFG.enemy.health,
        maxHp: CFG.enemy.health,
        state: 'demo',
        speed: 0,
        fireCooldown: 999,
        burstCount: 0,
        burstTimer: 0,
        strafeDir: 0,
        strafeTimer: 0,
        dyingTimer: 0,
        dyingTargetRot: null,
        dyingStartY: 0,
        hitFlash: 0,
        walkPhase: 0,
      });
    }
  }

  /* ---------------------------------------------------------------- */
  /*  Helpers                                                          */
  /* ---------------------------------------------------------------- */

  /** Mirror live enemies to GameState.enemies for HUD / targeting. */
  _syncGameState() {
    GameState.enemies = this._enemies
      .filter(e => e.state !== 'dead')
      .map(e => ({
        id: e.id,
        pos: e.group.position.clone(),
        group: e.group,
        hp: e.hp,
        maxHp: e.maxHp,
        state: e.state,
      }));
  }

  /** Remove all enemies from scene and tracking. */
  _clearAll() {
    for (const e of this._enemies) {
      this.r.scene.remove(e.group);
      e.group.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
          else child.material.dispose();
        }
      });
    }
    this._enemies.length = 0;
    this._demoSpawned = false;
  }
}
