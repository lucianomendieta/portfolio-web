/**
 * Líneas de servicio (demo Studio Aurora).
 *
 * PRECIOS: el brief (§9) confirma que NO hay menú de precios cerrado.
 * Único ancla real: corte + barba > 200.000 Gs (de una reseña).
 * Todos los demás precios quedan como placeholder "desde ___" con `precio: null`
 * -> el componente muestra el aviso de "consultar" y marca el dato como pendiente.
 *
 * TODO(dueño): completar los precios "desde" reales de cada línea y afinar la lista
 *              de sub-servicios. No inventamos montos.
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
   * o null si todavía no está confirmado -> se muestra placeholder.
   */
  precioDesde: string | null;
  /** Nota opcional (ej. ancla de precio confirmada) */
  nota?: string;
  /** Ícono decorativo (id interno, ver componente) */
  icono: 'peluqueria' | 'barberia' | 'spa' | 'unas' | 'maquillaje';
}

export const servicios: Servicio[] = [
  {
    nombre: 'Peluquería',
    descripcion: 'Color, corte y peinado con acabado de salón.',
    items: ['Color', 'Corte', 'Peinado', 'Tratamientos'],
    precioDesde: null, // TODO(dueño): precio "desde" real
    icono: 'peluqueria',
  },
  {
    nombre: 'Barbería',
    descripcion: 'Corte y barba con barberos de nombre propio.',
    items: ['Corte', 'Barba'],
    precioDesde: null, // TODO(dueño): confirmar "desde" del corte solo
    icono: 'barberia',
  },
  {
    nombre: 'Spa',
    descripcion: 'Un momento para vos: relax y cuidado en un ambiente boutique.',
    items: ['Faciales', 'Tratamientos corporales', 'Relax'],
    precioDesde: null, // TODO(dueño): definir servicios y precio "desde"
    icono: 'spa',
  },
  {
    nombre: 'Uñas',
    descripcion: 'Manicura y pedicura prolijas, como te gustan.',
    items: ['Manicura', 'Pedicura', 'Esmaltado semipermanente'],
    precioDesde: null, // TODO(dueño): precio "desde" real
    icono: 'unas',
  },
  {
    nombre: 'Maquillaje y eventos',
    descripcion: 'Maquillaje y peinado profesional para tu ocasión especial.',
    items: ['Maquillaje social', 'Peinado', 'Novias y eventos'],
    precioDesde: null, // TODO(dueño): precio "desde" real
    nota: 'Paquetes de novia y eventos ↓', // ver sección propia "Eventos y bodas"
    icono: 'maquillaje',
  },
];
