/**
 * M9 — procedural viewmodel pistol.
 * Compact: receiver, slide, barrel, trigger guard, grip, mag.
 * Muzzle anchor drives muzzle flash + light.
 *
 * Convention: pistol points along -Z, muzzle at far -Z, ~0.22m long.
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

export function buildM9() {
  const g = new THREE.Group();

  const slideMat    = mat(0x2a2d32, { metal: 0.9,  rough: 0.25 }); // black anodized slide
  const frameMat    = mat(0x1e2024, { metal: 0.7,  rough: 0.35 }); // polymer lower frame
  const barrelMat   = mat(0x888d94, { metal: 0.95, rough: 0.22 }); // stainless barrel
  const gripMat     = mat(0x111215, { metal: 0.15, rough: 0.60 }); // textured grip
  const accentMat   = mat(0x3a3d40, { metal: 0.6,  rough: 0.4  }); // small parts
  const sightMat    = mat(0x0a0b0d, { metal: 0.8,  rough: 0.3  }); // sights

  // ---- frame (lower receiver) ----
  add(g, B(0.030, 0.050, 0.15), frameMat, [0, -0.025, 0.00]);

  // ---- trigger guard ----
  add(g, B(0.018, 0.008, 0.028), frameMat, [0.005, -0.058, 0.045]);

  // ---- grip (angled) ----
  add(g, B(0.028, 0.080, 0.036), gripMat, [0, -0.093, 0.030], [0.32, 0, 0]);
  // grip texturing
  for (let i = 0; i < 3; i++) {
    add(g, B(0.030, 0.005, 0.038), mat(0x0a0b0d), [0, -0.095 + i * 0.017, 0.030], [0.32, 0, 0]);
  }

  // ---- magazine ----
  add(g, B(0.022, 0.065, 0.030), frameMat, [0, -0.095, 0.015], [0.15, 0, 0]);
  add(g, B(0.024, 0.020, 0.032), accentMat, [0, -0.125, 0.030], [0.15, 0, 0]);

  // ---- slide (upper) ----
  add(g, B(0.030, 0.026, 0.16), slideMat, [0, 0.015, -0.005]);
  // slide serrations (rear)
  for (let i = 0; i < 4; i++) {
    add(g, B(0.032, 0.010, 0.003), mat(0x1a1c20), [0, 0.023, 0.055 + i * 0.008]);
  }

  // ---- ejection port ----
  add(g, B(0.020, 0.010, 0.025), accentMat, [0.016, 0.012, 0.00]);

  // ---- barrel (protrudes from slide front) ----
  add(g, C(0.007, 0.008, 0.12, 10), barrelMat, [0, 0.016, -0.14], [Math.PI / 2, 0, 0]);
  // barrel bushing
  add(g, C(0.009, 0.009, 0.015, 8), accentMat, [0, 0.016, -0.10], [Math.PI / 2, 0, 0]);

  // ---- muzzle anchor ----
  const muzzle = new THREE.Object3D();
  muzzle.position.set(0, 0.016, -0.21);
  g.add(muzzle);
  g.muzzle = muzzle;

  // ---- front sight ----
  add(g, B(0.004, 0.018, 0.008), sightMat, [0, 0.040, -0.08]);

  // ---- rear sight (notch) ----
  add(g, B(0.006, 0.015, 0.010), sightMat, [0, 0.038, 0.06]);
  add(g, B(0.012, 0.006, 0.004), sightMat, [0, 0.043, 0.06]);

  // ---- hammer ----
  add(g, B(0.005, 0.010, 0.012), accentMat, [0, 0.036, 0.08]);

  // ---- slide catch / mag release ----
  add(g, B(0.004, 0.006, 0.018), accentMat, [-0.017, -0.010, 0.04]);

  // ---- small wear details ----
  add(g, B(0.002, 0.004, 0.03), mat(0x141618), [0.014, 0.020, 0.02]);
  add(g, B(0.03, 0.002, 0.002), mat(0x1c1e22), [0.0, 0.022, -0.04]);

  return g;
}
