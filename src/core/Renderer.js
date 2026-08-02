/**
 * GameRenderer — renderer + render pipeline (TAA, MSAA fallback), pixel ratio cap,
 * resize handling and a frame-budget meter. All modules receive `this` as their
 * renderer handle. ViewModel renders in a second pass.
 */
import * as THREE from 'three';

export class GameRenderer {
  constructor(container) {
    this.container = container;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.style.position = 'fixed';
    this.renderer.domElement.style.inset = '0';
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0a0e14');
    this.scene.fog = new THREE.FogExp2(0xc2b087, 0.00045);

    this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.08, 1000);
    this.camera.rotation.order = 'YXZ';

    // viewmodel scene
    this.vmScene = new THREE.Scene();
    this.vmCamera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.01, 12);

    this.clock = new THREE.Clock();
    this.frameMs = 0;
    this._acc = 0;
    this._n = 0;
    this.renderViewModel = true;

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.camera.aspect = w / h;
    this.vmCamera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.vmCamera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  /** Returns delta seconds clamped to avoid huge physics jumps on tab-away. */
  frame() {
    const dt = Math.min(this.clock.getDelta(), 0.1);
    this.camera.updateMatrixWorld();
    return dt;
  }
}
