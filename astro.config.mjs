import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apkanadev.com',
  base: '/pruebas-astro/',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
