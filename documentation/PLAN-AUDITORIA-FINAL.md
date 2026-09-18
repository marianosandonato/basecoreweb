# Plan de cambios — Auditoría Final Base Core

Fuente viva: artifact **Auditoría Final Base Core**
https://claude.ai/artifact/UEjSoqWNxP1AdJivCmWUEA

**Regla de trabajo acordada (18/9):** se ejecuta **fase por fase**, en el
mismo orden de categorías del artifact (Spacing, Flip Cards, Responsive,
UX/UI, SEO, Performance, Accesibilidad). Al cerrar una fase: se implementan
los cambios, se pasa cada ítem tocado de "OK" a **"sin revisar"** en el
artifact con una nota simple de cómo/dónde chequearlo, se publica el
artifact UNA sola vez por fase (no por ítem), y se le manda un resumen al
usuario antes de arrancar la fase siguiente.

Este archivo es un espejo de progreso — el artifact es la fuente de verdad
para el estado de cada hallazgo (botones OK/No/Sin revisar + notas).

## Nota de arquitectura (18/9)

El sitio auditado (basecoresales.com) vive en **este repo** (`basecoreweb`),
no en `basehub` (el dashboard interno de Base Core, repo separado). La
sesión que retomó esta auditoría arrancó por error en `basehub` — este
archivo y todo el trabajo de la auditoría se hacen acá.

Los hallazgos de **SEO** y **Performance** de este artifact se cruzan
contra `documentation/seo/plan-seo.md` (Plan de SEO, fuente de verdad
aparte, ver `CLAUDE.md`) antes de tocar nada, para no duplicar ni reabrir
tareas que ya tienen dueño ahí (regla "Camino B").

Verificación en vivo con browser (`/browse`, Aside/gstack) **no disponible
en este entorno**: Chromium headless falla por sandboxing de Linux
(`No usable sandbox!`). La verificación de cada cambio la hace el usuario
directamente (local con `npm run dev`, o contra basecoresales.com/un
preview de Vercel) siguiendo la nota de "cómo chequear" que se agrega a
cada ítem.

## Estado de los 25 hallazgos al arrancar (18/9)

**Ya implementados en una sesión previa (sin tocar de nuevo):**
- `sp-h2-squarecta` — H2 de SquareCta bajado a 45px.
- `sp-footer-mobile` — texto de "Servicios" del footer subido a 18px.

**Explícitamente "no tocar" (decisión ya tomada por el usuario):**
- `sp-h1-home` — jerarquía intencional del H1 de Home.
- `ux-logos-gap` — gap:0 del grid de logos es intencional.
- `perf-cloudflare-script` — "no hacer nada con esto".

**Reclasificados de "No" a pedido real** (el chip decía "No" pero la nota
del usuario pide una acción concreta, no un descarte — confirmado con el
usuario antes de tocar código):
- `fc-auto-reveal-scroll` + `fc-backface-overflow-venta` — el auto-flip por
  scroll es inconsistente (no siempre dispara), abrupto, y se pierde al
  volver a scrollear hacia arriba. Pedido: que esté siempre presente
  (ida y vuelta) y sea menos abrupto.
- `fc-servicecards-sin-teaser` — pedido explícito de sumar el mismo
  teaser/flip automático a ServiceCards (Home + Preventa/Venta/Posventa).
- `resp-turnstile-warnings` — bug real, no solo warnings: en mobile el
  captcha a veces no aparece y a veces se queda procesando sin resolver
  — **el formulario de contacto no funciona en ese caso**. Prioridad
  elevada a P1 de facto por impacto (bloquea conversión), aunque el
  artifact lo tenga como P3.

**Pendientes de decisión/alcance antes de codear:**
- `sp-inconsistencia-home` — ver respuesta de spacing más abajo.
- `seo-basehub-longitud`, `seo-presales-en-longitud`, `seo-meta-cortas` —
  el usuario pidió ver la propuesta exacta de copy (acortado/agregado) y
  entender si es visible en la página o solo metadata, antes de aplicar.
- `perf-hero-tecnologia` — pidió un preview de Vercel para comparar
  calidad de imagen antes de decidir.
- `perf-psi-pendiente` — no es un cambio de código: pidió dar acceso a
  una API key (PageSpeed Insights / CrUX) para poder consultar Core Web
  Vitals de forma autónoma, en vez de depender de reportes manuales —
  cruza con la tarea 1.28 del Plan de SEO.

**Listos para implementar tal cual (OK, sin nota o nota de check):**
`fc-tap-no-cierra`, `fc-aria-expanded`, `resp-tabla-sticky`,
`seo-en-title`, `seo-contacto-og`, `seo-breadcrumb-home-en`,
`seo-blog-h2`, `seo-posventa-keyword`, `seo-tecnologia-keyword-dilucion`,
`acc-puestos-inaccesible`.

## Fase 1 — Spacing y Márgenes

**Respuesta a la pregunta del usuario** (¿ayuda a performance homologar
todo el spacing, o mejor arreglar 2-3 márgenes puntuales?): no impacta
performance — son valores de padding, no afectan Core Web Vitals de forma
medible. Es un tema 100% visual/de consistencia. Coincide con la lectura
del usuario: mejor arreglar los outliers puntuales que rehacer el sistema.

Candidato encontrado en el código actual (no en los números del artifact,
que quedaron desactualizados por 3 commits posteriores al 14/9 que tocaron
spacing): la sección **Metodología** de Home usa `dt:pt-[110px]` — es el
único valor de padding "110" en toda la Home; el resto de las secciones
comparten 50, 70, 90, 75, 120 y 0 (varios repetidos, varios ya
documentados como intencionales en comentarios del código). Sin datos de
performance en juego, no arriesgado bajarlo a 90 para que empareje con
Empresas/TechnologyBlock/BaseHubTeaser/Blog (todas 90/90) — pero es un
cambio visual, así que se ejecuta recién con el OK explícito del usuario.

**Estado: en espera de confirmación del usuario para ejecutar.**

## Fase 2 en adelante

Sin empezar — se define el alcance de cada una al cerrar la anterior,
según lo que el usuario confirme en Fase 1.
