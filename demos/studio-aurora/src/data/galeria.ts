/**
 * Galería de trabajos (grid uniforme, celdas cuadradas). 8–12 fotos.
 *
 * IMPORTANTE: el brief (§9) confirma que las fotos reales están pendientes.
 * Cada ítem tiene `src: null` -> el componente muestra un placeholder. Cuando el
 * dueño sube la foto, se renderiza <img loading="lazy">.
 *
 * TODO(dueño): subir 8–12 fotos reales de trabajos a /public/img/galeria/
 *   y completar `src` + `alt` (el alt es importante para SEO y accesibilidad).
 *   Formato recomendado: CUADRADAS 1000 × 1000 px (se recortan con object-fit: cover).
 *   Optimizar: WebP o JPG de calidad ~80, < 300 KB c/u.
 *   Tip: para que las filas queden llenas en escritorio, cargá un múltiplo de 4 (8 o 12).
 */

export interface FotoGaleria {
  /** Ruta de la foto en /public/img/galeria/. null = placeholder. */
  src: string | null;
  /** Texto alternativo descriptivo (SEO + accesibilidad). */
  alt: string;
  /** Etiqueta de categoría visible en hover / placeholder. */
  categoria: string;
}

export const galeria: FotoGaleria[] = [
  { src: '/img/galeria/color.jpg', alt: 'Trabajo de color y peinado en Studio Aurora',        categoria: 'Color' },
  { src: '/img/galeria/barberia.jpg', alt: 'Corte de barbería en Studio Aurora',                 categoria: 'Barbería' },
  { src: '/img/galeria/unas.jpg', alt: 'Manicura realizada en Studio Aurora',                categoria: 'Uñas' },
  { src: '/img/galeria/novias.jpg', alt: 'Peinado de novia en Studio Aurora',                  categoria: 'Novias' },
  { src: '/img/galeria/salon.jpg', alt: 'Ambiente del salón Studio Aurora',    categoria: 'El salón' },
  { src: '/img/galeria/maquillaje.jpg', alt: 'Maquillaje social en Studio Aurora',                 categoria: 'Maquillaje' },
  { src: '/img/galeria/spa.jpg', alt: 'Tratamiento de spa en Studio Aurora',                categoria: 'Spa' },
  { src: '/img/galeria/corte.jpg', alt: 'Corte y estilismo en Studio Aurora',                 categoria: 'Corte' },
];
