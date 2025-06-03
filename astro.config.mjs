// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  base: '/cases/opdagdanmark-v1/',
  output: "static",
  integrations: [vue()]
});