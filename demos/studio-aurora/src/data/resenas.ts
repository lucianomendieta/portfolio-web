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
  { texto: 'La atención es increíble. Me maquillaron y peinaron para una boda y quedó todo perfecto. Súper amables y detallistas de principio a fin.', autor: 'Lucía Fernández', tema: 'Ambiente y atención' },
  { texto: 'Tienen spa, masajes y peluquería en un mismo lugar. El servicio de color es buenísimo y el ambiente invita a quedarse. Muy recomendable.', autor: 'Martina Gómez', tema: 'Spa' },
  { texto: 'Excelente lugar, la atención de primera. Salí feliz con mi corte y ya reservé para el mes que viene. 10/10.', autor: 'Sofía Ramírez', tema: 'Peluquería' },
];
