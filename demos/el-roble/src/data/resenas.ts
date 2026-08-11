/**
 * Reseñas destacadas para la prueba social.
 *
 * ⚠️  DEMO / PORTFOLIO: testimonios FICTICIOS, escritos para mostrar la pieza.
 * No corresponden a clientes reales de ningún negocio.
 */

export interface Resena {
  /** Texto de la reseña. null = pendiente de cargar (muestra placeholder). */
  texto: string | null;
  /** Nombre del cliente. */
  autor: string | null;
  /** Etiqueta de contexto/servicio (guía editorial, editable). */
  tema: string;
}

export const resenas: Resena[] = [
  { texto: 'El mejor corte que me hice en años. Rápido, prolijo y sin apuro. Ya soy cliente fijo.', autor: 'Diego Ayala', tema: 'Corte' },
  { texto: 'La barba con toalla caliente es otro nivel. Se toman el tiempo y se nota.', autor: 'Rodrigo Vera', tema: 'Barba' },
  { texto: 'Sacás el turno por WhatsApp y entrás a la hora justa. Nada de esperar parado.', autor: 'Matías Duarte', tema: 'Reservas' },
];
