/** Shared mutable game state. Modules read this every frame; no eventing needed for hot paths. */
export const GameState = {
  started: false,
  demo: false,
  time: 0,

  // player
  alive: true,
  health: 100,
  maxHealth: 100,
  respawnAt: 0,
  pos: null,          // set by PlayerController (THREE.Vector3)

  // weapon
  ammo: 30,
  magSize: 30,
  reserve: 150,
  reloading: false,
  weaponName: 'HK416',

  // stats
  kills: 0,
  score: 0,
  wave: 0,
  waveState: 'idle',  // 'idle' | 'intermission' | 'active'
  waveTimer: 0,
  missionComplete: false,

  // enemies list (populated by EnemyManager)
  enemies: [],

  // per-frame viewmodel factors (written by PlayerController, read by WeaponSystem)
  view: { ads: 0, sprint: 0, crouch: 0, moving: false, vel: 0 },

  // ui
  paused: false,

  // demo camera target position (set by DemoCamera when demo mode)
  demoCamPos: null,
};
