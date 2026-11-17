// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dzerly.app', // [ISI] samakan dengan SITE.url di src/config.ts
  vite: {
    plugins: [tailwindcss()],
  },
});
