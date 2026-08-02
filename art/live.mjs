import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', e => console.log('[pageerror]', e.message));
page.on('console', m => { if (m.type() === 'error') console.log('[console:error]', m.text()); });
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(2000);
// click start
await page.click('#overlay');
await page.waitForTimeout(3000);
const state = await page.evaluate(() => {
  const gs = window.__MW_GS;
  return {
    started: !!window.__MW_READY,
    wave: gs?.wave, waveState: gs?.waveState,
    enemies: (gs?.enemies || []).length,
    hp: gs?.health,
    ammo: gs?.ammo,
    fps: document.getElementById('fps')?.textContent,
  };
});
console.log('LIVE', JSON.stringify(state, null, 2));
// hold fire for a moment
await page.mouse.down();
await page.waitForTimeout(800);
await page.mouse.up();
const after = await page.evaluate(() => ({ ammo: window.__MW_GS?.ammo, hp: window.__MW_GS?.health }));
console.log('AFTER_FIRE', JSON.stringify(after));
await browser.close();
