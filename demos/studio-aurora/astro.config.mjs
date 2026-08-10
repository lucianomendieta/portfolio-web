// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático, una sola página larga con navegación por anclas.
// `site` se usa para canonical y Open Graph (deben ser URLs ABSOLUTAS).
// TODO: reemplazar por la URL real de Vercel una vez desplegada la demo.
export default defineConfig({
  site: 'https://studio-aurora.vercel.app',
  // Sin integraciones pesadas: HTML/CSS/JS mínimo.
});
