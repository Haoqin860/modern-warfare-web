/**
 * PauseMenu — Esc toggles an overlay menu with Resume / Restart / Controls.
 * Simple DOM overlay, no Three.js dependency.
 */
import { CFG } from '../core/Config.js';
import { GameState } from '../core/GameState.js';

const CSS = /* css */ `
#pause-overlay {
  position: fixed; inset: 0; z-index: 50;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: rgba(4,6,12,0.88);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  color: #e8eef5;
  font-family: 'Segoe UI', system-ui, sans-serif;
  opacity: 0; pointer-events: none;
  transition: opacity 0.25s ease;
}
#pause-overlay.active {
  opacity: 1; pointer-events: auto;
}
#pause-overlay h2 {
  font-size: clamp(24px, 5vw, 44px);
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 30px;
  color: #fff;
  text-shadow: 0 0 18px rgba(255,160,40,0.30);
}
#pause-overlay .pause-btn {
  display: block;
  width: 240px;
  margin: 8px 0;
  padding: 14px 20px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px;
  color: #cfd8e8;
  font-size: 15px;
  letter-spacing: 0.08em;
  cursor: pointer;
  text-align: center;
  transition: background 0.15s, border-color 0.15s;
}
#pause-overlay .pause-btn:hover {
  background: rgba(255,255,255,0.12);
  border-color: rgba(255,176,102,0.6);
  color: #ffb066;
}
#pause-overlay .pause-hint {
  margin-top: 24px;
  font-size: 12px;
  color: rgba(180,195,215,0.50);
  letter-spacing: 0.06em;
}
`;

export class PauseMenu {
  constructor() {
    this._paused = false;
    this._injectCSS();
    this._buildDOM();
    this._bindKeys();
  }

  _injectCSS() {
    if (document.getElementById('pause-css')) return;
    const s = document.createElement('style');
    s.id = 'pause-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  _buildDOM() {
    const overlay = document.createElement('div');
    overlay.id = 'pause-overlay';

    const title = document.createElement('h2');
    title.textContent = 'PAUSED';

    const btnResume = document.createElement('div');
    btnResume.className = 'pause-btn';
    btnResume.textContent = 'RESUME';
    btnResume.addEventListener('click', () => this.toggle());

    const btnRestart = document.createElement('div');
    btnRestart.className = 'pause-btn';
    btnRestart.textContent = 'RESTART MISSION';
    btnRestart.addEventListener('click', () => {
      this.toggle();
      // Trigger restart via event
      GameState.wave = 0;
      GameState.waveState = 'idle';
      GameState.missionComplete = false;
      GameState.kills = 0;
      GameState.score = 0;
      window.location.reload();
    });

    const hint = document.createElement('div');
    hint.className = 'pause-hint';
    hint.textContent = 'Press ESC to resume';

    overlay.append(title, btnResume, btnRestart, hint);
    document.body.appendChild(overlay);

    this._overlay = overlay;
  }

  _bindKeys() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Escape' && CFG.started) {
        this.toggle();
      }
    });
  }

  get paused() { return this._paused; }

  toggle() {
    this._paused = !this._paused;
    GameState.paused = this._paused;
    this._overlay.classList.toggle('active', this._paused);

    // Request/release pointer lock
    if (this._paused) {
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    }
  }

  dispose() {
    if (this._overlay.parentNode) {
      this._overlay.parentNode.removeChild(this._overlay);
    }
  }
}
