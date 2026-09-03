---
name: basecore-workflow
description: Marco de proceso reutilizable para abordar tareas complejas o cambios importantes en basecoresales.com (rediseños, features, decisiones abiertas de UX/UI/contenido/SEO/performance). Define el ciclo TRIAGE → OBSERVE → MEMORY → RESEARCH → SYNTHESIZE → IDEATE → DECIDE → PLAN → EXECUTE → VALIDATE → CRITIQUE → ITERATE y enseña a decidir qué pasos aplican en cada caso. Usar antes de encarar un cambio importante, una decisión abierta o una tarea multidisciplinaria; saltear los pasos que no aporten valor en tareas triviales o de alcance claro. No define responsabilidades específicas de SEO, performance, contenido ni desarrollo — esas viven en los agentes especialistas.
metadata:
  scope: basecoreweb
  layer: process
---

# BaseCore Workflow

Este skill define **cómo** abordar una tarea compleja, no **qué** hacer en cada disciplina. Es un marco de proceso, no un reemplazo de las responsabilidades de `web-lead`, `seo-marketing`, `performance` ni `social-content` — cada uno sigue siendo la autoridad de su dominio.

El ciclo completo es:

**TRIAGE → OBSERVE → MEMORY → RESEARCH → SYNTHESIZE → IDEATE → DECIDE → PLAN → EXECUTE → VALIDATE → CRITIQUE → ITERATE**

## Regla general: no todos los pasos son obligatorios

Este workflow es adaptable. Antes de aplicarlo mecánicamente, evaluá el alcance de la tarea:

- **Tarea trivial o de alcance claro** (typo, ajuste de un valor, copy puntual sin dependencia de keywords, fix de una línea): TRIAGE mental rápido → EXECUTE → VALIDATE mínimo. El resto de los pasos sobra.
- **Cambio importante** (nueva página, rediseño, feature multidisciplinaria, decisión sin una respuesta obvia, algo que toca UX/marca/conversión/SEO/performance a la vez): recorré el ciclo completo, pero cada paso puede resolverse en una frase si no hay ambigüedad real.

La pregunta que decide si un paso aplica siempre es la misma: **¿este paso puede cambiar la decisión final?** Si la respuesta es no, saltealo.

---

## 1. TRIAGE

Antes de actuar, clasificá la tarea:

- **Objetivo:** ¿qué problema resuelve esto realmente?
- **Disciplinas involucradas:** ¿UX/diseño, SEO/copy, performance, desarrollo, contenido? ¿Una sola o varias?
- **Complejidad:** ¿cambio de una línea o cambio estructural?
- **Riesgo:** ¿afecta producción, conversión, SEO indexado, Core Web Vitals?
- **¿Necesita investigación u observación?** ¿O ya tenés todo el contexto que hace falta?

El TRIAGE determina cuánto del resto del ciclo corresponde aplicar — no es un paso burocrático, es el que evita sobre-procesar tareas simples y sub-procesar tareas importantes.

## 2. OBSERVE

Antes de modificar algo importante, entendé el estado actual: código, documentación, o el sitio real vía Playwright.

**Regla: no optimices algo que todavía no observaste.** No asumas cómo se ve o cómo funciona algo hoy — mirálo.

## 3. MEMORY

Cuando exista posibilidad de repetir una decisión, experimento o problema anterior, revisá los documentos vigentes antes de empezar desde cero: los artifacts y planes listados en `CLAUDE.md` (Plan de SEO, Mapa de Keywords, etc.), y cualquier archivo `.md` de progreso o decisiones dentro del repo. Este proyecto no usa un sistema de memoria automática — la fuente de verdad son estos documentos explícitos.

**Estos documentos son contexto, no autoridad absoluta.** Si la evidencia actual contradice una regla o decisión histórica, gana la evidencia actual — señalá la contradicción en vez de aplicar la regla vieja a ciegas.

**Verificación de frescura del Plan de SEO / Mapa de Keywords (paso de rutina):** estos dos viven como artifact (fuente de verdad) y como espejo en `documentation/seo/` (lo único que pueden leer los sub-agentes — ver `CLAUDE.md`, no tienen la tool `Artifact`). Antes de apoyar una decisión de SEO en el espejo, quien tenga la tool `Artifact` (la sesión principal, no un sub-agente) debe confirmar que sigue al día: `action: "list"` da el `last-updated` de cada artifact sin traer todo el contenido — si es más reciente que la fecha de "Última sincronización" anotada al principio del espejo, resincronizar (`markitdown <html-local> -o documentation/seo/<archivo>.md`) antes de seguir. Un sub-agente que no pueda hacer esta verificación y sospeche que el espejo está viejo (por ejemplo, contradice algo que él mismo observó en el código) debe señalarlo en vez de asumir que está al día.

## 4. RESEARCH

Investigá **solamente cuando la información externa pueda cambiar una decisión**. No investigues por investigar.

Elegí la herramienta de Perplexity según el tipo de pregunta:

| Necesidad | Tool |
|---|---|
| Pregunta rápida, respuesta puntual | `perplexity_ask` |
| Descubrir fuentes/referencias/URLs | `perplexity_search` |
| Comparar opciones, análisis paso a paso | `perplexity_reason` |
| Investigación profunda multi-fuente | `perplexity_research` |

Cada investigación debe poder responder una pregunta concreta que impacte la decisión — si no podés nombrar esa pregunta, no hace falta investigar.

## 5. OBSERVATION (validación directa)

Cuando una decisión dependa de cómo funciona o se ve realmente un sitio, producto o interfaz — propio o de referencia — observalo directamente con Playwright cuando corresponda.

La investigación puede encontrarte una referencia o una afirmación de terceros; la observación directa es la que confirma cómo funciona *realmente*. No las confundas ni sustituyas una por la otra.

## 6. SYNTHESIZE

Combiná memoria, investigación, observaciones y contexto del proyecto en una lectura única de la situación. Al comunicar tu razonamiento, separá explícitamente:

- **FACTS** — lo que investigaste y podés citar.
- **OBSERVATIONS** — lo que viste directamente (código, Playwright, archivos).
- **INFERENCES** — conclusiones propias a partir de lo anterior.
- **CREATIVE DECISIONS** — elecciones de diseño/estrategia que son juicio, no hecho.

Esta separación no es cosmética: evita que una inferencia se lea como un hecho, o que una decisión creativa se justifique como si fuera investigación.

## 7. IDEATE

Cuando exista una decisión **realmente abierta** (no cuando hay una sola respuesta razonable), generá 2-3 alternativas conceptualmente distintas — no variaciones cosméticas de la misma idea.

Cuando sea útil, pensá en términos de una opción conservadora, una diferenciadora y una experimental.

## 8. DECIDE

No le devuelvas al usuario todas las opciones sin más para que elija indefinidamente. Evaluá las alternativas y recomendá una dirección razonada, considerando lo que aplique: objetivo, UX, marca, conversión, SEO, performance, complejidad y riesgo.

Ideate sin Decide es indecisión disfrazada de proceso.

## 9. PLAN

Para cambios importantes, definí: alcance, archivos/componentes afectados, dependencias, orden de implementación y validaciones necesarias.

No exijas un plan formal para un cambio trivial — el plan debe ser proporcional al riesgo y tamaño del cambio, no un trámite fijo.

## 10. EXECUTE

Implementá recién cuando tengas suficiente contexto y una dirección definida — no antes. Respetá las responsabilidades de cada agente especialista: `web-lead` no reemplaza a `seo-marketing` en copy dependiente de keywords, ni a `performance` en optimización de Core Web Vitals, y viceversa.

## 11. VALIDATE

No des un trabajo por terminado solo porque compila. Validá con lo que corresponda al cambio: tests, build, lint, Playwright, screenshots, responsive (desktop/mobile), consola, network, accesibilidad, SEO técnico, performance — según lo que la tarea realmente haya tocado.

## 12. CRITIQUE

Después de implementar, evaluá el resultado real contra el objetivo original — no contra la intención. En trabajos visuales o de interfaz en particular, **observá el resultado real (Playwright/screenshot) en vez de inferirlo leyendo el código.**

## 13. ITERATE

Si la evidencia muestra que el resultado puede mejorar, iterá. Evitá loops infinitos: cada iteración debe estar motivada por evidencia concreta del paso CRITIQUE, no por perfeccionismo sin fin.

Si la dirección conceptual completa resultó equivocada, volvé a IDEATE/DECIDE en vez de acumular parches sobre una base que no funciona.

---

## Principios transversales

- Preferí evidencia sobre suposición, observación sobre descripción, e iteración sobre completitud prematura.
- Cada investigación debe responder una pregunta que pueda cambiar una decisión — si no, no se hace.
- La calidad del resultado importa más que la velocidad de producir código.
- El workflow es adaptable: en tareas simples, saltear investigación, ideación y planificación cuando no aporten valor es lo correcto, no un atajo cuestionable.

## Qué NO cubre este skill

Este skill define el proceso, no el contenido de cada disciplina. No incluye ni reemplaza:

- Reglas específicas de SEO, keywords, copy o CRO (agente `seo-marketing`).
- Reglas específicas de Core Web Vitals, PageSpeed o bundle (agente `performance`).
- Reglas específicas de contenido editorial/social (agente `social-content`).
- Instrucciones de deploy, Git, seguridad o convenciones de Next.js (ya cubiertas en los prompts de cada agente y en `CLAUDE.md`/`AGENTS.md` del proyecto).

Si una tarea necesita ese conocimiento específico, este skill indica *cuándo* aplicarlo dentro del ciclo (por ejemplo, en DECIDE o VALIDATE), pero la autoridad de contenido sigue siendo del agente o skill especialista correspondiente.
