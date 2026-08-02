import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto('http://localhost:5173/?demo&preset=A', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(3000);
const state = await page.evaluate(() => {
  const sc = window.__MW_SCENE;
  let skyInfo = null;
  sc.traverse(o => {
    if (o.isMesh && o.material?.name === '') {
      if (o.geometry.type === 'SphereGeometry' && o.geometry.parameters?.radius > 100) {
        skyInfo = {
          radius: o.geometry.parameters.radius,
          visible: o.visible,
          frustumCulled: o.frustumCulled,
          renderOrder: o.renderOrder,
          mapType: o.material.map?.type,
          mapW: o.material.map?.image?.width,
          mapH: o.material.map?.image?.height,
          fog: o.material.fog,
          toneMapped: o.material.toneMapped,
        };
      }
    }
  });
  const cam = window.__MW_CAMERA;
  return { skyInfo, camPos: cam.position.toArray().map(v=>Math.round(v)), camNear: cam.near, camFar: cam.far };
});
console.log(JSON.stringify(state, null, 2));
await browser.close();
