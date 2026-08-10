// ============================================================
// CONFIG DEL SITIO
// ============================================================

// ⚠️ TODO(luchii): REEMPLAZAR EL NÚMERO DE WHATSAPP.
// Placeholder actual: 595000000000 (código PY + número, sin "+", sin espacios).
// Este único valor alimenta el CTA del Hero y el CTA final — cambialo acá una
// sola vez y queda actualizado en los dos lugares del sitio.
const WHATSAPP_NUMBER = '595992266419';

// Mensaje precargado que aparece escrito al abrir el chat.
const WHATSAPP_MESSAGE = 'Hola Mendieta, tengo un negocio y quiero armar mi web.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// Metadatos del sitio (SEO / OG).
export const SITE = {
  title: 'Mendieta — Webs para negocios que la gente encuentra',
  description:
    'Desarrollador web independiente en Asunción, PY. Sitios rápidos y claros para salones, barberías y comercios de barrio. Escribime por WhatsApp.',
  lang: 'es',
  locale: 'es_PY',
  ogImage: '/og.png', // TODO(luchii): agregar imagen OG real en /public/og.png (1200×630).
} as const;
