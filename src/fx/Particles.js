/**
 * Particles — ambient level particles: dust motes, drifting smoke, falling
 * debris/ash, ember sparks. Object-pooled for ~120 persistent particles plus
 * a shared burst pool supporting one-shot puffs (enemy death, shell dust, etc).
 */
import * as THREE from 'three';
import { TextureAtlas } from '../core/TextureAtlas.js';

// --- pool sizes ---
const MAX_DUST   = 120;
const MAX_DEBRIS = 50;
const MAX_EMBERS = 30;
const MAX_BURST  = 80;

// --- reusable scratch ---
const _v3  = () => new THREE.Vector3();
const _col = () => new THREE.Color();

const rand = (a, b) => a + Math.random() * (b - a);

export class Particles {
  /**
   * @param {import('../core/Renderer.js').GameRenderer} r
   * @param {import('../core/Lighting.js').SceneLighting} lighting
   */
  constructor(r, lighting) {
    this.r = r;
    this.lighting = lighting;

    const smokeTex = TextureAtlas.smokeTexture(128);
    const glowTex  = TextureAtlas.glowTexture(64);

    /* ======================= DUST MOTES ======================= */
    this._dustList = [];
    const dustG = new THREE.Group(); r.scene.add(dustG);
    for (let i = 0; i < MAX_DUST; i++) {
      const additive = i < 80;
      const mat = new THREE.SpriteMaterial({
        map: smokeTex,
        blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: additive ? 0xd4b896 : 0xa89880, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.08, 0.08, 1); sp.frustumCulled = false; sp.visible = false;
      dustG.add(sp);
      this._dustList.push({
        sprite: sp, active: false,
        vel: _v3(), timer: 0, life: 4, baseY: 0,
        driftAmp: 0.04, driftFreq: 0.5, phase: 0,
        additive,
      });
    }
    this._dustParent = dustG;

    /* ======================= FALLING DEBRIS / ASH ======================= */
    this._debrisList = [];
    const debG = new THREE.Group(); r.scene.add(debG);
    for (let i = 0; i < MAX_DEBRIS; i++) {
      const mat = new THREE.SpriteMaterial({
        map: smokeTex, blending: THREE.NormalBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: 0x222222, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.04, 0.04, 1); sp.frustumCulled = false; sp.visible = false;
      debG.add(sp);
      this._debrisList.push({
        sprite: sp, active: false,
        vel: _v3(), timer: 0, life: 3,
        swayAmp: 0.15, swayFreq: 0.6, phase: 0,
      });
    }
    this._debrisParent = debG;

    /* ======================= EMBER SPARKS ======================= */
    this._emberList = [];
    const embG = new THREE.Group(); r.scene.add(embG);
    for (let i = 0; i < MAX_EMBERS; i++) {
      const mat = new THREE.SpriteMaterial({
        map: glowTex, blending: THREE.AdditiveBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: 0xff6a1a, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.03, 0.03, 1); sp.frustumCulled = false; sp.visible = false;
      embG.add(sp);
      this._emberList.push({
        sprite: sp, active: false,
        vel: _v3(), timer: 0, life: 2,
        origin: _v3(), wanderRadius: 1.0, phase: 0,
      });
    }
    this._emberParent = embG;

    /* ======================= BURST POOL ======================= */
    this._burstList = [];
    this._burstNext = 0;
    const burstG = new THREE.Group(); r.scene.add(burstG);
    for (let i = 0; i < MAX_BURST; i++) {
      const useGlow = i >= MAX_BURST - 15;
      const mat = new THREE.SpriteMaterial({
        map: useGlow ? glowTex : smokeTex,
        blending: useGlow ? THREE.AdditiveBlending : THREE.NormalBlending,
        depthTest: true, depthWrite: false, transparent: true,
        color: useGlow ? 0xffa050 : 0x888888, opacity: 0,
      });
      const sp = new THREE.Sprite(mat);
      sp.scale.set(0.06, 0.06, 1); sp.frustumCulled = false; sp.visible = false;
      burstG.add(sp);
      this._burstList.push({
        sprite: sp, active: false,
        vel: _v3(), timer: 0, life: 0.6,
        startScale: 0.06, endScale: 0.3,
        color: _col().set(useGlow ? 0xffa050 : 0x888888),
        useGlow, gravity: 0.8, baseOpacity: 0.5,
      });
    }
    this._burstParent = burstG;

    // --- external fire zones (set by WorldBuilder or environment) ---
    /** @type {{ pos: THREE.Vector3, radius: number, intensity: number }[]} */
    this.fireZones = [];

    // --- tuneables (modify at runtime) ---
    this.dustDensity      = 1.0;   // dust opacity multiplier
    this.debrisRate       = 0.6;   // debris spawned / sec / zone
    this.emberRate        = 1.0;   // embers spawned / sec / zone
    this.windDir          = new THREE.Vector2(0.15, 0.05); // gentle drift
    this.playerDustRadius = 6;
    this.spawnPerSec      = 6;     // dust spawns per second near camera
  }

  // ======================= PUBLIC API =======================

  /**
   * One-shot particle burst. Used for enemy death, impact debris, shell dust.
   * @param {THREE.Vector3} pos
   * @param {number} count
   * @param {{ color?: number|string, speed?: number, size?: number, life?: number, gravity?: number, spread?: number }} [opts]
   */
  burst(pos, count, opts = {}) {
    const {
      color   = 0x888888,
      speed   = 2,
      size    = 0.08,
      life    = 0.6,
      gravity = 0.8,
      spread  = 0.7,
    } = opts;

    const col = _col().set(color);  // handles both hex number and CSS string

    for (let i = 0; i < count; i++) {
      const b = this._allocBurst();
      b.sprite.position.copy(pos);
      b.sprite.position.x += rand(-0.05, 0.05);
      b.sprite.position.z += rand(-0.05, 0.05);

      // velocity hemisphere + upward bias
      const theta = rand(0, Math.PI * 2);
      const phi   = rand(0, Math.PI * 0.5);
      b.vel.set(
        Math.sin(phi) * Math.cos(theta) * rand(0.3, spread + 0.3),
        Math.sin(phi) * Math.sin(theta) * rand(0.3, spread + 0.3) + 0.4,
        Math.cos(phi) * rand(0.3, spread + 0.3),
      ).normalize().multiplyScalar(speed * rand(0.3, 1.0));

      b.life        = life * rand(0.5, 1.0);
      b.gravity     = gravity * rand(0.7, 1.3);
      b.startScale  = size * 0.5;
      b.endScale    = size * rand(1.5, 3.0);
      b.sprite.scale.set(b.startScale, b.startScale, 1);
      b.color.copy(col).multiplyScalar(rand(0.7, 1.0));
      b.sprite.material.color.copy(b.color);
      b.baseOpacity = rand(0.6, 0.8);
      b.sprite.material.opacity = b.baseOpacity;
      b.sprite.visible = true;
      b.active = true;
      b.timer  = 0;
    }
  }

  // ======================= UPDATE =======================

  /** @param {number} dt  @param {number} time  absolute game time */
  update(dt, time) {
    const d = Math.min(dt, 0.1);
    if (!this.r.camera) return;
    const camPos = this.r.camera.position;
    const wind = this.windDir;

    /* ---- dust motes ---- */
    // continuously spawn near the player
    const spawns = Math.ceil(this.spawnPerSec * d * this.dustDensity);
    for (let n = 0; n < spawns; n++) {
      this._spawnDust(camPos, this.playerDustRadius);
    }

    for (let i = 0; i < MAX_DUST; i++) {
      const du = this._dustList[i];
      if (!du.active) continue;
      du.timer += d;
      if (du.timer >= du.life) {
        du.active = false; du.sprite.visible = false; du.sprite.material.opacity = 0;
        continue;
      }
      const t = du.timer / du.life;
      du.sprite.position.x += wind.x * d * 0.6;
      du.sprite.position.z += wind.y * d * 0.6;
      du.sprite.position.y  = du.baseY
        + Math.sin(time * du.driftFreq + du.phase) * du.driftAmp;
      du.sprite.material.opacity = Math.max(0, 0.08 * (1 - t) * this.dustDensity);
      // distance cull
      if (du.sprite.position.distanceToSquared(camPos) > 2500) {
        du.active = false; du.sprite.visible = false; du.sprite.material.opacity = 0;
      }
    }

    /* ---- debris (from fire zones) ---- */
    for (const z of this.fireZones) {
      if (Math.random() < this.debrisRate * d * z.intensity) {
        this._spawnDebris(z);
      }
    }
    for (let i = 0; i < MAX_DEBRIS; i++) {
      const db = this._debrisList[i];
      if (!db.active) continue;
      db.timer += d;
      if (db.timer >= db.life || db.sprite.position.y < -5) {
        db.active = false; db.sprite.visible = false; db.sprite.material.opacity = 0;
        continue;
      }
      db.sprite.position.x += db.vel.x * d + wind.x * d * 0.3;
      db.sprite.position.y += db.vel.y * d;
      db.sprite.position.z += db.vel.z * d + wind.y * d * 0.3;
      const sway = Math.sin(time * db.swayFreq + db.phase) * db.swayAmp;
      db.sprite.position.x += sway * d;
      db.sprite.material.opacity *= Math.exp(-d * 0.3);
      if (db.sprite.position.distanceToSquared(camPos) > 6400) {
        db.active = false; db.sprite.visible = false; db.sprite.material.opacity = 0;
      }
    }

    /* ---- embers (from fire zones) ---- */
    for (const z of this.fireZones) {
      if (Math.random() < this.emberRate * d * z.intensity) {
        this._spawnEmber(z);
      }
    }
    for (let i = 0; i < MAX_EMBERS; i++) {
      const em = this._emberList[i];
      if (!em.active) continue;
      em.timer += d;
      if (em.timer >= em.life) {
        em.active = false; em.sprite.visible = false; em.sprite.material.opacity = 0;
        continue;
      }
      const t = em.timer / em.life;
      const wx = Math.sin(time * 1.3 + em.phase) * em.wanderRadius;
      const wz = Math.cos(time * 1.5 + em.phase + 1) * em.wanderRadius;
      em.sprite.position.x = em.origin.x + wx + wind.x * em.timer * 0.5;
      em.sprite.position.z = em.origin.z + wz + wind.y * em.timer * 0.5;
      em.sprite.position.y = em.origin.y + em.vel.y * em.timer
        + Math.sin(time * 2 + em.phase) * 0.3;
      em.sprite.material.opacity = 0.6 * (1 - t);
      if (em.sprite.position.distanceToSquared(camPos) > 6400) {
        em.active = false; em.sprite.visible = false; em.sprite.material.opacity = 0;
      }
    }

    /* ---- burst particles ---- */
    for (let i = 0; i < MAX_BURST; i++) {
      const b = this._burstList[i];
      if (!b.active) continue;
      b.timer += d;
      if (b.timer >= b.life) {
        b.active = false; b.sprite.visible = false; b.sprite.material.opacity = 0;
        continue;
      }
      const t = b.timer / b.life;
      b.vel.y -= b.gravity * d;
      b.sprite.position.x += b.vel.x * d;
      b.sprite.position.y += b.vel.y * d;
      b.sprite.position.z += b.vel.z * d;
      const sc = b.startScale + (b.endScale - b.startScale) * t;
      b.sprite.scale.set(sc, sc, 1);
      b.sprite.material.opacity = b.baseOpacity * (1 - t);
    }
  }

  // ======================= internal allocators =======================

  _allocBurst() {
    const idx = this._burstNext;
    for (let j = 0; j < MAX_BURST; j++) {
      const i = (idx + j) % MAX_BURST;
      if (!this._burstList[i].active) { this._burstNext = (i + 1) % MAX_BURST; return this._burstList[i]; }
    }
    this._burstNext = (idx + 1) % MAX_BURST;
    return this._burstList[idx];
  }

  _allocDust()   { for (let i = 0; i < MAX_DUST; i++)   if (!this._dustList[i].active)   return this._dustList[i];   return null; }
  _allocDebris() { for (let i = 0; i < MAX_DEBRIS; i++) if (!this._debrisList[i].active) return this._debrisList[i]; return null; }
  _allocEmber()  { for (let i = 0; i < MAX_EMBERS; i++)  if (!this._emberList[i].active)  return this._emberList[i];  return null; }

  /* ---- one-shot spawns ---- */

  _spawnDust(center, radius) {
    const d = this._allocDust(); if (!d) return;
    const angle = rand(0, Math.PI * 2);
    const r     = rand(0, radius);
    d.sprite.position.set(
      center.x + Math.cos(angle) * r,
      center.y + rand(-2.5, 2.0),
      center.z + Math.sin(angle) * r,
    );
    d.sprite.material.opacity = rand(0.06, 0.16) * this.dustDensity;
    const sz = rand(0.05, 0.17);
    d.sprite.scale.set(sz, sz, 1);
    d.sprite.visible = true; d.active = true; d.timer = 0;
    d.life       = rand(3, 8);
    d.baseY      = d.sprite.position.y;
    d.driftAmp   = rand(0.02, 0.1);
    d.driftFreq  = rand(0.3, 1.0);
    d.phase      = rand(0, Math.PI * 2);
  }

  _spawnDebris(zone) {
    const d = this._allocDebris(); if (!d) return;
    const wind = this.windDir;
    d.sprite.position.set(
      zone.pos.x + rand(-zone.radius, zone.radius),
      zone.pos.y + rand(8, 20),
      zone.pos.z + rand(-zone.radius, zone.radius),
    );
    d.vel.set(
      wind.x * 0.2 + rand(-0.25, 0.25),
      -(rand(1.2, 3.2)),
      wind.y * 0.2 + rand(-0.25, 0.25),
    );
    const sz = rand(0.03, 0.09);
    d.sprite.scale.set(sz, sz, 1);
    d.sprite.material.opacity = rand(0.4, 0.75);
    d.sprite.material.color.setHSL(0.09, 0.1, rand(0.15, 0.35));
    d.sprite.visible = true; d.active = true; d.timer = 0;
    d.life      = rand(2, 6);
    d.swayAmp   = rand(0.1, 0.4);
    d.swayFreq  = rand(0.4, 1.2);
    d.phase     = rand(0, Math.PI * 2);
  }

  _spawnEmber(zone) {
    const e = this._allocEmber(); if (!e) return;
    e.origin.set(
      zone.pos.x + rand(-zone.radius * 0.75, zone.radius * 0.75),
      zone.pos.y + rand(1.5, 4.5),
      zone.pos.z + rand(-zone.radius * 0.75, zone.radius * 0.75),
    );
    e.sprite.position.copy(e.origin);
    e.vel.set(rand(-0.3, 0.3), rand(0.5, 2.5), rand(-0.3, 0.3));
    const sz = rand(0.02, 0.06);
    e.sprite.scale.set(sz, sz, 1);
    e.sprite.material.opacity = rand(0.5, 0.9);
    e.sprite.material.color.setHSL(rand(0.1, 0.18), 1, rand(0.5, 0.9));
    e.sprite.visible = true; e.active = true; e.timer = 0;
    e.life          = rand(1.2, 3.7);
    e.wanderRadius  = rand(0.4, 2.2);
    e.phase         = rand(0, Math.PI * 2);
  }
}
