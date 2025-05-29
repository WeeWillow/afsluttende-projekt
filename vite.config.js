// vite.config.js
export default {
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
        '**/public/**'
      ],
    },
  },
};
