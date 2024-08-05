import { mergeConfig, UserConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

const testConfig: UserConfig = defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    css: false,
    setupFiles: './setupTest.ts',
    include: ['src/components/**/*.spec.tsx'], 
    coverage: {
      provider: 'v8', 
      reporter: ['text', 'json', 'html'],
      include: ['src/components/**/*.tsx'], 
      reportsDirectory: './coverage',
      reportOnFailure: true,
    },
  },
});

export default mergeConfig(viteConfig, testConfig);
