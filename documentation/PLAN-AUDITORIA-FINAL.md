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

**Estado: HECHO, commit `9ef3ca8`, pusheado y confirmado en producción.**
Usuario confirmó por su cuenta el estado del artifact (5/5 items en "sin
revisar").

## Fase 3 — Responsive

2 hallazgos: `resp-turnstile-warnings` (ya resuelto fuera de orden, ver
más arriba) y `resp-tabla-sticky`.

**`resp-tabla-sticky` — falso positivo del artifact, sin cambio de
código.** El hallazgo decía que la primera columna ("Capacidad") de la
tabla de /tecnologia no era sticky en mobile. Revisando
`src/components/TechStageMatrix.tsx` y su historial de git: la columna
tiene `sticky left-0` desde el commit ORIGINAL que creó el componente
(`6214384`), documentado ahí mismo como decisión explícita ("Primera
columna (capacidad) sticky... para quedar fija en el scroll horizontal
mobile"). Nunca se sacó. Verificado en vivo con Playwright (emulación
iPhone, scroll horizontal real de 200px sobre la tabla): la columna
mantiene su posición X exacta, sticky funcionando como se documentó desde
el día 1.

**Estado: verificado, sin cambio necesario.** Se marca "sin revisar" en
el artifact igual que un hallazgo resuelto, con nota explicando que no
hizo falta tocar nada — para mantener el mismo circuito de revisión del
usuario sin importar si hubo código de por medio o no.

## Fase 4 — UX/UI

Único hallazgo, `ux-logos-gap`, ya cerrado por decisión explícita del
usuario ("es intencional, dejar como está") antes de arrancar esta ronda
de fases — nada que hacer, nada que republicar.

## Fase 5 — SEO

9 hallazgos: `seo-en-title`, `seo-contacto-og`, `seo-breadcrumb-home-en`,
`seo-blog-h2`, `seo-posventa-keyword`, `seo-tecnologia-keyword-dilucion`,
`seo-basehub-longitud`, `seo-presales-en-longitud`, `seo-meta-cortas`.

**Decisión del usuario (18/9): no implementar desde acá.** El sitio ya
tiene un Plan de SEO propio (artifact dedicado, fuente de verdad para
SEO, mirror en `documentation/seo/plan-seo.md`) con su propia numeración
de fases y tareas activas — implementar estos 9 hallazgos desde la
Auditoría Final hubiera duplicado seguimiento entre dos artifacts sobre
el mismo tema (viola la regla "Camino B" que ese documento ya usa: un
solo dueño por dato). En vez de codear, se migraron los 9 hallazgos.

**Estado: HECHO, migración completa, sin código tocado en este repo
para SEO.**
- **Plan de SEO** (artifact + espejo): 9 tareas nuevas agregadas — Fase 1
  suma 1.29-1.35, Fase 3 suma 3.11-3.12. En 1.33 (title/description de
  /basehub), 1.34 (title de /en/presales) y 1.35 (4 meta descriptions
  cortas) la migración ya incluye la propuesta exacta de copy con
  antes/después que el usuario había pedido ver antes de decidir — no
  quedó como pendiente sin resolver, solo sin implementar en código
  (son cambios de metadata, no de copy visible en la página).
- **Auditoría Final** (este artifact): los 9 ítems pasan a "OK" (los 3
  que estaban en "No" con la pregunta pendiente se resuelven a OK, ya
  que la pregunta se contestó como parte de la migración) con nota
  explicando la migración y el número de tarea correspondiente en el
  Plan de SEO — no se usa "sin revisar" acá porque no hay nada que
  chequear en el sitio en vivo, es un movimiento de documentación.
- `documentation/seo/plan-seo.md` resincronizado con `markitdown` desde
  el artifact recién publicado — conserva intacto el trabajo que la otra
  sesión ya había hecho ahí el mismo día (reorden de "Activo hoy",
  seguimiento de 8.2).

## Fase 6 — Performance

3 hallazgos: `perf-hero-tecnologia`, `perf-cloudflare-script`,
`perf-psi-pendiente`. Mismo criterio que Fase 5: el Plan de SEO ya es
dueño de performance desde el 12/9 (Fase 1, tareas 1.23+) — se migra en
vez de implementar acá, pero investigando primero en vez de mover los 3
hallazgos tal cual.

**`perf-hero-tecnologia` — el hallazgo original estaba mal etiquetado.**
La auditoría lo describía como "imagen hero (LCP)" de /tecnologia
(bg-5.jpg, 68KB vs 4.7-37KB del resto). Revisando
`src/app/(es)/tecnologia/page.tsx`: esa imagen es el fondo de
`ContactSection`, la sección de contacto al FINAL de la página — no la
imagen hero. El hero real usa `PageHero` (componente compartido), ya
cubierto por 1.26/1.27. Al no ser LCP, no hace falta comparar calidad ni
generar el preview de Vercel que se había pedido — se cierra directo en
el Plan de SEO como tarea **1.36, Hecho** (sin abrir tarea activa).

**`perf-cloudflare-script` y `perf-psi-pendiente` ya tenían dueño en
1.28** (la tarea recurrente de performance con PageSpeed Insights):
- El script de Cloudflare (email-decode, sin async/defer) es el MISMO
  hallazgo que 1.28 ya tenía cerrado desde el 14/9 en su lista "Ya
  resuelto o fuera de alcance" — cero referencias en el repo, feature
  del borde de Cloudflare. No se abrió tarea nueva.
- El pedido de dar acceso a una API key para consultar PSI/CrUX de
  forma autónoma (en vez de reportes manuales) se agregó como nota
  dentro de la misma 1.28 — pendiente de que el usuario defina la API
  (PageSpeed Insights API o sumar CrUX History) y comparta la key.

**Estado: HECHO.** Plan de SEO: 1.28 actualizada con las dos notas, 1.36
agregada como Hecho. Auditoría Final: los 3 ítems pasan a "OK" con nota
explicando la migración/investigación y apuntando a la tarea
correspondiente. `documentation/seo/plan-seo.md` resincronizado.

## Fase 7 — Accesibilidad

Único hallazgo: `acc-puestos-inaccesible` (P1). La Fase 2 ya había
resuelto la mitad del problema como efecto colateral (las cards de
"Puestos" pasaron a ser tocables/enfocables), pero verificando el código
de nuevo (no se asumió cerrado) apareció la otra mitad sin resolver: el
contenido real — los nombres de los roles, ej. "Inbound Sales
Representative" — seguía con `aria-hidden="true"` permanente en la capa
de hover de `ServiceCard.tsx`, así que nunca llegaba a un lector de
pantalla sin importar el foco. Exactamente lo que pedía el hallazgo.

**Fix:** para cards sin link (como "Puestos", que no tienen una página
propia donde ese contenido viva en otro lado), se agrega una lista
`sr-only` con los roles — visualmente oculta pero presente en el árbol
de accesibilidad. Las cards con link (ej. "Ciclos" del Home) no la
necesitan: la página enlazada es el contenido real, la card es solo un
teaser visual.

**Verificado con Playwright:** el texto real de los roles aparece en el
DOM (sr-only, clip 1×1px), y el tap-to-open/close de la Fase 2 sigue
funcionando sin regresión — sin cambio visual (screenshot comparado).
`tsc`/`eslint`/`build` limpios.

**Estado: HECHO, commit `8851d29`, pusheado y confirmado en producción**
(clase `sr-only` presente en el HTML servido por basecoresales.com/preventa).
Auditoría Final: `acc-puestos-inaccesible` pasa a "sin revisar" (es un
cambio de código real, a diferencia de las migraciones de SEO/Performance
que fueron solo documentación) con nota de cómo chequearlo con teclado +
lector de pantalla.

## Las 7 fases — cerradas

Con esta, las 7 fases del artifact **Auditoría Final Base Core** quedan
resueltas (implementadas, migradas al dueño correcto, o verificadas como
falso positivo/decisión ya tomada, según el caso). Detalle completo de
cada fase más arriba en este documento. Los 25 hallazgos originales del
artifact:

- **9** implementados con código real y verificados (Playwright y/o
  producción): `sp-h2-squarecta`, `sp-footer-mobile`,
  `sp-inconsistencia-home` (el outlier de Metodología), `fc-tap-no-cierra`,
  `fc-auto-reveal-scroll`, `fc-backface-overflow-venta`,
  `fc-servicecards-sin-teaser`, `resp-turnstile-warnings` (causa raíz
  real, no la hipótesis inicial), `acc-puestos-inaccesible`.
- **10** migrados a Plan de SEO, su dueño correcto para SEO y Performance
  desde el 12/9 — sin duplicar seguimiento: los 9 de SEO (Fase 1 suma
  1.29-1.35, Fase 3 suma 3.11-3.12, con la propuesta exacta de copy ya
  resuelta en 3 de ellos) más `perf-psi-pendiente` (anotado en la tarea
  recurrente 1.28).
- **2** verificados como falsos positivos del artifact original, sin
  cambio de código necesario: `resp-tabla-sticky`, `perf-hero-tecnologia`
  (este último cerrado como 1.36 en el Plan de SEO).
- **1** evaluado y descartado por desproporción de alcance:
  `fc-aria-expanded`.
- **3** explícitamente "no tocar" por decisión del usuario o ya resueltos
  en otro lado: `sp-h1-home`, `ux-logos-gap`, `perf-cloudflare-script`
  (este último ya cerrado en 1.28 desde el 14/9).

**Actualización (18/9, posterior al cierre):** el usuario generó su propia
API key de PageSpeed Insights y la guardó en
`~/.config/basecoreweb-seo/psi-api-key`. Se agregó `scripts/seo/psi.py`
(commit `61931b6`, mismo patrón que `ga4.py`/`gsc.py`) y quedó verificado
contra basecoresales.com real. La primera corrida encontró una regresión
real de LCP en mobile de Home (~3.8s → ~5.0-5.2s desde el 14/9,
consistente en dos corridas, no ruido de laboratorio) — anotada en la
tarea 1.28 del Plan de SEO, sin investigar la causa todavía. Con esto,
el único pendiente que quedaba fuera de este repo también se resolvió.
