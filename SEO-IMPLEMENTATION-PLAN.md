# SEO — Plan de implementación (orden recomendado)

Este documento define el **orden** de ejecución cuando Mariano apruebe implementar los hallazgos de `SEO-AUDIT.md`. No es una nueva auditoría — cruza `SEO-ACTIONS.md`, `SEO-CONTENT-CHANGES.md` y `SEO-TECHNICAL-CHANGES.md` en una secuencia con sus dependencias reales.

**Regla vigente del proyecto a respetar en toda esta secuencia:** SEO y performance nunca se trabajan al mismo tiempo sobre el sitio (mismo riesgo de pisarse, ver `HANDOFF.md`). Esto afecta en particular la etapa 3 de abajo.

---

## Etapa 0 — Confirmación con Mariano antes de tocar código

- Cerrar formalmente `H-2` (menú "Venta") como resuelto, o pedirle la evidencia puntual que contradiga lo verificado en esta auditoría.
- Confirmar que `seo-marketing` tiene acceso real y actualizado al Plan de SEO y al Mapa de Keywords antes de que empiece a redactar el copy de las etapas 2 y 4 (esta auditoría no pudo leerlos directamente — ver limitación al inicio de `SEO-AUDIT.md`).

No bloquea el resto — puede correr en paralelo con la etapa 1.

---

## Etapa 1 — Fixes técnicos independientes, bajo esfuerzo, sin dependencias de copy

Estos cuatro no necesitan texto nuevo de `seo-marketing` ni tocan performance — pueden implementarse y validarse en una sola tanda:

1. **`T-2` / `H-1`** — H1 de Home ES+EN sin `<br />` que rompa palabras. (El texto visible no cambia — es el de menor riesgo de toda la lista.)
2. **`T-3` / `A-1`** — `aria-label` en los campos de `ContactForm.tsx` y `EbookForm.tsx`.
3. **`T-6`** — imagen OG en `/blog`, `/en/blog`, `/tecnologia`, `/en/tecnologia` (elegir imagen existente reutilizable primero, para no depender de un asset nuevo).

**Por qué van primero:** son los tres cambios de mayor severidad (`H-1`, `A-1`) o de settling rápido (`T-6`) con menor esfuerzo y cero dependencias — el mejor ratio impacto/riesgo de todo el plan.

**Validación de esta etapa:** Playwright contra producción (desktop + mobile) verificando `textContent` del H1 y nombre accesible de los campos de formulario, según lo descrito en `SEO-TECHNICAL-CHANGES.md#T-2` y `#T-3`. `npm run build` + `npm run lint` antes de cualquier deploy.

---

## Etapa 2 — Copy/estructura que depende de `seo-marketing` (puede correr en paralelo a la Etapa 1)

`seo-marketing` redacta y valida (contra el Mapa de Keywords real) el texto de:

1. **`C-2`** — eyebrow + H2 de la sección "Metodología" de Home.
2. **`C-3`** — anchor text de los nuevos enlaces internos `/preventa` → `/ebook` y `/venta` → `/ebook` (y equivalentes EN).
3. **`C-4`** — title/description recortados de `/basehub`/`/en/basehub`, y title nuevo de `/blog`/`/en/blog`.

Una vez que ese copy está confirmado, la implementación técnica correspondiente (`T-5` para el H2, edición de `src/content/preventa.ts`/`venta.ts` para los enlaces, edición de los `metadata` de `basehub`/`blog` para los titles) es de bajo esfuerzo y puede agruparse en un solo PR de "contenido/metadata".

**Dependencia dura:** no implementar el texto final sin que `seo-marketing` lo haya cruzado contra el Mapa de Keywords vigente — es la única etapa de este plan con esa restricción.

---

## Etapa 3 — `lastmod` del sitemap (`T-4`)

Independiente del resto, pero de menor prioridad que las etapas 1-2. Conviene resolverlo junto con cualquier trabajo futuro sobre `src/content/blog/posts.ts` (agregar `updatedAt`, etc.) en vez de como un cambio aislado — si no hay un trabajo de blog planeado en el corto plazo, puede hacerse solo (es autocontenido, un archivo, `src/app/sitemap.ts`).

---

## Etapa 4 — Spike de `T-1` (`<html lang>` en `/en/*`)

Este es el único ítem del plan que **no** se puede planificar en detalle todavía — requiere investigación antes de comprometerse a un enfoque:

1. `web-lead` (o quien implemente) lee las guías de Next.js 16 relevantes en `node_modules/next/dist/docs/` sobre layouts anidados, route groups y metadata por segmento — **antes** de asumir que un enfoque específico existe o funciona igual que en versiones anteriores.
2. Se documentan las 2-3 opciones reales que ofrece esta versión de Next.js (no las 3 hipotéticas listadas en `SEO-TECHNICAL-CHANGES.md#T-1`, que son puntos de partida, no la respuesta final).
3. Se comparte con `performance` el trade-off de cada opción (en particular, si alguna implica volver dinámica una sección hoy estática) antes de elegir.
4. Recién ahí se implementa, con su propia validación (`curl` sin JS sobre `/en` y al menos una ruta anidada).

**Por qué va al final y no antes:** es el único cambio de este plan con esfuerzo Medio-Alto y una decisión de arquitectura pendiente — no debe bloquear los quick wins de las etapas 1-3, que ya están completamente especificados y pueden salir mucho antes.

---

## Etapa 5 — `T-5` / `T-7` (indexación de `/basehub`, redirect apex sin www)

- **`T-5`** (indexación de `/basehub`) no es un cambio puntual — mejora como consecuencia de `C-3`-equivalente para BaseHub (más enlaces internos) y de la estrategia más amplia ya prevista en el artifact "BaseHub en el sitio" (`CLAUDE.md`). No tiene una fecha de "listo", es una tendencia a monitorear con `scripts/seo/gsc.py inspect` después de cada mejora de linking/contenido relacionada con BaseHub.
- **`T-7`** (redirect doble salto) queda enteramente en manos de `performance` — no requiere coordinación con el resto de este plan, pueden resolverlo cuando les convenga.

---

## Resumen del orden

1. **Etapa 1** (H1, formularios, OG images) — arrancar primero, sin dependencias, mayor severidad/esfuerzo más bajo.
2. **Etapa 2** (copy validado por `seo-marketing`) — en paralelo a la Etapa 1.
3. **Etapa 3** (`lastmod`) — cuando convenga, idealmente junto a trabajo de blog.
4. **Etapa 4** (spike + fix de `html lang`) — al final, es la única con investigación pendiente y coordinación cross-agente.
5. **Etapa 5** (indexación de BaseHub, redirect de dominio) — trabajo continuo/de otro agente, no bloquea nada de lo anterior.

No implementar la Etapa 4 en la misma ventana de trabajo que cualquier cambio de `performance` (regla general del proyecto). El resto de las etapas no tiene esa restricción entre sí.
