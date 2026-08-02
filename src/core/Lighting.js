/**
 * SceneLighting — direct sun + fill + volumetric-ish fog banks + baked AO lightmaps
 * on key structures. Exposes helpers used by World and FX (fog color, sun dir).
 */
import * as THREE from 'three';
import { CFG } from '../core/Config.js';

export class SceneLighting {
  constructor(r) {
    this.r = r;

    // ---------- sun ----------
    const sun = new THREE.DirectionalLight('#ffc080', 3.5);
    sun.position.set(60, 50, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.near = 1;
    sun.shadow.camera.far = 260;
    const d = 90;
    sun.shadow.camera.left = -d; sun.shadow.camera.right = d;
    sun.shadow.camera.top = d; sun.shadow.camera.bottom = -d;
    sun.shadow.bias = -0.0005;
    sun.shadow.normalBias = 0.6;
    r.scene.add(sun);
    r.scene.add(sun.target);
    this.sun = sun;
    this.sunDir = new THREE.Vector3(60, 50, 30).normalize();

    // ---------- key / fill ----------
    const fill = new THREE.HemisphereLight('#9fb8d8', '#1c150c', 0.85);
    r.scene.add(fill);
    this.fill = fill;

    const warm = new THREE.DirectionalLight('#ffb066', 0.65);
    warm.position.set(-50, 30, -60);
    r.scene.add(warm);
    this.warm = warm;

    // ---------- environment (subtle) ----------
    const envTex = new THREE.CanvasTexture(this._envCanvas());
    envTex.colorSpace = THREE.SRGBColorSpace;
    envTex.mapping = THREE.EquirectangularReflectionMapping;
    const pmrem = new THREE.PMREMGenerator(r.renderer);
    const envRT = pmrem.fromEquirectangular(envTex);
    r.scene.environment = envRT.texture;
    envTex.dispose(); pmrem.dispose();
    this.env = envRT.texture;

    this.fogColor = new THREE.Color(0x171b20);
  }

  _envCanvas() {
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(32, 26, 4, 32, 32, 40);
    g.addColorStop(0, '#ffd9a0');
    g.addColorStop(0.4, '#7a8aa0');
    g.addColorStop(1, '#0c0f14');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    return c;
  }

  /** Push shadows to follow the player. */
  update(playerPos) {
    this.sun.position.copy(playerPos).add(this.sunDir.clone().multiplyScalar(140));
    this.sun.target.position.copy(playerPos);
    this.sun.target.updateMatrixWorld();
  }

  /** Create a colored emissive zone (used by World for burning interiors, FX). */
  addZone(color, intensity, range, pos) {
    const l = new THREE.PointLight(color, intensity, range, 2);
    l.position.copy(pos);
    this.r.scene.add(l);
    return l;
  }
}
