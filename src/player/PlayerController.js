/**
 * PlayerController — 3A-grade FPS player movement, camera, and state.
 *
 * Handles mouse look, WASD movement with acceleration/friction, jumping,
 * crouching, sprinting, ADS, head bob, camera recoil, and world collision.
 * Writes shared state into GameState every frame for HUD/weapon/audio consumers.
 */
import * as THREE from 'three';
import { CFG } from '../core/Config.js';
import { GameState } from '../core/GameState.js';
import { bus } from '../core/Events.js';
import { CollisionWorld } from '../world/Collision.js';

// Reusable temp vectors (avoid per-frame allocations)
const _forward = new THREE.Vector3();
const _right = new THREE.Vector3();

export class PlayerController {
  /**
   * @param {import('../core/Renderer.js').GameRenderer} r
   * @param {import('../input/Input.js').Input} input
   * @param {import('../world/WorldBuilder.js').WorldBuilder} world
   */
  constructor(r, input, world) {
    this.r = r;
    this.input = input;
    this.world = world;

    // ---------- camera orientation ----------
    this.yaw = 0;
    this.pitch = 0;

    // ---------- position & velocity ----------
    this.pos = new THREE.Vector3(0, 0, 0);
    this.vel = new THREE.Vector3(0, 0, 0);

    // ---------- state ----------
    this.grounded = false;
    this.crouchTarget = 0;       // 0=stand, 1=crouch
    this.crouchSmooth = 0;       // smoothed 0..1
    this.adsTarget = 0;          // 0=hipfire, 1=ADS
    this.adsSmooth = 0;          // smoothed 0..1
    this.sprintVal = 0;          // smoothed sprint 0..1
    this.moveSpeed = 0;          // current horizontal speed (m/s)

    // ---------- head bob ----------
    this.bobPhase = 0;

    // ---------- recoil ----------
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.recoilSideAccum = 0;

    // ---------- landing settle ----------
    this.landDip = 0;
    this.landDipVel = 0;

    // ---------- health ----------
    this.hp = 100;
    this.maxHp = 100;
    this.isAlive = true;

    // ---------- per-frame view data ----------
    this._view = { ads: 0, sprint: 0, crouch: 0, moving: false, vel: 0 };
    this._bobVert = 0;
    this._bobHoriz = 0;
    this._currentFov = CFG.fov;
  }

  // ==========================================================================
  //  UPDATE
  // ==========================================================================

  /** Called once per frame. `dt` is the frame delta in seconds. */
  update(dt) {
    if (!this.isAlive) return;
    // safety clamp — long pauses should not explode physics
    if (dt > 0.15) dt = 0.15;

    const m = CFG.movement;

    // ---- mouse look ----
    this._updateLook();

    // ---- crouch / ADS ramp ----
    this._updateStateTargets(dt);

    // ---- effective eye height ----
    const standEye = m.eyeHeight;
    const crouchEye = m.crouchHeight;
    const eyeH = THREE.MathUtils.lerp(standEye, crouchEye, this.crouchSmooth);
    const groundY = this.world.groundAt(this.pos.x, this.pos.z);

    // ---- ground check ----
    this.grounded = this.pos.y <= groundY + 0.001 && this.vel.y <= 0;

    // ---- movement (XZ) ----
    this._updateMovement(dt);

    // ---- jump / gravity (Y) ----
    this._updateVertical(dt, groundY);

    // ---- collision (after XZ+Y integration, before camera) ----
    this._resolveCollision(eyeH);

    // ---- head bob ----
    this._updateBob(dt, m);

    // ---- recoil recovery ----
    this._updateRecoil(dt);

    // ---- landing settle ----
    this._updateLandDip(dt);

    // ---- apply to camera (position + rotation, no collision) ----
    this.applyCamera(eyeH);

    // ---- FOV ----
    this._updateFOV(dt);

    // ---- write GameState ----
    this._writeGameState(eyeH);
  }

  // ==========================================================================
  //  PRIVATE — look
  // ==========================================================================

  _updateLook() {
    const look = this.input.consumeLook();
    if (look.x === 0 && look.y === 0) return;

    this.yaw -= look.x * CFG.sensitivity;
    this.pitch -= look.y * CFG.sensitivity;
    // Clamp pitch so player cannot flip over top
    this.pitch = THREE.MathUtils.clamp(
      this.pitch, -CFG.pitchLimit, CFG.pitchLimit,
    );
  }

  // ==========================================================================
  //  PRIVATE — state targets (crouch, ADS, sprint)
  // ==========================================================================

  _updateStateTargets(dt) {
    this.crouchTarget = this.input.crouch ? 1 : 0;
    const crouchLerp = 1 - Math.exp(-14 * dt);
    this.crouchSmooth = THREE.MathUtils.lerp(this.crouchSmooth, this.crouchTarget, crouchLerp);

    this.adsTarget = this.input.aim ? 1 : 0;
    const adsLerp = 1 - Math.exp(-dt / Math.max(CFG.adsTime, 0.001));
    this.adsSmooth = THREE.MathUtils.lerp(this.adsSmooth, this.adsTarget, adsLerp);

    // sprint smooth — ramp up fast, decay fast
    const sprintTarget = (this.input.sprint && this._isMovingForward()) ? 1 : 0;
    const sprintLerp = 1 - Math.exp(-13 * dt);
    this.sprintVal = THREE.MathUtils.lerp(this.sprintVal, sprintTarget, sprintLerp);
  }

  /** True when the player is pushing W and not strafing backward. */
  _isMovingForward() {
    const mv = this.input.moveVec;
    if (mv.z <= 0.01) return false;
    // Also check that we are not moving mostly sideways
    return Math.abs(mv.x) < mv.z;
  }

  // ==========================================================================
  //  PRIVATE — horizontal movement
  // ==========================================================================

  _updateMovement(dt) {
    const m = CFG.movement;
    const mv = this.input.moveVec;

    // Desired velocity in world space (XZ) — reuse static vectors
    const forward = _forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    // Speed depends on stance
    let speed;
    if (this.crouchSmooth > 0.5) {
      speed = m.crouchSpeed;
    } else if (this.sprintVal > 0.5 && mv.z > 0.1) {
      speed = THREE.MathUtils.lerp(m.walkSpeed, m.sprintSpeed, this.sprintVal);
    } else {
      speed = m.walkSpeed;
    }

    const desX = (forward.x * mv.z + right.x * mv.x) * speed;
    const desZ = (forward.z * mv.z + right.z * mv.x) * speed;

    // Choose acceleration
    const accel = this.grounded ? m.accel : m.airAccel;

    // Accelerate toward desired velocity (framerate-independent exponential decay)
    const t = 1 - Math.exp(-accel * dt);
    if (mv.x !== 0 || mv.z !== 0) {
      this.vel.x = THREE.MathUtils.lerp(this.vel.x, desX, t);
      this.vel.z = THREE.MathUtils.lerp(this.vel.z, desZ, t);
    }

    // Friction on ground when no input
    if (this.grounded && mv.x === 0 && mv.z === 0) {
      const f = 1 - Math.exp(-m.friction * dt);
      this.vel.x = THREE.MathUtils.lerp(this.vel.x, 0, f);
      this.vel.z = THREE.MathUtils.lerp(this.vel.z, 0, f);
      if (Math.abs(this.vel.x) < 0.01) this.vel.x = 0;
      if (Math.abs(this.vel.z) < 0.01) this.vel.z = 0;
    }

    // Integrate XZ
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;

    // Record horizontal speed
    this.moveSpeed = Math.sqrt(this.vel.x * this.vel.x + this.vel.z * this.vel.z);
  }

  // ==========================================================================
  //  PRIVATE — vertical (gravity / jump / ground snap)
  // ==========================================================================

  _updateVertical(dt, groundY) {
    const m = CFG.movement;

    // Gravity
    this.vel.y += m.gravity * dt;

    // Jump
    if (this.grounded && this.input.jump) {
      this.vel.y = m.jumpVel;
      this.grounded = false;
      bus.emit('player:jump');
    }

    // Integrate Y
    this.pos.y += this.vel.y * dt;

    // Ground snap
    if (this.pos.y <= groundY && this.vel.y < 0) {
      const impactSpeed = Math.abs(this.vel.y);
      this.pos.y = groundY;
      if (!this.grounded && impactSpeed > 1.0) {
        bus.emit('player:land', { impact: impactSpeed });
        // Trigger landing dip
        this.landDip = Math.min(impactSpeed * 0.018, 0.08);
        this.landDipVel = 0;
      }
      this.vel.y = 0;
      this.grounded = true;
    }

    // World boundary floor — prevent falling through
    if (this.pos.y < groundY - 0.2) {
      this.pos.y = groundY;
      this.vel.y = 0;
      this.grounded = true;
    }
  }

  // ==========================================================================
  //  PRIVATE — collision resolution
  // ==========================================================================

  /**
   * Resolve capsule collision against the world after XZ integration.
   * Called by _updateCollision when CollisionWorld is available.
   */
  _resolveCollision(eyeH) {
    // Bottom of the collision capsule near feet, top at eye level
    const yBottom = this.pos.y + 0.1;         // offset above feet
    const yTop = this.pos.y + eyeH;           // eye height

    const resolved = CollisionWorld.resolveCircle(
      this.pos.clone(),
      CFG.movement.radius,
      yBottom,
      yTop,
    );
    this.pos.x = resolved.x;
    this.pos.z = resolved.z;
  }

  // ==========================================================================
  //  PRIVATE — head bob
  // ==========================================================================

  _updateBob(dt, m) {
    if (!this.grounded || this.moveSpeed < 0.15) {
      // Decay phase when not moving
      this.bobPhase += dt * 1.5;
      return;
    }

    // Bob frequency scales slightly with speed
    const bobRate = m.bobFreq * Math.min(this.moveSpeed / m.walkSpeed, 1.5);
    this.bobPhase += this.moveSpeed * dt * bobRate;

    // ADS reduces bob amplitude
    const ampScale = 1 - this.adsSmooth * 0.75;
    // Sprint modifies bob feel — faster, slightly reduced vertical
    const sprintScale = 1 - this.sprintVal * 0.3;

    this._bobVert = Math.sin(this.bobPhase) * m.bobAmp * ampScale * sprintScale;
    this._bobHoriz = Math.cos(this.bobPhase * 0.5) * m.bobAmp * 0.5 * ampScale * sprintScale;
  }

  // ==========================================================================
  //  PRIVATE — recoil
  // ==========================================================================

  _updateRecoil(dt) {
    const recovery = 8;
    this.recoilPitch += (0 - this.recoilPitch) * dt * recovery;
    this.recoilYaw += (0 - this.recoilYaw) * dt * recovery;
  }

  /** Apply a recoil kick (called by weapon system). */
  recoil(kick) {
    if (typeof kick !== 'number') return;
    this.recoilPitch -= kick;                       // upward kick
    this.recoilSideAccum += (Math.random() - 0.5) * CFG.weapon.recoilSide * 2;
    this.recoilYaw += this.recoilSideAccum;
    // Clamp side accumulation to prevent wild drift
    this.recoilSideAccum *= 0.5;
  }

  // ==========================================================================
  //  PRIVATE — landing dip (weapon settle)
  // ==========================================================================

  _updateLandDip(dt) {
    if (this.landDip > 0.001) {
      // Spring-dampened recovery
      this.landDipVel += (-this.landDip * 30) * dt;    // spring
      this.landDipVel *= Math.max(0, 1 - dt * 12);      // damping
      this.landDip += this.landDipVel * dt;
      if (this.landDip < 0.001) this.landDip = 0;
    }
  }

  // ==========================================================================
  //  PRIVATE — FOV
  // ==========================================================================

  _updateFOV(dt) {
    const baseFov = CFG.fov;

    // Sprint FOV boost
    const sprintFov = baseFov + CFG.sprintFovBoost * this.sprintVal;

    // ADS narrows FOV
    const targetFov = THREE.MathUtils.lerp(sprintFov, CFG.adsFov, this.adsSmooth);

    // Smooth transition
    const fovLerp = 1 - Math.exp(-dt / Math.max(CFG.adsTime, 0.001));
    this._currentFov = THREE.MathUtils.lerp(this._currentFov, targetFov, fovLerp);

    this.r.camera.fov = this._currentFov;
    this.r.camera.updateProjectionMatrix();
  }

  // ==========================================================================
  //  PUBLIC — apply camera transform
  // ==========================================================================

  /**
   * Set r.camera position and rotation from the internal player state.
   * `eyeH` is precomputed by the caller.
   */
  applyCamera(eyeH) {
    const m = CFG.movement;

    // ---- position ----
    // Base: feet pos.y + eye offset
    let camY = this.pos.y + eyeH;

    // Head bob vertical
    camY += this._bobVert || 0;

    // Landing dip
    camY -= this.landDip;

    // Sprint head-bend (lowers camera slightly)
    if (this.sprintVal > 0.01) {
      camY -= m.headBendSprint * this.sprintVal;
    }

    // Horizontal bob — reuse pre-allocated vector
    const right = _right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const hBob = this._bobHoriz || 0;
    const camX = this.pos.x + right.x * hBob;
    const camZ = this.pos.z + right.z * hBob;

    this.r.camera.position.set(camX, camY, camZ);

    // ---- rotation ----
    const totalPitch = this.pitch + this.recoilPitch;
    const totalYaw = this.yaw + this.recoilYaw;
    this.r.camera.rotation.set(totalPitch, totalYaw, 0, 'YXZ');
  }

  // ==========================================================================
  //  PRIVATE — write GameState
  // ==========================================================================

  _writeGameState(eyeH) {
    GameState.pos = this.pos;
    GameState.health = this.hp;
    GameState.alive = this.isAlive;
    GameState.view.ads = this.adsSmooth;
    GameState.view.sprint = this.sprintVal;
    GameState.view.crouch = this.crouchSmooth;
    GameState.view.moving = this.moveSpeed > 0.2;
    GameState.view.vel = this.moveSpeed;
  }

  // ==========================================================================
  //  PUBLIC — health / damage
  // ==========================================================================

  /** Deal damage to the player. Emits hurt event; on death emits dead. */
  damage(n) {
    if (!this.isAlive || typeof n !== 'number' || n <= 0) return;
    this.hp = Math.max(0, this.hp - n);
    bus.emit('player:hurt', { hp: this.hp, damage: n });
    if (this.hp <= 0) {
      this.isAlive = false;
      bus.emit('player:dead');
    }
  }

  /** Restore the player to full health and bring them back if dead. */
  respawn() {
    this.hp = this.maxHp;
    this.isAlive = true;
    this.pos.set(0, this.world.groundAt(0, 0), 0);
    this.vel.set(0, 0, 0);
    this.recoilPitch = 0;
    this.recoilYaw = 0;
    this.landDip = 0;
    this.landDipVel = 0;
    GameState.health = this.hp;
    GameState.alive = true;
  }

  // ==========================================================================
  //  PUBLIC — convenience accessors
  // ==========================================================================

  /** Current ADS factor 0..1 (smoothed). Used by weapon viewmodel. */
  get ads() { return this.adsSmooth; }

  /** Current crouch factor 0..1 (smoothed). */
  get crouch() { return this.crouchSmooth; }

  /** Current sprint factor 0..1 (smoothed). */
  get sprint() { return this.sprintVal; }
}
