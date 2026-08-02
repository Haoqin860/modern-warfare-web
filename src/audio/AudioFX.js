/**
 * AudioFX — procedural WebAudio SFX. No audio files; everything synthesized.
 * Used by WeaponSystem and EnemyManager. All methods are fire-and-forget.
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

  _noise({ dur = 0.2, filter = 800, filterType = 'lowpass', gain = 0.2, attack = 0.005 } = {}) {
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
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t); src.stop(t + dur + 0.05);
  }

  _tone({ freq = 440, type = 'sine', dur = 0.15, gain = 0.2, end = 80 }) {
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
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + dur + 0.05);
  }

  gunshot() {
    // sharp crack + low body
    this._noise({ dur: 0.09, filter: 3200, filterType: 'highpass', gain: 0.5, attack: 0.001 });
    this._noise({ dur: 0.22, filter: 650, filterType: 'lowpass', gain: 0.4, attack: 0.001 });
    this._tone({ freq: 150, type: 'triangle', dur: 0.16, gain: 0.35, end: 42 });
  }

  enemyShot() {
    this._noise({ dur: 0.1, filter: 2600, filterType: 'highpass', gain: 0.22, attack: 0.001 });
    this._noise({ dur: 0.2, filter: 520, filterType: 'lowpass', gain: 0.16, attack: 0.001 });
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

  explosion() {
    this._noise({ dur: 0.6, filter: 320, filterType: 'lowpass', gain: 0.6, attack: 0.002 });
    this._noise({ dur: 0.3, filter: 1500, filterType: 'highpass', gain: 0.2, attack: 0.001 });
    this._tone({ freq: 90, type: 'sine', dur: 0.5, gain: 0.5, end: 24 });
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
