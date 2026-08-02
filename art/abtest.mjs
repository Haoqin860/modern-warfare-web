import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto('http://localhost:5173/?demo&preset=A', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(3000);
// disable the sun sprite via scene traversal
const before = await page.evaluate(() => {
  const sc = window.__MW_SCENE;
  const sprites = [];
  sc.traverse(o => { if (o.isSprite) sprites.push({ name: o.name, scale: o.scale.x, color: o.material?.color?.getHexString?.() }); });
  return { spriteCount: sprites.length, sprites };
});
console.log('SPRITES', JSON.stringify(before));
await browser.close();
