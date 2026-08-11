// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático, una sola página larga con navegación por anclas.
// `site` se usa para canonical y Open Graph (deben ser URLs ABSOLUTAS).
export default defineConfig({
  // TODO: reemplazar por la URL real de Vercel una vez desplegada la demo.
  site: 'https://el-roble.vercel.app',
  // Sin integraciones pesadas: HTML/CSS/JS mínimo.
});
