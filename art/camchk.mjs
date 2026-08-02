import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto('http://localhost:5173/?demo&preset=A', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2500);
const res = await page.evaluate(async () => {
  window.__MW_DEMO_JUMP(45);
  await new Promise(r => setTimeout(r, 800));
  const cam = window.__MW_CAMERA;
  const m = new (window.THREE?.Matrix4 || Object.getPrototypeOf(cam).constructor.Matrix4)();
  return {
    pos: cam.position.toArray().map(v => v.toFixed(1)),
    rot: [cam.rotation.x, cam.rotation.y, cam.rotation.z].map(v => v.toFixed(2)),
  };
});
console.log('CAM45', JSON.stringify(res));
await browser.close();
