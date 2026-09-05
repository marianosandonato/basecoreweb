@documentation/AGENTS.md

## Herramientas del sistema

MarkItDown (Microsoft, instalado vía pipx) está disponible como comando `markitdown` — convierte PDF/Word/Excel/PowerPoint/imágenes a Markdown. Uso: `markitdown archivo.pdf -o archivo.md`.

## Documentos SEO vigentes

Antes de tocar cualquier tarea de SEO, leer estos dos documentos (fuente de verdad del estado actual, no reconstruir de memoria):

- **Plan de SEO de Base Core** — plan de fases (1 a 7), qué está Hecho/Pendiente/Bloqueado en cada una. Artifact (fuente de verdad, solo accesible desde la sesión principal — confirmado el 3/9 que la tool `Artifact` no está disponible para sub-agentes, es una restricción de plataforma): https://claude.ai/code/artifact/f6230fde-8996-4d03-ae8a-4211f111ed90 — los agentes (`web-lead`, `seo-marketing`, `performance`) deben leer en su lugar el espejo: `documentation/seo/plan-seo.md`.
- **Mapa de Keywords Basecore** — research completo de Google Keyword Planner (ES/AR/EN) que respalda las decisiones de keywords de la Fase 3.1/3.5. Artifact (fuente de verdad, mismo límite de acceso): https://claude.ai/code/artifact/2fb2b4bf-cd0c-41a4-a152-05098b5423f9 — espejo: `documentation/seo/mapa-keywords.md`.
- **Historial Técnico SEO** — registro completo y permanente de cada tarea del Plan de SEO ya resuelta (texto exacto, commits, hallazgos), separado el 5/9 para que el Plan de SEO quede liviano como tablero activo. Nada se descarta acá: es el "dueño" del detalle de lo ya hecho. Artifact (fuente de verdad, mismo límite de acceso): https://claude.ai/code/artifact/06216aa3-06d1-4a75-a16a-f76e134cfcd8 — espejo: `documentation/seo/historial-seo.md`.

**Regla de sincronización:** el espejo en `documentation/seo/` es la única vía de acceso real para los agentes — no una copia de respaldo — así que mantenerlo al día no es opcional. Puede quedar desactualizado si el artifact se edita fuera de una sesión que lo sincronice. Cualquier publish a uno de estos tres artifacts (solo lo hace la sesión principal, nunca un sub-agente) debe ir acompañado, en el mismo momento, de actualizar su espejo correspondiente (mismo contenido, vía `markitdown <html-local-del-artifact> -o documentation/seo/<archivo>.md`, conservando la nota de "Espejo de trabajo" al principio del archivo).

**Relación entre el Plan de SEO y el Historial Técnico SEO:** el Plan de SEO es el tablero activo — solo detalla en profundidad las tareas Pendiente/Bloqueado/En progreso; las tareas Hecho aparecen ahí como una línea en una tabla de estado, sin narrativa. El Historial Técnico SEO tiene el detalle completo de cada tarea ya resuelta (texto exacto, commits, razonamiento) — es el documento al que hay que agregar contenido cuando una tarea pasa de activa a Hecho, no el que hay que inflar en el Plan de SEO. Al cerrar una tarea: mover su detalle completo al Historial (o escribirlo ahí si es la primera vez que se documenta), y en el Plan de SEO dejar solo la fila de la tabla en Hecho — no dejar el detalle duplicado en los dos documentos (mismo criterio que Camino B, ver abajo).

**Verificación de frescura (paso de rutina, antes de cualquier tarea de SEO):** la sesión principal corre `Artifact` con `action: "list"` para ver el `last-updated` real de los tres artifacts, y lo compara contra la fecha de "Última sincronización" anotada al principio de cada espejo. Si el artifact es más reciente, resincronizar antes de delegar la tarea a un agente o de seguir vos mismo — un sub-agente no puede hacer esta verificación (no tiene la tool `Artifact`), así que si el espejo está viejo, va a trabajar con datos desactualizados sin darse cuenta.

## Otros planes vigentes

- **BaseHub en el sitio** — https://claude.ai/code/artifact/732c517a-8ea1-4176-a9e5-fdcb0aa2e1d7 — brief y plan para promocionar BaseHub (la plataforma de seguimiento de Base Core, repo separado en `~/GitHub/basehub`) como sección/página en basecoreweb. En definición, sin implementar todavía — leer antes de retomar el tema.
- **Plan Social Media** — https://claude.ai/code/artifact/26b56c60-5c7c-4697-87ff-7b91b9c015bb — auditoría de `social-content` (4/9) con público, pilares y 3 direcciones de contenido para LinkedIn. En definición, ninguna dirección elegida todavía — leer antes de retomar el tema o de producir contenido de redes.

## Documentos archivados (no consultar como fuente activa)

- **Auditoría General** — https://claude.ai/code/artifact/eadc7b1e-9133-4676-8d57-ee30009f8826 — archivada el 4/9. Sus 7 temas quedaron resueltos, trasladados al Plan de SEO (puntos 2.3, 4.4, 4.5, 5.3) o descartados — no le queda ningún dato propio sin dueño en otro lado. No hace falta leerla para trabajo de SEO ni de conversión: el Plan de SEO es la única fuente viva de ese seguimiento. Queda como registro histórico del Test 4 del Plan de Agentes, no como tracker activo.
- **Regla de fondo (Camino B), aplicable a futuros artifacts duplicados:** cuando un mismo dato/tarea aparece en más de un artifact, un solo documento queda como "dueño" con el detalle completo, y los demás solo linkean a él en vez de repetirlo — nunca dos copias completas del mismo hallazgo. Evita la duplicación silenciosa que causó el error de Barcelona (ver Plan de SEO 4.1) y permite archivar un documento entero una vez que no le queda contenido propio.
