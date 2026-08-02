/**
 * Structure.js — low-poly military prop & building geometry factory.
 * Pure "make mesh" library consumed by WorldBuilder.
 */
import * as THREE from 'three';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Quick box. */
export function box(w, h, d, mat) {
  const g = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.MeshStandardMaterial(mat);
  return new THREE.Mesh(g, m);
}

/** Box with beveled edges via RoundedBoxGeometry (low-poly approximation). */
function beveledBox(w, h, d, bevel, mat, segs = 1) {
  // Simple approach: use a box and a slightly inset wire — good enough for props
  const g = new THREE.BoxGeometry(w, h, d, segs, segs, segs);
  // Slightly displace vertices near edges — skip for perf; just use box
  const m = new THREE.MeshStandardMaterial(mat);
  return new THREE.Mesh(g, m);
}

/** Random in range. */
const rnd = (s, min, max) => {
  const x = Math.sin(s * 12.9898 + 78.233) * 43758.5453;
  const t = x - Math.floor(x);
  return min + t * (max - min);
};

/** Quick cylinder. */
function cyl(rTop, rBot, h, segs, mat) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, segs);
  const m = new THREE.MeshStandardMaterial(mat);
  return new THREE.Mesh(g, m);
}

// ---------------------------------------------------------------------------
// Building facades
// ---------------------------------------------------------------------------

/**
 * Create a building shell from stacked box sections.
 * Returns a Group of wall panels.
 * @param {number} w - width (X)
 * @param {number} d - depth (Z)
 * @param {number} h - total height
 * @param {number} floors - number of visible floor divisions
 * @param {object} wallMat - material for walls
 * @param {object} windowMat - material for window panes (emissive dark)
 * @param {number} seed
 * @param {object} [opts]
 */
export function createBuildingShell(w, d, h, floors, wallMat, windowMat, seed, opts = {}) {
  const group = new THREE.Group();
  const floorH = h / Math.max(floors, 1);
  const wallThick = 0.25;
  const winW = 1.2;
  const winH = floorH * 0.58;
  const winYOff = floorH * 0.08;

  const walls = [
    { side: 'front',  cx: 0,     cz: -d/2, rw: w, rd: wallThick },
    { side: 'back',   cx: 0,     cz:  d/2, rw: w, rd: wallThick },
    { side: 'left',   cx: -w/2,  cz: 0,     rw: wallThick, rd: d },
    { side: 'right',  cx:  w/2,  cz: 0,     rw: wallThick, rd: d },
  ];

  for (const wall of walls) {
    const isX = wall.rd > wall.rw;
    for (let fl = 0; fl < floors; fl++) {
      const baseY = fl * floorH + floorH / 2;
      // Wall section
      const wg = new THREE.BoxGeometry(wall.rw, floorH, wall.rd);
      const wm = new THREE.MeshStandardMaterial(wallMat);
      const wMesh = new THREE.Mesh(wg, wm);
      wMesh.position.set(wall.cx, baseY, wall.cz);
      wMesh.castShadow = true;
      wMesh.receiveShadow = true;
      group.add(wMesh);

      // Window cutouts — add dark emissive planes
      if (fl < floors && !opts.noWindows) {
        const windowCount = isX ? Math.floor(d / 2.2) : Math.floor(w / 2.2);
        const spacing = isX ? d / (windowCount + 1) : w / (windowCount + 1);
        for (let wi = 1; wi <= windowCount; wi++) {
          // Skip some windows randomly for broken look
          const wr = Math.abs(Math.sin(seed * 13.7 + fl * 3.1 + wi * 7.3));
          if (opts.brokenWindowChance && wr < opts.brokenWindowChance) continue;
          const wp = new THREE.PlaneGeometry(winW, winH);
          const wpm = new THREE.MeshStandardMaterial({
            ...windowMat,
            side: THREE.DoubleSide,
          });
          const winPlane = new THREE.Mesh(wp, wpm);
          const offset = -spacing * (windowCount + 1) / 2 + wi * spacing;
          if (isX) {
            winPlane.position.set(wall.cx, baseY + winYOff, offset);
            winPlane.rotation.y = 0;
          } else {
            winPlane.position.set(offset, baseY + winYOff, wall.cz);
            winPlane.rotation.y = Math.PI / 2;
          }
          group.add(winPlane);
        }
      }
    }
  }

  // Roof slab
  const rGeom = new THREE.BoxGeometry(w + 0.4, 0.20, d + 0.4);
  const rMat = new THREE.MeshStandardMaterial({ ...wallMat, roughness: 0.95 });
  const roof = new THREE.Mesh(rGeom, rMat);
  roof.position.y = h + 0.10;
  roof.castShadow = true;
  roof.receiveShadow = true;
  group.add(roof);

  // Roof clutter — AC units, random boxes
  if (!opts.noRoofClutter) {
    for (let i = 0; i < 3; i++) {
      const acW = 0.6 + rnd(seed + i * 99, 0, 0.4);
      const acH = 0.5 + rnd(seed + i * 101, 0, 0.3);
      const acD = 0.6 + rnd(seed + i * 103, 0, 0.3);
      const ac = box(acW, acH, acD, { color: '#3a3d42', roughness: 0.65, metalness: 0.7 });
      ac.position.set(
        (rnd(seed + i, -0.4, 0.4)) * w,
        h + 0.10 + acH / 2,
        (rnd(seed + i + 50, -0.4, 0.4)) * d
      );
      ac.castShadow = true;
      group.add(ac);
    }
  }

  return group;
}

/**
 * Create a destroyed building variant — missing walls, burned facade, rubble.
 */
export function createDestroyedBuilding(w, d, h, floors, wallMat, burnedMat, windowMat, seed, opts = {}) {
  const group = new THREE.Group();
  const floorH = h / Math.max(floors, 1);
  const wallThick = 0.25;

  const walls = [
    { side: 'front', cx: 0, cz: -d/2, rw: w, rd: wallThick },
    { side: 'back',  cx: 0, cz:  d/2, rw: w, rd: wallThick },
    { side: 'left',  cx: -w/2, cz: 0, rw: wallThick, rd: d },
    { side: 'right', cx:  w/2, cz: 0, rw: wallThick, rd: d },
  ];

  // Decide which walls are destroyed
  const destroyedWalls = new Set();
  const nDestroyed = 1 + Math.floor(rnd(seed + 1, 0, 2.99));
  const allWalls = ['front', 'back', 'left', 'right'];
  for (let i = 0; i < nDestroyed; i++) {
    destroyedWalls.add(allWalls[Math.floor(rnd(seed + i * 7, 0, 3.99))]);
  }

  for (const wall of walls) {
    const isX = wall.rd > wall.rw;
    for (let fl = 0; fl < floors; fl++) {
      const baseY = fl * floorH + floorH / 2;
      // Randomly skip some wall sections for gaps
      const skip = destroyedWalls.has(wall.side) && rnd(seed + fl * 19 + wall.side.charCodeAt(0), 0, 1) > 0.25;

      if (!skip) {
        // Use burned material for some walls
        const useMat = destroyedWalls.has(wall.side) ? burnedMat : wallMat;
        const wg = new THREE.BoxGeometry(wall.rw, floorH * (0.6 + rnd(seed + fl, 0, 0.4)), wall.rd);
        const wMesh = new THREE.Mesh(wg, new THREE.MeshStandardMaterial(useMat));
        wMesh.position.set(wall.cx, baseY, wall.cz);
        wMesh.castShadow = true;
        wMesh.receiveShadow = true;
        group.add(wMesh);
      }
    }
  }

  // Partial roof
  const roofH = h + 0.10;
  const roofParts = 2 + Math.floor(rnd(seed + 2, 0, 2.99));
  for (let i = 0; i < roofParts; i++) {
    const rw = w * (0.3 + rnd(seed + i * 77, 0, 0.3));
    const rd = d * (0.3 + rnd(seed + i * 79, 0, 0.3));
    const rg = new THREE.BoxGeometry(rw, 0.15 + rnd(seed + i, 0, 0.1), rd);
    const rm = new THREE.Mesh(rg, new THREE.MeshStandardMaterial(burnedMat));
    rm.position.set(
      (rnd(seed + i * 81, -0.35, 0.35)) * w,
      roofH,
      (rnd(seed + i * 83, -0.35, 0.35)) * d
    );
    rm.castShadow = true;
    rm.receiveShadow = true;
    group.add(rm);
  }

  return group;
}

// ---------------------------------------------------------------------------
// Rubble
// ---------------------------------------------------------------------------

export function createRubblePile(cx, cz, w, d, count, seed, mat) {
  const group = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const bw = 0.2 + rnd(seed + i, 0, 0.7);
    const bh = 0.1 + rnd(seed + i + 33, 0, 0.4);
    const bd = 0.2 + rnd(seed + i + 66, 0, 0.6);
    const g = new THREE.BoxGeometry(bw, bh, bd);
    const m = new THREE.MeshStandardMaterial(mat);
    const piece = new THREE.Mesh(g, m);
    piece.position.set(
      cx + rnd(seed + i * 3, -w / 2, w / 2),
      bh / 2,
      cz + rnd(seed + i * 5, -d / 2, d / 2)
    );
    piece.rotation.set(
      rnd(seed + i * 7, -0.5, 0.5),
      rnd(seed + i * 9, 0, Math.PI * 2),
      rnd(seed + i * 11, -0.5, 0.5)
    );
    piece.castShadow = true;
    piece.receiveShadow = true;
    group.add(piece);
  }
  group.position.y = 0;
  return group;
}

// ---------------------------------------------------------------------------
// Cars
// ---------------------------------------------------------------------------

export function createCarBody(length, seed, bodyMat, rustMat) {
  const group = new THREE.Group();

  // Main body
  const bodyW = 1.8;
  const bodyH = 0.7;
  const bodyG = new THREE.BoxGeometry(length, bodyH, bodyW);
  const body = new THREE.Mesh(bodyG, new THREE.MeshStandardMaterial(bodyMat));
  body.position.y = 0.5;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Cabin (slanted box)
  const cabL = length * 0.45;
  const cabH = 0.65;
  const cabG = new THREE.BoxGeometry(cabL, cabH, bodyW - 0.15);
  const cab = new THREE.Mesh(cabG, new THREE.MeshStandardMaterial(rustMat));
  cab.position.set(-length * 0.08, bodyH + 0.35 + cabH / 2, 0);
  cab.rotation.x = -0.08;
  cab.castShadow = true;
  cab.receiveShadow = true;
  group.add(cab);

  // Wheels
  const wheelR = 0.32;
  const wheelW = 0.22;
  const wheelOffX = length * 0.34;
  const wheelOffZ = bodyW / 2 + 0.06;
  const wheelPos = [
    [ wheelOffX, wheelR,  wheelOffZ],
    [ wheelOffX, wheelR, -wheelOffZ],
    [-wheelOffX, wheelR,  wheelOffZ],
    [-wheelOffX, wheelR, -wheelOffZ],
  ];
  for (const [wx, wy, wz] of wheelPos) {
    const wg = new THREE.CylinderGeometry(wheelR, wheelR, wheelW, 12);
    const wm = new THREE.MeshStandardMaterial({ color: '#1a1a1a', roughness: 0.9, metalness: 0.1 });
    const wheel = new THREE.Mesh(wg, wm);
    wheel.position.set(wx, wy, wz);
    wheel.rotation.z = Math.PI / 2;
    wheel.castShadow = true;
    group.add(wheel);
  }

  return group;
}

// ---------------------------------------------------------------------------
// Sandbags
// ---------------------------------------------------------------------------

export function createSandbagRow(count, seed, mat) {
  const group = new THREE.Group();
  const bagW = 0.55;
  const bagH = 0.28;
  const bagD = 0.35;

  for (let row = 0; row < 2; row++) {
    const baseY = row * bagH;
    const zOff = row === 0 ? 0 : (rnd(seed + row, -0.08, 0.08));
    for (let i = 0; i < count; i++) {
      const g = new THREE.BoxGeometry(bagW, bagH, bagD);
      // Slightly squash for organic feel
      const positions = g.attributes.position;
      for (let v = 0; v < positions.count; v++) {
        const y = positions.getY(v);
        if (y > 0) positions.setY(v, y * 0.82);
      }
      g.computeVertexNormals();

      const m = new THREE.MeshStandardMaterial(mat);
      const bag = new THREE.Mesh(g, m);
      bag.position.set(i * bagW * 0.88, baseY + bagH / 2, zOff);
      bag.rotation.y = rnd(seed + i * 17 + row, -0.1, 0.1);
      bag.rotation.z = rnd(seed + i * 23 + row, -0.08, 0.08);
      bag.castShadow = true;
      bag.receiveShadow = true;
      group.add(bag);
    }
  }

  return group;
}

// ---------------------------------------------------------------------------
// Crates
// ---------------------------------------------------------------------------

export function createCrate(w, h, d, mat) {
  const g = new THREE.BoxGeometry(w, h, d);
  const m = new THREE.MeshStandardMaterial(mat);
  const mesh = new THREE.Mesh(g, m);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------------------
// Jersey barrier
// ---------------------------------------------------------------------------

export function createConcreteBarrier(length, mat) {
  const group = new THREE.Group();

  // Base wide box
  const baseH = 0.5;
  const baseW = 0.55;
  const base = box(length, baseH, baseW, mat);
  base.position.y = baseH / 2;
  base.castShadow = true;
  base.receiveShadow = true;
  group.add(base);

  // Upper narrowed box
  const topH = 0.35;
  const topW = 0.22;
  const top = box(length - 0.15, topH, topW, mat);
  top.position.y = baseH + topH / 2;
  top.castShadow = true;
  top.receiveShadow = true;
  group.add(top);

  return group;
}

// ---------------------------------------------------------------------------
// Oil barrel
// ---------------------------------------------------------------------------

export function createOilBarrel(seed, mat) {
  const r = 0.3;
  const h = 0.88;
  const g = new THREE.CylinderGeometry(r, r, h, 16);
  const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial(mat));
  mesh.position.y = h / 2;
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------------------
// Tire
// ---------------------------------------------------------------------------

export function createTire(seed) {
  const group = new THREE.Group();
  const outerR = 0.32;
  const innerR = 0.18;
  const thick = 0.14;

  // Outer ring via torus
  const torusG = new THREE.TorusGeometry((outerR + innerR) / 2, (outerR - innerR) / 2, 8, 16);
  const torus = new THREE.Mesh(torusG, new THREE.MeshStandardMaterial({
    color: '#1a1a1a', roughness: 0.9, metalness: 0.05,
  }));
  torus.castShadow = true;
  torus.receiveShadow = true;
  group.add(torus);

  return group;
}

// ---------------------------------------------------------------------------
// Watchtower
// ---------------------------------------------------------------------------

export function createWatchtower(height, mat) {
  const group = new THREE.Group();
  const platformH = height - 1.0;
  const pw = 2.2;
  const pd = 2.2;

  // 4 legs
  const legW = 0.15;
  for (let ix = -1; ix <= 1; ix += 2) {
    for (let iz = -1; iz <= 1; iz += 2) {
      const leg = box(legW, platformH, legW, { color: '#4a3a2a', roughness: 0.8, metalness: 0.5 });
      leg.position.set(ix * (pw / 2 - 0.2), platformH / 2, iz * (pd / 2 - 0.2));
      leg.castShadow = true;
      group.add(leg);
    }
  }

  // Cross braces
  for (let side = 0; side < 4; side++) {
    const angle = (side * Math.PI) / 2;
    const bx = Math.cos(angle) * (pw / 2 - 0.2);
    const bz = Math.sin(angle) * (pd / 2 - 0.2);
    const brace = box(0.08, platformH * 0.6, 0.08, { color: '#3a3020', roughness: 0.85, metalness: 0.5 });
    brace.position.set(bx, platformH * 0.4, bz);
    brace.rotation.z = Math.cos(angle) * 0.6;
    brace.rotation.x = Math.sin(angle) * 0.6;
    group.add(brace);
  }

  // Platform
  const plat = box(pw, 0.12, pd, mat);
  plat.position.y = platformH;
  plat.castShadow = true;
  plat.receiveShadow = true;
  group.add(plat);

  // Railings
  const railH = 0.9;
  for (let ix = -1; ix <= 1; ix += 2) {
    for (let iz = -1; iz <= 1; iz += 2) {
      const post = box(0.06, railH, 0.06, { color: '#5a4a3a', roughness: 0.7, metalness: 0.6 });
      post.position.set(ix * (pw / 2 - 0.12), platformH + railH / 2, iz * (pd / 2 - 0.12));
      group.add(post);
    }
  }

  return group;
}

// ---------------------------------------------------------------------------
// Chain-link fence
// ---------------------------------------------------------------------------

export function createChainFence(length, height, holeChance, seed) {
  const group = new THREE.Group();
  const postSpacing = 2.2;
  const nPosts = Math.ceil(length / postSpacing) + 1;

  // Posts
  for (let i = 0; i < nPosts; i++) {
    const x = -length / 2 + i * postSpacing;
    const post = box(0.06, height, 0.06, { color: '#5a5a60', roughness: 0.55, metalness: 0.8 });
    post.position.set(x, height / 2, 0);
    post.castShadow = true;
    group.add(post);
  }

  // Fence panels (planes with holes)
  for (let i = 0; i < nPosts - 1; i++) {
    const panelW = postSpacing;
    const x = -length / 2 + i * postSpacing + panelW / 2;

    // Maybe skip this panel for a hole
    if (rnd(seed + i, 0, 1) < holeChance) continue;

    const plane = new THREE.PlaneGeometry(panelW - 0.08, height - 0.10);
    const mat = new THREE.MeshStandardMaterial({
      color: '#6a6a72',
      roughness: 0.5,
      metalness: 0.75,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
    });
    const fencePanel = new THREE.Mesh(plane, mat);
    fencePanel.position.set(x, height / 2, 0);
    fencePanel.receiveShadow = true;
    group.add(fencePanel);
  }

  return group;
}

// ---------------------------------------------------------------------------
// Rebar (exposed)
// ---------------------------------------------------------------------------

export function createRebarGroup(count, length, seed) {
  const group = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const r = 0.025;
    const g = new THREE.CylinderGeometry(r, r, length, 6);
    const m = new THREE.MeshStandardMaterial({ color: '#8b4513', roughness: 0.5, metalness: 0.9 });
    const bar = new THREE.Mesh(g, m);
    bar.position.set(
      rnd(seed + i * 3, -0.3, 0.3),
      length / 2,
      rnd(seed + i * 5, -0.3, 0.3)
    );
    bar.rotation.x = rnd(seed + i * 7, -0.3, 0.3);
    bar.rotation.z = rnd(seed + i * 9, -0.3, 0.3);
    bar.castShadow = true;
    group.add(bar);
  }
  return group;
}

// ---------------------------------------------------------------------------
// Pipe
// ---------------------------------------------------------------------------

export function createPipe(length, radius, mat) {
  const g = new THREE.CylinderGeometry(radius, radius, length, 8);
  const m = new THREE.MeshStandardMaterial(mat);
  const mesh = new THREE.Mesh(g, m);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------------------
// Pallet
// ---------------------------------------------------------------------------

export function createPallet() {
  const group = new THREE.Group();
  const w = 1.0, d = 1.2;

  // Top slats
  for (let i = 0; i < 5; i++) {
    const slat = box(w, 0.04, 0.08, { color: '#8b7355', roughness: 0.85, metalness: 0.05 });
    slat.position.set(0, 0.06, -d / 2 + i * (d / 4));
    group.add(slat);
  }

  // Bottom slats
  for (let i = 0; i < 3; i++) {
    const slat = box(w, 0.04, 0.08, { color: '#7a6345', roughness: 0.85, metalness: 0.05 });
    slat.position.set(0, 0.02, -d / 3 + i * (d / 2));
    group.add(slat);
  }

  // Spacers
  for (let ix = -1; ix <= 1; ix += 2) {
    for (let iz = -1; iz <= 1; iz += 2) {
      const spacer = box(0.08, 0.08, 0.08, { color: '#6b5335', roughness: 0.85, metalness: 0.05 });
      spacer.position.set(ix * (w / 2 - 0.12), 0.04, iz * (d / 2 - 0.12));
      group.add(spacer);
    }
  }

  return group;
}

// ---------------------------------------------------------------------------
// Trash bag
// ---------------------------------------------------------------------------

export function createTrashBag(seed) {
  const r = 0.22 + rnd(seed, 0, 0.08);
  const h = 0.45 + rnd(seed + 7, 0, 0.2);
  const g = new THREE.SphereGeometry(r, 8, 6);
  // Squash vertically
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    if (y > 0) pos.setY(i, y * 0.6);
    pos.setY(i, pos.getY(i) * (h / r));
    // Add bulge in middle
    const bulge = 1 + Math.abs(pos.getY(i) / h - 0.5) * 0.3;
    pos.setX(i, pos.getX(i) * bulge);
    pos.setZ(i, pos.getZ(i) * bulge);
  }
  g.computeVertexNormals();
  const m = new THREE.MeshStandardMaterial({ color: '#1a1c1e', roughness: 0.9, metalness: 0.02 });
  const mesh = new THREE.Mesh(g, m);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------------------
// AC unit on roof
// ---------------------------------------------------------------------------

export function createACUnit(seed) {
  const group = new THREE.Group();
  const w = 0.7 + rnd(seed, 0, 0.3);
  const h = 0.5 + rnd(seed + 1, 0, 0.2);
  const d = 0.7 + rnd(seed + 2, 0, 0.3);

  const body = box(w, h, d, { color: '#4a4d52', roughness: 0.5, metalness: 0.7 });
  body.castShadow = true;
  group.add(body);

  // Fan grille
  const grille = new THREE.PlaneGeometry(w * 0.7, d * 0.5);
  const gm = new THREE.MeshStandardMaterial({
    color: '#2a2d32', roughness: 0.4, metalness: 0.8, side: THREE.DoubleSide,
  });
  const gPanel = new THREE.Mesh(grille, gm);
  gPanel.position.y = h / 2 + 0.01;
  gPanel.rotation.x = -Math.PI / 2;
  group.add(gPanel);

  return group;
}
