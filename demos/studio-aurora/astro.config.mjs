// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático, una sola página larga con navegación por anclas.
// `site` se usa para canonical y Open Graph (deben ser URLs ABSOLUTAS).
export default defineConfig({
  site: 'https://studio-aurora-theta.vercel.app',
  // Sin integraciones pesadas: HTML/CSS/JS mínimo.
});
