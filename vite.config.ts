import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    IS_DEV: JSON.stringify(true),
    API_URL: JSON.stringify('http://localhost:8000'),
    PROJECT: JSON.stringify('frontend'),
  },
  css: {
    modules: {
      generateScopedName: '[path][name]__[local]--[hash:base64:5]',
      localsConvention: 'camelCase',
    },
  },
});
