// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base: '/cases/opdagdanmark-v2/',
  output: "static",
  integrations: [vue()],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 500,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/dist/**',
          '**/.astro/**',
          '**/.cache/**',
        ],
      },
    },
  },
});