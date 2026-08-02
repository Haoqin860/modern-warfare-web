/**
 * Collision.js — AABB collision world.
 * Contract: player and enemies depend on this exact API.
 */
import * as THREE from 'three';

const _v3 = new THREE.Vector3();

export const CollisionWorld = {
  /** @type {{min: THREE.Vector3, max: THREE.Vector3}[]} */
  aabbs: [],

  /**
   * Set collision geometry from wall and pillar arrays.
   * @param {Array<{box:THREE.Box3}>} walls
   * @param {Array<{box:THREE.Box3}>} pillars
   */
  setGeometry(walls, pillars) {
    this.aabbs.length = 0;
    if (walls) for (const w of walls) {
      this.aabbs.push({ min: w.box.min.clone(), max: w.box.max.clone() });
    }
    if (pillars) for (const p of pillars) {
      this.aabbs.push({ min: p.box.min.clone(), max: p.box.max.clone() });
    }
  },

  /**
   * Resolve a horizontal circle against all AABBs using push-out sliding.
   * Only considers AABBs whose Y range overlaps [yBottom, yTop].
   * @param {THREE.Vector3} pos
   * @param {number} radius
   * @param {number} [yBottom=-5]
   * @param {number} [yTop=50]
   * @returns {THREE.Vector3} New resolved position (clone)
   */
  resolveCircle(pos, radius, yBottom = -5, yTop = 50) {
    const r = _v3.copy(pos);
    const maxIter = 4;
    for (let iter = 0; iter < maxIter; iter++) {
      let pushed = false;
      for (let i = 0; i < this.aabbs.length; i++) {
        const b = this.aabbs[i];
        if (b.max.y < yBottom || b.min.y > yTop) continue;

        const cx = Math.max(b.min.x, Math.min(r.x, b.max.x));
        const cz = Math.max(b.min.z, Math.min(r.z, b.max.z));
        const dx = r.x - cx;
        const dz = r.z - cz;
        const d2 = dx * dx + dz * dz;
        const r2 = radius * radius;

        if (d2 < r2) {
          pushed = true;
          const d = Math.sqrt(d2);
          if (d < 0.0001) {
            // Center is inside AABB XZ projection — push out along shortest axis
            const ox = Math.min(Math.abs(r.x - b.min.x), Math.abs(r.x - b.max.x));
            const oz = Math.min(Math.abs(r.z - b.min.z), Math.abs(r.z - b.max.z));
            if (ox < oz) {
              r.x = r.x < (b.min.x + b.max.x) * 0.5 ? b.min.x - radius : b.max.x + radius;
            } else {
              r.z = r.z < (b.min.z + b.max.z) * 0.5 ? b.min.z - radius : b.max.z + radius;
            }
          } else {
            const overlap = radius - d;
            r.x += (dx / d) * overlap;
            r.z += (dz / d) * overlap;
          }
        }
      }
      if (!pushed) break;
    }
    return r.clone();
  },

  /**
   * Check if AABB at position p with half-extents overlaps any registered box.
   * @param {THREE.Vector3} p - center position
   * @param {THREE.Vector3} he - half-extents
   * @returns {boolean}
   */
  collides(p, he) {
    for (let i = 0; i < this.aabbs.length; i++) {
      const b = this.aabbs[i];
      const bhw = (b.max.x - b.min.x) * 0.5;
      const bhh = (b.max.y - b.min.y) * 0.5;
      const bhd = (b.max.z - b.min.z) * 0.5;
      const bcx = (b.min.x + b.max.x) * 0.5;
      const bcy = (b.min.y + b.max.y) * 0.5;
      const bcz = (b.min.z + b.max.z) * 0.5;
      if (Math.abs(p.x - bcx) > he.x + bhw) continue;
      if (Math.abs(p.y - bcy) > he.y + bhh) continue;
      if (Math.abs(p.z - bcz) > he.z + bhd) continue;
      return true;
    }
    return false;
  },

  /**
   * Ground height at XZ. Returns 0 for the world floor, or the top of any
   * walkable elevated platform whose footprint covers the point.
   * @param {number} x
   * @param {number} z
   * @returns {number}
   */
  groundAt(x, z) {
    let highest = 0;
    for (let i = 0; i < this.aabbs.length; i++) {
      const b = this.aabbs[i];
      if (!b.walkable) continue;
      if (x >= b.min.x && x <= b.max.x && z >= b.min.z && z <= b.max.z) {
        if (b.max.y > highest) highest = b.max.y;
      }
    }
    return highest;
  },
};
