# Refuerzo del post "Cómo calificar leads B2B" — borrador para revisión de Mariano

Archivo del post (ES): `src/content/blog/es/como-calificar-leads-b2b.ts`. Par EN: `src/content/blog/en/how-to-qualify-b2b-leads.ts` (misma estructura, hay que replicar los tres bloques ahí cuando se apruebe).
Nada de esto está aplicado. No reescribe el post: son tres bloques para sumar.

## 0. Cómo está armado el post hoy (estructura real)

El post es un objeto `BlogPost` con `title`, `description`, `publishedAt`, `readingMinutes`, `image`, `imageAlt`, `body` y `cta`. El `body` es un array de bloques con solo tres tipos posibles (definidos en `src/content/blog/types.ts`):

```
{ type: "p";  text: string }
{ type: "h2"; text: string }
{ type: "ul"; items: readonly string[] }
```

Orden actual del `body` (16 bloques, índices 0 a 15):

| # | Tipo | Contenido |
|---|------|-----------|
| 0 | p | Intro (el costo de perseguir un lead que no iba a comprar; BANT y MEDDIC) |
| 1 | h2 | Por qué calificar un lead antes de invertirle tiempo |
| 2 | p | |
| 3 | h2 | BANT: los cuatro criterios clásicos |
| 4 | p | |
| 5 | h2 | MEDDIC: cuándo conviene un método más granular |
| 6 | p | |
| 7 | h2 | Otras variantes: CHAMP y GPCTBA/C&I |
| 8 | p | |
| 9 | h2 | Cómo elegir un método según tu equipo y tu ciclo de venta |
| 10 | p | |
| 11 | ul | Tres reglas "→" (BANT / MEDDIC / CHAMP) |
| 12 | h2 | Errores comunes al calificar |
| 13 | ul | |
| 14 | h2 | Cómo sostener esto sin que se vuelva burocracia |
| 15 | p | |

Y después del `body`, el `cta` ("VER CÓMO ESTRUCTURAMOS TU PROSPECCIÓN B2B" → `/preventa`).

**Lo que el renderer soporta** (`src/components/BlogPostPage.tsx`):

- `p` y `ul` pasan por `renderBold`, que solo entiende `**negrita**`. No hay links dentro del cuerpo (no usa `renderRich`), solo el botón `cta` al final.
- `h2` se renderiza como `<h2>`. No existe `h3`.
- **No hay bloque de tabla.** Si se agrega al array un objeto con `type: "table"`, TypeScript falla (no es parte de `BlogBlock`) y, aunque se forzara, el renderer lo trata como un párrafo y rompe en `block.text.split` (el `text` es `undefined`). Por eso la tabla necesita una de estas dos vías, está abajo en (b).
- No hay FAQ ni `FAQPage` en ningún lado del repo, y `BlogPostingJsonLd` no incluye `dateModified` (solo `datePublished`).

Voz del post: voseo rioplatense ("hablás", "tenés") mezclado con "tu/tus". Los bloques de abajo usan ese mismo registro.

---

## (a) Resumen citable al inicio

**Dónde va:** como un bloque nuevo `{ type: "p" }` en la posición 0 del `body`, antes del intro actual. No requiere cambios de código. La frase en negrita funciona con `renderBold`.

**Texto propuesto:**

> **Respuesta corta:** para calificar un lead B2B, antes de invertirle tiempo confirmás con preguntas concretas si tiene un problema real, presupuesto, alguien con autoridad para decidir y un plazo. BANT (presupuesto, autoridad, necesidad y plazo) alcanza para equipos chicos, ciclos cortos y un solo decisor; MEDDIC conviene cuando el ciclo es largo y participan varias áreas; CHAMP sirve de filtro inicial cuando el problema del cliente no está claro. Sea cual sea el método, lo que lo vuelve útil es dejar los criterios como campos simples en el CRM y usarlos para decidir a quién llamar primero esta semana.

**Estructura en el `.ts`:**

```ts
body: [
  {
    type: "p",
    text: "**Respuesta corta:** ...",   // <- bloque nuevo
  },
  {
    type: "p",
    text: "Perseguir a un lead que nunca iba a comprar ...",  // intro actual, queda igual
  },
  ...
```

**Nota para decidir:** el resumen repite parte de lo que ya dice el intro y las reglas de "Cómo elegir". Es a propósito: la primera respuesta tiene que poder citarse sola. Si te parece redundante, la alternativa es reemplazar el primer párrafo del intro por este, pero eso ya es reescribir el post.

**Hipótesis, no dato:** en la ronda 1 de 5.10 el post se citó en Perplexity y en la ronda 2 no. No sabemos si el cambio se debe a la estructura del post; esta propuesta apunta a la causa más plausible (el post no empieza con una respuesta directa ni tiene una comparativa escaneable), pero no hay evidencia de que eso lo recupere.

---

## (b) Tabla comparativa de métodos

**Los métodos que ya trata el post:** BANT, MEDDIC, CHAMP y GPCTBA/C&I. **No agregué ningún método nuevo**, así que no hay filas marcadas como "agregado". (Opcional, a tu criterio: ANUM, FAINT o SPIN se podrían sumar, pero el post ya dice que CHAMP y GPCTBA/C&I "no son un tercer método que sumar a la pila", y sumar más va contra esa línea.)

**Dónde va:** como nuevo `h2` + el bloque de tabla, entre el bloque 8 (párrafo de CHAMP y GPCTBA/C&I) y el bloque 9 (`h2` "Cómo elegir un método según tu equipo y tu ciclo de venta"). Es el lugar lógico: ya se explicaron los cuatro, antes de la guía de decisión.

**H2 propuesto:** `Comparativa: BANT, MEDDIC, CHAMP y GPCTBA/C&I`

### Contenido de la tabla

Las celdas marcadas con (*) no están dichas en el post: son inferencias razonables a partir de él. Convendría que las confirmes o las saques.

| Método | Qué evalúa | Cuándo conviene | Equipo y ticket |
|---|---|---|---|
| **BANT** | Budget (presupuesto), Authority (autoridad), Need (necesidad), Timeline (plazo) | Ciclo corto, decisión de una sola persona, primera llamada rápida | Equipo de una o dos personas; ticket bajo o medio (*) |
| **MEDDIC** | Metrics (impacto medible), Economic buyer (quién firma), Decision criteria y Decision process, Identify pain (el dolor real), Champion (quién empuja desde adentro) | Ciclo largo, varios stakeholders, varias instancias de aprobación | Equipo con varios vendedores; ticket alto que justifique el tiempo por lead |
| **CHAMP** | Challenges (el problema del cliente), Authority, Money, Prioritization | Venta consultiva donde el problema del cliente no está del todo claro; sirve como filtro inicial | Equipos chicos o medianos (*) con ventas consultivas; ticket medio (*) |
| **GPCTBA/C&I** | Goals, Plans, Challenges, Timeline, Budget, Authority, más las consecuencias negativas y las implicancias positivas de resolver el problema | Ventas consultivas donde vale la pena cuantificar el costo de no resolver y el beneficio de resolver | Equipos con ciclo largo y ticket alto (*). Para la mayoría de las pymes, es más de lo que hace falta |

### Cómo implementarlo (dos vías, a decidir)

**Vía 1 — con código (recomendada para que el SEO y la IA lo lean como tabla real).** Hay que:

1. Sumar un cuarto tipo a `BlogBlock` en `src/content/blog/types.ts`:
   ```ts
   | { type: "table"; caption?: string; headers: readonly string[]; rows: readonly (readonly string[])[] }
   ```
2. Agregar su render en `src/components/BlogPostPage.tsx` (un `<table>` semántico con `<thead>`, `<th scope="col">`, y un contenedor con `overflow-x-auto` para mobile).
3. Usarlo en el `.ts` del post (y en el EN).

Esto toca `src/` y la presentación (ancho en mobile, estilo), así que decide Mariano y probablemente conviene que lo implemente `web-lead` y lo verifique visualmente en un preview antes de producción. Las tablas de texto largo en mobile se pueden volver ilegibles con 4 columnas: otra razón para validarlo en pantalla real.

**Vía 2 — sin código (funciona hoy).** Reemplazar la tabla por un `ul` con una línea por método, con el mismo formato de flecha que ya usa el post en el bloque 11. Se puede pegar tal cual:

```ts
{ type: "h2", text: "Comparativa: BANT, MEDDIC, CHAMP y GPCTBA/C&I" },
{
  type: "ul",
  items: [
    "**BANT** — evalúa presupuesto, autoridad, necesidad y plazo. Conviene con ciclo corto y un solo decisor; encaja en equipos de una o dos personas.",
    "**MEDDIC** — evalúa impacto medible, quién firma, criterios y proceso de decisión, el dolor real y quién empuja la compra desde adentro. Conviene con ciclo largo y varios stakeholders; encaja en equipos con varios vendedores y ticket alto.",
    "**CHAMP** — evalúa el problema del cliente, la autoridad, el dinero y la prioridad. Conviene en venta consultiva cuando el problema no está del todo claro, como filtro inicial.",
    "**GPCTBA/C&I** — evalúa objetivos, planes, desafíos, plazo, presupuesto y autoridad, más las consecuencias de no resolver el problema y los beneficios de resolverlo. Conviene en ventas consultivas de ciclo largo; para la mayoría de las pymes es más de lo necesario.",
  ],
},
```

La vía 2 es menos escaneable que una tabla para un motor de IA, pero no rompe nada. Se puede empezar por ahí y pasar a la tabla cuando haya código.

**Sobre el schema:** una tabla no necesita JSON-LD propio. Lo que sí ayuda a que el contenido se entienda como comparativa es el `h2` descriptivo y el `<caption>` (si se hace vía 1).

---

## (c) Preguntas frecuentes del post

**Estado hoy:** el post no tiene FAQ.

**Dónde va:** al final del `body`, después del bloque 15 (el `p` de "Cómo sostener esto sin que se vuelva burocracia") y antes del `cta`.

**Formato:** como el renderer no tiene `h3`, la solución sin código es un `h2` "Preguntas frecuentes" y cada pregunta como un `p` que arranca con la pregunta en negrita y sigue con la respuesta. Si más adelante se suma `h3` (o un bloque `faq`), cada pregunta pasa a `h3`.

```ts
{ type: "h2", text: "Preguntas frecuentes sobre calificación de leads B2B" },
{
  type: "p",
  text: "**¿Cuál es la diferencia entre BANT y MEDDIC?** BANT evalúa cuatro criterios (presupuesto, autoridad, necesidad y plazo) y sirve para descartar rápido, mientras que MEDDIC suma las métricas que espera el cliente, sus criterios y proceso de decisión, el dolor real, quién firma el gasto y quién empuja la compra desde adentro. BANT es más ágil para ciclos cortos; MEDDIC rinde más cuando hay varios decisores y el ciclo se extiende meses.",
},
{
  type: "p",
  text: "**¿Qué método de calificación le conviene a una pyme?** Para la mayoría de las pymes, BANT: es lo bastante simple como para aplicarlo en la primera llamada sin armar una planilla de diez criterios. Si tu venta es más compleja, con varias áreas involucradas y un ciclo de meses, MEDDIC empieza a justificar el esfuerzo extra.",
},
{
  type: "p",
  text: "**¿Cuándo hay que volver a calificar un lead?** Cada vez que aparece información nueva en una conversación, no una sola vez al principio. Un lead que hoy no tiene presupuesto pero sí una necesidad real se registra y se retoma más adelante, en vez de descartarlo.",
},
```

**Cada respuesta sale del propio post** (secciones "Cómo elegir un método", "BANT", "MEDDIC" y "Errores comunes al calificar"): no hay plazos ni cifras nuevas. La palabra "recalificar" no tiene frecuencia fija en el post y no inventé una.

**Schema `FAQPage`:** hoy `BlogPostingJsonLd` solo emite `BlogPosting`. Para emitir también `FAQPage` con estas tres preguntas hay que extender el componente (un array de preguntas en `BlogPost` o un bloque `faq` en el `body`), y el texto del JSON-LD tiene que ser idéntico al visible. Expectativa: Google ya no muestra el rich result de FAQ para este tipo de sitio, así que el beneficio es de contenido citable, no de snippet.

---

## Cosas del post que encontré al leerlo (no las toqué)

1. **Sin links internos en el cuerpo.** El post no enlaza a `/preventa` salvo por el botón final, y `/preventa` nombra BANT en su tercera etapa ("BANT: Presupuesto, Autoridad, Necesidad y Plazos") pero no enlaza al post. Es un refuerzo gratuito en los dos sentidos. En el post requiere pasar de `renderBold` a `renderRich` en `BlogPostPage.tsx`; en `/preventa`, ya existe el patrón (`[proceso de ventas desde cero](/ebook)`), así que sumarlo en un `paragraphs` es cambio de contenido, no de código (ya lo propuse en la FAQ 2.2 de `faqs-servicios.md`).
2. **Conteo de "capas" en el bloque MEDDIC.** El texto dice "MEDDIC suma tres capas que BANT no cubre" y después enumera Metrics, Decision criteria y Decision process, Identify pain, "además de" Economic buyer y Champion, o sea, cinco o seis cosas. Es correcto como contenido, solo el "tres" queda engañoso.
3. **Sin `dateModified` ni fecha de actualización visible.** Si se agregan estos bloques, conviene reflejar la actualización (hoy el tipo `BlogPost` solo tiene `publishedAt`). Es un cambio de tipos y de JSON-LD, no de copy.
4. **Antigüedad del dato de BANT.** "nació en IBM hace más de cinco décadas" es una afirmación sin fuente en el post. Si la comparativa va a ser lo más citado del post, vale la pena tener una fuente o suavizarla.
