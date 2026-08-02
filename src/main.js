/**
 * main.js — application bootstrap. Wires every module, runs the frame loop.
 * Modules register on `renderer.scene`, `renderer.vmScene`, `renderer.camera`.
 */
import * as THREE from 'three';
import { CFG } from './core/Config.js';
import { GameState } from './core/GameState.js';
import { bus } from './core/Events.js';
import { GameRenderer } from './core/Renderer.js';
import { SceneLighting } from './core/Lighting.js';
import { PostFX } from './core/PostFX.js';
import { DemoCamera } from './core/DemoCamera.js';
import { Input } from './input/Input.js';
import { AudioFX } from './audio/AudioFX.js';
import { WorldBuilder } from './world/WorldBuilder.js';
import { PlayerController } from './player/PlayerController.js';
import { WeaponSystem } from './weapon/WeaponSystem.js';
import { EnemyManager } from './enemies/EnemyManager.js';
import { FX } from './fx/FX.js';
import { Particles } from './fx/Particles.js';
import { HUD } from './ui/HUD.js';
import { Minimap } from './ui/Minimap.js';
import { PauseMenu } from './ui/PauseMenu.js';
import { updateGrenades, throwGrenade } from './weapon/Grenade.js';
import { createSky, orientSky, createSunSprite } from './world/Sky.js';

const boot = () => {
  const r = new GameRenderer(document.getElementById('app'));
  GameState.demo = CFG.demo;

  const lighting = new SceneLighting(r);
  const sky = createSky();
  r.scene.add(sky);
  orientSky(sky, lighting.sunDir);
  // Hot HDR sun sprite along the key-light direction → the bloom source
  // that crosses the UnrealBloom threshold and gives the sun its glow.
  const sun = createSunSprite();
  sun.position.copy(lighting.sunDir).multiplyScalar(300);
  r.scene.add(sun);
  const world = new WorldBuilder(r, lighting);
  const fx = new FX(r, lighting);
  const particles = new Particles(r, lighting);
  const audio = new AudioFX();
  const input = new Input();

  const player = new PlayerController(r, input, world);
  const weapon = new WeaponSystem(r, input, player, world, particles, fx, audio);
  const enemies = new EnemyManager(r, world, player, particles, fx, audio);
  weapon.setEnemyManager(enemies);
  window.__MW_enemyManager = enemies; // expose for QA

  // Wire fire zones from WorldBuilder to Particles for debris/ember spawning
  particles.fireZones = [
    { pos: new THREE.Vector3(18, 1.5, -18), radius: 5, intensity: 1.0 },
    { pos: new THREE.Vector3(22, 1.5,  20), radius: 4, intensity: 0.9 },
    { pos: new THREE.Vector3(50, 1.5, -45), radius: 4, intensity: 0.8 },
  ];
  const hud = new HUD(r.renderer);
  const minimap = new Minimap();
  const pauseMenu = new PauseMenu();
  window.__MW_pauseMenu = pauseMenu; // expose for QA

  const post = new PostFX(r);
  const demoCam = new DemoCamera();
  if (CFG.demo) r.renderViewModel = false;

  // reveal game UI
  const overlay = document.getElementById('overlay');
  if (CFG.demo) { overlay.classList.add('hidden'); GameState.started = true; CFG.started = true; }
  const startGame = () => {
    if (CFG.started) return;
    CFG.started = true;
    GameState.started = true;
    overlay.classList.add('hidden');
    enemies.startGame();
    bus.emit('game:start');
  };
  overlay.addEventListener('click', startGame);
  document.addEventListener('pointerdown', () => { if (!CFG.demo && CFG.started) input.pointerLock(); });

  const fpsEl = document.getElementById('fps');

  // Screenshot/QA hooks (used by art/shot.mjs)
  window.__MW_READY = true;
  window.__MW_SCENE = r.scene;
  window.__MW_CAMERA = r.camera;
  window.__MW_GS = GameState;
  window.__MW_player = player; // expose for QA
  window.__MW_weapon = weapon; // expose for QA
  window.__MW_renderer = r;    // expose for QA
  let _demoOverride = -1;
  window.__MW_DEMO_JUMP = (t) => { _demoOverride = t; };
  const _demoTime = () => (_demoOverride >= 0 ? _demoOverride : GameState.time);

  let _rWasDown = false; // debounce R for respawn
  let _frameAcc = 0, _frameN = 0; // rolling FPS meter (moved from Renderer.render)

      // Grenade cooldown (prevent spam)
  let _grenadeCooldown = 0;
  const _grenadeDir = new THREE.Vector3();
  const _grenadeOrigin = new THREE.Vector3();

  // Footstep timer (attached to player)
  player._stepTimer = 0;

  // Last G key state for debounce
  let _gWasDown = false;

  // Use setTimeout for the game loop instead of requestAnimationFrame.
  // rAF is suppressed when the tab is backgrounded, which happens in
  // preview/headless browser environments. setTimeout runs regardless.
  const _scheduleLoop = () => {
    setTimeout(loop, 16);
  };

  const loop = () => {
    try {
    const t0 = performance.now();
    const dt = r.frame();
    GameState.time += dt;
    window.__MW_frameCounter = (window.__MW_frameCounter || 0) + 1;
    // Use a practical minimum dt — avoids stalling on zero-delta frames
    if (dt < 0.001 && window.__MW_frameCounter > 5) {
      _scheduleLoop();
      return;
    }

    if (CFG.demo) {
      const dT = _demoTime();
      demoCam.apply(dT, r.camera);
      world.update(dt, dT, r.camera.position);
      fx.update(dt, dT, r.camera.position);
      particles.update(dt, dT);
      enemies.updateDemo(dt, r.camera.position);
      post.update(dt, dT);
      // Post-processed world render (bloom + grade + FXAA), no viewmodel in demo
      post.render();
    } else {
      // live gameplay path
      // Pause check — also exposed on GameState for qa inspection
      if (pauseMenu.paused) { GameState.paused = true; _scheduleLoop(); return; }
      GameState.paused = false;

      input.update(dt);
      player.update(dt);

      // Respawn: R key when dead (debounce to prevent multi-respawn)
      if (!player.isAlive) {
        const rDown = input.has('KeyR');
        if (rDown && !_rWasDown) {
          player.respawn();
          enemies.startGame();
        }
        _rWasDown = rDown;
      } else {
        _rWasDown = false;
      }
      world.update(dt, GameState.time, r.camera.position);
      fx.update(dt, GameState.time, r.camera.position);
      particles.update(dt, GameState.time);
      weapon.update(dt);
      enemies.update(dt);

      // Grenade throw on G key (debounced)
      _grenadeCooldown -= dt;
      const gDown = input.has('KeyG');
      if (gDown && !_gWasDown && _grenadeCooldown <= 0 && player.isAlive) {
        _grenadeCooldown = 0.5;
        _grenadeDir.set(0, 0, -1).applyQuaternion(r.camera.quaternion).normalize();
        _grenadeOrigin.copy(r.camera.position).addScaledVector(_grenadeDir, 0.8);
        throwGrenade(_grenadeOrigin, _grenadeDir, r.scene);
      }
      _gWasDown = gDown;

      // Weapon swap: 1=primary, 2=pistol (handled by WeaponSystem)
      if (input.has('Digit1') && weapon._slot !== 'primary') {
        weapon.swapToPrimary();
      }
      if (input.has('Digit2') && weapon._slot !== 'pistol') {
        weapon.swapToPistol();
      }
      lighting.update(GameState.pos);
      post.update(dt, GameState.time);
      hud.update();
      audio.update(r.camera); // spatial audio listener

      // Grenade physics + explosions (after weapon, before particles)
      updateGrenades(dt, world, particles, fx, audio,
        GameState.enemies || [],
        world.explosiveBarrels || [],
        r.scene);

      // Minimap (every frame call, internally throttled to ~8 frames)
      minimap.update(GameState.pos, GameState.enemies || [], player.yaw);

      // Footstep audio — play when player is moving on ground
      if (player.grounded && player.moveSpeed > 2.0 && !pauseMenu.paused) {
        const stepInterval = 0.45 / Math.max(player.moveSpeed / CFG.movement.walkSpeed, 0.5);
        player._stepTimer = (player._stepTimer || 0) + dt;
        if (player._stepTimer >= stepInterval) {
          player._stepTimer -= stepInterval;
          audio.step();
        }
      } else {
        player._stepTimer = 0;
      }
      // Post-processed world render
      post.render();
      // Viewmodel on top (sharp, no post-processing)
      if (r.renderViewModel) {
        r.renderer.autoClear = false;
        r.renderer.clearDepth();
        r.renderer.render(r.vmScene, r.vmCamera);
        r.renderer.autoClear = true;
      }
    }

    // FPS meter — was in Renderer.render(), now self-contained in the loop
    const frameMs = performance.now() - t0;
    _frameAcc += frameMs;
    _frameN++;
    if (_frameN === 60) {
      r.avg = _frameAcc / _frameN;
      _frameAcc = 0;
      _frameN = 0;
    }
    if (r.avg) fpsEl.textContent = `${(1000 / r.avg).toFixed(0)} fps`;
    } catch (err) {
      // Write to a ring buffer so we can surface it without console-spam.
      if (!window.__MW_ERRORS) window.__MW_ERRORS = [];
      const msg = (err && err.message) ? err.message : String(err);
      const last = window.__MW_ERRORS[window.__MW_ERRORS.length - 1];
      if (!last || last.msg !== msg || performance.now() - last.t > 2000) {
        window.__MW_ERRORS.push({ msg, stack: (err && err.stack || '').slice(0, 400), t: performance.now() });
        if (window.__MW_ERRORS.length > 10) window.__MW_ERRORS.shift();
        console.warn('[game loop] recovered from error:', msg);
      }
    }
    // Always reschedule — keep the loop alive regardless
    _scheduleLoop();
  };

    // player audio — bus listeners because PlayerController has no audio reference
  bus.on('player:hurt', ({ hp }) => { if (hp > 0) audio.hurt(); });
  bus.on('player:dead', () => audio.death());
  bus.on('player:jump', () => audio.jump());
  bus.on('player:land', () => audio.land());
  bus.on('enemy:wave', (wave) => audio.waveStart());
  bus.on('mission:complete', () => audio.missionComplete());
  bus.on('weapon:reload', () => { /* audio already fired in reload() */ });

  window.addEventListener('resize', () => post.resize());
  loop();
};

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
