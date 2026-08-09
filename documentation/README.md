# Documentación del proyecto

Esta carpeta contiene los **planes de trabajo**: un documento por página del sitio, más
uno global de responsive. Los documentos están escritos en inglés; este índice está en
español para que sirva de punto de entrada.

No son documentos de diseño abstractos. Cada uno registra **valores medidos sobre el sitio
original** (`https://basecoresales.com/`) — paddings, tamaños de fuente, anchos de columna,
identificadores de Elementor — junto con las decisiones tomadas y por qué. Si vas a tocar
una página, lee su plan primero: casi todo número raro que veas en el código está explicado
ahí.

## Por dónde empezar

1. **`PLAN.md`** — la página de inicio, y con ella los **fundamentos globales** (fuentes,
   paleta, ancho de contenedor, escala tipográfica). Todo lo demás depende de esto.
2. **`PLAN-HEADER.md`** y **`PLAN-FOOTER.md`** — cabecera y pie, compartidos por todas las páginas.
3. El plan de la página que vayas a tocar.
4. **`PLAN-RESPONSIVE.md`** — cómo se comportan todas las páginas en tablet y móvil.

## Índice

| Documento | Página | Plantilla Elementor |
|---|---|---|
| `PLAN.md` | `/` (inicio) + fundamentos globales | `post-1369.css` |
| `PLAN-HEADER.md` | Cabecera | `1137` |
| `PLAN-FOOTER.md` | Pie | `866` |
| `PLAN-PREVENTA.md` | `/preventa` | `24` |
| `PLAN-VENTA.md` | `/venta` | `1718` |
| `PLAN-POSVENTA.md` | `/posventa` | `1835` |
| `PLAN-MARKETING.md` | `/marketing` | `20` |
| `PLAN-CONTACTO.md` | `/contacto` | `27` |
| `PLAN-RESPONSIVE.md` | Todas — tablet y móvil | — |
| `PLAN-VERCEL.md` | Despliegue en Vercel: fuentes, imágenes, cabeceras | — |

`AGENTS.md` no es documentación del sitio: son instrucciones para asistentes de IA que
trabajen en el repositorio. `CLAUDE.md`, en la raíz, simplemente lo importa.

## Cómo se trabajó (y cómo conviene seguir)

Estas reglas salieron de errores reales cometidos durante el proyecto:

- **Medir, no suponer.** Cada valor del código salió de leer el DOM del original con
  `getBoundingClientRect()` y estilos computados, no de mirar una captura. Las suposiciones
  se demostraron equivocadas una y otra vez — las cajas flip, por ejemplo, tienen una forma
  distinta en cada una de las cuatro páginas que las usan.
- **El CSS por página de Elementor es la fuente de los paddings**, y se descarga de
  `https://basecoresales.com/wp-content/uploads/elementor/css/post-<id>.css`. El `<id>` de
  cada página está en la tabla de arriba.
- **Escribir el plan antes de programar**, y anotar en él los resultados medidos después.
- **Marcar las desviaciones deliberadas** en vez de "arreglar" el original en silencio. Hay
  varias registradas (por ejemplo, el original imprime un warning de PHP dentro de los
  contadores de `/marketing`; nosotros no lo reproducimos).

## Detalles técnicos que cuesta redescubrir

Están explicados en los planes, pero conviene tenerlos a mano:

- **Capas de Tailwind v4.** El CSS fuera de `@layer` gana a cualquier utilidad. Los estilos
  base van en `@layer base` y las clases de widget en `@layer components`.
- **Puntos de corte.** Elementor usa 767 / 1024 / 1200 (escritorio ≥1025). En el código:
  `md:` = tablet en adelante, `dt:` = solo escritorio. `--breakpoint-dt` está declarado en
  **rem**, no en px — en px, Tailwind lo ordena antes que `md:` y `md:` termina ganando.
- **Ancho de contenedor.** 1200px, y las cuadrículas internas ocupan los 1200 completos, no
  la caja de contenido de 1170.
- **Espaciado entre widgets.** Elementor pone `margin-block-end: 20px` entre widgets y 10px
  de padding en las columnas. Explican la mayoría de las diferencias de altura.
- **Colapso de márgenes.** Causó tres errores reales en el proyecto. Es preferible usar
  `gap` de flex antes que márgenes.

## Lo que queda pendiente

- **Iconos sociales**: el sitio original hoy los muestra en salmón `#E67370` con un contorno
  rojo, distinto de lo que se midió cuando se construyeron cabecera y pie. Sin resolver
  (ver `PLAN-CONTACTO.md`).
- **Diferencias restantes a 390px**: son de ajuste de texto, no estructurales
  (ver `PLAN-RESPONSIVE.md`).
- **Antes de desplegar**: convertir Gilmer y reey a `woff2`, pasar los fondos de héroe de
  `background-image` a `next/image` con `priority`, y pasar Lighthouse.
