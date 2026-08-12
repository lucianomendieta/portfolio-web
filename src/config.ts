// ============================================================
// CONFIG DEL SITIO
// ============================================================

// ⚠️ TODO(luchii): REEMPLAZAR EL NÚMERO DE WHATSAPP.
// Placeholder actual: 595000000000 (código PY + número, sin "+", sin espacios).
// Este único valor alimenta el CTA del Hero y el CTA final — cambialo acá una
// sola vez y queda actualizado en los dos lugares del sitio.
const WHATSAPP_NUMBER = '595992266419';

// Mensaje precargado que aparece escrito al abrir el chat.
const WHATSAPP_MESSAGE = 'Hola Luciano, tengo un negocio y quiero armar mi web.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

// ⚠️ TODO(luchii): REEMPLAZAR por tu URL real de LinkedIn.
export const LINKEDIN_URL = 'https://www.linkedin.com/in/luciano-mendieta-aa05813a4/';

// Kuarahy Tech — estudio de software que cofundás (respaldo de empresa).
// TODO(luchii): reemplazar por el dominio real (.com.py) cuando esté listo.
export const KUARAHY_URL = 'https://kuarahy-tech.vercel.app';

// Metadatos del sitio (SEO / OG).
export const SITE = {
  title: 'Luciano Mendieta — Desarrollador web en Asunción, PY',
  description:
    'Desarrollador web independiente en Asunción, PY. Armo sitios rápidos y claros para tu negocio. Con el respaldo de Kuarahy Tech. Escribime por WhatsApp.',
  lang: 'es',
  locale: 'es_PY',
  ogImage: '/og.png', // TODO(luchii): agregar imagen OG real en /public/og.png (1200×630).
} as const;
