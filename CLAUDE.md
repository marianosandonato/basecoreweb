@documentation/AGENTS.md

## Herramientas del sistema

MarkItDown (Microsoft, instalado vía pipx) está disponible como comando `markitdown` — convierte PDF/Word/Excel/PowerPoint/imágenes a Markdown. Uso: `markitdown archivo.pdf -o archivo.md`.

## Documentos SEO vigentes

Antes de tocar cualquier tarea de SEO, leer estos dos documentos (fuente de verdad del estado actual, no reconstruir de memoria):

- **Plan de SEO de Base Core** — plan de fases (1 a 7), qué está Hecho/Pendiente/Bloqueado en cada una. Artifact (fuente de verdad, solo accesible desde la sesión principal — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes, es una restricción de plataforma): https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90 — los agentes (`web-lead`, `seo-marketing`, `performance`) deben leer en su lugar el espejo: `documentation/seo/plan-seo.md`.
- **Mapa de Keywords Basecore** — research completo de Google Keyword Planner (ES/AR/EN) que respalda las decisiones de keywords de la Fase 3.1/3.5. Artifact (fuente de verdad, mismo límite de acceso): https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9 — espejo: `documentation/seo/mapa-keywords.md`.

**Regla de sincronización:** el espejo en `documentation/seo/` es la única vía de acceso real para los agentes — no una copia de respaldo — así que mantenerlo al día no es opcional. Puede quedar desactualizado si el artifact se edita fuera de una sesión que lo sincronice. Cualquier publish a uno de estos dos artifacts (solo lo hace la sesión principal, nunca un sub-agente) debe ir acompañado, en el mismo momento, de actualizar su espejo correspondiente (mismo contenido, vía `markitdown <html-local-del-artifact> -o documentation/seo/<archivo>.md`, conservando la nota de "Espejo de trabajo" al principio del archivo).

**Verificación de frescura (paso de rutina, antes de cualquier tarea de SEO):** la sesión principal corre `Artifact` con `action: "list"` para ver el `last-updated` real de los dos artifacts, y lo compara contra la fecha de "Última sincronización" anotada al principio de cada espejo. Si el artifact es más reciente, resincronizar antes de delegar la tarea a un agente o de seguir vos mismo — un sub-agente no puede hacer esta verificación (no tiene la tool `Artifact`), así que si el espejo está viejo, va a trabajar con datos desactualizados sin darse cuenta.

## Otros planes vigentes

- **BaseHub en el sitio** — https://claude.ai/code/artifact/732c517a-8ea1-4176-a9e5-fdcb0aa2e1d7 — brief y plan para promocionar BaseHub (la plataforma de seguimiento de Base Core, repo separado en `~/GitHub/basehub`) como sección/página en basecoreweb. En definición, sin implementar todavía — leer antes de retomar el tema.
