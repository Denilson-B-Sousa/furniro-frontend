import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';


export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      css: false,
      setupFiles: './setupTest.ts',
      include: ['src/**/*.spec.tsx'],
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
      },
    },
  }),
);
