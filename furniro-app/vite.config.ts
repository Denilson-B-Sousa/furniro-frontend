import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

/// <reference types="vitest"/>
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  optimizeDeps: {
    include: ['react-firebase-hooks/auth'],
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
