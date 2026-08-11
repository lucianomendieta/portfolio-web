/**
 * Galería de trabajos (grid uniforme, celdas cuadradas).
 * Fotos en /public/img/galeria/, formato cuadrado 1000×1000 px.
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
  { src: '/img/galeria/corte-1.jpg', alt: 'Corte degradé', categoria: 'Corte' },
  { src: '/img/galeria/barba-1.jpg', alt: 'Arreglo de barba', categoria: 'Barba' },
  { src: '/img/galeria/local.jpg', alt: 'Interior de la barbería', categoria: 'El local' },
  { src: '/img/galeria/corte-2.jpg', alt: 'Corte clásico con tijera', categoria: 'Corte' },
  { src: '/img/galeria/herramientas.jpg', alt: 'Herramientas del barbero', categoria: 'Detalle' },
  { src: '/img/galeria/afeitado.jpg', alt: 'Afeitado a navaja', categoria: 'Barba' },
  { src: '/img/galeria/perfilado.jpg', alt: 'Perfilado y line-up', categoria: 'Diseño' },
  { src: '/img/galeria/silla.jpg', alt: 'Sillón de barbería', categoria: 'El local' },
];
