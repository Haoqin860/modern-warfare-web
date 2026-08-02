/**
 * SoldierRig — procedural low-poly enemy soldier (~1k tris per rig).
 * Exports `createSoldier(seed)` → THREE.Group with named .parts.
 *
 * Silhouette target (Call of Duty style):
 *  - distinct helmet on humvee-shaped torso
 *  - gun barrel visible from any angle
 *  - desert-camo materials with per-seed colour jitter
 */

import * as THREE from 'three';

/** Seeded pseudo-random in [0,1); mulberry32 family. */
function seedRng(s) {
  let t = s | 0;
  return function next() {
    t |= 0; t = t + 0x6d2b79f5 | 0;
    let n = Math.imul(t ^ t >>> 15, 1 | t);
    n = n + Math.imul(n ^ n >>> 7, 61 | n) ^ n;
    return ((n ^ n >>> 14) >>> 0) / 4294967296;
  };
}

/** Tiny box helper — BoxGeometry with a given material or a fresh one from colour. */
function box(w, h, d, matOrColor) {
  const geo = new THREE.BoxGeometry(w, h, d);
  const mat = matOrColor?.isMaterial ? matOrColor : new THREE.MeshStandardMaterial({ color: matOrColor });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

export function createSoldier(seed = 1) {
  const rng = seedRng(seed);

  // ----- materials -----
  const jit = (base, amount) => {
    const h = new THREE.Color(base);
    // tiny hsl shift so silhouettes stay cohesive
    h.offsetHSL(rng() * amount - amount / 2, rng() * 0.08, rng() * 0.06 - 0.03);
    return h.getHex();
  };

  const khaki = jit('#8a7a5e', 0.06);
  const vest = jit('#5d513c', 0.04);
  const helmet = jit('#3c382e', 0.04);
  const face = jit('#4a3f34', 0.04);
  const darkMetal = new THREE.MeshStandardMaterial({
    color: 0x4a4a4a,
    metalness: 0.6,
    roughness: 0.4,
  });

  const matTorso = new THREE.MeshStandardMaterial({ color: khaki });
  const matLeg = new THREE.MeshStandardMaterial({ color: khaki });
  const matArm = new THREE.MeshStandardMaterial({ color: khaki });
  const matVest = new THREE.MeshStandardMaterial({ color: vest });
  const matHelmet = new THREE.MeshStandardMaterial({ color: helmet });
  const matFace = new THREE.MeshStandardMaterial({ color: face });

  // ----- group -----
  const group = new THREE.Group();

  // ----- legs (pivot at hip, ~0.2x0.7m each) -----
  const lLeg = box(0.2, 0.72, 0.2, matLeg);
  lLeg.position.set(-0.14, 0.42, 0);
  lLeg.userData.baseY = 0.42;
  group.add(lLeg);

  const rLeg = box(0.2, 0.72, 0.2, matLeg);
  rLeg.position.set(0.14, 0.42, 0);
  rLeg.userData.baseY = 0.42;
  group.add(rLeg);

  // ----- torso (0.44 x 0.62 x 0.26, centred at ~1.25m) -----
  const torso = box(0.44, 0.62, 0.26, matTorso);
  torso.position.set(0, 1.25, 0);
  group.add(torso);

  // ----- vest overlay (slightly wider, thinner depth) -----
  const vestMesh = box(0.48, 0.50, 0.30, matVest);
  vestMesh.position.set(0, 1.20, -0.01);
  group.add(vestMesh);

  // ----- head -----
  const head = box(0.18, 0.20, 0.19, matFace);
  head.position.set(0, 1.72, 0);
  group.add(head);

  // ----- helmet (larger cap on top) -----
  const helmetMesh = box(0.24, 0.14, 0.25, matHelmet);
  helmetMesh.position.set(0, 1.86, 0);
  group.add(helmetMesh);

  // ----- arms -----
  const lArm = box(0.14, 0.62, 0.14, matArm);
  lArm.position.set(-0.30, 1.40, 0);
  lArm.userData.baseY = 1.40;
  group.add(lArm);

  const rArm = box(0.14, 0.62, 0.14, matArm);
  rArm.position.set(0.30, 1.40, 0);
  rArm.userData.baseY = 1.40;
  group.add(rArm);

  // ----- gun (barrel along +Z so aiming is simple) -----
  const gun = new THREE.Group();
  // receiver
  const receiver = box(0.045, 0.07, 0.32, darkMetal);
  receiver.position.set(0, 0, 0.08);
  gun.add(receiver);
  // barrel
  const barrel = box(0.025, 0.025, 0.24, darkMetal);
  barrel.position.set(0, 0.01, 0.30);
  gun.add(barrel);
  // grip (vertical stub)
  const grip = box(0.03, 0.08, 0.04, darkMetal);
  grip.position.set(0, -0.05, -0.02);
  gun.add(grip);

  // Place gun at right-hand area, held forward
  gun.position.set(0.36, 1.18, 0.16);
  group.add(gun);

  // ----- attach named parts -----
  group.parts = { torso, head, lArm, rArm, lLeg, rLeg, gun, helmet: helmetMesh };

  return group;
}
