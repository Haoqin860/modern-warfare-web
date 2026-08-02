/**
 * TextureAtlas — procedurally generated PBR textures.
 * Everything is generated in code: albedo, normal, roughness, AO, emissive, height.
 * No external assets → deterministic, license-free, 3A-flavored material coverage.
 */
import * as THREE from 'three';

const _n = (w, h) => { const d = new Uint8Array(w * h * 4); return { d, w, h }; };
const PX = (t, x, y) => (t.d[((y * t.w + x) * 4)]);
const SX = (t, x, y) => (t.d[((y * t.w + x) * 4 + 1)]);
const L = (t, x, y) => (t.d[((y * t.w + x) * 4 + 3)]);

function noise1D(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeTexture(t, cfg) {
  const tex = new THREE.CanvasTexture(t.c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (cfg.repeat) tex.repeat.set(cfg.repeat, cfg.repeat);
  return tex;
}
function makeDataTexture(t, cfg, { normal = false, linear = false } = {}) {
  const tex = new THREE.DataTexture(t.d, t.w, t.h);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = (normal || linear) ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (cfg.repeat) tex.repeat.set(cfg.repeat, cfg.repeat);
  tex.needsUpdate = true;
  return tex;
}

const hash2 = (x, y, s) => {
  let h = Math.imul(x, 374761393) + Math.imul(y, 668265263) + Math.imul(s, 2246822519);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
};

const fbm = (x, y, s, oct = 4) => {
  let a = 0, amp = 0.5, f = 1, tot = 0;
  for (let i = 0; i < oct; i++) {
    a += hash2(Math.floor(x * f), Math.floor(y * f), s) * amp;
    tot += amp; amp *= 0.5; f *= 2;
  }
  return a / tot;
};

function fillTilingAlbedo(t, s, base, grain, stain) {
  for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) {
    const nx = x / t.w * 20, ny = y / t.h * 20;
    const n = fbm(nx, ny, s);
    const micro = (hash2(x, y, s * 7 + 3) - 0.5) * grain;
    let r = base[0] * (1 + (n - 0.5) * stain) + micro;
    let g = base[1] * (1 + (n - 0.5) * stain) + micro;
    let b = base[2] * (1 + (n - 0.5) * stain) + micro;
    // occasional darker speckles
    if (hash2(x, y, s + 11) > 0.965) { const k = 0.55; r *= k; g *= k; b *= k; }
    const i = (y * t.w + x) * 4;
    t.d[i] = Math.min(255, r); t.d[i + 1] = Math.min(255, g); t.d[i + 2] = Math.min(255, b); t.d[i + 3] = 255;
  }
}

function fillNormal(t, s, strength) {
  for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) {
    const e = 1.0 / t.w;
    const hgt = (x, y) => fbm(x / t.w * 20, y / t.h * 20, s);
    const dx = (hgt(x + e, y) - hgt(x - e, y)) * strength;
    const dy = (hgt(x, y + e) - hgt(x, y - e)) * strength;
    let nx = -dx, ny = -dy, nz = 1;
    const il = 1 / Math.sqrt(nx * nx + ny * ny + nz * nz);
    const i = (y * t.w + x) * 4;
    t.d[i] = (nx * il * 0.5 + 0.5) * 255;
    t.d[i + 1] = (ny * il * 0.5 + 0.5) * 255;
    t.d[i + 2] = (nz * il * 0.5 + 0.5) * 255;
    t.d[i + 3] = 255;
  }
}

function fillRoughness(t, s, roughBase, variation) {
  for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) {
    const n = fbm(x / t.w * 20, y / t.h * 20, s);
    const v = roughBase + (n - 0.5) * variation;
    const i = (y * t.w + x) * 4;
    t.d[i] = t.d[i + 1] = t.d[i + 2] = Math.min(255, v * 255); t.d[i + 3] = 255;
  }
}

function fillAO(t, s, aoBase, cavity) {
  for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) {
    const n = fbm(x / t.w * 20, y / t.h * 20, s);
    const v = aoBase + (1 - n) * cavity;
    const i = (y * t.w + x) * 4;
    t.d[i] = t.d[i + 1] = t.d[i + 2] = Math.min(255, v * 255); t.d[i + 3] = 255;
  }
}

function fillRoughNoise(t, s) { // pure high-freq roughness map (metals)
  for (let y = 0; y < t.h; y++) for (let x = 0; x < t.w; x++) {
    const n = hash2(x, y, s);
    const v = 0.30 + n * 0.18;
    const i = (y * t.w + x) * 4;
    t.d[i] = t.d[i + 1] = t.d[i + 2] = v * 255; t.d[i + 3] = 255;
  }
}

/** Concrete texture set (wall / floor / runway), repeated. */
function concrete(seed, opts = {}) {
  const size = 256;
  const alb = _n(size, size), nrm = _n(size, size), rgh = _n(size, size), ao = _n(size, size), hei = _n(size, size);
  const s = seed >>> 0;
  fillTilingAlbedo(alb, s, opts.base || [0.42, 0.42, 0.44], 0.06, 0.14);
  fillNormal(nrm, s, opts.normal || 1.1);
  fillRoughness(rgh, s, opts.rough || 0.88, 0.1);
  fillAO(ao, s, 0.92, 0.1);
  // height: same fbm but stored raw
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const n = fbm(x / size * 20, y / size * 20, s);
    const i = (y * size + x) * 4;
    hei.d[i] = hei.d[i + 1] = hei.d[i + 2] = n * 255; hei.d[i + 3] = 255;
  }
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const im = ctx.createImageData(size, size);
  im.data.set(alb.d); ctx.putImageData(im, 0, 0);
  const repeat = opts.repeat || [4, 4];
  return {
    map: makeTexture({ c: cv }, { repeat }),
    normalMap: makeDataTexture(nrm, { repeat }, { normal: true }),
    roughnessMap: makeDataTexture(rgh, { repeat }, { linear: true }),
    aoMap: makeDataTexture(ao, { repeat }, { linear: true }),
    heightMap: makeDataTexture(hei, { repeat }),
    color: '#8f9096',
    size,
  };
}

/** Non-repeating detail textures (debris, smoke streaks, stains). */
function makeDirtColorTex(seed) {
  const size = 128;
  const t = _n(size, size);
  const s = seed >>> 0;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const n = fbm(x / size * 8, y / size * 8, s);
    const v = 20 + n * 34;
    const i = (y * size + x) * 4;
    t.d[i] = t.d[i + 1] = t.d[i + 2] = v; t.d[i + 3] = 255;
  }
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const im = ctx.createImageData(size, size); im.data.set(t.d); ctx.putImageData(im, 0, 0);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeDecalOverlay() {
  const size = 256;
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#0a0b0d'; ctx.fillRect(0, 0, size, size);
  // grime blotches
  for (let i = 0; i < 60; i++) {
    const r = 12 + Math.random() * 40;
    ctx.fillStyle = `rgba(12,13,15,${0.3 + Math.random() * 0.5})`;
    ctx.beginPath();
    ctx.arc(Math.random() * size, Math.random() * size, r, 0, 7);
    ctx.fill();
  }
  // scratches
  ctx.strokeStyle = 'rgba(210,205,195,0.25)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * size, Math.random() * size);
    ctx.lineTo(Math.random() * size, Math.random() * size);
    ctx.stroke();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.repeat.set(6, 6);
  return tex;
}

/** Soft radial smoke sprite (for muzzle smoke / dust / distant smoke columns). */
function smokeTexture(size = 128) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.4, 'rgba(255,255,255,0.55)');
  g.addColorStop(0.75, 'rgba(255,255,255,0.18)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(cv);
  return tex;
}

/** Soft round glow sprite (muzzle flash / light glows). */
function glowTexture(size = 64) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size;
  const ctx = cv.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.3, 'rgba(255,255,255,0.8)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(cv);
  return tex;
}

export const TextureAtlas = {
  concrete,
  makeDirtColorTex,
  makeDecalOverlay,
  smokeTexture,
  glowTexture,
};
