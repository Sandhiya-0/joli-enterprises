import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : (process.env.NODE_ENV === 'production' ? '/joli-enterprises/' : '/'),
});
