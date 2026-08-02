# MODERN WARFARE // Web Edition

A 3A-ambition first-person shooter built with **Three.js**. Golden-hour war-torn city street, procedural PBR world, full FPS loop (movement / weapons / enemies / waves), filmic post-processing — and an automated **blind visual-QA pipeline** that iterates the art until it holds up against Call of Duty-class framing.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

Cinematic screenshot mode (no UI, scripted camera — used by QA):

```bash
npm run dev
# open http://localhost:5173/?demo&preset=A
```

Controls: `WASD` move · `Mouse` aim · `LMB` fire · `RMB` ADS · `R` reload · `G` grenade · `1/2` weapon swap · `Shift` sprint · `Ctrl/C` crouch · `Space` jump · `Esc` pause.

## Architecture

| Module | Path | Responsibility |
| --- | --- | --- |
| Renderer | `src/core/Renderer.js` | WebGL2, PCF shadows, dual-scene (world + viewmodel) |
| Lighting | `src/core/Lighting.js` | Golden-hour sun, hemisphere fill, PMREM env, sun-follow |
| PostFX | `src/core/PostFX.js` | Bloom → **ACES filmic grade** (in-shader) → split-tone → grain → CA → FXAA, **blind-test presets A/B** |
| Sky | `src/world/Sky.js` | Procedural golden-hour sky dome + HDR sun sprite (bloom source) |
| Textures | `src/core/TextureAtlas.js` | 100% procedural PBR textures (albedo/normal/rough/AO/height) |
| World | `src/world/` | War-torn city: ruined buildings, fires, smoke columns, cars, sandbags, collision |
| Player | `src/player/` | Capsule movement, sprint/crouch/jump, bob, camera recoil, collision resolve, respawn |
| Weapon | `src/weapon/` | Procedural HK416 + M9 viewmodels, auto-fire, ADS, reload, casing, tracers, grenades |
| Enemies | `src/enemies/` | Soldier rigs, wave AI, hit reactions, ragdoll-ish deaths |
| FX / Particles | `src/fx/` | Muzzle flash, tracers, impacts, explosions, ambient dust/ash/embers |
| HUD | `src/ui/` | DOM overlay: crosshair, ammo, health, waves, kill feed, minimap, pause menu |
| Audio | `src/audio/AudioFX.js` | Procedural WebAudio: gunshots, reloads, explosions, hits |

## Blind visual QA

```bash
node art/shot.mjs A 8     # capture 8 demo spline frames (warm preset)
node art/shot.mjs B 8     # capture the same frames (cool preset)
# open blind.html in any static server to A/B judge them blind
```

`shot.mjs` boots the app in demo mode on a Vite server, walks the scripted camera along the cinematic spline, and writes `art/shots/<preset>-<t>.png`.

## Tuning

Everything fun is tunable in `src/core/Config.js`: movement feel, weapon RPM/damage/spread/recoil, enemy waves, fog density, and both color-grade presets. The PostFX grade reads `?preset=A|B`.
