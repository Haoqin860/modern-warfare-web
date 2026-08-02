import * as THREE from 'three';

const POOL_SIZE = 50;
const pool = [];
let poolIdx = 0;

function alloc(r) {
  // try to reuse an expired casing
  for (let j = 0; j < POOL_SIZE; j++) {
    const i = (poolIdx + j) % POOL_SIZE;
    if (!pool[i] || pool[i].life <= 0) { poolIdx = (i + 1) % POOL_SIZE; return pool[i]; }
  }
  // steal oldest
  const oldest = pool[poolIdx];
  poolIdx = (poolIdx + 1) % POOL_SIZE;
  return oldest;
}

const _empty = Object.freeze({ x: 0, y: 0, z: 0 });

export function spawnCasing(r, pos, vel) {
  let c = alloc(r);
  if (!c || c.life <= 0) {
    // create or recreate
    if (!c) {
      const g = new THREE.CylinderGeometry(0.004, 0.005, 0.03, 6);
      const m = new THREE.MeshStandardMaterial({ color: 0xd4a54c, roughness: 0.3, metalness: 0.9 });
      c = { mesh: new THREE.Mesh(g, m), vel: { x: 0, y: 0, z: 0 }, life: 0 };
      c.mesh.castShadow = true;
      r.scene.add(c.mesh);
      // extend pool on first allocation
      const empty = pool.findIndex(e => !e);
      if (empty >= 0) pool[empty] = c;
      else if (pool.length < POOL_SIZE) pool.push(c);
      else pool[poolIdx] = c;
    }
    // revive
    c.mesh.visible = true;
  }
  c.mesh.position.copy(pos);
  c.vel.x = vel.x; c.vel.y = vel.y; c.vel.z = vel.z;
  c.life = 2.5;
  c.mesh.rotation.set(0, 0, 0);
}

export function updateCasings(dt) {
  for (let i = 0; i < pool.length; i++) {
    const c = pool[i];
    if (!c || c.life <= 0) {
      if (c) c.mesh.visible = false;
      continue;
    }
    c.life -= dt;
    if (c.life <= 0) {
      c.mesh.visible = false;
      continue;
    }
    c.vel.y += -9.8 * dt;
    c.mesh.position.x += c.vel.x * dt;
    c.mesh.position.y += c.vel.y * dt;
    c.mesh.position.z += c.vel.z * dt;
    c.mesh.rotation.x += dt * 8;
    c.mesh.rotation.z += dt * 5;
    if (c.mesh.position.y < 0) {
      c.mesh.position.y = 0;
      c.vel.x = c.vel.y = c.vel.z = 0;
    }
  }
}
