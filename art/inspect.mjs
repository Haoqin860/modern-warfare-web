import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto('http://localhost:5173/?demo&preset=A', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(4000);
const state = await page.evaluate(() => {
  const canvas = document.querySelector('canvas');
  const gl = canvas?.getContext('webgl2') || canvas?.getContext('webgl');
  const sc = window.__MW_SCENE;
  let meshes = 0, sprites = 0, lights = 0, tris = 0;
  const count = (o) => {
    o.traverse(c => {
      if (c.isMesh) { meshes++; if (c.geometry?.index) tris += c.geometry.index.count / 3; else if (c.geometry?.attributes?.position) tris += c.geometry.attributes.position.count / 3; }
      if (c.isSprite) sprites++;
      if (c.isLight) lights++;
    });
  };
  if (sc) count(sc);
  return {
    ready: window.__MW_READY,
    demo: new URLSearchParams(location.search).has('demo'),
    webgl: !!gl,
    fps: document.getElementById('fps')?.textContent,
    meshes, sprites, lights, tris: Math.round(tris),
    camPos: window.__MW_CAMERA ? [Math.round(window.__MW_CAMERA.position.x), Math.round(window.__MW_CAMERA.position.y), Math.round(window.__MW_CAMERA.position.z)] : null,
    enemyCount: (window.__MW_GS?.enemies || []).length,
  };
});
console.log('STATE', JSON.stringify(state, null, 2));
await page.screenshot({ path: 'art/shots/live-inspect.png' });
await browser.close();
