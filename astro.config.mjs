// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://dzerly.app', // [ISI] samakan dengan SITE.url di src/config.ts
  // Scoping lewat class (bukan atribut data-astro-cid-*) → HTML & CSS lebih kecil
  scopedStyleStrategy: 'class',
  vite: {
    plugins: [tailwindcss()],
  },
});
