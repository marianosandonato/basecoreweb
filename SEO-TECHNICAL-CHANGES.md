# SEO — Cambios técnicos

Este documento cubre markup, código y configuración — no copy (eso vive en `SEO-CONTENT-CHANGES.md`). Ningún cambio fue implementado; esto es la especificación para cuando se apruebe ejecutar.

**Regla de Next.js del proyecto:** antes de tocar cualquiera de estos archivos, leer las guías relevantes en `node_modules/next/dist/docs/` — este repo corre Next.js 16.2.10 y `documentation/AGENTS.md` advierte explícitamente que hay breaking changes respecto de versiones anteriores. Esto aplica en particular a `T-1`.

---

## T-1 — `<html lang>` correcto en `/en/*` sin depender de `useEffect`

**Archivos involucrados:** `src/app/layout.tsx`, `src/app/en/layout.tsx`, `src/components/SyncHtmlLang.tsx`.

**Problema exacto:** el root layout (`src/app/layout.tsx`) fija `<html lang="es">` de forma estática porque leer el pathname ahí (vía `headers()`) forzaría renderizado dinámico en toda la app — decisión explícita y documentada en un comentario del propio archivo. `src/app/en/layout.tsx` intenta corregirlo del lado del cliente con `SyncHtmlLang`, que hace `document.documentElement.lang = "en"` dentro de un `useEffect` — es decir, solo después de que React hidrata. El HTML que efectivamente sirve el servidor (confirmado con `curl`, sin JS) sigue diciendo `lang="es"` en todo `/en/*`.

**Por qué no alcanza con un parche rápido:** mover el `useEffect` a un lugar que corra "más temprano" (por ejemplo, un script inline bloqueante en el `<head>`) sí eliminaría el flash visual para navegadores con JS, pero **no resuelve el problema real**, que es el `lang` en el HTML *servido* — lo que ve un crawler que no ejecuta JS o cualquier herramienta de auditoría automatizada que solo lea el HTML crudo seguiría viendo `lang="es"`. Un script inline sí correría antes del primer paint, pero técnicamente reescribe el DOM del lado del cliente igual — el marcado que Google indexa vía renderizado (Googlebot sí ejecuta JS) probablemente lo vería bien, pero no resuelve la falla de WCAG 3.1.1 para el HTML crudo servido, que es lo que evalúan lectores de pantalla que no esperan hidratación y herramientas de accesibilidad que auditan HTML estático.

**Enfoques posibles a evaluar (spike, no implementar directo):**
1. **Route group con root layout propio para `/en`** — el patrón estándar de Next.js App Router para servir un `<html>` distinto por sección del sitio es tener layouts raíz separados por route group (cada uno con su propio `<html>`/`<body>`). Esto requeriría reestructurar `src/app/en/` como su propio grupo con un layout que incluya `<html lang="en">`, duplicando (o extrayendo a un componente compartido) el `<head>`/fonts/scripts que hoy vive en el root layout único. Es el enfoque más correcto pero el de mayor alcance — cambia la estructura de carpetas de todo `/en`.
2. **Generar el `lang` en build time por ruta**, si Next 16 ofrece algún mecanismo de metadata/layout por segmento que no obligue a dynamic rendering — **hay que confirmar esto leyendo `node_modules/next/dist/docs/` antes de asumir que existe**, no se puede dar por sentado desde conocimiento de versiones anteriores.
3. **Aceptar el trade-off de volver `/en` dinámico** (leer el pathname en el layout) — resuelve el problema de raíz pero renuncia al pre-renderizado estático de toda esa sección. Esto tiene implicancias de performance/build que **debe evaluar el agente `performance`** antes de decidirse, no es una decisión unilateral de SEO.

**Validación cuando se implemente:** `curl -s https://www.basecoresales.com/en | grep -o '<html[^>]*>'` debe devolver `lang="en"` sin ejecutar JavaScript. Repetir para al menos una ruta anidada (`/en/venta`... digo `/en/sales`) para confirmar que no es un caso aislado de la home EN.

**Prioridad:** High. **Esfuerzo:** Medio-Alto. **Dependencias:** decisión conjunta `web-lead` + `performance` sobre el enfoque antes de tocar código.

---

## T-2 — H1 de Home sin `<br />` entre palabras

**Archivos:** `src/app/page.tsx` (líneas 154-157), `src/app/en/page.tsx` (líneas 173-176).

**Estado actual (ES):**
```jsx
<h1 className="hero-title animate-hero-title font-heading font-bold text-white">
  Consultoría Comercial
  <br />y Marketing
</h1>
```

**Patrón de referencia ya existente y correcto** (`src/components/PageHero.tsx`, líneas 63-73) — usado en `/venta`, `/preventa`, `/posventa`, `/marketing`, `/tecnologia`:
```jsx
<h1 className="...">
  {title.map((line, i) => (
    <span key={line} className="inline dt:block">
      {line}
      {i < title.length - 1 ? " " : ""}
    </span>
  ))}
</h1>
```
Esto renderiza cada línea como `inline` hasta el breakpoint `dt` (donde pasa a `block`, forzando el salto visual solo en desktop), y agrega explícitamente un espacio (`{" "}`) entre segmentos — así `textContent` nunca pierde el espacio, sin importar si el salto de línea es CSS o no.

**Cambio propuesto:** adaptar el H1 de Home (que es un `<section>` con layout absoluto distinto a `PageHero`, así que no se puede simplemente importar el componente sin revisar el resto del hero) al mismo principio: reemplazar el `<br />` a mano por dos `<span>` con un espacio explícito entre ellos, dejando que el CSS existente (`.hero-title`, ver `globals.css` líneas 279-282+ por breakpoint) decida si el salto es visual vía `display:block` en el segundo `<span>`, en vez de un `<br />` literal en el JSX. El texto visible en pantalla no cambia — sigue viéndose en dos líneas, en los mismos breakpoints donde ya se ve así hoy.

**Repetir el mismo cambio en `src/app/en/page.tsx`** para "Commercial & Marketing" / "Consulting".

**Validación:** repetir la evaluación ya hecha en esta auditoría — `document.querySelector('h1').textContent` en producción debe devolver el texto con todos los espacios correctos, sin palabras pegadas.

**Prioridad:** High. **Esfuerzo:** Bajo. **Dependencias:** ninguna.

---

## T-3 — Labels accesibles en `ContactForm.tsx` y `EbookForm.tsx`

**Archivos:** `src/components/ContactForm.tsx` (líneas 106-152), `src/components/EbookForm.tsx` (líneas 133-137).

**Estado actual (ejemplo, `ContactForm.tsx` línea 114):**
```jsx
<input required name="nombre" placeholder={t.name} className={fieldCls} />
```

**Cambio propuesto:** agregar `aria-label={t.name}` (reusando la misma variable de i18n que ya alimenta el placeholder, así ES/EN quedan cubiertos sin texto nuevo) a cada `<input>`/`<textarea>` que hoy no lo tiene:

```jsx
<input required name="nombre" placeholder={t.name} aria-label={t.name} className={fieldCls} />
```

Aplicar el mismo patrón a los 5 campos de `ContactForm.tsx` (`nombre`, `apellidos`, `empresa`, `whatsapp`, `email`) y al `<textarea>` de `mensaje`, y a los 5 campos de `EbookForm.tsx` (`nombre`, `apellidos`, `empresa`, `whatsapp`, `email`). El `<select>` de "SERVICIO" ya tiene `aria-label` (línea 122 de `ContactForm.tsx`) — no requiere cambios, sirve de referencia del patrón a seguir.

**No se propone** agregar `<label>` visibles porque cambiaría el diseño visual actual (placeholder-only) sin que se haya pedido un rediseño — `aria-label` resuelve el problema de accesibilidad (nombre accesible persistente, no dependiente del placeholder) sin tocar el layout.

**Validación:** con Playwright, snapshot de accesibilidad de `/contacto`, `/en/contact`, `/ebook`, `/en/ebook` — cada campo debe resolver su nombre accesible desde `aria-label`, no desde `placeholder` (se puede confirmar comparando el snapshot antes/después, o inspeccionando `accessibleName` vía `getByRole`).

**Prioridad:** High. **Esfuerzo:** Bajo. **Dependencias:** ninguna.

---

## T-4 — `lastmod` real en `sitemap.xml`

**Archivo:** `src/app/sitemap.ts`.

**Estado actual:**
```ts
entries.push({
  url: `${site.url}${es}`,
  lastModified: new Date(),
  ...
});
```
`new Date()` se evalúa en cada build/request — todas las 32 URLs quedan con el mismo `lastmod`, igual al momento en que Google (o cualquiera) pidió el sitemap.

**Cambio propuesto:**
- Para las URLs de blog: usar `publishedAt` (ya existe en `BlogPost`) como base, y si en el futuro se agrega un campo `updatedAt` al editar un post, preferirlo sobre `publishedAt`.
- Para las páginas de servicio/estáticas (home, preventa, venta, posventa, marketing, tecnologia, basehub, contacto, ebook, blog index): definir una fecha fija por entrada (constante mantenida a mano, actualizada cada vez que esa página tiene un cambio de contenido real — no en cada deploy). Puede vivir como un mapa simple en el propio `sitemap.ts` o en `site.ts`.
- Alternativa más simple si mantener fechas a mano no es viable: omitir `lastModified` en las entradas cuya fecha real no se conoce con certeza — Google trata la ausencia de `lastmod` mejor que un `lastmod` que sabe que es falso.

**Prioridad:** Medium. **Esfuerzo:** Bajo-Medio. **Dependencias:** ninguna, pero conviene resolverlo junto con cualquier trabajo futuro sobre `src/content/blog/posts.ts` para no duplicar el mecanismo de fechas.

---

## T-5 — `<h2>` en la sección "Metodología" de Home

**Archivos:** `src/app/page.tsx` (sección línea 245-257, componente `MethodologyGrid`), `src/app/en/page.tsx` (equivalente), `src/components/MethodologyGrid.tsx` si hace falta ajustar el componente para aceptar un heading opcional.

**Cambio propuesto:** envolver el `<MethodologyGrid>` con el mismo patrón `SectionHeading` (eyebrow + H2) que ya usan las demás secciones de la Home, en vez de dejarlo sin ningún heading de nivel 2. El texto exacto del eyebrow/H2 lo define `SEO-CONTENT-CHANGES.md#C-2` (a confirmar por `seo-marketing`).

**Validación:** el árbol de headings de la página (`h1 > h2 > h3...`) no debe tener saltos — verificar con el snapshot de accesibilidad de Playwright que cada grupo de H3 esté precedido por un H2 en su misma sección.

**Prioridad:** Medium. **Esfuerzo:** Bajo. **Dependencias:** texto final del H2 (`seo-marketing`).

---

## T-6 — Imagen Open Graph en `/blog`, `/en/blog`, `/tecnologia`, `/en/tecnologia`

**Archivos:** `src/app/blog/page.tsx`, `src/app/en/blog/page.tsx`, `src/app/tecnologia/page.tsx`, `src/app/en/tecnologia/page.tsx`.

**Cambio propuesto:** agregar bloque `openGraph.images` a las 4 rutas, mismo criterio ya usado en `/basehub`/`/en/basehub` (commit `4ba89ee`, `public/images/basehub-dashboard.webp`). Para `/tecnologia` y `/en/tecnologia`, el hero de `PageHero` ya usa una imagen (`overlayOpacity` ajustado específicamente para esa foto según el comentario en `PageHero.tsx`) — reusar esa misma imagen como OG es la opción de menor esfuerzo. Para `/blog`/`/en/blog`, al no tener una imagen "hero" propia, elegir una imagen genérica representativa (podría ser la misma que usa `/marketing`, o una nueva) — a coordinar con `seo-marketing`/diseño si se quiere algo más específico del blog.

**Prioridad:** Low. **Esfuerzo:** Bajo. **Dependencias:** ninguna (elección de imagen es la única decisión pendiente).

---

## T-7 — Redirect de doble salto en `http://basecoresales.com`

**No es código del repo** — es configuración de dominio/Cloudflare (el redirect apex→apex-https es un salto de Cloudflare, y apex-https→www es otro salto, probablemente también a nivel de Cloudflare o del proyecto Vercel). Queda fuera del alcance de cambios en este repo; documentado para que `performance` lo evalúe y decida si amerita colapsar a un solo salto (por ejemplo, redirigiendo directo de `http://basecoresales.com` a `https://www.basecoresales.com` sin pasar por el paso intermedio).

**Prioridad:** Low. **Esfuerzo:** Bajo (fuera del repo). **Dependencias:** agente `performance`, acceso a configuración de Cloudflare/dominio.
