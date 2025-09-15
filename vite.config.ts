import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext'
  },
  server: {
    port: 5173,
    open: true
  },
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'lit'
  }
});