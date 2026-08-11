/**
 * Carta de servicios (demo El Roble), armada como pizarra de precios de
 * barbería: grupos con sub-ítems. Sin menú de precios cerrado:
 * `precioDesde: null` muestra "A consultar".
 */

export interface ServicioItem {
  /** Nombre del ítem tal como va en la carta. */
  nombre: string;
  /**
   * Precio "desde" en guaraníes como texto ya formateado (ej. "80.000 Gs"),
   * o null si no está definido -> se muestra "A consultar".
   */
  precioDesde: string | null;
  /** Bajada corta opcional (solo para ítems que la necesitan, ej. el combo). */
  descripcion?: string;
}

export interface GrupoServicio {
  /** Nombre del grupo (ej. "Corte") */
  nombre: string;
  /** Nota destacada opcional (ej. "El más pedido") */
  nota?: string;
  items: ServicioItem[];
}

export const servicios: GrupoServicio[] = [
  {
    nombre: 'Corte',
    items: [
      { nombre: 'Corte clásico', precioDesde: null },
      { nombre: 'Corte moderno', precioDesde: null },
      { nombre: 'Lavado', precioDesde: null },
    ],
  },
  {
    nombre: 'Corte + Barba',
    nota: 'El más pedido',
    items: [
      {
        nombre: 'Combo completo',
        precioDesde: null,
        descripcion: 'Corte, barba y terminado. Listo para salir.',
      },
    ],
  },
  {
    nombre: 'Barba',
    items: [
      { nombre: 'Perfilado', precioDesde: null },
      { nombre: 'Afeitado a navaja', precioDesde: null },
      { nombre: 'Toalla caliente', precioDesde: null },
    ],
  },
  {
    nombre: 'Diseño y perfilado',
    items: [
      { nombre: 'Line-up', precioDesde: null },
      { nombre: 'Contornos', precioDesde: null },
      { nombre: 'Diseños', precioDesde: null },
    ],
  },
];
