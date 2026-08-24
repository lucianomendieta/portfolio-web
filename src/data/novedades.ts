export type TagNovedad = 'cliente' | 'producto' | 'novedad';

export interface Novedad {
  fecha: string;       // formato "Ago 2026"
  tag: TagNovedad;
  titulo: string;
  cuerpo: string;
  link?: { label: string; href: string };
}

export const novedades: Novedad[] = [
  {
    fecha: 'Ago 2026',
    tag: 'cliente',
    titulo: 'Presencia digital para Koddy Restobar',
    cuerpo:
      'Le armamos a Koddy Restobar un link único con su menú, ubicación y pedidos por WhatsApp, además de sus redes sociales (Instagram y Facebook) y un catálogo digital para que cualquiera lo vea sin tener que pedirlo.',
    link: { label: 'Ver linktree', href: 'https://koddylambare.taplink.site/' },
  },
];
