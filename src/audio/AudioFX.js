/**
 * AudioFX — procedural WebAudio SFX. No audio files; everything synthesized.
 * Used by WeaponSystem and EnemyManager. All methods are fire-and-forget.
 *
 * Spatial audio: enemy gunshots are panned based on their world position
 * relative to the camera listener. Player sounds remain unspatialized.
 */
import { CFG } from '../core/Config.js';

export class AudioFX {
  constructor() {
    this.ctx = null;
    this.master = null;
    this._noiseBuf = null;
    this._init = this._init.bind(this);
    window.addEventListener('pointerdown', this._init, { once: true });
  }

  _init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = CFG.audio.master;
    this.master.connect(this.ctx.destination);
    // pre-bake 1s white noise
    const len = this.ctx.sampleRate;
    this._noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this._noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  }

  /**
   * Update the audio listener position/orientation each frame so spatial
   * sounds track the player. Called from main.js game loop.
   * @param {THREE.Camera} camera
   */
  update(camera) {
    if (!this.ctx || !camera) return;
    const l = this.ctx.listener;
    const q = camera.quaternion;
    // Compute forward = (0,0,-1) rotated by quaternion q
    const fwdx = -2 * (q.x * q.z + q.w * q.y);
    const fwdy = -2 * (q.y * q.z - q.w * q.x);
    const fwdz = -1 + 2 * (q.x * q.x + q.y * q.y);
    // Compute up = (0,1,0) rotated by quaternion q
    const upx = 2 * (q.x * q.y - q.w * q.z);
    const upy = 1 - 2 * (q.x * q.x + q.z * q.z);
    const upz = 2 * (q.y * q.z + q.w * q.x);
    if (l.positionX) {
      // Modern API (Chrome 52+, Firefox 65+)
      l.positionX.value = camera.position.x;
      l.positionY.value = camera.position.y;
      l.positionZ.value = camera.position.z;
      l.forwardX.value = fwdx;
      l.forwardY.value = fwdy;
      l.forwardZ.value = fwdz;
      l.upX.value = upx;
      l.upY.value = upy;
      l.upZ.value = upz;
    } else {
      // Legacy setPosition/setOrientation fallback
      if (l.setPosition) l.setPosition(camera.position.x, camera.position.y, camera.position.z);
      if (l.setOrientation) l.setOrientation(fwdx, fwdy, fwdz, upx, upy, upz);
    }
  }

  /**
   * Create a spatial panner node at world position `pos`, connected to `dest`.
   * Returns the panner so the caller can connect source → panner → dest.
   * @param {{x:number,y:number,z:number}|THREE.Vector3} pos
   * @param {AudioNode} dest  destination node (typically master gain)
   * @returns {PannerNode|null}
   */
  _pannerAt(pos, dest) {
    if (!this.ctx) return null;
    const p = this.ctx.createPanner();
    if (p.positionX) {
      p.positionX.value = pos.x;
      p.positionY.value = pos.y;
      p.positionZ.value = pos.z;
    } else {
      // Legacy setPosition
      p.setPosition(pos.x, pos.y, pos.z);
    }
    p.panningModel = 'HRTF';
    p.distanceModel = 'inverse';
    p.refDistance = 3;
    p.maxDistance = 100;
    p.rolloffFactor = 1.8;
    p.connect(dest);
    return p;
  }

  _noise({ dur = 0.2, filter = 800, filterType = 'lowpass', gain = 0.2, attack = 0.005, pos = null } = {}) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseBuf;
    src.loop = true;
    const f = this.ctx.createBiquadFilter();
    f.type = filterType; f.frequency.value = filter; f.Q.value = 0.8;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    const dest = pos ? this._pannerAt(pos, this.master) : this.master;
    src.connect(f); f.connect(g); g.connect(dest);
    src.start(t); src.stop(t + dur + 0.05);
  }

  _tone({ freq = 440, type = 'sine', dur = 0.15, gain = 0.2, end = 80, pos = null }) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(20, end), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

    const dest = pos ? this._pannerAt(pos, this.master) : this.master;
    o.connect(g); g.connect(dest);
    o.start(t); o.stop(t + dur + 0.05);
  }

  gunshot() {
    // sharp crack + low body
    this._noise({ dur: 0.09, filter: 3200, filterType: 'highpass', gain: 0.5, attack: 0.001 });
    this._noise({ dur: 0.22, filter: 650, filterType: 'lowpass', gain: 0.4, attack: 0.001 });
    this._tone({ freq: 150, type: 'triangle', dur: 0.16, gain: 0.35, end: 42 });
  }

  /**
   * Enemy gunshot — spatialized to `pos` when provided so distant shots sound
   * quieter and directionally correct.
   * @param {{x:number,y:number,z:number}|THREE.Vector3} [pos]  world-space muzzle position
   */
  enemyShot(pos = null) {
    this._noise({ dur: 0.1, filter: 2600, filterType: 'highpass', gain: 0.22, attack: 0.001, pos });
    this._noise({ dur: 0.2, filter: 520, filterType: 'lowpass', gain: 0.16, attack: 0.001, pos });
  }

  reload() {
    this._noise({ dur: 0.08, filter: 1400, gain: 0.2, attack: 0.002 });
    this._noise({ dur: 0.12, filter: 900, gain: 0.22, attack: 0.002 });
    this._noise({ dur: 0.09, filter: 2000, gain: 0.18, attack: 0.002 });
  }

  empty() { this._tone({ freq: 880, type: 'square', dur: 0.06, gain: 0.1, end: 660 }); }

  hit() { this._tone({ freq: 1200, type: 'square', dur: 0.05, gain: 0.12, end: 900 }); }

  hitmarker() { this._tone({ freq: 1400, type: 'square', dur: 0.045, gain: 0.15, end: 1000 }); }

  step() { this._noise({ dur: 0.07, filter: 500, gain: 0.06, attack: 0.001 }); }

  jump() { this._noise({ dur: 0.12, filter: 700, gain: 0.08 }); }

  land() { this._noise({ dur: 0.15, filter: 350, gain: 0.12 }); }

  /**
   * Explosion — spatialized to `pos` when provided.
   * @param {{x:number,y:number,z:number}|THREE.Vector3} [pos]
   */
  explosion(pos = null) {
    this._noise({ dur: 0.6, filter: 320, filterType: 'lowpass', gain: 0.6, attack: 0.002, pos });
    this._noise({ dur: 0.3, filter: 1500, filterType: 'highpass', gain: 0.2, attack: 0.001, pos });
    this._tone({ freq: 90, type: 'sine', dur: 0.5, gain: 0.5, end: 24, pos });
  }

  hurt() { this._tone({ freq: 260, type: 'sawtooth', dur: 0.12, gain: 0.12, end: 140 }); }

  death() { this._tone({ freq: 180, type: 'sawtooth', dur: 0.5, gain: 0.2, end: 40 }); }

  waveStart() {
    this._tone({ freq: 520, type: 'square', dur: 0.1, gain: 0.08, end: 520 });
    this._tone({ freq: 660, type: 'square', dur: 0.1, gain: 0.08, end: 660 });
  }

  missionComplete() {
    [660, 880, 1100].forEach((f, i) => setTimeout(() => this._tone({ freq: f, type: 'sine', dur: 0.35, gain: 0.14 }), i * 160));
  }
}
