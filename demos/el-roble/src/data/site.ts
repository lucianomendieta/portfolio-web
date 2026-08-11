/**
 * FUENTE ÚNICA DE DATOS del negocio.
 * Todo lo editable vive acá: teléfonos, links, horario, textos clave.
 * Los componentes importan desde este archivo — no hardcodear datos en el markup.
 *
 * ⚠️  DEMO / PORTFOLIO: "El Roble" es una marca FICTICIA y todos los datos
 * (teléfonos, dirección, redes, reseñas) son inventados para mostrar la pieza.
 * No corresponden a ningún negocio real.
 */

export const site = {
  nombre: 'El Roble',
  rubro: 'Barbería',
  zona: 'Centro',

  // --- Contacto (números ficticios de demostración) ---
  reservasWhatsApp: {
    // Botón principal de reserva -> WhatsApp con mensaje precargado.
    numero: '595971555200',
    mensaje: 'Hola! Quiero reservar un turno.',
  },
  contactoGeneral: {
    numero: '595971555200',
  },
  email: 'hola@elroble.demo',

  // --- Dirección / ubicación (ficticia) ---
  direccion: {
    calle: 'Palma 512 c/ 14 de Mayo',
    barrio: 'Centro',
    ciudad: 'Asunción',
    codigoPostal: '001311',
    pais: 'PY',
    // Sin Place ID real: es una demo. El mapa usa la dirección como query.
    googlePlaceId: '',
  },

  // --- Horario ---
  horario: {
    resumen: 'Martes a sábado, de 10 a 20 hs · Domingo y lunes cerrado',
    // Formato para schema.org openingHours (ISO day + 24h).
    dias: [
      { desde: 'Tuesday', hasta: 'Saturday', abre: '10:00', cierra: '20:00' },
    ],
  },

  // --- Prueba social (ficticia) ---
  rating: {
    valor: '4.8',
    cantidad: 176,
    googleMapsUrl: '',
  },

  // --- Redes (ficticias) ---
  redes: {
    instagram: 'https://instagram.com/elroble.barber',
    instagramHandle: '@elroble.barber',
    facebook: '',
  },

  // --- Imagen del hero (fondo de la portada) ---
  // Pegá la foto en /public/img/hero.jpg y poné la ruta acá ('/img/hero.jpg').
  // Recomendado: horizontal 2000×1333 (3:2), WebP/JPG optimizado < 300 KB.
  // Si queda vacío (''), el hero usa el fondo con degradado (fallback).
  heroImage: '/img/hero.jpg',

  // --- SEO ---
  seo: {
    title: 'El Roble — Barbería en el Centro',
    description:
      'Barbería en el Centro. Corte, barba y perfilado con turno por WhatsApp. Entrás, te atienden y salís listo.',
    ogImage: '/img/og-el-roble.jpg',
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
