/**
 * Grenade.js — throwable fragmentation grenade with physics, cooking, and
 * area-of-effect damage.
 *
 * Physics: ballistic arc (gravity + initial velocity). Explodes after fuseTime
 * seconds (from pull, not from throw). Deals radial damage to all enemies within
 * damageRadius, with falloff. Also damages nearby explosive barrels.
 */
import * as THREE from 'three';
import { CFG } from '../core/Config.js';
import { GameState } from '../core/GameState.js';
import { bus } from '../core/Events.js';
import { CollisionWorld } from '../world/Collision.js';

const _v3 = new THREE.Vector3();

// Active grenades tracked globally (cleaned per-frame by World)
/** @type {Array<{
 *   mesh: THREE.Mesh,
 *   vel: THREE.Vector3,
 *   timer: number,
 *   fuseTime: number,
 *   cooked: boolean,
 *   exploded: boolean,
 *   pos: THREE.Vector3,
 * }>} */
export const activeGrenades = [];

/** Grenade pool for reuse (avoids allocation per throw). */
const _pool = [];
const MAX_POOL = 6;

function allocGrenade(scene) {
  for (let i = 0; i < _pool.length; i++) {
    if (!_pool[i].active) {
      _pool[i].active = true;
      _pool[i].mesh.visible = true;
      return _pool[i];
    }
  }
  // Create new
  const geo = new THREE.SphereGeometry(0.06, 12, 8);
  const mat = new THREE.MeshStandardMaterial({
    color: '#2d3a1a',
    roughness: 0.65,
    metalness: 0.7,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  // Safety pin ring
  const ringGeo = new THREE.TorusGeometry(0.04, 0.008, 6, 8);
  const ringMat = new THREE.MeshStandardMaterial({
    color: '#c0c0c0',
    roughness: 0.3,
    metalness: 0.9,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.position.y = 0.07;
  mesh.add(ring);

  mesh.visible = false;
  scene.add(mesh);

  const obj = {
    mesh,
    vel: new THREE.Vector3(0, 0, 0),
    timer: 0,
    fuseTime: CFG.grenade.fuseTime,
    cooked: false,
    exploded: false,
    active: false,
  };
  if (_pool.length < MAX_POOL) _pool.push(obj);
  return obj;
}

/**
 * Throw a grenade from `origin` in `direction` with given strength.
 * If `cookTime` > 0, the fuse has already burned that many seconds.
 */
export function throwGrenade(origin, direction, scene, cookTime = 0) {
  const g = allocGrenade(scene);
  const cfg = CFG.grenade;

  g.mesh.position.copy(origin).addScaledVector(direction, 0.3);
  g.vel.copy(direction).multiplyScalar(cfg.throwForce).add(
    new THREE.Vector3(0, cfg.throwUp, 0)
  );
  g.timer = 0;
  g.fuseTime = cfg.fuseTime;
  g.cooked = cookTime > 0;
  g.exploded = false;

  // If cooked, reduce fuse time
  if (cookTime > 0) {
    g.fuseTime = Math.max(0.3, g.fuseTime - cookTime);
  }

  activeGrenades.push(g);
  return g;
}

/**
 * Explode a grenade, dealing damage to nearby enemies and explosive barrels.
 * @param {object} g - grenade object
 * @param {Array<object>} enemies - array of enemy records (from EnemyManager)
 * @param {Array<THREE.Mesh>} barrels - explosive barrel meshes
 * @param {object} world - WorldBuilder (for particles/fx)
 * @param {object} particles - Particles instance
 * @param {object} fx - FX instance
 * @param {object} audio - AudioFX instance
 * @param {THREE.Scene} scene
 */
export function explodeGrenade(g, enemies, barrels, world, particles, fx, audio, scene) {
  if (g.exploded) return;
  g.exploded = true;

  const pos = g.mesh.position.clone();
  const cfg = CFG.grenade;

  // Visual effects
  fx.explosion(pos, 1.5, 0xff7a2a);
  particles.burst(pos, 20, {
    color: 0xff6a1a,
    size: 0.10,
    speed: 6,
    life: 0.7,
  });
  particles.burst(pos, 10, {
    color: 0x333333,
    size: 0.06,
    speed: 3,
    life: 0.8,
  });
  audio.explosion();

  // Damage nearby enemies
  if (enemies) {
    for (const e of enemies) {
      if (e.state === 'dead' || e.state === 'dying') continue;
      const ep = e.group.position;
      const dist = pos.distanceTo(ep);
      if (dist > cfg.damageRadius) continue;

      // Linear falloff from maxDamage at centre to minDamage at edge
      const t = 1 - dist / cfg.damageRadius;
      const dmg = cfg.minDamage + (cfg.maxDamage - cfg.minDamage) * t * t;

      // Damage goes through the weapon:hit event bus
      bus.emit('weapon:hit', {
        id: e.id,
        dmg: Math.round(dmg),
        hitPos: ep.clone(),
        normal: _v3.copy(ep).sub(pos).normalize(),
        headshot: false,
      });
    }
  }

  // Explode nearby barrels
  if (barrels) {
    for (let i = barrels.length - 1; i >= 0; i--) {
      const b = barrels[i];
      const dist = pos.distanceTo(b.position);
      if (dist < cfg.damageRadius * 1.5) {
        // Chain-reaction: barrel explodes after a short delay
        const delay = dist * 0.03;
        setTimeout(() => {
          // Don't explode while game is paused (GameState.paused guards this)
          if (GameState.paused) return;
          if (b.userData && !b.userData.exploded) {
            b.userData.exploded = true;
            fx.explosion(b.position.clone(), 2.0, 0xff6a2a);
            particles.burst(b.position.clone(), 15, {
              color: 0xff5a1a,
              size: 0.12,
              speed: 5,
              life: 0.6,
            });
            audio.explosion();
            // Damage enemies near the barrel too
            if (enemies) {
              for (const e of enemies) {
                if (e.state === 'dead' || e.state === 'dying') continue;
                const ed = b.position.distanceTo(e.group.position);
                if (ed < 5) {
                  bus.emit('weapon:hit', {
                    id: e.id,
                    dmg: 80,
                    hitPos: e.group.position.clone(),
                    normal: new THREE.Vector3(0, 1, 0),
                    headshot: false,
                  });
                }
              }
            }
            // Remove barrel from scene (don't dispose shared geometry)
            b.visible = false;
            if (b.material) b.material.dispose();
          }
        }, delay * 1000);
      }
    }
  }

  // Hide mesh
  g.mesh.visible = false;
  g.active = false;

  // Remove from active list
  const idx = activeGrenades.indexOf(g);
  if (idx !== -1) activeGrenades.splice(idx, 1);
}

/**
 * Update all active grenades. Called every frame.
 * @param {number} dt
 * @param {object} world - WorldBuilder
 * @param {object} particles
 * @param {object} fx
 * @param {object} audio
 * @param {Array<object>} enemies
 * @param {Array<THREE.Mesh>} barrels
 * @param {THREE.Scene} scene
 */
export function updateGrenades(dt, world, particles, fx, audio, enemies, barrels, scene) {
  const d = Math.min(dt, 0.1);

  for (let i = activeGrenades.length - 1; i >= 0; i--) {
    const g = activeGrenades[i];
    if (g.exploded) {
      activeGrenades.splice(i, 1);
      continue;
    }

    g.timer += d;

    // Fuse countdown
    if (g.timer >= g.fuseTime) {
      explodeGrenade(g, enemies, barrels, world, particles, fx, audio, scene);
      continue;
    }

    // Physics
    g.vel.y += CFG.movement.gravity * d;
    g.mesh.position.x += g.vel.x * d;
    g.mesh.position.y += g.vel.y * d;
    g.mesh.position.z += g.vel.z * d;

    // Spin
    g.mesh.rotation.x += d * 12;
    g.mesh.rotation.y += d * 8;
    g.mesh.rotation.z += d * 5;

    // Ground collision
    const groundY = world.groundAt
      ? world.groundAt(g.mesh.position.x, g.mesh.position.z)
      : CFG.world.groundY;

    if (g.mesh.position.y < groundY) {
      g.mesh.position.y = groundY;
      // Bounce with damping
      g.vel.y *= -0.35;
      g.vel.x *= 0.6;
      g.vel.z *= 0.6;
      if (Math.abs(g.vel.y) < 0.5) {
        g.vel.y = 0;
      }
    }

    // Wall collision
    const resolved = CollisionWorld.resolveCircle(
      g.mesh.position.clone(),
      0.06,
      g.mesh.position.y - 0.1,
      g.mesh.position.y + 0.1
    );
    const dx = resolved.x - g.mesh.position.x;
    const dz = resolved.z - g.mesh.position.z;
    if (Math.abs(dx) > 0.001 || Math.abs(dz) > 0.001) {
      g.mesh.position.x = resolved.x;
      g.mesh.position.z = resolved.z;
      g.vel.x *= -0.3;
      g.vel.z *= -0.3;
    }

    // Out of bounds cleanup
    if (g.mesh.position.y < -50) {
      g.exploded = true;
      g.mesh.visible = false;
      g.active = false;
      activeGrenades.splice(i, 1);
    }
  }
}

/**
 * Spawn cooking beep SFX logic (called externally).
 * Returns true for each 0.5s interval remaining.
 */
export function getCookBeep(timer, fuseTime) {
  const remaining = fuseTime - timer;
  if (remaining <= 0) return false;
  const prevBeat = Math.ceil((remaining + 0.001) / 0.5);
  const newBeat = Math.ceil((remaining - 0.016) / 0.5);
  return newBeat < prevBeat;
}
