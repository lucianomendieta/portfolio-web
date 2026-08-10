/**
 * Reseñas destacadas para la prueba social.
 *
 * ⚠️  DEMO / PORTFOLIO: testimonios FICTICIOS, escritos para mostrar la pieza.
 * No corresponden a clientas reales de ningún negocio.
 */

export interface Resena {
  /** Texto de la reseña. null = pendiente de cargar (muestra placeholder). */
  texto: string | null;
  /** Nombre de la clienta. */
  autor: string | null;
  /** Etiqueta de contexto/servicio (guía editorial, editable). */
  tema: string;
}

export const resenas: Resena[] = [
  { texto: 'Muy buena atención y el color me quedó exactamente como quería. Vuelvo siempre.', autor: 'Lucía Fernández', tema: 'Peluquería' },
  { texto: 'El spa es un lujo para el precio. Salgo relajada cada vez.', autor: 'Martina Gómez', tema: 'Spa' },
  { texto: 'Rápido, prolijo y sin vueltas para sacar turno. Recomendado.', autor: 'Sofía Ramírez', tema: 'Reservas' },
];
