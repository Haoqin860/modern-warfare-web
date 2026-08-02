/**
 * Sky — procedural golden-hour sky dome + warm sun disc.
 * A BackSide sphere with a baked vertical gradient canvas texture (deep blue
 * zenith → warm haze horizon → orange sun glow band) plus a bright sun sprite
 * placed along the key-light direction. `fog=false` so the post chain's fog
 * doesn't wash it out; rendered behind everything via renderOrder -1.
 *
 * This is the anchor of the "3A golden-hour" art direction — without it the
 * horizon reads as flat black and nothing reads as cinematic.
 */
import * as THREE from 'three';

function _skyTexture() {
  const W = 256, H = 256;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');

  const stops = [
    { t: 0.00, c: '#24334d' },   // zenith deep blue
    { t: 0.22, c: '#3b4a63' },
    { t: 0.42, c: '#7a6a55' },   // mid haze
    { t: 0.55, c: '#c8915a' },   // warm horizon
    { t: 0.62, c: '#e8a05a' },   // golden band
    { t: 0.68, c: '#f0a24e' },
    { t: 0.76, c: '#8a5a38' },   // below-horizon ground haze
    { t: 1.00, c: '#3a2a20' },
  ];
  const g = ctx.createLinearGradient(0, 0, 0, H);
  for (const s of stops) g.addColorStop(s.t, s.c);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // sun glow radial at the golden band
  const gx = W * 0.5, gy = H * 0.615;
  const rg = ctx.createRadialGradient(gx, gy, 2, gx, gy, W * 0.30);
  rg.addColorStop(0, 'rgba(255,240,200,1)');
  rg.addColorStop(0.10, 'rgba(255,224,160,0.98)');
  rg.addColorStop(0.22, 'rgba(255,190,110,0.55)');
  rg.addColorStop(0.45, 'rgba(255,170,90,0.18)');
  rg.addColorStop(1, 'rgba(255,160,80,0)');
  ctx.fillStyle = rg;
  ctx.fillRect(0, 0, W, H);

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

/**
 * Hot sun sprite — an additive billboard placed along the sun direction whose
 * HDR color exceeds the bloom threshold (unlike the sky dome map, which is
 * capped at sRGB 1.0). This is what makes the golden-hour sun actually glow.
 * @returns {THREE.Sprite}
 */
export function createSunSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,248,220,1)');
  g.addColorStop(0.08, 'rgba(255,236,180,1)');
  g.addColorStop(0.22, 'rgba(255,206,130,0.6)');
  g.addColorStop(0.5, 'rgba(255,180,100,0.2)');
  g.addColorStop(1, 'rgba(255,160,90,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex,
    color: new THREE.Color(4, 3.4, 2.2), // HDR >1 → crosses bloom threshold
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    toneMapped: false,                     // keep hot values for the bloom pass
    transparent: true,
  }));
  sprite.scale.set(70, 70, 1);
  sprite.frustumCulled = false;
  return sprite;
}

/**
 * @returns {THREE.Group} sky dome group. Add to scene.
 */
export function createSky() {
  const g = new THREE.Group();

  const skyGeo = new THREE.SphereGeometry(380, 32, 20);
  const skyMat = new THREE.MeshBasicMaterial({
    map: _skyTexture(),
    side: THREE.BackSide,
    fog: false,
    depthWrite: false,
    toneMapped: true,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.renderOrder = -1;
  g.add(sky);

  return g;
}

/**
 * Rotate the sky so its warm band faces the key-light azimuth.
 * @param {THREE.Group} skyGroup
 * @param {THREE.Vector3} sunDir  normalized light direction
 */
export function orientSky(skyGroup, sunDir) {
  // The texture's glow sits at the horizon (sphere equator). Rotate so the
  // equator's warm side faces the sun azimuth.
  const az = Math.atan2(sunDir.x, sunDir.z);
  skyGroup.rotation.set(0, az, 0);
}
