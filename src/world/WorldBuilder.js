/**
 * WorldBuilder.js -- 3A-grade FPS environment: war-torn Middle-Eastern city
 * street at golden hour. Ruined buildings, smoke, debris, military props.
 */
import * as THREE from 'three';
import { TextureAtlas } from '../core/TextureAtlas.js';
import { CollisionWorld } from './Collision.js';
import {
  createBuildingShell,
  createDestroyedBuilding,
  createRubblePile,
  createCarBody,
  createSandbagRow,
  createCrate,
  createConcreteBarrier,
  createOilBarrel,
  createTire,
  createWatchtower,
  createChainFence,
  createRebarGroup,
  createPipe,
  createPallet,
  createTrashBag,
  createACUnit,
} from './Structure.js';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
const MAP_HALF = 130;
const GROUND_Y = 0;

function hashS(x, y) {
  return Math.abs(Math.sin(x * 127.1 + y * 311.7) * 43758.5453) % 1;
}

function rndRange(seed, min, max) {
  return min + hashS(seed, 0) * (max - min);
}

// ---------------------------------------------------------------------------
// WorldBuilder
// ---------------------------------------------------------------------------

export class WorldBuilder {
  constructor(r, lighting) {
    this.r = r;
    this.lighting = lighting;
    this.scene = r.scene;
    this.fireLights = [];
    this._smokePlanes = [];
    this._flickerData = [];

    // Exposed for WeaponSystem raycasting against world geometry
    /** @type {THREE.Mesh[]} */
    this.raycastables = [];

    // Explosive barrels exposed for grenade chain reactions
    /** @type {THREE.Mesh[]} */
    this.explosiveBarrels = [];

    // -- texture atlas --
    const conc = TextureAtlas.concrete(42, { repeat: 14, rough: 0.90 });
    const concDark = TextureAtlas.concrete(77, { repeat: 8, rough: 0.92, base: [0.30, 0.30, 0.33] });
    const concBurned = TextureAtlas.concrete(99, { repeat: 6, rough: 0.95, base: [0.22, 0.21, 0.23] });

    // -- material presets --
    this.matWall = {
      map: conc.map, normalMap: conc.normalMap,
      roughnessMap: conc.roughnessMap, aoMap: conc.aoMap,
      roughness: 0.88, metalness: 0.04, color: '#8f9096',
    };
    this.matWallDark = {
      map: concDark.map, normalMap: concDark.normalMap,
      roughnessMap: concDark.roughnessMap, aoMap: concDark.aoMap,
      roughness: 0.92, metalness: 0.04, color: '#5a5b5f',
    };
    this.matBurned = {
      map: concBurned.map, normalMap: concBurned.normalMap,
      roughnessMap: concBurned.roughnessMap, aoMap: concBurned.aoMap,
      roughness: 0.95, metalness: 0.03, color: '#2a2b2d',
    };
    this.matWindow = {
      color: '#1a1d24', roughness: 0.35, metalness: 0.1,
      emissive: '#0a0c10', emissiveIntensity: 0.15,
    };
    this.matCarBody = { color: '#1d1f22', roughness: 0.65, metalness: 0.25 };
    this.matCarBurned = { color: '#18191b', roughness: 0.9, metalness: 0.15 };
    this.matRust = { color: '#3a2a1a', roughness: 0.85, metalness: 0.3 };
    this.matSandbag = { color: '#b8a080', roughness: 0.92, metalness: 0.02 };
    this.matCrate = { color: '#9b8460', roughness: 0.82, metalness: 0.03 };
    this.matBarrier = {
      map: conc.map, normalMap: conc.normalMap,
      roughnessMap: conc.roughnessMap, roughness: 0.85, metalness: 0.04,
      color: '#b0b2b8',
    };
    this.matMetal = { color: '#5a5550', roughness: 0.55, metalness: 0.7 };
    this.matBarrel = { color: '#2a2a25', roughness: 0.5, metalness: 0.6 };

    // -- build --
    this._buildGround();
    this._buildRoads();
    this._buildBuildings();
    this._buildCars();
    this._buildProps();
    this._buildSmoke();
    this._buildFireZones();
    this._buildDecorations();
    this._buildAtmosphericZones();
  }

  // -----------------------------------------------------------------------
  // Ground
  // -----------------------------------------------------------------------
  _buildGround() {
    const size = MAP_HALF * 2 + 20;
    const geom = new THREE.PlaneGeometry(size, size);
    geom.setAttribute('uv2', geom.attributes.uv.clone());

    const mat = new THREE.MeshStandardMaterial({
      map: this.matWall.map,
      normalMap: this.matWall.normalMap,
      roughnessMap: this.matWall.roughnessMap,
      aoMap: this.matWall.aoMap,
      roughness: 0.9,
      metalness: 0.02,
      color: '#8f9096',
    });
    const ground = new THREE.Mesh(geom, mat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = GROUND_Y;
    ground.receiveShadow = true;
    this.scene.add(ground);
    // NOTE: ground is NOT added to raycastables so that bullet tracers can
    // travel past the ground plane to hit distant enemies. Buildings and
    // vertical surfaces are registered separately via _buildBuildings.

    // Grime overlay decal
    const grimeOverlay = TextureAtlas.makeDecalOverlay();
    const decalMat = new THREE.MeshBasicMaterial({
      map: grimeOverlay,
      transparent: true,
      opacity: 0.06,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(size, size), decalMat);
    decal.rotation.x = -Math.PI / 2;
    decal.position.y = GROUND_Y + 0.01;
    this.scene.add(decal);
  }

  // -----------------------------------------------------------------------
  // Roads
  // -----------------------------------------------------------------------
  _buildRoads() {
    const asphalt = TextureAtlas.concrete(55, {
      repeat: 12, rough: 0.94, base: [0.18, 0.18, 0.20],
    });
    const roadW = 8;

    this._addRoadStrip(0, MAP_HALF, roadW, 0, asphalt);
    this._addRoadStrip(0, MAP_HALF, roadW, Math.PI / 2, asphalt);
    this._addRoadStrip(-40, MAP_HALF, 5.5, 0, asphalt);
    this._addRoadStrip(35, MAP_HALF, 5.5, Math.PI / 2, asphalt);
    this._addRoadStrip(55, MAP_HALF, 4.5, Math.PI / 2, asphalt);
  }

  _addRoadStrip(offset, length, width, rotation, tex) {
    const geom = new THREE.PlaneGeometry(width, length * 2);
    geom.setAttribute('uv2', geom.attributes.uv.clone());

    const mat = new THREE.MeshStandardMaterial({
      map: tex.map,
      normalMap: tex.normalMap,
      roughnessMap: tex.roughnessMap,
      aoMap: tex.aoMap,
      roughness: 0.94,
      metalness: 0.03,
      color: '#1a1c1f',
    });
    const road = new THREE.Mesh(geom, mat);
    road.rotation.x = -Math.PI / 2;
    road.rotation.z = rotation;
    if (Math.abs(rotation) < 0.01) {
      road.position.set(offset, GROUND_Y + 0.02, 0);
    } else {
      road.position.set(0, GROUND_Y + 0.02, offset);
    }
    road.receiveShadow = true;
    this.scene.add(road);

    if (width < 6) return;

    // Lane paint
    const paintMat = new THREE.MeshBasicMaterial({
      color: '#cccc44', transparent: true, opacity: 0.35, depthWrite: false,
    });
    for (let side = -1; side <= 1; side += 2) {
      const lineGeom = new THREE.PlaneGeometry(0.12, length * 2);
      const line = new THREE.Mesh(lineGeom, paintMat);
      line.rotation.x = -Math.PI / 2;
      line.rotation.z = rotation;
      line.position.y = GROUND_Y + 0.025;
      if (Math.abs(rotation) < 0.01) {
        line.position.set(offset + side * 2, line.position.y, 0);
      } else {
        line.position.set(0, line.position.y, offset + side * 2);
      }
      this.scene.add(line);

      // Dashed center
      if (side === -1) {
        const nDash = Math.floor((length * 2) / 4.5);
        for (let i = 0; i < nDash; i++) {
          if (i % 2 === 0) continue;
          const dg = new THREE.PlaneGeometry(0.12, 3.5);
          const dash = new THREE.Mesh(dg, paintMat);
          dash.rotation.x = -Math.PI / 2;
          dash.rotation.z = rotation;
          dash.position.y = GROUND_Y + 0.025;
          const d = -length + i * 4.5 + 1.75;
          if (Math.abs(rotation) < 0.01) {
            dash.position.set(offset, dash.position.y, d);
          } else {
            dash.position.set(d, dash.position.y, offset);
          }
          this.scene.add(dash);
        }
      }
    }
  }

  // -----------------------------------------------------------------------
  // Buildings (7: main intersection + edges, 3 destroyed, 2 open interior)
  // -----------------------------------------------------------------------
  _buildBuildings() {
    const defs = [
      { x: -20, z: -22, w: 10, d: 12, h: 12, floors: 3, destroyed: false, open: true,  seed: 1 },
      { x:  18, z: -18, w:  9, d: 10, h: 10, floors: 3, destroyed: true,  open: false, seed: 2 },
      { x: -18, z:  20, w: 11, d: 13, h: 14, floors: 4, destroyed: false, open: false, seed: 3 },
      { x:  22, z:  20, w:  9, d:  9, h:  9, floors: 2, destroyed: true,  open: true,  seed: 4 },
      { x: -55, z: -48, w: 13, d: 14, h: 13, floors: 4, destroyed: false, open: false, seed: 5 },
      { x:  50, z: -45, w: 10, d: 11, h: 12, floors: 3, destroyed: true,  open: false, seed: 6 },
      { x: -48, z:  52, w: 12, d: 10, h: 11, floors: 3, destroyed: false, open: false, seed: 7 },
    ];

    for (const b of defs) {
      const group = new THREE.Group();

      if (b.destroyed) {
        const shell = createDestroyedBuilding(
          b.w, b.d, b.h, b.floors,
          this.matWall, this.matBurned, this.matWindow, b.seed,
          { brokenWindowChance: 0.7 },
        );
        group.add(shell);

        const rubble = createRubblePile(0, 0, b.w + 2, b.d + 2, 30, b.seed + 100, this.matBurned);
        group.add(rubble);

        const rebar = createRebarGroup(6, 1.8, b.seed + 200);
        rebar.position.y = b.h * 0.7;
        group.add(rebar);

        // Glow in broken windows
        const glowGeom = new THREE.PlaneGeometry(1.0, 1.4);
        const glowMat = new THREE.MeshBasicMaterial({
          color: '#ff5a1a', transparent: true, opacity: 0.35,
          side: THREE.DoubleSide, depthWrite: false,
        });
        for (let i = 0; i < 3; i++) {
          const glow = new THREE.Mesh(glowGeom, glowMat);
          glow.position.set(
            (hashS(b.seed + i, 0) - 0.5) * b.w * 0.6,
            b.h * 0.25 + hashS(b.seed + i, 1) * b.h * 0.4,
            b.d / 2 + 0.05,
          );
          group.add(glow);
        }
      } else {
        const shellMat = b.open ? this.matWallDark : this.matWall;
        const shell = createBuildingShell(b.w, b.d, b.h, b.floors, shellMat, this.matWindow, b.seed);
        group.add(shell);

        if (b.open) {
          const floorDebris = createRubblePile(0, 0, b.w * 0.7, b.d * 0.5, 15, b.seed + 300, {
            color: '#6a6a6e', roughness: 0.85, metalness: 0.05,
          });
          group.add(floorDebris);
        }
      }

      group.position.set(b.x, GROUND_Y, b.z);
      this.scene.add(group);

      // Register building meshes for weapon raycasting
      group.traverse(child => { if (child.isMesh) this.raycastables.push(child); });

      // Collision AABB
      CollisionWorld.aabbs.push({
        min: new THREE.Vector3(b.x - b.w / 2, GROUND_Y, b.z - b.d / 2),
        max: new THREE.Vector3(b.x + b.w / 2, b.h, b.z + b.d / 2),
      });
    }
  }

  // -----------------------------------------------------------------------
  // Cars (8 burned-out vehicles)
  // -----------------------------------------------------------------------
  _buildCars() {
    const defs = [
      { x: -10, z: -15, rot: 0.3,  len: 4.2, seed: 10,  onSide: false },
      { x:   8, z: -10, rot: -0.5, len: 4.5, seed: 11,  onSide: false },
      { x: -14, z:  12, rot: 1.8,  len: 4.0, seed: 12,  onSide: true  },
      { x:  12, z:  14, rot: -2.1, len: 4.3, seed: 13,  onSide: false },
      { x:  30, z: -30, rot: 0.8,  len: 4.1, seed: 14,  onSide: false },
      { x: -30, z:  30, rot: -1.2, len: 4.4, seed: 15,  onSide: true  },
      { x:  45, z:   8, rot: 2.5,  len: 3.9, seed: 16,  onSide: false },
      { x: -42, z: -10, rot: -0.7, len: 4.2, seed: 17,  onSide: false },
    ];

    for (const c of defs) {
      const isBurned = hashS(c.seed, 50) > 0.3;
      const bodyMat = isBurned ? this.matCarBurned : this.matCarBody;
      const rustMat = isBurned
        ? { color: '#1a1815', roughness: 0.9, metalness: 0.2 }
        : this.matRust;

      const car = createCarBody(c.len, c.seed, bodyMat, rustMat);
      car.position.set(c.x, GROUND_Y, c.z);
      car.rotation.y = c.rot;
      if (c.onSide) {
        car.rotation.z = Math.PI / 2;
        car.position.y = 0.45;
      }
      this.scene.add(car);

      const halfW = 1.0;
      const halfL = c.len / 2;
      const carH = c.onSide ? c.len / 2 : 1.2;

      // Compute oriented AABB by rotating the 4 corners
      const cosR = Math.cos(c.rot);
      const sinR = Math.sin(c.rot);
      const corners = [
        [-halfL, -halfW], [ halfL, -halfW], [-halfL,  halfW], [ halfL,  halfW],
      ].map(([lx, lz]) => ({
        x: c.x + lx * cosR - lz * sinR,
        z: c.z + lx * sinR + lz * cosR,
      }));
      const minX = Math.min(...corners.map(o => o.x));
      const maxX = Math.max(...corners.map(o => o.x));
      const minZ = Math.min(...corners.map(o => o.z));
      const maxZ = Math.max(...corners.map(o => o.z));

      CollisionWorld.aabbs.push({
        min: new THREE.Vector3(minX, GROUND_Y, minZ),
        max: new THREE.Vector3(maxX, GROUND_Y + carH, maxZ),
      });
    }
  }

  // -----------------------------------------------------------------------
  // Military props
  // -----------------------------------------------------------------------
  _buildProps() {
    // -- sandbag walls --
    const sbPos = [
      { x: -5,  z: -5,  rot: 0.3,  count: 4, seed: 20 },
      { x:  5,  z: -3,  rot: -0.4, count: 5, seed: 21 },
      { x: -10, z:  8,  rot: 1.5,  count: 3, seed: 22 },
      { x:  15, z: -15, rot: 0.7,  count: 5, seed: 23 },
      { x: -25, z: -20, rot: -0.9, count: 4, seed: 24 },
      { x:  20, z:  25, rot: 2.1,  count: 4, seed: 25 },
      { x: -35, z:  40, rot: 1.1,  count: 3, seed: 26 },
      { x:  40, z:  35, rot: -2.0, count: 5, seed: 27 },
    ];
    for (const sb of sbPos) {
      const row = createSandbagRow(sb.count, sb.seed, this.matSandbag);
      row.position.set(sb.x, GROUND_Y, sb.z);
      row.rotation.y = sb.rot;
      this.scene.add(row);

      CollisionWorld.aabbs.push({
        min: new THREE.Vector3(sb.x - sb.count * 0.25, GROUND_Y, sb.z - 0.3),
        max: new THREE.Vector3(sb.x + sb.count * 0.25, GROUND_Y + 0.55, sb.z + 0.3),
      });
    }

    // -- supply crates (8 clusters, 2-4 crates each) --
    const crateClusters = [
      { x: -3, z: -8, seed: 30 }, { x: 8,  z: 5,  seed: 31 },
      { x: -22, z: -12, seed: 32 }, { x: 28, z: -20, seed: 33 },
      { x: -40, z: -30, seed: 34 }, { x: 32, z: 32,  seed: 35 },
      { x: -15, z:  35, seed: 36 }, { x: 48, z: 18,  seed: 37 },
    ];
    for (const cc of crateClusters) {
      const n = 2 + Math.floor(hashS(cc.seed, 99) * 3);
      for (let i = 0; i < n; i++) {
        const w = 0.6 + hashS(cc.seed + i, 0) * 0.3;
        const h = 0.5 + hashS(cc.seed + i, 1) * 0.3;
        const d = 0.7 + hashS(cc.seed + i, 2) * 0.3;
        const stackY = i > 0 ? 0.5 : 0;

        const crate = createCrate(w, h, d, this.matCrate);
        crate.position.set(
          cc.x + hashS(cc.seed + i * 3, 3) * 1.0 - 0.5,
          GROUND_Y + h / 2 + stackY,
          cc.z + hashS(cc.seed + i * 3, 4) * 1.0 - 0.5);
        crate.rotation.y = hashS(cc.seed + i, 5) * Math.PI * 0.25;
        this.scene.add(crate);

        CollisionWorld.aabbs.push({
          min: new THREE.Vector3(crate.position.x - w / 2, GROUND_Y, crate.position.z - d / 2),
          max: new THREE.Vector3(crate.position.x + w / 2, GROUND_Y + h + stackY, crate.position.z + d / 2),
          walkable: true,
        });
      }
    }

    // -- concrete barriers --
    for (let i = 0; i < 2; i++) {
      const bx = -8 + i * 20;
      const bz = -12 + i * 20;
      const rot = 0.2 + i * 1.5;
      const barrier = createConcreteBarrier(3.5, this.matBarrier);
      barrier.position.set(bx, GROUND_Y, bz);
      barrier.rotation.y = rot;
      this.scene.add(barrier);

      CollisionWorld.aabbs.push({
        min: new THREE.Vector3(bx - 1.8, GROUND_Y, bz - 0.35),
        max: new THREE.Vector3(bx + 1.8, GROUND_Y + 0.85, bz + 0.35),
        walkable: true,
      });
    }

    // -- watchtower --
    const tower = createWatchtower(6, this.matMetal);
    tower.position.set(25, GROUND_Y, -35);
    tower.rotation.y = 0.4;
    this.scene.add(tower);

    CollisionWorld.aabbs.push({
      min: new THREE.Vector3(23.8, GROUND_Y, -36.2),
      max: new THREE.Vector3(26.2, 6, -33.8),
      walkable: true,
    });

    // -- oil barrels (8 scattered) --
    for (let i = 0; i < 8; i++) {
      const barrel = createOilBarrel(60 + i, this.matBarrel);
      barrel.position.set(
        -40 + i * 4 + hashS(60 + i, 0) * 3,
        GROUND_Y,
        -25 + hashS(60 + i, 1) * 6);
      barrel.rotation.y = hashS(60 + i, 2) * Math.PI * 2;
      this.scene.add(barrel);
    }
  }

  // -----------------------------------------------------------------------
  // Smoke columns (4 distant dark smoke plumes)
  // -----------------------------------------------------------------------
  _buildSmoke() {
    const smokeTex = TextureAtlas.smokeTexture();
    const smokeDefs = [
      { x: -15, z: -18, scale: 12 },
      { x:  20, z: -18, scale: 10 },
      { x: -50, z:  40, scale: 14 },
      { x:  45, z: -40, scale: 11 },
    ];

    for (const sd of smokeDefs) {
      const g = new THREE.Group();
      for (let i = 0; i < 3; i++) {
        const s = sd.scale * (0.8 + i * 0.15);
        const plane = new THREE.PlaneGeometry(s, s);
        const mat = new THREE.MeshBasicMaterial({
          map: smokeTex,
          color: '#1a1c20',
          transparent: true,
          opacity: 0.28 - i * 0.07,
          side: THREE.DoubleSide,
          depthWrite: false,
          blending: THREE.NormalBlending,
        });
        const mp = new THREE.Mesh(plane, mat);
        mp.position.y = 15 + i * 8;
        mp.rotation.y = i * 0.7;
        mp.userData = {
          baseY: mp.position.y,
          speed: 0.1 + i * 0.04,
          phase: i * 1.2,
        };
        g.add(mp);
        this._smokePlanes.push(mp);
      }
      g.position.set(sd.x, GROUND_Y, sd.z);
      this.scene.add(g);
    }
  }

  // -----------------------------------------------------------------------
  // Fire zones (3 burning interiors with flickering lights)
  // -----------------------------------------------------------------------
  _buildFireZones() {
    const defs = [
      { x: 18, z: -18, y: 1.5, color: '#ff7a2a', intensity: 2.5, range: 14 },
      { x: 22, z:  20, y: 1.5, color: '#ff6a1a', intensity: 2.0, range: 12 },
      { x: 50, z: -45, y: 1.5, color: '#ff5a10', intensity: 1.8, range: 11 },
    ];

    for (const fd of defs) {
      const light = this.lighting.addZone(
        fd.color, fd.intensity, fd.range,
        new THREE.Vector3(fd.x, fd.y, fd.z));
      light.userData.fireData = {
        baseIntensity: fd.intensity,
        phase: fd.color.charCodeAt(1) * 0.1,
      };
      this.fireLights.push(light);
      this._flickerData.push(light);

      // Emissive glow plane at fire location
      const glowGeom = new THREE.PlaneGeometry(1.5, 2.0);
      const glowMat = new THREE.MeshBasicMaterial({
        map: TextureAtlas.glowTexture(),
        color: fd.color,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const glow = new THREE.Mesh(glowGeom, glowMat);
      glow.position.set(fd.x, fd.y + 0.2, fd.z);
      glow.lookAt(new THREE.Vector3(fd.x - 1, fd.y + 0.2, fd.z));
      this.scene.add(glow);
      glow.userData.fireGlow = true;
      this._flickerData.push(glow);
    }
  }

  // -----------------------------------------------------------------------
  // Decorations: tires, trash bags, pallets, pipes, AC units, fences, debris
  // -----------------------------------------------------------------------
  _buildDecorations() {
    // Tires (12)
    for (let i = 0; i < 12; i++) {
      const tire = createTire(70 + i);
      tire.position.set(
        rndRange(80 + i, -45, 45), GROUND_Y + 0.15,
        rndRange(80 + i + 50, -45, 45));
      tire.rotation.set(
        rndRange(80 + i + 20, -0.4, 0.4),
        rndRange(80 + i + 30, 0, Math.PI * 2),
        rndRange(80 + i + 40, -0.3, 0.3));
      this.scene.add(tire);
    }

    // Trash bags (10)
    for (let i = 0; i < 10; i++) {
      const bag = createTrashBag(90 + i);
      bag.position.set(
        rndRange(90 + i, -50, 50), GROUND_Y,
        rndRange(90 + i + 50, -50, 50));
      this.scene.add(bag);
    }

    // Pallets (6)
    for (let i = 0; i < 6; i++) {
      const pallet = createPallet();
      pallet.position.set(
        rndRange(100 + i, -48, 48), GROUND_Y + 0.05,
        rndRange(100 + i + 50, -48, 48));
      pallet.rotation.y = rndRange(100 + i + 20, 0, Math.PI * 2);
      this.scene.add(pallet);
    }

    // Pipes (8)
    for (let i = 0; i < 8; i++) {
      const pipe = createPipe(
        1.5 + hashS(110 + i, 0) * 3, 0.08,
        { color: '#6b4e3a', roughness: 0.55, metalness: 0.7 });
      pipe.position.set(
        rndRange(110 + i, -50, 50), GROUND_Y + 0.04,
        rndRange(110 + i + 50, -50, 50));
      pipe.rotation.set(0, rndRange(110 + i + 10, 0, Math.PI * 2), rndRange(110 + i + 20, -0.3, 0.3));
      this.scene.add(pipe);
    }

    // AC units (4 standalone)
    for (let i = 0; i < 4; i++) {
      const ac = createACUnit(120 + i);
      ac.position.set(
        rndRange(120 + i, -50, 50), GROUND_Y + 0.6,
        rndRange(120 + i + 50, -50, 50));
      ac.rotation.y = rndRange(120 + i + 10, 0, Math.PI * 2);
      this.scene.add(ac);
    }

    // Chain-link fences (4 sections with holes)
    const fenceDefs = [
      { x: -48, z:   0, rot:  Math.PI / 2, len: 20, seed: 130, holeChance: 0.3  },
      { x:  48, z: -10, rot: -Math.PI / 2, len: 18, seed: 131, holeChance: 0.35 },
      { x: -10, z:  48, rot:  0,           len: 22, seed: 132, holeChance: 0.25 },
      { x:  15, z: -48, rot: -0.4,         len: 16, seed: 133, holeChance: 0.4  },
    ];
    for (const fd of fenceDefs) {
      const fence = createChainFence(fd.len, 2.5, fd.holeChance, fd.seed);
      fence.position.set(fd.x, GROUND_Y, fd.z);
      fence.rotation.y = fd.rot;
      this.scene.add(fence);
    }

    // Scattered small debris (25 pieces)
    const debrisColors = ['#5a5a5e', '#6a6050', '#4a4a4e', '#3a352a'];
    for (let i = 0; i < 25; i++) {
      const w = 0.1 + hashS(140 + i, 0) * 0.4;
      const h = 0.05 + hashS(140 + i, 1) * 0.2;
      const d = 0.1 + hashS(140 + i, 2) * 0.4;
      const debGeom = new THREE.BoxGeometry(w, h, d);
      const debMat = new THREE.MeshStandardMaterial({
        color: debrisColors[i % debrisColors.length],
        roughness: 0.88, metalness: 0.05,
      });
      const debris = new THREE.Mesh(debGeom, debMat);
      debris.position.set(
        rndRange(140 + i, -55, 55), GROUND_Y + h / 2,
        rndRange(140 + i + 50, -55, 55));
      debris.rotation.set(
        rndRange(140 + i + 10, -0.5, 0.5),
        rndRange(140 + i + 20, 0, Math.PI * 2),
        rndRange(140 + i + 30, -0.5, 0.5));
      debris.castShadow = true;
      debris.receiveShadow = true;
      this.scene.add(debris);
    }

    // Explosive barrels (scattered near buildings and intersections)
    const expBarrelDefs = [
      { x: -15, z: -16, seed: 200 },
      { x:  16, z: -15, seed: 201 },
      { x: -14, z:  18, seed: 202 },
      { x:  20, z:  22, seed: 203 },
      { x: -50, z: -42, seed: 204 },
      { x:  46, z: -40, seed: 205 },
      { x: -44, z:  48, seed: 206 },
      { x:  55, z:  50, seed: 207 },
    ];
    for (const bd of expBarrelDefs) {
      // Per-barrel geometry so chain-reaction disposal does not free the
      // geometry out from under surviving barrels.
      const barrelGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.8, 12);
      const barrel = new THREE.Mesh(barrelGeo, new THREE.MeshStandardMaterial({
        color: '#cc3311',
        roughness: 0.5,
        metalness: 0.7,
        emissive: '#220000',
        emissiveIntensity: 0.3,
      }));
      barrel.position.set(bd.x, GROUND_Y + 0.4, bd.z);
      barrel.castShadow = true;
      barrel.receiveShadow = true;
      barrel.userData = { isExplosiveBarrel: true, exploded: false };

      // Yellow hazard band
      const bandGeo = new THREE.CylinderGeometry(0.29, 0.29, 0.06, 12);
      const bandMesh = new THREE.Mesh(bandGeo, new THREE.MeshStandardMaterial({
        color: '#ffcc00',
        roughness: 0.4,
        metalness: 0.3,
        emissive: '#331100',
        emissiveIntensity: 0.2,
      }));
      bandMesh.position.y = 0.08;
      barrel.add(bandMesh);

      this.scene.add(barrel);
      this.explosiveBarrels.push(barrel);

      // Collision for the barrel
      CollisionWorld.aabbs.push({
        min: new THREE.Vector3(bd.x - 0.3, GROUND_Y, bd.z - 0.3),
        max: new THREE.Vector3(bd.x + 0.3, GROUND_Y + 0.8, bd.z + 0.3),
      });
    }
  }

  // -----------------------------------------------------------------------
  // Atmospheric lighting zones — warm golden-hour ground-bounce pools
  // that complement the directional sun, fog, and fire zones.
  // -----------------------------------------------------------------------
  _buildAtmosphericZones() {
    // Central crossroads: warm amber street-level glow at the main intersection.
    // Low height simulates light bouncing off dusty ground at golden hour.
    this.lighting.addZone('#ffb870', 0.9, 22,
      new THREE.Vector3(0, 0.4, 0));

    // Open building (-20, -22): warm spill from sunlit interior.
    this.lighting.addZone('#ffc080', 0.7, 14,
      new THREE.Vector3(-20, 1.8, -22));

    // North-east intersection (near cars and sandbags): ambient pool.
    this.lighting.addZone('#ffb066', 0.6, 18,
      new THREE.Vector3(8, 0.35, 10));

    // South-east intersection: warm fill near the destroyed building.
    this.lighting.addZone('#ffaa55', 0.55, 16,
      new THREE.Vector3(15, 0.35, -12));

    // Watchtower area: tactical warm light near the military post.
    this.lighting.addZone('#ff9944', 0.5, 12,
      new THREE.Vector3(25, 0.4, -35));

    // South-west road stretch: ambient warmth along the side road.
    this.lighting.addZone('#ffb870', 0.45, 20,
      new THREE.Vector3(-35, 0.35, -25));

    // North-west corner: warm pool near the intact tall building.
    this.lighting.addZone('#ffc080', 0.5, 16,
      new THREE.Vector3(-48, 0.35, 40));

    // Far south-east edge: warmth near the destroyed building and rebar.
    this.lighting.addZone('#ffaa55', 0.4, 18,
      new THREE.Vector3(48, 0.4, -35));

    // North road stretch: subtle warmth along the road to avoid cold shadows.
    this.lighting.addZone('#ffb880', 0.35, 24,
      new THREE.Vector3(0, 0.35, 35));
  }

  // -----------------------------------------------------------------------
  // Update
  // -----------------------------------------------------------------------
  update(dt, time, cameraPos) {
    // Flicker fire lights
    for (const obj of this._flickerData) {
      if (obj.isPointLight && obj.userData.fireData) {
        const fd = obj.userData.fireData;
        const flicker = 1
          + Math.sin(time * 8 + fd.phase) * 0.12
          + Math.sin(time * 14 + fd.phase * 1.7) * 0.08
          + Math.sin(time * 21) * 0.05;
        obj.intensity = fd.baseIntensity * Math.max(0.6, flicker);
      }
      if (obj.userData && obj.userData.fireGlow) {
        obj.material.opacity = 0.35
          + Math.sin(time * 9 + obj.position.x * 0.3) * 0.15
          + Math.sin(time * 13) * 0.08;
      }
    }

    // Animate smoke drift
    for (const sm of this._smokePlanes) {
      const ud = sm.userData;
      if (!ud) continue;
      sm.position.y = ud.baseY + Math.sin(time * ud.speed + ud.phase) * 1.5;
      sm.position.x += Math.sin(time * 0.3 + ud.phase) * 0.015;
    }
  }

  // -----------------------------------------------------------------------
  // Ground height query (delegates to CollisionWorld)
  // -----------------------------------------------------------------------
  groundAt(x, z) {
    return CollisionWorld.groundAt(x, z);
  }

  // -----------------------------------------------------------------------
  // Collision check for a point with given radius (used by EnemyManager spawn
  // validation). Delegates to CollisionWorld with a small bounding cube.
  // -----------------------------------------------------------------------
  collides(point, radius = 0.5) {
    const he = new THREE.Vector3(radius, 0.9, radius);
    return CollisionWorld.collides(point, he);
  }
}
