import { defineConfig } from 'vite';

export default defineConfig({
  base: (process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS)
    ? (process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/joli-enterprises/')
    : '/',
  server: {
    port: 5173,
    host: true,
    hmr: false, // Disable automatic live update / Hot Module Replacement
  },
});

