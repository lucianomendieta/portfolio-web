// ============================================================
// CONFIG DEL SITIO
// ============================================================

const WHATSAPP_NUMBER = '595992266419';

// Mensaje precargado que aparece escrito al abrir el chat.
const WHATSAPP_MESSAGE = 'Hola Luciano, tengo un negocio y quiero armar mi web.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const LINKEDIN_URL = 'https://www.linkedin.com/in/luciano-mendieta-aa05813a4/';

// Kuarahy Tech — estudio de software que confudo (respaldo de empresa).
export const KUARAHY_URL = 'https://kuarahy-tech.com.py/';

// Metadatos del sitio (SEO / OG).
export const SITE = {
  title: 'Luciano Mendieta — Desarrollador web en Asunción, PY',
  description:
    'Desarrollador web independiente en Asunción, PY. Armo sitios rápidos y claros para tu negocio. Con el respaldo de Kuarahy Tech. Escribime por WhatsApp.',
  lang: 'es',
  locale: 'es_PY',
  ogImage: '/og.png', 
} as const;
