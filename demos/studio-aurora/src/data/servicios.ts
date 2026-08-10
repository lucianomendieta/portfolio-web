/**
 * Líneas de servicio (demo Studio Aurora).
 * Sin menú de precios cerrado: `precioDesde: null` muestra "Precio a consultar".
 */

export interface Servicio {
  /** Nombre de la línea (ej. "Peluquería") */
  nombre: string;
  /** Bajada corta de la línea */
  descripcion: string;
  /** Sub-servicios incluidos (chips) */
  items: string[];
  /**
   * Precio "desde" en guaraníes como texto ya formateado (ej. "150.000 Gs"),
   * o null si no está definido -> se muestra placeholder.
   */
  precioDesde: string | null;
  /** Nota opcional */
  nota?: string;
  /** Ícono decorativo (id interno, ver componente) */
  icono: 'peluqueria' | 'barberia' | 'spa' | 'unas';
}

export const servicios: Servicio[] = [
  {
    nombre: 'Peluquería',
    descripcion: 'Color, corte y peinado.',
    items: ['Color', 'Corte', 'Peinado', 'Tratamientos'],
    precioDesde: null,
    icono: 'peluqueria',
  },
  {
    nombre: 'Barbería',
    descripcion: 'Corte y barba.',
    items: ['Corte', 'Barba'],
    precioDesde: null,
    icono: 'barberia',
  },
  {
    nombre: 'Spa',
    descripcion: 'Faciales y tratamientos corporales.',
    items: ['Faciales', 'Tratamientos corporales', 'Relax'],
    precioDesde: null,
    icono: 'spa',
  },
  {
    nombre: 'Uñas',
    descripcion: 'Manicura y pedicura.',
    items: ['Manicura', 'Pedicura', 'Esmaltado semipermanente'],
    precioDesde: null,
    icono: 'unas',
  },
];
