/**
 * Minimap — real-time overhead tactical minimap rendered to a small canvas
 * in the bottom-left corner. Shows player (arrow), enemies (dots), roads,
 * buildings, and fire zones.
 *
 * Zero Three.js dependency — pure Canvas2D for minimal overhead.
 * Updates once per ~8 frames (~7ms cost).
 */
import { CFG } from '../core/Config.js';

const MAP_SIZE = 160;         // canvas pixel size
const MAP_HALF = CFG.world.mapSize;
const SCALE = MAP_SIZE / (MAP_HALF * 2);
const UPDATE_INTERVAL = 8;    // frames between updates

export class Minimap {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = MAP_SIZE;
    this.canvas.height = MAP_SIZE;
    this.canvas.style.cssText =
      'position:fixed;bottom:20px;left:20px;z-index:11;border-radius:50%;' +
      'border:2px solid rgba(255,255,255,0.30);opacity:0.82;' +
      'pointer-events:none;box-shadow:0 0 12px rgba(0,0,0,0.60);';
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this._frameCount = 0;
  }

  /** Transform world XZ to canvas XY. */
  _tx(x, z) {
    return {
      cx: MAP_SIZE / 2 + x * SCALE,
      cy: MAP_SIZE / 2 + z * SCALE,
    };
  }

  /**
   * @param {THREE.Vector3} playerPos
   * @param {Array<{pos:THREE.Vector3, hp:number, state:string}>} enemies
   * @param {number} yaw - player yaw in radians
   */
  update(playerPos, enemies, yaw) {
    this._frameCount++;
    if (this._frameCount % UPDATE_INTERVAL !== 0) return;

    const ctx = this.ctx;
    const w = MAP_SIZE;
    const h = MAP_SIZE;

    // Clear
    ctx.clearRect(0, 0, w, h);

    // Background — dark circle
    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w / 2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(8,10,14,0.88)';
    ctx.fill();
    ctx.clip();

    // Draw grid lines (works with clip from above)
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 0.5;
    const step = 20; // metres
    for (let x = -MAP_HALF; x <= MAP_HALF; x += step) {
      const p = this._tx(x, 0);
      ctx.beginPath();
      ctx.moveTo(p.cx, 0);
      ctx.lineTo(p.cx, h);
      ctx.stroke();
    }
    for (let z = -MAP_HALF; z <= MAP_HALF; z += step) {
      const p = this._tx(0, z);
      ctx.beginPath();
      ctx.moveTo(0, p.cy);
      ctx.lineTo(w, p.cy);
      ctx.stroke();
    }

    // Road lines (simple vertical + horizontal)
    ctx.strokeStyle = 'rgba(120,120,130,0.20)';
    ctx.lineWidth = SCALE * 8;
    [
      { ax: 0, az: -MAP_HALF, bx: 0, bz: MAP_HALF },
      { ax: -MAP_HALF, az: 0, bx: MAP_HALF, bz: 0 },
    ].forEach(({ ax, az, bx, bz }) => {
      const a = this._tx(ax, az);
      const b = this._tx(bx, bz);
      ctx.beginPath();
      ctx.moveTo(a.cx, a.cy);
      ctx.lineTo(b.cx, b.cy);
      ctx.stroke();
    });

    // Enemy dots
    if (enemies) {
      for (const e of enemies) {
        if (e.state === 'dead' || e.state === 'dying') continue;
        const p = this._tx(e.pos.x, e.pos.z);
        if (p.cx < 0 || p.cx > w || p.cy < 0 || p.cy > h) continue;

        // Enemy dot
        ctx.beginPath();
        ctx.arc(p.cx, p.cy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,60,40,0.85)';
        ctx.fill();

        // Outer glow
        ctx.beginPath();
        ctx.arc(p.cx, p.cy, 5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,40,20,0.18)';
        ctx.fill();
      }
    }

    // Player arrow
    const pp = this._tx(playerPos.x, playerPos.z);

    // Direction triangle
    const arrowLen = 8;
    const arrowW = 5;
    ctx.save();
    ctx.translate(pp.cx, pp.cy);
    ctx.rotate(yaw + Math.PI); // Canvas Y is down, reverse

    ctx.beginPath();
    ctx.moveTo(0, -arrowLen);
    ctx.lineTo(-arrowW, arrowW);
    ctx.lineTo(0, 0);
    ctx.lineTo(arrowW, arrowW);
    ctx.closePath();

    // Fill with bright colour
    const grad = ctx.createLinearGradient(0, -arrowLen, 0, 0);
    grad.addColorStop(0, '#4af');
    grad.addColorStop(1, '#28c');
    ctx.fillStyle = grad;
    ctx.fill();

    // Border
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Glow ring
    ctx.beginPath();
    ctx.arc(0, 0, 7, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(68,170,255,0.20)';
    ctx.fill();

    ctx.restore();
  }

  /** Tear down. */
  dispose() {
    if (this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}
