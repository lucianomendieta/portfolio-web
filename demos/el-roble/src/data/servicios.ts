/**
 * Líneas de servicio (demo El Roble).
 * Sin menú de precios cerrado: `precioDesde: null` muestra "Precio a consultar".
 */

export interface Servicio {
  /** Nombre de la línea (ej. "Corte") */
  nombre: string;
  /** Bajada corta de la línea */
  descripcion: string;
  /** Sub-servicios incluidos (chips) */
  items: string[];
  /**
   * Precio "desde" en guaraníes como texto ya formateado (ej. "80.000 Gs"),
   * o null si no está definido -> se muestra placeholder.
   */
  precioDesde: string | null;
  /** Nota opcional */
  nota?: string;
  /** Ícono decorativo (id interno, ver componente) */
  icono: 'corte' | 'barba' | 'combo' | 'perfilado';
}

export const servicios: Servicio[] = [
  {
    nombre: 'Corte',
    descripcion: 'Corte a máquina y tijera, lavado y peinado.',
    items: ['Corte clásico', 'Corte moderno', 'Lavado'],
    precioDesde: null,
    icono: 'corte',
  },
  {
    nombre: 'Barba',
    descripcion: 'Arreglo y afeitado con toalla caliente.',
    items: ['Perfilado', 'Afeitado a navaja', 'Toalla caliente'],
    precioDesde: null,
    icono: 'barba',
  },
  {
    nombre: 'Corte + Barba',
    descripcion: 'El combo completo, listo para salir.',
    items: ['Corte', 'Barba', 'Terminado'],
    precioDesde: null,
    nota: 'El más pedido',
    icono: 'combo',
  },
  {
    nombre: 'Diseño y perfilado',
    descripcion: 'Líneas, contornos y detalle a máquina.',
    items: ['Line-up', 'Contornos', 'Diseños'],
    precioDesde: null,
    icono: 'perfilado',
  },
];
