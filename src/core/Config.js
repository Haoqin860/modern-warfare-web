/**
 * Global configuration — the single tuning surface for the entire game.
 * Every module imports CFG. Quality, feel, weapon, movement, world and the
 * blind-test color presets live here.
 */
const params = new URLSearchParams(location.search);

export const CFG = {
  // ---------- runtime ----------
  quality: params.get('quality') || 'high', // 'high' | 'medium' | 'low'
  preset: params.get('preset') || 'A',      // blind-test color grade A/B
  demo: params.has('demo'),                 // scripted cinematic camera tour
  started: false,

  // ---------- camera ----------
  fov: 80,
  adsFov: 56,
  sprintFovBoost: 7,
  adsTime: 0.12,
  sensitivity: 0.0022,
  pitchLimit: Math.PI / 2 - 0.05,

  // ---------- movement (units: meters, seconds) ----------
  movement: {
    walkSpeed: 4.2,
    sprintSpeed: 6.9,
    crouchSpeed: 2.4,
    jumpVel: 7.0,
    gravity: -23,
    crouchHeight: 1.05,
    eyeHeight: 1.62,
    standHeight: 1.8,
    radius: 0.34,
    accel: 70,
    airAccel: 18,
    friction: 16,
    bobAmp: 0.055,
    bobFreq: 10,
    headBendSprint: 0.055,
  },

  // ---------- weapon ----------
  weapon: {
    name: 'HK416',
    rpm: 790,
    dmg: 30,
    headMult: 2.0,
    magSize: 30,
    reserve: 150,
    reloadTime: 1.85,
    spreadBase: 0.004,     // radians
    spreadMove: 0.018,
    spreadADS: 0.0012,
    recoilKick: 0.011,     // camera pitch kick per shot
    recoilSide: 0.0035,
    viewKick: { pos: 0.06, rot: 0.02 },
    swayAmp: 0.0022,
    swayLerp: 6,
    shellFreq: 0.9,
  },

  // ---------- secondary weapon (pistol) ----------
  pistol: {
    name: 'M9',
    rpm: 400,
    dmg: 22,
    headMult: 1.8,
    magSize: 15,
    reserve: 45,
    reloadTime: 1.3,
    spreadBase: 0.008,
    spreadMove: 0.022,
    spreadADS: 0.0025,
    recoilKick: 0.014,
    recoilSide: 0.005,
    viewKick: { pos: 0.04, rot: 0.015 },
    swayAmp: 0.0018,
    swayLerp: 5,
    shellFreq: 0.5,
  },

  // ---------- grenade ----------
  grenade: {
    maxCount: 3,
    fuseTime: 3.0,
    throwForce: 14,
    throwUp: 8,
    damageRadius: 8,
    maxDamage: 180,
    minDamage: 40,
  },

  // ---------- world ----------
  world: {
    mapSize: 130,          // half-extent of the playable area
    groundY: 0,
    fogDensity: 0.0022,
  },

  // ---------- enemies ----------
  enemy: {
    health: 100,
    headMult: 2.2,
    speed: 2.6,
    fireRange: 55,
    fireInterval: [0.9, 2.2],
    burst: [3, 6],
    dmgPerShot: 7,
    accuracy: 0.92,
    waves: 5,
  },

  // ---------- audio ----------
  audio: { master: 0.8, music: 0.0 },
};

/** Blind-test color grade presets. PostFX reads these to differentiate A/B. */
export const PRESETS = {
  A: {
    label: 'A',
    grade: {
      saturation: 1.08, contrast: 1.04, gamma: 1.0,
      lift: [0.012, 0.006, 0.0],      // warm shadows
      gain: [1.02, 0.99, 0.94],       // warm highlights
      tealShadow: 0.05,
    },
    bloom: { strength: 0.95, radius: 0.75, threshold: 0.62 },
    vignette: 0.38,
    grain: 0.03,
    ca: 0.0014,
  },
  B: {
    label: 'B',
    grade: {
      saturation: 0.96, contrast: 1.08, gamma: 1.02,
      lift: [0.004, 0.006, 0.012],
      gain: [0.98, 1.0, 1.03],
      tealShadow: 0.12,
    },
    bloom: { strength: 0.68, radius: 0.62, threshold: 0.7 },
    vignette: 0.42,
    grain: 0.05,
    ca: 0.0022,
  },
};

export const P = PRESETS[CFG.preset] || PRESETS.A;
