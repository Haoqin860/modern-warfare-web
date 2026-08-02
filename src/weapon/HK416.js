/**
 * HK416 — procedural viewmodel rifle, built to read as a real firearm at
 * close range: receiver, handguard with rail, barrel, gas block, front sight,
 * rear sight, mag, pistol grip, skeleton stock, and accessories. The muzzle
 * anchor drives muzzle flash + light.
 *
 * Model convention: rifle lies along -Z, muzzle at far -Z, ~0.62m long.
 * Right-handed: ejection port on +X (right side), mag curves toward -Z.
 */
import * as THREE from 'three';

function mat(color, { metal = 0.7, rough = 0.4 } = {}) {
  return new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough });
}

function add(group, geo, m, pos, rot = null, scale = null) {
  const mesh = new THREE.Mesh(geo, m);
  if (pos) mesh.position.set(pos[0], pos[1], pos[2]);
  if (rot) mesh.rotation.set(rot[0], rot[1], rot[2]);
  if (scale) mesh.scale.set(scale[0], scale[1], scale[2]);
  group.add(mesh);
  return mesh;
}

const B = (w, h, d) => new THREE.BoxGeometry(w, h, d);
const C = (rt, rb, h, seg) => new THREE.CylinderGeometry(rt, rb, h, seg || 10);

export function buildHK416() {
  const g = new THREE.Group();

  // materials
  const receiverMat   = mat(0x24272c, { metal: 0.85, rough: 0.30 }); // anodized black
  const steelMat      = mat(0x8d939c, { metal: 0.95, rough: 0.28 }); // stainless barrel
  const polymerMat    = mat(0x15171b, { metal: 0.25, rough: 0.55 }); // handguard / furniture
  const railMat       = mat(0x101216, { metal: 0.9,  rough: 0.22 }); // picatinny rail
  const accentMat     = mat(0x4a514a, { metal: 0.6,  rough: 0.4  }); // bolt / charging handle

  // ---- receiver (upper + lower) ----
  const upper = add(g, B(0.062, 0.07, 0.24), receiverMat, [0, 0, 0.02]);
  add(g, B(0.058, 0.018, 0.10), receiverMat, [0, -0.044, 0.04]);      // lower receiver front
  add(g, B(0.05, 0.045, 0.06), receiverMat, [0, -0.03, 0.11]);        // lower receiver rear

  // ---- top picatinny rail ----
  add(g, B(0.036, 0.012, 0.24), railMat, [0, 0.041, 0.02]);
  // small rail teeth
  for (let i = 0; i < 6; i++) {
    add(g, B(0.038, 0.012, 0.008), railMat, [0, 0.049, 0.02 - 0.10 + i * 0.04]);
  }

  // ---- charging handle (rear right) ----
  add(g, B(0.02, 0.018, 0.05), accentMat, [0.035, 0.028, 0.14]);

  // ---- ejection port + deflector (right side) ----
  add(g, B(0.028, 0.018, 0.055), accentMat, [0.033, 0.005, 0.02]);
  add(g, B(0.008, 0.03, 0.05), accentMat, [0.04, -0.005, 0.02]);

  // ---- bolt catch / mag release ----
  add(g, B(0.01, 0.014, 0.03), accentMat, [-0.03, -0.02, 0.09]);

  // ---- handguard (front quad rail) ----
  add(g, C(0.024, 0.024, 0.20, 4), polymerMat, [0, 0, -0.16], [0, 0, Math.PI / 4]);
  // side rails
  add(g, B(0.028, 0.014, 0.20), railMat, [0, 0.028, -0.16]);
  add(g, B(0.014, 0.028, 0.20), railMat, [0.028, 0, -0.16]);
  add(g, B(0.028, 0.014, 0.20), railMat, [0, -0.028, -0.16]);
  // rail slots
  for (let i = 0; i < 5; i++) {
    add(g, B(0.030, 0.008, 0.006), mat(0x08090a), [0, 0.033, -0.11 + i * 0.04]);
  }

  // ---- gas block + front sight ----
  add(g, C(0.018, 0.018, 0.035, 8), steelMat, [0, 0, -0.30], [Math.PI / 2, 0, 0]);
  const frontPost = add(g, B(0.006, 0.03, 0.012), mat(0x050506), [0, 0.032, -0.30]);

  // ---- barrel ----
  add(g, C(0.0105, 0.0105, 0.26, 12), steelMat, [0, 0.001, -0.43], [Math.PI / 2, 0, 0]);
  // barrel flutes (visual breaks)
  for (let i = 0; i < 3; i++) add(g, C(0.012, 0.012, 0.008, 8), mat(0x30353c), [0, 0.001, -0.34 - i * 0.06], [Math.PI / 2, 0, 0]);

  // ---- muzzle brake ----
  add(g, C(0.014, 0.016, 0.035, 6), steelMat, [0, 0.001, -0.575], [Math.PI / 2, 0, 0]);
  add(g, B(0.02, 0.004, 0.004), mat(0x20242a), [0, 0.006, -0.575]); // brake ports

  // ---- muzzle anchor (world position for FX) ----
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0.001, -0.60);
  g.add(muzzle);
  g.muzzle = muzzle;

  // ---- rear sight (flip-up) ----
  add(g, B(0.01, 0.03, 0.02), mat(0x050506), [0, 0.03, 0.12]);
  const rearPeep = add(g, B(0.02, 0.006, 0.004), mat(0x111318), [0, 0.05, 0.12]);

  // ---- pistol grip (angled) ----
  add(g, B(0.035, 0.095, 0.05), polymerMat, [0, -0.07, 0.10], [0.24, 0, 0]);
  // grip stippling ridges
  for (let i = 0; i < 4; i++) add(g, B(0.037, 0.006, 0.052), mat(0x0a0b0d), [0, -0.075 + i * 0.018, 0.10], [0.24, 0, 0]);

  // ---- magazine (curved STANAG) ----
  const magBase = add(g, B(0.035, 0.13, 0.055), polymerMat, [0, -0.115, 0.055], [0.32, 0, 0]);
  add(g, B(0.037, 0.025, 0.057), mat(0x101216), [0, -0.175, 0.09], [0.32, 0, 0]); // floor plate
  // mag ribs
  for (let i = 0; i < 3; i++) add(g, B(0.04, 0.006, 0.06), mat(0x0c0d10), [0, -0.11 + i * 0.035, 0.055], [0.32, 0, 0]);

  // ---- skeleton stock (buffer tube + rear) ----
  add(g, C(0.012, 0.012, 0.16, 8), receiverMat, [0, 0.005, 0.20], [Math.PI / 2, 0, 0]);
  add(g, B(0.022, 0.012, 0.055), accentMat, [0, 0.005, 0.27]); // castle nut / plate
  // stock body (collapsed)
  add(g, B(0.045, 0.05, 0.10), polymerMat, [0, -0.015, 0.26]);
  add(g, B(0.048, 0.056, 0.012), mat(0x101216), [0, -0.015, 0.315]); // butt pad
  // stock cutouts (voids via darker insets)
  add(g, B(0.032, 0.026, 0.008), mat(0x0a0b0d), [0, -0.005, 0.275]);

  // ---- sling swivel + details ----
  add(g, B(0.008, 0.014, 0.006), steelMat, [0.03, -0.012, -0.05]);
  add(g, B(0.008, 0.014, 0.006), steelMat, [-0.03, -0.012, 0.24]);

  // subtle baked-in look: a couple of scratches as thin dark boxes
  add(g, B(0.002, 0.006, 0.05), mat(0x0d0e10), [0.028, 0.006, 0.05]);
  add(g, B(0.05, 0.002, 0.004), mat(0x1a1c20), [-0.01, -0.02, -0.05]);

  return g;
}
