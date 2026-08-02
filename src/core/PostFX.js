/**
 * PostFX — filmic post pipeline.
 *  Bloom → Vignette → ColorGrade → FilmGrain → ChromaticAberration → FXAA.
 * Reads the blind-test preset `P` from Config so A/B variants differ visibly.
 */
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { P } from '../core/Config.js';

/** Filmic color grade with split-tone (lift/gain + teal shadows). */
const GradeShader = {
  name: 'GradeShader',
  uniforms: {
    tDiffuse: { value: null },
    saturation: { value: P.grade.saturation },
    contrast: { value: P.grade.contrast },
    gamma: { value: P.grade.gamma },
    lift: { value: new THREE.Vector3(...P.grade.lift) },
    gain: { value: new THREE.Vector3(...P.grade.gain) },
    tealShadow: { value: P.grade.tealShadow },
    vignette: { value: P.vignette },
    ca: { value: P.ca },
    grain: { value: P.grain },
    time: { value: 0 },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse;
    uniform float saturation, contrast, gamma, tealShadow, vignette, ca, grain;
    uniform vec3 lift, gain;
    uniform float time;
    varying vec2 vUv;

    float rand(vec2 co) { return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453); }

    // Filmic ACES tonemap (Krzysztof Narkowicz / Narkowicz-style approximation)
    // applied ONCE here — gives the COD-style highlight rolloff that a purely
    // linear chain lacks, without double-tone-mapping (renderer.toneMapping is
    // NoToneMapping so OutputPass adds nothing).
    vec3 aces(vec3 x) {
      const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
      return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
    }

    void main() {
      vec2 uv = vUv;
      // chromatic aberration (radial)
      vec2 cc = uv - 0.5;
      float cr = length(cc);
      vec2 off = cc * (1.0 + ca * cr * cr * 8.0);
      float r = texture2D(tDiffuse, 0.5 + off).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, 0.5 - off).b;
      vec3 col = vec3(r, g, b);

      // film grain
      col += (rand(uv * 200.0 + time * 24.0) - 0.5) * grain;

      // saturation
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(luma), col, saturation);

      // contrast
      col = (col - 0.5) * contrast + 0.5;

      // ACES filmic tone map (highlight rolloff) — exposure-scaled so the
      // mid-tones land where a golden-hour scene reads naturally.
      col = aces(col * 1.05);

      // teal shadow split tone
      float sh = max(0.0, 1.0 - luma * 2.5);
      col += vec3(0.0, 0.15, 0.22) * tealShadow * sh;

      // lift / gain
      col = col * (1.0 - lift) + lift;
      col = col * gain;

      // gamma
      col = pow(col, vec3(gamma));

      // vignette
      float vig = smoothstep(1.25, 0.35, length(uv - 0.5));
      col *= mix(1.0, vig, vignette);

      gl_FragColor = vec4(col, 1.0);
    }`,
};

export class PostFX {
  constructor(r) {
    this.r = r;
    const { renderer, scene, camera } = r;

    this.renderTarget = new THREE.WebGLRenderTarget(
      window.innerWidth, window.innerHeight,
      { format: THREE.RGBAFormat, type: THREE.HalfFloatType }
    );
    this.composer = new EffectComposer(renderer, this.renderTarget);
    this.composer.addPass(new RenderPass(scene, camera));

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      P.bloom.strength, P.bloom.radius, P.bloom.threshold
    );
    // In-shader ACES (GradeShader above) is the sole filmic tonemap.
    // We disable the renderer-level tone mapping so OutputPass skips its
    // ACES pass — otherwise the chain would be: bloom → shader ACES →
    // creative grade → OutputPass ACES (double-mapped, flattened).
    renderer.toneMapping = THREE.NoToneMapping;
    this.composer.addPass(this.bloomPass);

    this.gradePass = new ShaderPass(GradeShader);
    this.composer.addPass(this.gradePass);

    this.fxaaPass = new ShaderPass(FXAAShader);
    this.composer.addPass(this.fxaaPass);

    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);
  }

  update(dt, time) {
    this.gradePass.uniforms.time.value = time;
  }

  render() {
    this.composer.render();
  }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.composer.setSize(w, h);
    this.renderTarget.setSize(w, h);
    this.bloomPass.resolution.set(w, h);
  }

  dispose() {
    this.composer.dispose();
  }
}
