/**
 * Input — keyboard/mouse state for all gameplay systems.
 * Reads keyboard via keydown/keyup, mouse buttons, pointer lock for look delta.
 * All game code reads `.keys`, `.mouse`, `.sprint`, `.aim` etc. every frame.
 */
import { CFG } from '../core/Config.js';

export class Input {
  constructor() {
    this.keys = new Set();
    this.mouse = { down: false, pressed: false };
    this.aimDown = false;
    this.aimPressed = false;
    this.lookDelta = { x: 0, y: 0 };
    this.locked = false;
    this.lastLockState = false;

    this._down = this._down.bind(this);
    this._up = this._up.bind(this);
    this._move = this._move.bind(this);

    window.addEventListener('keydown', this._down);
    window.addEventListener('keyup', this._up);
    document.addEventListener('pointerlockchange', () => {
      const wasLocked = this.locked;
      this.locked = document.pointerLockElement !== null;
      // If we just lost pointer lock while the game is running, re-request it.
      this.lastLockState = wasLocked;
      if (!this.locked && CFG.started && wasLocked) {
        // Re-request lock on next click (don't loop-lock — browser requires gesture).
      }
    });
    document.addEventListener('mousemove', this._move);
    document.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.mouse.down = true;
      if (e.button === 2) this.aimDown = true;
      if (CFG.started && !this.locked && e.button === 0) this.pointerLock();
    });
    document.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouse.down = false;
      if (e.button === 2) this.aimDown = false;
    });
    document.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  _down(e) {
    this.keys.add(e.code);
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  }
  _up(e) { this.keys.delete(e.code); }

  _move(e) {
    if (!this.locked) return;
    this.lookDelta.x += e.movementX;
    this.lookDelta.y += e.movementY;
  }

  pointerLock() {
    const c = document.body;
    if (c.requestPointerLock) c.requestPointerLock();
  }

  get key() {
    const k = this.keys;
    return (c) => k.has(c);
  }

  /** A/D + W/S axis, W/S first. */
  get moveVec() {
    let x = 0, z = 0;
    if (this.key('KeyW')) z += 1;
    if (this.key('KeyS')) z -= 1;
    if (this.key('KeyA')) x -= 1;
    if (this.key('KeyD')) x += 1;
    if (x && z) { x *= 0.7071; z *= 0.7071; }
    return { x, z };
  }

  get sprint() { return this.key('ShiftLeft') || this.key('ShiftRight'); }
  get crouch() { return this.key('ControlLeft') || this.key('ControlRight') || this.key('KeyC'); }
  get jump() { return this.key('Space'); }
  get aim() { return this.aimDown; }

  /** Consume and reset look delta (called once per frame). */
  consumeLook() {
    const d = this.lookDelta;
    const r = { x: d.x, y: d.y };
    d.x = 0; d.y = 0;
    return r;
  }

  /** Called once per frame to normalize pressed state. */
  update() {
    this.mouse.pressed = false;
    this.aimPressed = false;
  }
}
