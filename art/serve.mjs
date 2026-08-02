/**
 * serve.mjs — Vite dev/preview server used by shot.mjs and the blind-test page.
 * Usage: import { servePreview } from './serve.mjs';
 */
import { createServer } from 'vite';

export async function servePreview(port = 4173) {
  const server = await createServer({
    root: new URL('../', import.meta.url).pathname,
    logLevel: 'silent',
    server: { port, host: '127.0.0.1' },
  });
  await server.listen();
  return { port: server.httpServer.address().port, close: () => server.close() };
}
