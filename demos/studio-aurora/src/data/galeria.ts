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
  { src: '/img/galeria/color.jpg', alt: 'Coloración de cabello', categoria: 'Color' },
  { src: '/img/galeria/barberia.jpg', alt: 'Corte de barbería', categoria: 'Barbería' },
  { src: '/img/galeria/unas.jpg', alt: 'Manicura', categoria: 'Uñas' },
  { src: '/img/galeria/salon.jpg', alt: 'Interior del salón', categoria: 'El salón' },
  { src: '/img/galeria/maquillaje.jpg', alt: 'Maquillaje profesional', categoria: 'Maquillaje' },
  { src: '/img/galeria/spa.jpg', alt: 'Tratamiento facial', categoria: 'Spa' },
  { src: '/img/galeria/corte.jpg', alt: 'Corte y estilismo', categoria: 'Corte' },
];
