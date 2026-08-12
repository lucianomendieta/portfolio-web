# Prompt para auditar y rediseñar en Claude Design

> Pegar este brief completo en Claude Design. Pide un prototipo visual (no código):
> desktop + mobile, con las secciones y la dirección de abajo. Después volvemos a
> Claude Code y lo implementamos sobre el Astro actual.

---

## Contexto

Soy un **desarrollador web independiente en Asunción, Paraguay**. Vendo sitios web
a negocios (landing pages, mantenimiento, dominio + hosting). Además soy
**cofundador de Kuarahy Tech**, un estudio de software donde encaro proyectos más
grandes — eso me da respaldo de empresa real.

Esta página es mi **portfolio y primera impresión ante potenciales clientes**. El
objetivo concreto es **generar la mayor cantidad de contactos/ventas posibles**.
El canal de conversión es **WhatsApp** (y LinkedIn como red social secundaria).

Ya existe una versión hecha en Astro + Tailwind. La estética actual es
"editorial/arquitectónica" (fondo oscuro, tipografía serif Fraunces, anotaciones
de margen con coordenadas GPS y cotas tipo "1440px", eyebrows numerados en
monoespaciada). Es linda pero **fría, con ruido técnico y poco humana**, y le baja
credibilidad ante prospectos serios.

## Objetivo del rediseño

Que la página sea **más humana, legible y fácil de recorrer para cualquiera** — y
que **transmita seriedad y fiabilidad** para prospectos establecidos, sin perder
cercanía. Registro buscado: **"profesional cercano"**.

## Decisiones ya tomadas (respetar)

- **Jerarquía de marca:** yo (persona real) al frente; **Kuarahy Tech como
  respaldo fuerte y visible**. La página es mía, Kuarahy me da credibilidad.
- **Humano por la VOZ, no por la cara:** primera persona, lenguaje cálido y
  directo. **SIN foto** de la persona (dejar un lugar para nombre/monograma que
  completo yo). Nada de fotos de stock de personas.
- **Cero tecnicismos para el visitante.** El prospecto no sabe (ni le importa) de
  stacks. Lo técnico queda de mi lado. Sacar coordenadas GPS, cotas de píxeles,
  "carga <1s" como decoración, numeración fría de secciones.
- **Público #1:** negocios establecidos / más estructurados → debe sentirse serio
  y confiable. Público #2: comercios de barrio (barberías, salones).
- **Idioma:** español de Paraguay, voseo, tono llano y humano.
- **Demos** (Studio Aurora, El Roble): presentarlas como **proyectos de muestra
  sin disculpas** ("así trabajo"). ELIMINAR la línea "contenido inventado, sin
  clientes reales" — mata credibilidad.
- **Material real disponible hoy:** info de Kuarahy Tech + link de LinkedIn.
  Todavía NO hay testimonios, logos de clientes ni precios públicos (esos vienen
  después; dejar los espacios preparados pero no inventarlos).

## Arquitectura de la información propuesta (podés mejorarla)

1. **Hero** — nombre (placeholder) + "desarrollador web" + propuesta de valor
   clara en 1 frase + micro-mención de respaldo ("cofundador de Kuarahy Tech") +
   CTA primario WhatsApp + link LinkedIn. Sin coordenadas ni cotas.
2. **Sobre mí** — 2-3 frases en primera persona, cálidas, que expliquen quién soy
   y por qué trabajar conmigo (un solo interlocutor, sin intermediarios, respaldo
   de Kuarahy). Espacio para monograma/inicial en vez de foto.
3. **Proyectos** — sección con protagonismo:
   - **Kuarahy Tech** (destacado, da respaldo de empresa)
   - **Helpdesk** — producto propio, en desarrollo
   - **Demos**: Studio Aurora (salón) y El Roble (barbería) como muestras de trabajo
4. **Servicios** — 3 ítems orientados a beneficio, sin jerga: landing / cambios y
   mantenimiento / dominio y que esté siempre online.
5. **Proceso** — 3-4 pasos simples que reduzcan incertidumbre. Ej:
   *me contás tu negocio → te propongo cómo encararlo en el día → lo armo → queda
   online y me encargo del mantenimiento.*
6. **CTA final** — invitación cálida + WhatsApp + LinkedIn.
7. **Footer** — nombre, ubicación (Asunción, PY), LinkedIn.

## Qué corregir del diseño actual (hallazgos del audit)

- Falta presencia humana → resolver con voz en primera persona + nombre destacado.
- Kuarahy hoy es una línea perdida → darle sección/tarjeta propia.
- Ruido editorial (GPS, cotas, numeración) → quitar o suavizar mucho.
- Sin señales de confianza → agregar sección de proceso; dejar lugar para
  testimonios/precios a futuro.
- Riesgo de contraste: hoy hay textos a 0.45–0.68 de opacidad sobre oscuro →
  **garantizar contraste WCAG AA**.
- Un solo canal → sumar LinkedIn junto a WhatsApp.

## Restricciones técnicas (para que el rediseño sea implementable)

- Se va a implementar en **Astro estático + Tailwind 4 (CSS-first, design tokens)**.
- **Mobile-first** y muy rápido.
- Fuentes self-hosted actuales disponibles: Fraunces (serif display), Inter
  (cuerpo), IBM Plex Mono (mono). Se pueden reordenar o reducir su uso; se puede
  proponer una paleta más cálida/clara.
- Accesible: foco visible, respeto por `prefers-reduced-motion`, contraste AA.
- Podés mantener detalles que funcionan (cards estilo "ventana de navegador"), pero
  la dirección general puede evolucionar.

## Entregable esperado de Claude Design

- Auditoría breve de la versión actual + propuesta de dirección visual.
- **Prototipo visual (desktop y mobile)** con las secciones de arriba: paleta,
  tipografía, jerarquía, componentes clave (hero, tarjeta de proyecto, fila de
  servicio, pasos del proceso, CTA).
- Copy de ejemplo en español (PY) con el tono "profesional cercano".
- Notas de diseño (espaciados, estados de hover/foco) que faciliten el pase a código.
