import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
await page.goto('http://localhost:5173/?demo&preset=A', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2500);
const shots = await page.evaluate(async () => {
  const out = [];
  for (const t of [0, 11, 22, 33, 45, 56, 67, 78]) {
    window.__MW_DEMO_JUMP(t);
    await new Promise(r => setTimeout(r, 400));
    const c = window.__MW_CAMERA;
    out.push({ t, pos: c.position.toArray().map(v=>v.toFixed(1)) });
  }
  return out;
});
console.log(JSON.stringify(shots, null, 2));
await browser.close();
