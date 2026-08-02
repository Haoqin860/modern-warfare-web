import { chromium } from 'playwright';
const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const errs = [];
page.on('pageerror', e => errs.push('PAGE: ' + e.message));
page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE: ' + m.text()); });
await page.goto('http://localhost:5173/', { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1500);
await page.click('#overlay');
await page.waitForTimeout(2500);
// check viewmodel scene has meshes
const vm = await page.evaluate(() => {
  const vms = window.__MW_SCENE?.parent; // not accessible; use renderer-scoped check
  return { ready: window.__MW_READY, fps: document.getElementById('fps')?.textContent };
});
console.log('VM', JSON.stringify(vm));
console.log('ERRORS', errs.length ? errs.join('\n') : 'none');
await page.screenshot({ path: 'art/shots/live-gameplay.png' });
await browser.close();
