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

**Estado: HECHO, commit `dd8392f`.** Usuario confirmó "sí, bajalo a 90px".
`dt:pt-[110px]` → `dt:py-[90px]` en la sección Metodología de Home.
`sp-inconsistencia-home` pasado de "No" a "sin revisar" en el artifact con
nota de cómo chequear (v11 del artifact).

## Adelanto fuera de orden — bug real de Turnstile en mobile

El usuario pidió priorizar `resp-turnstile-warnings` (fase Responsive) antes
de terminar Spacing/Flip Cards, por su impacto real: en mobile el widget de
Turnstile podía quedar colgado para siempre (script bloqueado, challenge sin
resolver, o error de render) sin ningún mensaje ni forma de reintentar — el
formulario de contacto quedaba roto en ese caso.

**Estado: HECHO, commit `dd8392f`.** `src/components/Turnstile.tsx`:
`error-callback`/`timeout-callback` de Turnstile + catch en la carga del
script + link "¿No cargó la verificación? Reintentar" a los 12s que remonta
el widget. `resp-turnstile-warnings` pasado de "No" a "sin revisar" en el
artifact con nota de cómo chequear (v11 del artifact).

`npm run lint`/`npx tsc --noEmit`/`npm run build` limpios para los dos
archivos tocados (el ruido de lint del resto del repo viene de un worktree
viejo con `.next` builds indexados, no de este cambio). Sin verificación
interactiva en navegador real (sandbox de Chromium no disponible en este
entorno) — el usuario verifica siguiendo la nota de cada ítem en el artifact.

### Corrección (18/9): el fix de arriba no alcanzaba — causa raíz real encontrada

Mariano probó en su iPhone real y el captcha seguía sin funcionar. El fix de
`dd8392f` solo cubría fallos que Turnstile reporta con sus propios callbacks
(`error-callback`/`timeout-callback`) — pero el caso real no dispara
ninguno de los dos.

**Investigación (`/investigate`):** reproducido con Playwright headless
(`--no-sandbox`, emulación iPhone 13 y desktop) contra basecoresales.com en
producción: el pedido interno de Turnstile a
`challenges.cloudflare.com/cdn-cgi/challenge-platform/...` se aborta con
warning "No available adapters", igual en mobile que en desktop headless —
eso descartó la hipótesis "es específico de mobile" (es Cloudflare
detectando automatización, funcionando como debería). El dato real vino de
Mariano: en su iPhone/Safari real el checkbox aparece pero queda girando
para siempre, sin el link de reintentar. Confirmado por research (Cloudflare
Community + foros de Apple): es un conflicto **documentado y sin resolver**
entre Turnstile e **iCloud Private Relay / "Evitar rastreo entre sitios"**
de Safari — el challenge administrado queda colgado sin disparar ningún
callback de error, por eso el fix anterior no lo detectaba.

**Decisión de Mariano:** no se puede arreglar Turnstile desde acá (no
depende de nuestro código ni es controlable desde el visitante). Se acepta
más riesgo de spam a cambio de no perder ningún lead real: si el widget
queda confirmado colgado (temporizador propio de 12s, independiente de los
callbacks de Turnstile), el formulario se habilita para enviar sin token
verificado, con el honeypot existente como único filtro anti-spam para ese
caso puntual.

**Estado: HECHO, sin commitear todavía.**
- `src/components/Turnstile.tsx`: nuevo prop `onStuck` que avisa al padre
  apenas se confirma el cuelgue (timer propio, o los callbacks de Turnstile
  cuando sí disparan) — ya no depende de que Cloudflare reporte el error.
- `src/components/ContactForm.tsx` + `src/components/EbookForm.tsx`: nuevo
  estado `captchaStuck`; el botón de submit se habilita si hay token real
  **o** si el widget quedó confirmado colgado. Mensaje inline (ES/EN)
  explicando que puede enviar igual.
- `src/lib/turnstile.ts`: `verifyTurnstile` ahora falla abierto (`true`)
  cuando no llega ningún token (antes rechazaba con 400) — un token que sí
  llega se sigue validando estrictamente contra la API de Cloudflare, sin
  cambios ahí.
- Verificado end-to-end con Playwright local (`npm run dev`, viewport
  mobile 390×844, site key real de Vercel): botón deshabilitado en t=0,
  mensaje "No pudimos verificar..." visible y botón habilitado en t=13s,
  POST a `/api/contact` pasa la verificación de captcha (llega hasta el
  chequeo de `RESEND_API_KEY`, que no está configurado en local — esperado).
- `npx tsc --noEmit` y `npx eslint` limpios en los 4 archivos tocados;
  `npm run build` completo sin errores.

## Fase 2 — Flip Cards

Cubre los 5 hallazgos de la categoría: `fc-tap-no-cierra`,
`fc-auto-reveal-scroll`, `fc-backface-overflow-venta`,
`fc-servicecards-sin-teaser`, `fc-aria-expanded`.

**`fc-tap-no-cierra` (el segundo tap no revertía el flip) — causa raíz
real:** no era solo `:focus-within` sin toggle — reproducido con Playwright
(emulación táctil real, iPhone 13) contra el dev server: el elemento
tapeado queda además pegado en `:hover` ("sticky hover", un comportamiento
real y documentado de navegadores en touch — sin gesto de "unhover", el
`:hover` no se limpia solo). Mi primer intento de fix (toggle + `blur()`)
limpiaba `:focus-within` correctamente pero el CSS seguía abriendo la card
por `:hover`. Fix real: todas las reglas `:hover` de `.flip-box` y
`.service-card` ahora viven adentro de `@media (hover: hover)`, así que en
touch (`hover: none`) nunca aplican — el estado abierto/cerrado en touch y
teclado queda 100% controlado por `:focus-within`/la clase `--open`, que sí
puede togglear JS. Verificado con Playwright: opacity de la cara trasera
en 0 (cerrada) después del segundo tap, con `document.activeElement` ya no
apuntando a la card.

**`fc-auto-reveal-scroll` + `fc-backface-overflow-venta` (auto-flip
inconsistente/abrupto, se pierde al scrollear para arriba):** reescrito
para que el `IntersectionObserver` no se desconecte después del primer
disparo — se re-arma cada vez que la card vuelve a cruzar el 60% visible,
scrolleando en cualquier dirección. Menos abrupto: el teaser automático
ahora tiene su propia transición (más lenta, sin delay) en vez de heredar
la del tap/hover manual. Verificado con Playwright: dispara al entrar en
viewport, revierte solo, y vuelve a disparar si se scrollea fuera y de
nuevo adentro.

**`fc-servicecards-sin-teaser` (pedido: sumar el mismo mecanismo a
ServiceCards):** hecho — mismo hook compartido (`useFlipTeaser.ts`, nuevo)
que usa FlipBox, aplicado a `ServiceCards`. De paso, esto hizo falta
resolverlo para las cards de "Puestos" (sin `href`, antes ni siquiera eran
`tabIndex`-ables): ahora son focosables/tapeables con el mismo toggle —
efecto colateral necesario, no buscado, que probablemente adelanta buena
parte de `acc-puestos-inaccesible` (Fase 7); se deja la verificación final
de esa fase para cuando le toque el turno, no se la da por cerrada acá.

**`fc-aria-expanded` (opcional, P3) — evaluado y no implementado:** agregar
`aria-expanded` sobre `role="group"` es una combinación de ARIA inválida
(el linter de accesibilidad la marca: `jsx-a11y/role-supports-aria-props`).
Arreglarlo bien implicaría cambiar el rol a `button` + agregar soporte de
teclado (Enter/Espacio) para no quedar peor que antes — alcance
desproporcionado para un hallazgo marcado como opcional/impacto bajo en el
propio artifact. Queda sin tocar; se puede retomar como su propio pedido
si en algún momento se prioriza.

**Refactor de paso:** `ServiceCards.tsx` se dividió en un Server Component
(resuelve el ícono de cada card a JSX) + `ServiceCard.tsx` cliente (la
parte interactiva) — Next.js no deja pasar una referencia a función (el
ícono) de servidor a cliente sin resolverla antes.

**Verificación:** `npx tsc --noEmit`, `npx eslint` y `npm run build`
limpios. Probado end-to-end con Playwright (emulación táctil real) contra
el dev server local: tap-to-close, teaser repetible en ambas direcciones
de scroll, y el toggle de Puestos, los tres confirmados funcionando — no
solo "compila", se verificó el comportamiento real.

**Estado: HECHO, sin commitear todavía — falta el resumen al usuario y su
confirmación antes de pushear a producción.**

## Fase 3 en adelante

Sin empezar — arranca cuando el usuario confirme el resumen de Fase 2 y dé
luz verde a Responsive (fase 3 según el orden del artifact).
