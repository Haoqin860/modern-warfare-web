/**
 * shot.mjs — deterministic screenshot capture for visual QA.
 * Usage: node art/shot.mjs [preset=A|B] [n=8]
 * Launches its own vite preview server on a random port, captures n screenshots
 * along the demo spline, writes PNGs to art/shots/preset-<t>.png.
 */
import { createServer } from 'vite';
import { chromium } from 'playwright';
import { mkdirSync, existsSync } from 'fs';

const preset = process.argv[2] || 'A';
const N = Number(process.argv[3]) || 8;
const OUT = new URL('./shots/', import.meta.url).pathname;
mkdirSync(OUT, { recursive: true });

const server = await createServer({
  root: new URL('../', import.meta.url).pathname,
  logLevel: 'silent',
  server: { port: 0, host: '127.0.0.1', strictPort: false },
});
await server.listen();
const port = server.httpServer.address().port;
const url = `http://localhost:${port}/?demo&preset=${preset}`;

const browser = await chromium.launch({ args: ['--use-gl=angle'] });
const page = await browser.newPage({
  viewport: { width: 1920, height: 1080 },
  deviceScaleFactor: 1,
});
page.on('console', (m) => { if (m.type() === 'error') console.log('[console:error]', m.text()); });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));

console.log('capturing', url);
await page.goto(url, { waitUntil: 'domcontentloaded' });
await page.waitForFunction(() => window.__MW_READY === true, { timeout: 30000 })
  .catch(() => console.log('wait: window.__MW_READY not set'));

const T = 90;
const shots = [];
for (let i = 0; i < N; i++) {
  const t = Math.floor((i / N) * T);
  await page.evaluate((tt) => {
    window.__MW_TIME = tt;
    if (window.__MW_DEMO_JUMP) window.__MW_DEMO_JUMP(tt);
  }, t);
  await page.waitForTimeout(1200); // let scene settle
  const file = `${OUT}${preset}-${String(t).padStart(3, '0')}.png`;
  await page.screenshot({ path: file });
  shots.push(file);
  console.log('shot', file);
}

await browser.close();
await server.close();
console.log('DONE', shots.length, 'shots');
