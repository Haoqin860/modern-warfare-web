import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: { port: 5173, strictPort: false, host: '0.0.0.0', hmr: false },
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 4000,
  },
});
