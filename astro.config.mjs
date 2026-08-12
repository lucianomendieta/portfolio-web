// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // TODO: reemplazar por el dominio real cuando esté definido (usado para canonical/OG).
  site: 'https://portfolio-mendieta.vercel.app/',
  vite: {
    plugins: [tailwindcss()],
  },
});
