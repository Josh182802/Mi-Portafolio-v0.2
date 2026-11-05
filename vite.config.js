import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    cssMinify: true,   // CSS minificado
    minify: 'esbuild', // JS minificado
    cssCodeSplit: false
  }
});
