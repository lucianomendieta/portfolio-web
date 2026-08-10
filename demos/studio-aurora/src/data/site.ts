/**
 * FUENTE ÚNICA DE DATOS del negocio.
 * Todo lo editable vive acá: teléfonos, links, horario, textos clave.
 * Los componentes importan desde este archivo — no hardcodear datos en el markup.
 *
 * ⚠️  DEMO / PORTFOLIO: "Studio Aurora" es una marca FICTICIA y todos los datos
 * (teléfonos, dirección, redes, reseñas) son inventados para mostrar la pieza.
 * No corresponden a ningún negocio real.
 */

export const site = {
  nombre: 'Studio Aurora',
  rubro: 'Peluquería, spa y barbería',
  zona: 'Barrio Norte',

  // --- Contacto (números ficticios de demostración) ---
  reservasWhatsApp: {
    // Botón principal de reserva -> WhatsApp con mensaje precargado.
    numero: '595981234567',
    mensaje: 'Hola! Quiero hacer una reserva!',
  },
  contactoGeneral: {
    numero: '595981234567',
  },
  email: 'hola@studioaurora.demo',

  // --- Dirección / ubicación (ficticia) ---
  direccion: {
    calle: 'Av. de los Jardines 1240 c/ Las Acacias',
    barrio: 'Barrio Norte',
    ciudad: 'Asunción',
    codigoPostal: '001000',
    pais: 'PY',
    // Sin Place ID real: es una demo. El mapa usa la dirección como query.
    googlePlaceId: '',
  },

  // --- Horario ---
  horario: {
    resumen: 'Lunes a sábado, de 9 a 20 hs · Domingos cerrado',
    // Formato para schema.org openingHours (ISO day + 24h).
    dias: [
      { desde: 'Monday', hasta: 'Saturday', abre: '09:00', cierra: '20:00' },
    ],
  },

  // --- Prueba social (ficticia) ---
  rating: {
    valor: '4.9',
    cantidad: 214,
    googleMapsUrl: '',
  },

  // --- Redes (ficticias) ---
  redes: {
    instagram: '',
    instagramHandle: '@studioaurora',
    facebook: '',
  },

  // --- Imagen del hero (fondo de la portada) ---
  // Pegá la foto en /public/img/hero.jpg y poné la ruta acá ('/img/hero.jpg').
  // Recomendado: horizontal 2000×1333 (3:2), WebP/JPG optimizado < 300 KB.
  // Si queda vacío (''), el hero usa el fondo con degradado (fallback).
  heroImage: '/img/hero.jpg',

  // --- SEO ---
  seo: {
    title: 'Studio Aurora — Peluquería, spa y barbería',
    description:
      'Peluquería, spa y barbería en Barrio Norte. Color, corte, faciales y manicura. Reservá tu turno por WhatsApp.',
    ogImage: '/img/og-studio-aurora.jpg',
  },
} as const;

/**
 * Link de reserva armado (WhatsApp con mensaje precargado).
 *
 * PREPARADO PARA UN SAAS DE TURNOS (2ª etapa):
 * cuando exista un módulo de reservas propio, cambiar `reservaHref` para que apunte
 * a la ruta/modal del SaaS. Todos los botones "Reservar" usan esta constante,
 * así que se migra en un solo lugar, sin tocar los componentes.
 */
export const reservaHref =
  `https://wa.me/${site.reservasWhatsApp.numero}` +
  `?text=${encodeURIComponent(site.reservasWhatsApp.mensaje)}`;

/** Link de WhatsApp para consultas generales. */
export const contactoHref = `https://wa.me/${site.contactoGeneral.numero}`;

/**
 * Embed de Google Maps SIN API key (iframe clásico `output=embed`).
 * Funciona out-of-the-box con la dirección. Ventaja: cero configuración.
 */
const _mapQuery = encodeURIComponent(
  `${site.direccion.calle}, ${site.direccion.barrio}, ${site.direccion.ciudad}`,
);
export const mapsEmbedSrc = `https://maps.google.com/maps?q=${_mapQuery}&hl=es&z=17&output=embed`;

/** Link "Cómo llegar" (abre direcciones en Google Maps). */
export const comoLlegarHref = `https://www.google.com/maps/dir/?api=1&destination=${_mapQuery}`;
