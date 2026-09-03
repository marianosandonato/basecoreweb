# SEO — Lista de acciones

Cada acción referencia su hallazgo completo en `SEO-AUDIT.md` (mismo ID). Prioridad y esfuerzo como los definió `web-lead`; el texto/copy final de cada una vive en `SEO-CONTENT-CHANGES.md` o `SEO-TECHNICAL-CHANGES.md` según corresponda — este documento es el índice de qué hacer, no el cómo.

Convención: **Prioridad** Critical/High/Medium/Low · **Esfuerzo** bajo/medio/alto.

---

### H-1 — Arreglar el H1 de Home (ES y EN): eliminar el `<br />` que rompe la palabra

- **Página:** `/`, `/en`.
- **Problema:** `textContent` del H1 da "Consultoría Comercialy Marketing" (ES) / "Commercial & MarketingConsulting" (EN) por un `<br />` puesto entre dos palabras sin espacio.
- **Solución:** replicar el patrón de `src/components/PageHero.tsx` (líneas por separado con espacio explícito entre segmentos, salto de línea resuelto por CSS, no por `<br />` a mano).
- **Prioridad:** High. **Esfuerzo:** Bajo.
- **Dependencias:** ninguna.
- **Detalle técnico:** `SEO-TECHNICAL-CHANGES.md#T-2`. **Detalle de copy exacto:** `SEO-CONTENT-CHANGES.md#C-1`.

### H-2 — Cerrar el antecedente del menú "Venta" (no requiere desarrollo)

- **Página:** header desktop/mobile, footer, Contacto/E-book.
- **Problema reportado originalmente:** inconsistencia singular/plural o entre desktop y mobile.
- **Estado verificado:** consistente en las 5 ubicaciones revisadas — "Venta" singular en todas, mismo link. No se encontró ninguna inconsistencia en la producción actual.
- **Acción:** confirmar con Mariano que puede cerrarse. Si tiene una captura/URL específica que muestre lo contrario, revisar de nuevo contra esa evidencia puntual.
- **Prioridad:** N/A. **Esfuerzo:** N/A.
- **Dependencias:** ninguna.

### A-1 — Agregar labels accesibles a los campos de Contacto y E-book

- **Página:** `/contacto`, `/en/contact`, `/ebook`, `/en/ebook`.
- **Problema:** `nombre`, `apellidos`, `empresa`, `whatsapp`, `email` (y `mensaje` en Contacto) solo tienen `placeholder`, sin `<label>` ni `aria-label`. El `<select>` de servicio ya está bien resuelto (tiene `aria-label`) — replicar ese patrón en los inputs/textarea.
- **Solución:** agregar `aria-label` (mismo texto que hoy tiene el placeholder, vía la misma variable `t.name`/`t.lastName`/etc. que ya existe) a cada input/textarea en `ContactForm.tsx` y `EbookForm.tsx`. No requiere cambiar el diseño visual.
- **Prioridad:** High. **Esfuerzo:** Bajo.
- **Dependencias:** ninguna. Mismo fix aplicado en 2 componentes.
- **Detalle técnico:** `SEO-TECHNICAL-CHANGES.md#T-3`.

### T-1 — `<html lang>` correcto en `/en/*` desde el HTML del servidor

- **Página:** todas las rutas `/en/*`.
- **Problema:** el servidor siempre manda `lang="es"`; se corrige a `"en"` recién en el cliente vía `useEffect`, después de la hidratación.
- **Solución:** requiere un spike de investigación de Next.js 16 antes de decidir el enfoque (route group propio para `/en` con su root layout, vs. otra estrategia que no exista todavía en el conocimiento previo del modelo — leer `node_modules/next/dist/docs/` primero). No implementar un parche cliente-only: no resuelve el problema real.
- **Prioridad:** High. **Esfuerzo:** Medio-Alto.
- **Dependencias:** decisión conjunta `web-lead` + `performance` sobre el trade-off de renderizado antes de tocar código. Es el único ítem de esta lista que necesita ese paso previo.
- **Detalle técnico:** `SEO-TECHNICAL-CHANGES.md#T-1`.

### C-2 — Agregar H2 a la sección "Metodología" de Home

- **Página:** `/`, `/en`.
- **Problema:** 4 H3 (Diagnóstico/Plan de Ruta/Estrategia/Mejora Continua) sin H2 que los agrupe — salto de jerarquía de headings.
- **Solución:** agregar un `<h2>` (con el patrón `SectionHeading` que ya usa el resto de la página) antes del `MethodologyGrid`.
- **Prioridad:** Medium. **Esfuerzo:** Bajo.
- **Dependencias:** el texto exacto del H2 lo define `seo-marketing` (ver `SEO-CONTENT-CHANGES.md#C-2`) antes de implementar.

### T-4 — `lastmod` del sitemap: usar fechas reales, no `new Date()`

- **Página:** `sitemap.xml` (32 URLs).
- **Problema:** todas las URLs muestran el mismo `lastmod`, igual al momento exacto de la request — no refleja cambios reales.
- **Solución:** para posts de blog, derivar de `publishedAt`/`updatedAt` ya existente en el contenido; para páginas de servicio, una fecha estática mantenida a mano.
- **Prioridad:** Medium. **Esfuerzo:** Bajo-Medio.
- **Dependencias:** ninguna, pero conviene resolverlo junto con cualquier cambio futuro a `src/content/blog/posts.ts`.

### T-5 — Fortalecer indexación de `/basehub`

- **Página:** `/basehub`.
- **Problema:** GSC reporta "Crawled - currently not indexed" (vs. `/en/basehub`, que sí está indexado).
- **Solución:** más enlaces internos entrantes + mayor profundidad de contenido único. No es un fix de código de una línea — coordinar con la estrategia ya prevista en el artifact "BaseHub en el sitio" (ver `CLAUDE.md`) antes de actuar, para no duplicar esa planificación.
- **Prioridad:** Medium. **Esfuerzo:** Medio.
- **Dependencias:** la estrategia general de BaseHub-en-el-sitio (documento separado, en definición). Este ítem es un subconjunto técnico de esa estrategia, no algo a resolver de forma aislada.

### C-3 — Enlazar `/ebook` desde páginas de servicio afines

- **Página:** `/preventa`, `/venta` (origen) → `/ebook` (destino). Mismo patrón EN.
- **Problema:** `/ebook` y `/en/ebook` tienen un único enlace interno entrante (el teaser de Home).
- **Solución:** agregar 1-2 enlaces contextuales con anchor text natural desde `/preventa` y/o `/venta` (el e-book se llama "Proceso de Ventas desde Cero", temática afín).
- **Prioridad:** Medium. **Esfuerzo:** Bajo.
- **Dependencias:** el anchor text final lo valida `seo-marketing`.

### C-4 — Ajustar title/description de `/basehub` y title de `/blog`

- **Página:** `/basehub`, `/en/basehub`, `/blog`, `/en/blog`.
- **Problema:** `/basehub` con title (61c) y description (167c) por encima del rango seguro; `/blog` con title genérico sin keyword ("Blog – Base Core Sales").
- **Solución:** acortar `/basehub`; reescribir title de `/blog` con una keyword del Mapa de Keywords vigente.
- **Prioridad:** Medium. **Esfuerzo:** Bajo.
- **Dependencias:** `seo-marketing` valida la keyword exacta contra el Mapa de Keywords real antes de escribir el texto final.

### T-6 — Agregar imagen Open Graph a `/blog`, `/en/blog`, `/tecnologia`, `/en/tecnologia`

- **Página:** las 4 listadas.
- **Problema:** sin `openGraph.images` — comparten sin imagen de preview.
- **Solución:** mismo criterio ya aplicado a `/basehub`/`/en/basehub` (commit `4ba89ee`) — elegir una imagen representativa existente o nueva.
- **Prioridad:** Low. **Esfuerzo:** Bajo.
- **Dependencias:** ninguna.

### T-7 — Colapsar el redirect de doble salto en el apex sin www

- **Página:** `http://basecoresales.com` (fuera del repo — config de DNS/Cloudflare).
- **Problema:** `http://basecoresales.com` → `https://basecoresales.com` → `https://www.basecoresales.com` (2 saltos).
- **Solución:** a definir por `performance` (no es código de la app).
- **Prioridad:** Low. **Esfuerzo:** Bajo.
- **Dependencias:** agente `performance`.

### C-5 — (No accionar todavía) Slug en inglés de `/en/tecnologia`

- **Página:** `/en/tecnologia`.
- **Problema:** única ruta EN que no tradujo el slug al inglés.
- **Decisión:** explícitamente NO migrar ahora — el costo (301 + hreflang + riesgo sobre una URL ya indexada) supera el beneficio con el tráfico EN actual. Documentado como oportunidad futura únicamente.
- **Prioridad:** Low, no accionable en este ciclo.

---

## Fuera de alcance de esta lista (oportunidad de contenido, no defecto)

- **FAQPage schema / contenido de preguntas frecuentes** en páginas de servicio — requiere contenido real, no inventado. Queda como iniciativa a evaluar por `seo-marketing`, no como acción de esta auditoría.
