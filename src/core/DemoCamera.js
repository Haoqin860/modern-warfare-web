/**
 * DemoCamera — scripted cinematic tour for `?demo` mode.
 * Cubic-hermite spline through authored keyframes. Used for screenshot capture
 * (art/shot.mjs) and for the automated visual QA cycle.
 */
import * as THREE from 'three';

const hermite = (p0, p1, m0, m1, t) => {
  const t2 = t * t, t3 = t2 * t;
  const h00 = 2 * t3 - 3 * t2 + 1;
  const h10 = t3 - 2 * t2 + t;
  const h01 = -2 * t3 + 3 * t2;
  const h11 = t3 - t2;
  return h00 * p0 + h10 * m0 + h01 * p1 + h11 * m1;
};

export class DemoCamera {
  constructor() {
    // authored keyframes: pos + lookAt, touring the map's landmarks
    // All keyframes fly ABOVE building height (max building is 14m) so the
    // cinematic path never clips through geometry and always frames the
    // golden-hour sky. Great for both screenshot QA and a COD-style flyover.
    this.keys = [
      { pos: [60, 22, 60], look: [-2, 4, -2] },
      { pos: [40, 18, 40], look: [8, 6, 8] },
      { pos: [20, 17, 26], look: [26, 6, 12] },
      { pos: [-4, 18, 26], look: [20, 5, 10] },
      { pos: [-28, 19, 16], look: [28, 5, -2] },
      { pos: [-22, 18, -2], look: [24, 6, 6] },
      { pos: [2, 17, -16], look: [-10, 5, 18] },
      { pos: [26, 18, -6], look: [10, 6, 30] },
      { pos: [44, 20, 20], look: [-6, 5, 6] },
    ];
    this.dur = 90; // seconds for a full loop
  }

  _at(u) {
    const n = this.keys.length;
    const i = Math.floor(u) % n;
    const j = (i + 1) % n;
    const f = u - Math.floor(u);
    const a = this.keys[i], b = this.keys[j];
    const m0 = new THREE.Vector3(
      (b.pos[0] - a.pos[0]) * 0.5,
      (b.pos[1] - a.pos[1]) * 0.5,
      (b.pos[2] - a.pos[2]) * 0.5
    );
    return {
      pos: new THREE.Vector3(
        hermite(a.pos[0], b.pos[0], m0.x, m0.x, f),
        hermite(a.pos[1], b.pos[1], m0.y, m0.y, f),
        hermite(a.pos[2], b.pos[2], m0.z, m0.z, f)
      ),
      look: new THREE.Vector3(a.look[0], a.look[1], a.look[2]).lerp(
        new THREE.Vector3(b.look[0], b.look[1], b.look[2]), f),
    };
  }

  /** Apply to a camera at time t (seconds). Returns position. */
  apply(t, camera) {
    const u = (t / this.dur) * this.keys.length;
    const { pos, look } = this._at(u);
    camera.position.copy(pos);
    camera.lookAt(look);
    return pos;
  }
}
