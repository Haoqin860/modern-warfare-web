/**
 * FX — muzzle flash, tracers, impact sparks, hitmarkers, explosions.
 * Object-pooled sprite rendering targeting 60fps with < ~300 active sprites.
 */
import * as THREE from 'three';
import { TextureAtlas } from '../core/TextureAtlas.js';

// --- pool sizes ---
const MAX_TRACERS     = 15;
const MAX_SPARKS      = 60;
const MAX_SMOKES      = 40;
const MAX_HITMARKERS  = 8;
const MAX_EXPLOSIONS  = 4;
const MAX_MUZZLE_LTS  = 4;
const MAX_MUZZLE_FLASHES = 4;

// --- reusable scratch vectors ---
const _v3   = () => new THREE.Vector3();
const _col  = () => new THREE.Color();
const _quat = new THREE.Quaternion();

// --- hitmarker canvas texture (X inside ring) ---
let _hitTex = null;
function _hitmarkerTex() {
  if (_hitTex) return _hitTex;
  const sz = 32, cx = 16, cy = 16, arm = 10;
  const cv = document.createElement('canvas'); cv.width = cv.height = sz;
  const ctx = cv.getContext('2d');
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.arc(cx, cy, arm * 0.85, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - arm, cy - arm); ctx.lineTo(cx + arm, cy + arm);
  ctx.moveTo(cx + arm, cy - arm); ctx.lineTo(cx - arm, cy + arm);
  ctx.stroke();
  _hitTex = new THREE.CanvasTexture(cv);
  _hitTex.needsUpdate = true;
  return _hitTex;
}

// --- fast round-robin allocator (steals oldest when full) ---
function _alloc(arr, nextKey, self) {
  const max = arr.length;
  const idx = self[nextKey];
  for (let j = 0; j < max; j++) {
    const i = (idx + j) % max;
    if (!arr[i].active) {
      self[nextKey] = (i + 1) % max;
      return arr[i];
    }
  }
  self[nextKey] = (idx + 1) % max;
  return arr[idx];
}

/** Helper: return a random float in [a, b). */
const rand = (a, b) => a + Math.random() * (b - a);

export class FX {
  /**
   * @param {import('../core/Renderer.js').GameRenderer} r
   * @param {import('../core/Lighting.js').SceneLighting} lighting
   */
  constructor(r, lighting) {
    this.r = r;
    this.lighting = lighting;

    const glowTex  = TextureAtlas.glowTexture(64);
    const smokeTex = TextureAtlas.smokeTexture(128);
    const hitTex   = _hitmarkerTex();

    /* ====================== MUZZLE FLASH ====================== */
    this._muzzleLights = [];
    for (let i = 0; i < MAX_MUZZLE_LTS; i++) {
      const lt = new THREE.PointLight(0xffb066, 0, 6, 2);
      lt.visible = false;
      r.scene.add(lt);
      this._muzzleLights.push({ light: lt, active: false, timer: 0, life: 0.05, decay: 14 });
    }
    this._muzzleNext = 0;
    this._muzzleSpriteNext = 0;

    this._muzzleSprites = [];
    for (let i = 0; i < MAX_MUZZLE_FLASHES; i++) {
      const mat = new THREE.SpriteMaterial({
        map: glowTex, blending: THREE.AdditiveBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: 0xffc27a, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.35, 0.35, 1);
      sp.frustumCulled = false;
      sp.visible = false;
      r.scene.add(sp);
      this._muzzleSprites.push({ sprite: sp, active: false, timer: 0, life: 0.05 });
    }

    /* ====================== TRACER POOL ====================== */
    this._tracers = [];
    this._tracerNext = 0;
    for (let i = 0; i < MAX_TRACERS; i++) {
      const mat = new THREE.SpriteMaterial({
        map: glowTex, blending: THREE.AdditiveBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: 0xffd9a0, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.frustumCulled = false; sp.visible = false;
      r.scene.add(sp);
      this._tracers.push({ sprite: sp, active: false, timer: 0, life: 0.06 });
    }

    /* ====================== SPARK POOL ====================== */
    this._sparks = [];
    this._sparkNext = 0;
    for (let i = 0; i < MAX_SPARKS; i++) {
      const mat = new THREE.SpriteMaterial({
        map: glowTex, blending: THREE.AdditiveBlending,
        depthTest: true, depthWrite: false, transparent: true, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.04, 0.04, 1); sp.frustumCulled = false; sp.visible = false;
      r.scene.add(sp);
      this._sparks.push({
        sprite: sp, active: false,
        vel: _v3(), timer: 0, life: 0.35, gravity: 9.8,
      });
    }

    /* ====================== SMOKE POOL ====================== */
    this._smokes = [];
    this._smokeNext = 0;
    for (let i = 0; i < MAX_SMOKES; i++) {
      const mat = new THREE.SpriteMaterial({
        map: smokeTex, blending: THREE.NormalBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: 0x444444, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.1, 0.1, 1); sp.frustumCulled = false; sp.visible = false;
      r.scene.add(sp);
      this._smokes.push({
        sprite: sp, active: false,
        vel: _v3(), timer: 0, life: 0.5,
        startScale: 0.1, endScale: 0.4,
        startColor: _col(),
        endColor: _col(),
        baseOpacity: 0.5,
      });
    }

    /* ====================== HITMARKER POOL ====================== */
    this._hitmarkers = [];
    this._hitNext = 0;
    for (let i = 0; i < MAX_HITMARKERS; i++) {
      const mat = new THREE.SpriteMaterial({
        map: hitTex, blending: THREE.NormalBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: 0xffffff, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.18, 0.18, 1); sp.frustumCulled = false; sp.visible = false;
      r.scene.add(sp);
      this._hitmarkers.push({ sprite: sp, active: false, timer: 0, life: 1.5 });
    }

    /* ====================== EXPLOSION POOL ====================== */
    const ringGeo = new THREE.PlaneGeometry(1, 1);
    this._explosions = [];
    this._expNext = 0;
    for (let i = 0; i < MAX_EXPLOSIONS; i++) {
      // glow sprite
      const glowMat = new THREE.SpriteMaterial({
        map: glowTex, blending: THREE.AdditiveBlending,
        depthTest: true, depthWrite: false, transparent: true, opacity: 0,
      });
      const glowSp = new THREE.Sprite(glowMat);
      glowSp.frustumCulled = false; glowSp.visible = false;
      r.scene.add(glowSp);

      // shockwave ring
      const ringMat = new THREE.MeshBasicMaterial({
        map: glowTex, blending: THREE.AdditiveBlending,
        depthTest: true, depthWrite: false, transparent: true,
        opacity: 0, side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2; ring.frustumCulled = false; ring.visible = false;
      r.scene.add(ring);

      // point light
      const lt = new THREE.PointLight(0xff8a2a, 0, 18, 2);
      lt.visible = false;
      r.scene.add(lt);

      this._explosions.push({
        active: false,
        glow: glowSp, ring, light: lt,
        timer: 0, life: 0.7, size: 4, color: 0xff8a2a,
      });
    }
  }

  // ======================= PUBLIC API =======================

  /** Muzzle flash at world-space `pos`, firing toward `dir`. */
  muzzle(pos, dir, color = 0xffc27a, scale = 1) {
    // allocate a muzzle sprite from the pool
    const ms = _alloc(this._muzzleSprites, '_muzzleSpriteNext', this);
    ms.sprite.position.copy(pos);
    ms.sprite.material.color.set(color);
    ms.sprite.material.opacity = 0.9;
    const sz = 0.3 * scale;
    ms.sprite.scale.set(sz, sz, 1);
    ms.sprite.visible = true;
    ms.sprite.material.rotation = rand(-0.4, 0.4);
    ms.active = true;
    ms.timer = 0;
    ms.life = 0.05;

    // light
    const l = _alloc(this._muzzleLights, '_muzzleNext', this);
    l.light.position.copy(pos);
    l.light.color.set(color);
    l.light.intensity = 8 * scale;
    l.light.visible = true;
    l.active  = true;
    l.timer   = 0;
    l.decay   = 14;
  }

  /** Spawn a tracer from `from` to `to`. */
  tracer(from, to, color = 0xffd9a0) {
    const t = _alloc(this._tracers, '_tracerNext', this);
    const mid = _v3().addVectors(from, to).multiplyScalar(0.5);
    const dist = from.distanceTo(to);

    t.sprite.position.copy(mid);
    t.sprite.material.color.set(color);
    t.sprite.material.opacity = 0.95;
    t.sprite.scale.set(Math.max(dist, 0.3), 0.035, 1);
    t.sprite.visible = true;

    // align sprite stretch (X-axis) with projected bullet direction
    const cam = this.r.camera;
    const cR = _v3().set(1, 0, 0).applyQuaternion(cam.quaternion);  // screen-right
    const cU = _v3().set(0, 1, 0).applyQuaternion(cam.quaternion);  // screen-up
    const dir = _v3().subVectors(to, from).normalize();
    t.sprite.material.rotation = Math.atan2(dir.dot(cU), dir.dot(cR));

    t.active = true;
    t.timer  = 0;
    t.life   = rand(0.05, 0.08);
  }

  /** Impact sparks + smoke at a surface hit point. `normal` biases spark direction. */
  impact(pos, normal, color = 0xffc37a) {
    const col = _col().set(color);
    const nrm = normal.clone().normalize();

    // sparks: 7-9
    const nSpark = 7 + Math.floor(rand(0, 3));
    for (let i = 0; i < nSpark; i++) {
      const sp = _alloc(this._sparks, '_sparkNext', this);
      sp.sprite.position.copy(pos);
      sp.sprite.material.color.copy(col).multiplyScalar(rand(0.7, 1.0));

      // velocity hemisphere biased by normal
      const theta = rand(0, Math.PI * 2);
      const phi   = rand(0, Math.PI * 0.4);
      const local = _v3().set(
        Math.sin(phi) * Math.cos(theta),
        Math.cos(phi),
        Math.sin(phi) * Math.sin(theta),
      );
      const q = _quat.setFromUnitVectors(
        _v3().set(0, 1, 0), nrm,
      );
      local.applyQuaternion(q);
      // add jitter
      const spread = 0.7;
      local.x += rand(-0.5, 0.5) * spread;
      local.y += rand(-0.5, 0.5) * spread;
      local.z += rand(-0.5, 0.5) * spread;
      const speed = rand(1.5, 5.5);
      sp.vel.copy(local.normalize().multiplyScalar(speed));
      sp.gravity = rand(6, 14);
      sp.timer   = 0;
      sp.life    = rand(0.2, 0.5);

      const s = rand(0.03, 0.06);
      sp.sprite.scale.set(s, s, 1);
      sp.sprite.material.opacity = 0.9;
      sp.sprite.visible = true;
      sp.active = true;
    }

    // smoke puffs: 2-3
    const nSmoke = 2 + Math.floor(rand(0, 2));
    for (let i = 0; i < nSmoke; i++) {
      const sm = _alloc(this._smokes, '_smokeNext', this);
      sm.sprite.position.copy(pos)
        .add(_v3().set(rand(-0.06, 0.06), rand(0, 0.08), rand(-0.06, 0.06)));
      sm.vel.set(rand(-0.2, 0.2), rand(0.3, 1.0), rand(-0.2, 0.2));
      sm.timer = 0;
      sm.life  = rand(0.25, 0.6);
      sm.startScale = rand(0.06, 0.12);
      sm.endScale   = rand(0.18, 0.33);
      sm.sprite.scale.set(sm.startScale, sm.startScale, 1);
      sm.baseOpacity = rand(0.5, 0.7);
      sm.sprite.material.opacity = sm.baseOpacity;
      sm.startColor.set(0x666666);
      sm.endColor.set(0x111111);
      sm.sprite.material.color.copy(sm.startColor);
      sm.sprite.visible = true;
      sm.active = true;
    }
  }

  /** World-space hit marker (X + ring billboard). */
  hitmark(pos) {
    const h = _alloc(this._hitmarkers, '_hitNext', this);
    h.sprite.position.copy(pos);
    h.sprite.material.opacity = 1;
    h.sprite.scale.set(0.16, 0.16, 1);
    h.sprite.material.color.set(0xffffff);
    h.sprite.visible = true;
    h.active = true;
    h.timer  = 0;
    h.life   = 1.5;
  }

  /** Explosion at `pos` with given `size` (metres). */
  explosion(pos, size = 4, color = 0xff8a2a) {
    const e  = _alloc(this._explosions, '_expNext', this);
    const cl = _col().set(color);

    // glow sprite
    e.glow.position.copy(pos);
    e.glow.material.color.copy(cl);
    e.glow.material.opacity = 0.9;
    e.glow.scale.set(0.3, 0.3, 1);
    e.glow.visible = true;

    // shockwave ring
    e.ring.position.copy(pos).add(_v3().set(0, 0.06, 0));
    e.ring.material.opacity = 0.6;
    e.ring.scale.set(0.2, 0.2, 1);
    e.ring.visible = true;
    e.ring.material.color.copy(cl);

    // point light
    e.light.position.copy(pos);
    e.light.color.copy(cl);
    e.light.intensity = 14 + size * 1.5;
    e.light.distance  = size * 1.8;
    e.light.visible   = true;

    e.timer = 0;
    e.life  = 0.5 + size * 0.08;
    e.size  = size;
    e.color = color;
    e.active = true;

    // smoke puffs: 5-7
    const nSmoke = 5 + Math.floor(rand(0, 3));
    for (let i = 0; i < nSmoke; i++) {
      const sm = _alloc(this._smokes, '_smokeNext', this);
      sm.sprite.position.copy(pos)
        .add(_v3().set(rand(-0.15, 0.15), 0, rand(-0.15, 0.15)));
      const theta = rand(0, Math.PI * 2);
      const spd   = rand(1, 3.5) * (size / 4);
      sm.vel.set(
        Math.cos(theta) * spd,
        rand(0.8, 3.3),
        Math.sin(theta) * spd,
      );
      sm.timer = 0;
      sm.life  = rand(0.5, 1.2);
      sm.startScale = rand(0.15, 0.35);
      sm.endScale   = rand(0.7, 1.6);
      sm.sprite.scale.set(sm.startScale, sm.startScale, 1);
      sm.baseOpacity = rand(0.55, 0.8);
      sm.sprite.material.opacity = sm.baseOpacity;
      sm.startColor.set(0x777777);
      sm.endColor.set(0x0a0a0a);
      sm.sprite.material.color.copy(sm.startColor);
      sm.sprite.visible = true;
      sm.active = true;
    }

    // Explosion pool already handles per-frame-updated point lights;
    // avoid creating permanent scene lights via lighting.addZone.
  }

  // ======================= UPDATE =======================

  /** @param {number} dt  @param {number} time  @param {THREE.Vector3} cameraPos */
  update(dt, time, cameraPos) {
    const d = Math.min(dt, 0.1);

    // --- muzzle sprites (pooled) ---
    for (let i = 0; i < MAX_MUZZLE_FLASHES; i++) {
      const ms = this._muzzleSprites[i];
      if (!ms.active) continue;
      ms.timer += d;
      if (ms.timer >= ms.life) {
        ms.active = false;
        ms.sprite.visible = false;
        ms.sprite.material.opacity = 0;
      } else {
        const t = ms.timer / ms.life;
        ms.sprite.material.opacity = 0.9 * (1 - t * t);
      }
    }

    // --- muzzle lights ---
    for (let i = 0; i < MAX_MUZZLE_LTS; i++) {
      const l = this._muzzleLights[i];
      if (!l.active) continue;
      l.timer += d;
      if (l.timer >= l.life) {
        l.active = false;
        l.light.visible = false;
        l.light.intensity = 0;
      } else {
        l.light.intensity *= Math.exp(-d * l.decay);
      }
    }

    // --- tracers ---
    for (let i = 0; i < MAX_TRACERS; i++) {
      const t = this._tracers[i];
      if (!t.active) continue;
      t.timer += d;
      if (t.timer >= t.life) {
        t.active = false;
        t.sprite.visible = false;
        t.sprite.material.opacity = 0;
      } else {
        t.sprite.material.opacity = 0.95 * (1 - t.timer / t.life);
      }
    }

    // --- sparks ---
    for (let i = 0; i < MAX_SPARKS; i++) {
      const sp = this._sparks[i];
      if (!sp.active) continue;
      sp.timer += d;
      if (sp.timer >= sp.life) {
        sp.active = false;
        sp.sprite.visible = false;
        sp.sprite.material.opacity = 0;
      } else {
        const t = sp.timer / sp.life;
        sp.vel.y -= sp.gravity * d;
        sp.sprite.position.x += sp.vel.x * d;
        sp.sprite.position.y += sp.vel.y * d;
        sp.sprite.position.z += sp.vel.z * d;
        sp.sprite.material.opacity = 0.9 * (1 - t);
        const sc = 0.04 * (1 - t * 0.7);
        sp.sprite.scale.set(sc, sc, 1);
      }
    }

    // --- smoke ---
    for (let i = 0; i < MAX_SMOKES; i++) {
      const sm = this._smokes[i];
      if (!sm.active) continue;
      sm.timer += d;
      if (sm.timer >= sm.life) {
        sm.active = false;
        sm.sprite.visible = false;
        sm.sprite.material.opacity = 0;
      } else {
        const t = sm.timer / sm.life;
        sm.sprite.position.x += sm.vel.x * d;
        sm.sprite.position.y += sm.vel.y * d;
        sm.sprite.position.z += sm.vel.z * d;
        const sc = sm.startScale + (sm.endScale - sm.startScale) * t;
        sm.sprite.scale.set(sc, sc, 1);
        sm.sprite.material.color.copy(
          _col().lerpColors(sm.startColor, sm.endColor, t),
        );
        sm.sprite.material.opacity = sm.baseOpacity * (1 - t);
      }
    }

    // --- hitmarkers ---
    for (let i = 0; i < MAX_HITMARKERS; i++) {
      const h = this._hitmarkers[i];
      if (!h.active) continue;
      h.timer += d;
      if (h.timer >= h.life) {
        h.active = false;
        h.sprite.visible = false;
        h.sprite.material.opacity = 0;
      } else {
        const t = h.timer / h.life;
        const fadeStart = 0.5;
        const alpha = t < fadeStart ? 1 : 1 - (t - fadeStart) / (1 - fadeStart);
        h.sprite.material.opacity = alpha;
        const sc = 0.16 * (1 + Math.sin(t * Math.PI) * 0.25);
        h.sprite.scale.set(sc, sc, 1);
      }
    }

    // --- explosions ---
    for (let i = 0; i < MAX_EXPLOSIONS; i++) {
      const ex = this._explosions[i];
      if (!ex.active) continue;
      ex.timer += d;
      if (ex.timer >= ex.life) {
        ex.active = false;
        ex.glow.visible = false;
        ex.glow.material.opacity = 0;
        ex.ring.visible = false;
        ex.ring.material.opacity = 0;
        ex.light.visible = false;
        ex.light.intensity = 0;
      } else {
        const t = ex.timer / ex.life;
        // glow expands and fades with quadratic ease
        const gs = ex.size * (0.3 + t * 3);
        ex.glow.scale.set(gs, gs, 1);
        ex.glow.material.opacity = 0.9 * (1 - t * t);

        // ring scales much faster, fades quickly
        const rs = ex.size * (0.2 + t * 6);
        ex.ring.scale.set(rs, rs, 1);
        ex.ring.material.opacity = 0.6 * (1 - t) * (1 - t);

        // light exponential decay
        ex.light.intensity *= Math.exp(-d * 5);
      }
    }
  }
}
