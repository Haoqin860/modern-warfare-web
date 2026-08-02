/** HUD — pure DOM/CSS military-sleek overlay. Zero Three.js dependency.
 *
 *  Convention: every update() path reads GameState directly; bus subscriptions
 *  are reserved for transient effects (damage vignette, kill feed, crosshair
 *  animations).  No external CSS file — the injected <style> makes the module
 *  fully self-contained.
 */
import { GameState } from '../core/GameState.js';
import { bus } from '../core/Events.js';

/* ------------------------------------------------------------------ */
/*  CSS (self-contained, injected once into <head>)                    */
/* ------------------------------------------------------------------ */
const CSS = /* css */ `
/* ---- reset ---- */
#hud, #hud * { box-sizing: border-box; margin: 0; padding: 0; pointer-events: none; user-select: none; }

/* ================================================================== */
/*  CROSSHAIR                                                          */
/* ================================================================== */
.hud-xhair {
  position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 40px; height: 40px; z-index: 30;
}
.hud-xhair-prong {
  position: absolute;
  background: rgba(232,238,245,0.72);
  border-radius: 1px;
  transition: transform .06s ease, opacity .22s ease, background .05s ease;
}
.hud-xhair-prong.top    { top:0; left:18px; width:4px; height:14px; }
.hud-xhair-prong.bottom { bottom:0; left:18px; width:4px; height:14px; }
.hud-xhair-prong.left   { left:0; top:18px; width:14px; height:4px; }
.hud-xhair-prong.right  { right:0; top:18px; width:14px; height:4px; }
.hud-xhair-dot {
  position: absolute; top:50%; left:50%; transform: translate(-50%,-50%);
  width: 3px; height: 3px; border-radius: 50%;
  background: rgba(255,255,255,0.50);
  transition: transform .06s ease, opacity .22s ease, background .05s ease;
}

/* -- fire: prongs push outward, dot swells -- */
.hud-xhair.fire .hud-xhair-prong.top    { transform: translateY(-3px); }
.hud-xhair.fire .hud-xhair-prong.bottom { transform: translateY(3px); }
.hud-xhair.fire .hud-xhair-prong.left   { transform: translateX(-3px); }
.hud-xhair.fire .hud-xhair-prong.right  { transform: translateX(3px); }
.hud-xhair.fire .hud-xhair-dot          { transform: translate(-50%,-50%) scale(1.35); }

/* -- ADS (aim-down-sight): prongs nearly invisible, dot remains -- */
.hud-xhair.ads .hud-xhair-prong { opacity: 0.10; }
.hud-xhair.ads .hud-xhair-dot   { opacity: 0.65; }

/* -- hit-flash (momentary bright white) -- */
.hud-xhair.hit-flash .hud-xhair-prong,
.hud-xhair.hit-flash .hud-xhair-dot { background: rgba(255,255,255,1); }

/* ================================================================== */
/*  BOTTOM-CENTER — weapon name + ammo + reloading                     */
/* ================================================================== */
.hud-bc {
  position: fixed; bottom: 6vh; left: 50%; transform: translateX(-50%);
  display: flex; align-items: flex-end; gap: 18px; z-index: 20;
}
.hud-weapon-name {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px; font-weight: 600; letter-spacing: 0.10em;
  text-transform: uppercase; color: rgba(200,210,225,0.70);
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
  padding-bottom: 5px;
}
.hud-ammo-wrap { display: flex; align-items: baseline; gap: 3px; }
.hud-ammo-cur {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 34px; font-weight: 700; color: #fafcfd; line-height: 1;
  text-shadow: 0 0 10px rgba(255,255,240,0.35), 0 1px 6px rgba(0,0,0,0.90);
  min-width: 40px; text-align: right;
}
.hud-ammo-sep {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 26px; font-weight: 600; color: rgba(180,190,205,0.62); line-height: 1;
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
}
.hud-ammo-res {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 26px; font-weight: 600; color: rgba(180,190,205,0.62); line-height: 1;
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
}
.hud-ammo-cur.low {
  color: #ff3838;
  text-shadow: 0 0 10px rgba(255,50,50,0.55), 0 1px 6px rgba(0,0,0,0.90);
  animation: hud-ammo-pulse 0.55s ease infinite;
}
@keyframes hud-ammo-pulse { 50% { opacity: .50; } }

.hud-reloading {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 11px; font-weight: 700; letter-spacing: 0.12em;
  color: #ffb84d; text-transform: uppercase;
  text-shadow: 0 0 8px rgba(255,160,40,0.50), 0 1px 4px rgba(0,0,0,0.90);
  opacity: 0; transition: opacity .15s ease;
  padding-bottom: 6px;
}
.hud-reloading.on { opacity: 1; animation: hud-blink 0.55s ease infinite; }
@keyframes hud-blink { 50% { opacity: .25; } }

/* ================================================================== */
/*  BOTTOM-LEFT — health bar + number                                  */
/* ================================================================== */
.hud-bl {
  position: fixed; bottom: 6vh; left: 4vw; z-index: 20;
  display: flex; align-items: center; gap: 9px;
}
.hud-hp-bar-bg {
  width: 160px; height: 8px; background: rgba(0,0,0,0.55);
  border: 1px solid rgba(255,255,255,0.10); border-radius: 3px;
  overflow: hidden;
}
.hud-hp-bar-fill {
  height: 100%; width: 100%; border-radius: 2px;
  transition: width .15s ease, background .25s ease;
  background: linear-gradient(90deg, #7a8b3e, #8b9e3e);
}
.hud-hp-val {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 17px; font-weight: 700; color: #e8eef5;
  text-shadow: 0 1px 4px rgba(0,0,0,0.85);
  min-width: 32px;
}

/* ================================================================== */
/*  BOTTOM-RIGHT — mission / wave / enemies                            */
/* ================================================================== */
.hud-br {
  position: fixed; bottom: 6vh; right: 4vw; z-index: 20;
  text-align: right;
}
.hud-wave {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em;
  text-transform: uppercase; color: #c8d4e2;
  text-shadow: 0 1px 4px rgba(0,0,0,0.85);
}
.hud-enemies-left {
  font-family: 'SF Mono','Cascadia Code','Consolas',monospace;
  font-size: 12px; color: rgba(180,195,215,0.68);
  text-shadow: 0 1px 4px rgba(0,0,0,0.80);
}
.hud-intermission {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
  color: #ffb266; text-transform: uppercase;
  text-shadow: 0 0 6px rgba(255,160,40,0.30), 0 1px 4px rgba(0,0,0,0.85);
}

/* ================================================================== */
/*  TOP-LEFT — objective                                                */
/* ================================================================== */
.hud-obj {
  position: fixed; top: 3vh; left: 4vw; z-index: 20;
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 11px; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase; color: rgba(180,200,220,0.52);
  text-shadow: 0 1px 3px rgba(0,0,0,0.80);
}

/* ================================================================== */
/*  TOP-CENTER — kill feed (auto-fading)                                */
/* ================================================================== */
.hud-kf {
  position: fixed; top: 3vh; left: 50%; transform: translateX(-50%);
  z-index: 20; display: flex; flex-direction: column; align-items: center; gap: 4px;
}
.hud-kf-line {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 12px; font-weight: 700; letter-spacing: 0.10em;
  text-transform: uppercase; color: #c8d8f0;
  text-shadow: 0 1px 4px rgba(0,0,0,0.85);
  animation: hud-kf-in .25s ease, hud-kf-fade 2.8s ease 2.8s forwards;
  white-space: nowrap;
}
@keyframes hud-kf-in  { from { opacity:0; transform:translateY(-6px); } to { opacity:1; transform:translateY(0); } }
@keyframes hud-kf-fade { to { opacity:0; } }

/* ================================================================== */
/*  OVERLAYS — damage, death, mission-complete                         */
/* ================================================================== */

/* -- damage flash vignette -- */
.hud-dmg {
  position: fixed; inset: 0; z-index: 15; opacity: 0;
  background: radial-gradient(ellipse at 50% 45%, transparent 30%, rgba(180,20,0,0.35) 75%, rgba(120,0,0,0.55));
  transition: opacity .10s ease;
}
.hud-dmg.on { opacity: 1; transition: opacity .03s ease; }

/* -- death overlay -- */
.hud-death {
  position: fixed; inset: 0; z-index: 25; opacity: 0;
  background: radial-gradient(ellipse at 50% 40%, rgba(30,4,4,0.55), rgba(12,0,0,0.92));
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  transition: opacity .6s ease;
}
.hud-death.on { opacity: 1; }
.hud-death-text {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: clamp(20px, 5vw, 36px); font-weight: 800;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: #e84444; text-shadow: 0 0 20px rgba(200,40,40,0.70), 0 2px 10px rgba(0,0,0,0.95);
  text-align: center;
}
.hud-death-sub {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: 13px; font-weight: 600; letter-spacing: 0.10em;
  color: rgba(210,190,190,0.70); margin-top: 10px; text-align: center;
}

/* -- mission complete banner -- */
.hud-mc {
  position: fixed; inset: 0; z-index: 25; opacity: 0;
  background: radial-gradient(ellipse at 50% 45%, rgba(8,16,28,0.40), rgba(2,6,14,0.90));
  display: flex; align-items: center; justify-content: center;
  transition: opacity 1.0s ease;
}
.hud-mc.on { opacity: 1; }
.hud-mc-text {
  font-family: 'Segoe UI', system-ui, sans-serif;
  font-size: clamp(28px, 7vw, 60px); font-weight: 900;
  letter-spacing: 0.20em; text-transform: uppercase;
  color: #fafcfd; text-shadow: 0 0 30px rgba(255,200,80,0.40), 0 2px 12px rgba(0,0,0,0.95);
  animation: hud-mc-zoom .7s ease;
}
@keyframes hud-mc-zoom { from { transform:scale(0.85); opacity:0; } to { transform:scale(1); opacity:1; } }
`;

/* ------------------------------------------------------------------ */
/*  HUD class                                                          */
/* ------------------------------------------------------------------ */
export class HUD {
  /**
   * @param {THREE.WebGLRenderer} renderer — unused (symmetry with other modules)
   */
  constructor(renderer) {
    void renderer;

    this._last = {};          // cached GameState snapshot for dirty-checks
    this._fireT = 0;          // crosshair-fire timeout id
    this._hitT = 0;           // crosshair-hit timeout id
    this._dmgT = 0;           // damage-vignette timeout id
    this._kfCleanups = [];    // kill-feed auto-remove timeout IDs

    this._injectCSS();
    this._clearDOM();         // HMR safety — remove any previously rendered HUD
    this._buildDOM();
    this._bindEvents();
  }

  /** Remove all HUD DOM so HMR reloads don't stack duplicate children. */
  _clearDOM() {
    const root = document.getElementById('hud');
    if (!root) return;
    while (root.firstChild) root.removeChild(root.firstChild);
  }

  /* ------------------------------------------------------------------ */
  /*  CSS injection                                                      */
  /* ------------------------------------------------------------------ */

  _injectCSS() {
    if (document.getElementById('hud-css')) return;
    const s = document.createElement('style');
    s.id = 'hud-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ------------------------------------------------------------------ */
  /*  DOM construction                                                   */
  /* ------------------------------------------------------------------ */

  _buildDOM() {
    const root = document.getElementById('hud');
    if (!root) return;

    const el = (tag, cls, text) => {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (text !== undefined) e.textContent = text;
      return e;
    };
    const html = (tag, cls, inner) => {
      const e = document.createElement(tag);
      if (cls) e.className = cls;
      if (inner !== undefined) e.innerHTML = inner;
      return e;
    };

    /* ----- crosshair ----- */
    const xhair = el('div', 'hud-xhair');
    const prongs = [
      el('div', 'hud-xhair-prong top'),
      el('div', 'hud-xhair-prong bottom'),
      el('div', 'hud-xhair-prong left'),
      el('div', 'hud-xhair-prong right'),
    ];
    const dot = el('div', 'hud-xhair-dot');
    xhair.append(...prongs, dot);

    /* ----- bottom-center: weapon + ammo ----- */
    const bc = el('div', 'hud-bc');
    const weaponName = el('div', 'hud-weapon-name', GameState.weaponName);
    const ammoWrap = html('div', 'hud-ammo-wrap',
      '<span class="hud-ammo-cur">30</span>' +
      '<span class="hud-ammo-sep">&#8201;/&#8201;</span>' +
      '<span class="hud-ammo-res">150</span>');
    const reloading = el('div', 'hud-reloading', 'RELOADING');
    bc.append(weaponName, ammoWrap, reloading);

    const ammoCur = ammoWrap.querySelector('.hud-ammo-cur');
    const ammoRes = ammoWrap.querySelector('.hud-ammo-res');

    /* ----- bottom-left: health ----- */
    const bl = el('div', 'hud-bl');
    const hpBarBg = el('div', 'hud-hp-bar-bg');
    const hpFill = el('div', 'hud-hp-bar-fill');
    hpBarBg.appendChild(hpFill);
    const hpVal = el('div', 'hud-hp-val', '100');
    bl.append(hpBarBg, hpVal);

    /* ----- bottom-right: mission ----- */
    const br = el('div', 'hud-br');
    const waveEl = el('div', 'hud-wave');
    const enemiesEl = el('div', 'hud-enemies-left');
    const interEl = el('div', 'hud-intermission');
    br.append(waveEl, enemiesEl, interEl);

    /* ----- top-left objective ----- */
    const obj = el('div', 'hud-obj', 'ELIMINATE HOSTILE FORCES');

    /* ----- top-center kill feed ----- */
    const kf = el('div', 'hud-kf');

    /* ----- damage flash ----- */
    const dmg = el('div', 'hud-dmg');

    /* ----- death overlay ----- */
    const death = html('div', 'hud-death',
      '<div class="hud-death-text">YOU ARE DOWN</div>' +
      '<div class="hud-death-sub">PRESS R TO RESPAWN</div>');

    /* ----- mission complete ----- */
    const mc = html('div', 'hud-mc',
      '<div class="hud-mc-text">MISSION COMPLETE</div>');

    // Attach everything to #hud
    root.append(xhair, bc, bl, br, obj, kf, dmg, death, mc);

    // Store refs for per-frame update
    this._el = {
      xhair, weaponName, ammoCur, ammoRes, reloading,
      hpFill, hpVal,
      waveEl, enemiesEl, interEl,
      obj, kf, dmg, death, mc,
    };
  }

  /* ------------------------------------------------------------------ */
  /*  Event-bus subscriptions (transient effects only)                   */
  /* ------------------------------------------------------------------ */

  _bindEvents() {
    const safe = (fn) => (...args) => { try { fn(...args); } catch (_) { /* defensive */ } };

    /** Trigger the red damage vignette on player:hurt. */
    bus.on('player:hurt', safe(() => {
      const dmg = this._el.dmg;
      if (!dmg) return;
      dmg.classList.remove('on');
      void dmg.offsetWidth;              // force reflow so transition replays
      dmg.classList.add('on');
      clearTimeout(this._dmgT);
      this._dmgT = setTimeout(() => dmg.classList.remove('on'), 1200);
    }));

    /** Crosshair: push prongs outward on fire. */
    bus.on('weapon:fire', safe(() => {
      const x = this._el.xhair;
      if (!x) return;
      x.classList.add('fire');
      clearTimeout(this._fireT);
      this._fireT = setTimeout(() => x.classList.remove('fire'), 80);
    }));

    /** Crosshair: brief bright-white hit feedback. */
    bus.on('weapon:hit', safe(() => {
      const x = this._el.xhair;
      if (!x) return;
      x.classList.add('hit-flash');
      clearTimeout(this._hitT);
      this._hitT = setTimeout(() => x.classList.remove('hit-flash'), 80);
    }));

    /** Kill feed: push line on every enemy kill. */
    bus.on('enemy:killed', safe((data) => {
      const label = data && data.headshot ? 'HEADSHOT' : 'ENEMY DOWNED';
      this._pushKillFeed(label);
    }));

    /**
     * MISSION COMPLETE is driven by GameState.missionComplete in update(),
     * not by the game:over event (which fires on player death as well).
     * The game:over event is intentionally ignored here.
     *
     * weapon:reload and enemy:wave are handled through GameState in update().
     * player:dead is handled through GameState.alive in update().
     */
  }

  /* ------------------------------------------------------------------ */
  /*  Kill feed                                                          */
  /* ------------------------------------------------------------------ */

  _pushKillFeed(text) {
    const container = this._el.kf;
    if (!container) return;

    const line = document.createElement('div');
    line.className = 'hud-kf-line';
    line.textContent = text;
    container.appendChild(line);

    // CSS animation total: 0.25s in + 2.8s delay + 2.8s out = 5.85s. Remove at 6s.
    // Clean up the timeout ID from our tracking list when it fires.
    const wrapTid = () => {
      if (line.parentNode) line.remove();
      const idx = this._kfCleanups.indexOf(wrapTid);
      if (idx !== -1) this._kfCleanups.splice(idx, 1);
    };
    const tid = setTimeout(wrapTid, 6000);
    this._kfCleanups.push(tid);

    // Cap visible lines at 3
    while (container.children.length > 3) {
      const first = container.firstChild;
      if (first) first.remove();
    }
  }

  /* ------------------------------------------------------------------ */
  /*  Per-frame update (cheap — writes only when GameState values change) */
  /* ------------------------------------------------------------------ */

  update() {
    try {
      this._updateHealth();
      this._updateAmmo();
      this._updateWeapon();
      this._updateMission();
      this._updateCrosshair();
      this._updateDeath();
      this._updateMissionComplete();
    } catch (_) { /* never throw from HUD update */ }
  }

  /* ---- health bar + number ---- */
  _updateHealth() {
    const hp = GameState.health;
    const max = GameState.maxHealth;
    if (hp === this._last.hp && max === this._last.maxHp) return;
    this._last.hp = hp;
    this._last.maxHp = max;

    const pct = Math.max(0, Math.min(1, hp / max));
    const elBar = this._el.hpFill;
    const elVal = this._el.hpVal;
    if (!elBar || !elVal) return;

    elBar.style.width = `${pct * 100}%`;

    // Colour gradient: healthy olive-green → near-empty crimson
    const r = Math.round(140 + (1 - pct) * 115);
    const g = Math.round(50 + pct * 165);
    const b = Math.round(38 + (1 - pct) * 22);
    const r2 = Math.min(255, r + 35);
    const g2 = Math.min(255, g + 25);
    elBar.style.background =
      `linear-gradient(90deg, rgb(${r},${g},${b}), rgb(${r2},${g2},${b}))`;

    elVal.textContent = String(Math.ceil(hp));
  }

  /* ---- ammo + reloading ---- */
  _updateAmmo() {
    const ammo = GameState.ammo;
    const reserve = GameState.reserve;
    const reloading = GameState.reloading;

    if (ammo !== this._last.ammo) {
      this._last.ammo = ammo;
      if (this._el.ammoCur) {
        this._el.ammoCur.textContent = String(ammo);
        this._el.ammoCur.classList.toggle('low', ammo <= 6);
      }
    }
    if (reserve !== this._last.reserve) {
      this._last.reserve = reserve;
      if (this._el.ammoRes) this._el.ammoRes.textContent = String(reserve);
    }
    if (reloading !== this._last.reloading) {
      this._last.reloading = reloading;
      if (this._el.reloading) this._el.reloading.classList.toggle('on', reloading);
    }
  }

  /* ---- weapon name ---- */
  _updateWeapon() {
    const wn = GameState.weaponName;
    if (wn !== this._last.weaponName && this._el.weaponName) {
      this._last.weaponName = wn;
      this._el.weaponName.textContent = wn;
    }
  }

  /* ---- mission panel (wave / enemies / intermission timer) ---- */
  _updateMission() {
    const wave = GameState.wave;
    const wState = GameState.waveState;
    const wTimer = GameState.waveTimer;
    const enemiesLen = Array.isArray(GameState.enemies) ? GameState.enemies.length : 0;

    if (wave !== this._last.wave || wState !== this._last.waveState) {
      this._last.wave = wave;
      this._last.waveState = wState;
      if (this._el.waveEl) {
        this._el.waveEl.textContent = wave > 0 ? `WAVE ${wave}/5` : '';
      }
      if (this._el.interEl) {
        this._el.interEl.textContent =
          (wState === 'intermission' && wave > 0)
            ? `NEXT WAVE IN ${Math.ceil(Math.max(0, wTimer))}...`
            : '';
      }
    }

    // Tick the intermission countdown every frame while active
    if (wState === 'intermission' && this._el.interEl) {
      const sec = Math.ceil(Math.max(0, wTimer));
      if (sec !== this._last.waveTimerSec) {
        this._last.waveTimerSec = sec;
        this._el.interEl.textContent = `NEXT WAVE IN ${sec}...`;
      }
    }

    if (enemiesLen !== this._last.enemiesLen && this._el.enemiesEl) {
      this._last.enemiesLen = enemiesLen;
      this._el.enemiesEl.textContent = enemiesLen > 0 ? `HOSTILES (${enemiesLen})` : '';
    }
  }

  /* ---- crosshair ADS state ---- */
  _updateCrosshair() {
    const ads = GameState.view && GameState.view.ads ? GameState.view.ads : 0;
    if (ads === this._last.ads) return;
    this._last.ads = ads;
    if (this._el.xhair) {
      this._el.xhair.classList.toggle('ads', ads > 0.5);
    }
  }

  /* ---- death overlay (driven by GameState.alive) ---- */
  _updateDeath() {
    const alive = GameState.alive;
    if (alive === this._last.alive) return;
    this._last.alive = alive;
    if (this._el.death) this._el.death.classList.toggle('on', !alive);
  }

  /* ---- mission-complete banner ---- */
  _updateMissionComplete() {
    const mc = GameState.missionComplete;
    if (mc === this._last.missionComplete) return;
    this._last.missionComplete = mc;
    if (mc && this._el.mc) this._el.mc.classList.add('on');
  }
}
