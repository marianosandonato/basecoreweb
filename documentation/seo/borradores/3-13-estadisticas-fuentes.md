# Estadísticas sin fuente en el sitio ES: ubicación, fuente real y propuesta

Fecha: 3/10/2026. Nada aplicado al repo. Método: localización en `src/`, búsqueda de la fuente primaria con Perplexity y verificación de URL y cifra con WebFetch cuando el sitio lo permitió. Cada fila indica qué quedó verificado de primera mano y qué no. Donde WebFetch devolvió 403 o timeout (McKinsey, Gartner), lo digo: la cifra se confirmó con dos corridas de Perplexity coincidentes pero no abriendo la página.

## Resumen

| # | Página y ubicación | Cifra actual | Veredicto sobre la fuente | Propuesta | Confianza |
|---|---|---|---|---|---|
| 1 | /posventa, `src/content/posventa.ts:27` | "hasta 7 veces más" caro adquirir que retener | No hay fuente primaria para "7". HBR publica "entre 5 y 25 veces" (sin citar el estudio) | (b) Reformular a "entre 5 y 25 veces, según el estudio y la industria" y enlazar HBR | Alta en que HBR lo dice; media en la solidez del dato (HBR mismo dice "depending on which study you believe") |
| 2 | /posventa, `src/content/posventa.ts:28` | "60% a 70%" vs "5% a 20%" de probabilidad de venta | Atribuida a *Marketing Metrics* (Farris et al., 2006) solo en fuentes secundarias; no se pudo verificar en el libro | (c) Sacar las cifras; dejar la idea sin números | Alta en la recomendación |
| 3 | /venta, `src/content/venta.ts:29` | "80% de las ventas requiere al menos cinco contactos" y "44% de los vendedores abandona tras el primero" | No rastreable a un estudio auditable. Lo más cercano: encuesta de 1942 con menos de 40 miembros (SMEI) y un libro de LeBoeuf de 1987 | (c) Sacar las cifras y reformular sin números (o, si Mariano quiere un número, (b) con Belkins/Outreach, medición distinta) | Alta |
| 4 | /tecnologia, `src/app/(es)/tecnologia/page.tsx:179-182` | "Más de la mitad de las implementaciones de CRM falla" | Origen probable: Gartner 2001 ("55% no cumplió expectativas"); el propio Gartner aclaró que el fracaso absoluto era cerca de 5% | (b) Reformular a "muchas implementaciones no cumplen lo que se esperaba", sin cifra ni enlace (o (c)) | Alta |
| 5 | /marketing, `src/app/(es)/marketing/page.tsx:209` | "El 90% de los compradores B2B empieza su proceso investigando por su cuenta" | El 90% mezcla métricas distintas; ninguna fuente primaria dice eso con esa unidad. 6sense 2024 sí tiene un dato verificable cercano | (b) Reformular con 6sense (81% elige proveedor preferido antes de hablar con ventas) y enlazar | Alta en 6sense; media en que Mariano quiera cambiar el mensaje |
| 6 | /preventa, `src/content/preventa.ts:28` (extra) | McKinsey: "40% a 50% en negocios nuevos y 80% a 90% en renovaciones" | Existe en McKinsey (2015). Está nombrada pero sin enlace | (a) Enlazar la fuente y ajustar "tasas de éxito" a "win rates" | Media-alta (WebFetch a McKinsey dio timeout 3 veces; cita confirmada por dos corridas de Perplexity) |

Estadísticas repetidas en el blog (mismo problema, misma solución): `src/content/blog/es/como-prevenir-el-churn.ts:15` y `src/content/blog/en/how-to-prevent-churn.ts:15` repiten las cifras 1 y 2 ("7 veces" y "60% a 70%"). Si se corrige /posventa, hay que corregir también esos dos posts para no dejar la misma cifra sin fuente en otra URL (criterio Camino B: un dueño, el resto enlaza).

---

## 1. /posventa: "hasta 7 veces más caro"

Ubicación: `src/content/posventa.ts:27`.

Texto exacto: "Adquirir un cliente nuevo puede costar hasta 7 veces más que **retener a uno que ya confía** en tu empresa, pero la mayoría concentra su energía en abrir cuentas nuevas. Ahí la posventa define el resultado: una relación rentable, o una nueva baja."

Qué encontré:

- No hay estudio primario para "7 veces". Publicaciones secundarias lo atribuyen a la White House Office of Consumer Affairs ("6 a 7 veces", vía un blog de Experian), y Kissmetrics publica "5 a 7 veces", pero ninguna presenta el informe original, año ni página. No debe presentarse como dato gubernamental.
- Verificado con WebFetch: Amy Gallo, "The Value of Keeping the Right Customers", Harvard Business Review, 29/10/2014: "acquiring a new customer is anywhere from five to 25 times more expensive than retaining an existing one". URL: https://hbr.org/2014/10/the-value-of-keeping-the-right-customers. Aclaración que el artículo hace de entrada ("Depending on which study you believe, and what industry you're in"): HBR tampoco cita el estudio de base.
- Contraste serio: Min, Zhang, Kim y Srivastava (2016, *Journal of Marketing Research*, 53(5), 728-744) midió en telecomunicaciones móviles US$159,64 de adquisición contra US$53,23 de retención por cliente (unas 3 veces). Sirve para mostrar que la razón depende del sector. No lo propongo para el sitio (es sectorial y no se abrió el PDF), solo como argumento de prudencia.

Propuesta: (b). Reformular para que coincida con lo que la fuente dice y enlazar. Texto sugerido: "Según [Harvard Business Review](https://hbr.org/2014/10/the-value-of-keeping-the-right-customers), captar un cliente nuevo puede costar entre 5 y 25 veces más que retener a uno existente, según el estudio y la industria. Aun así, la mayoría concentra su energía en abrir cuentas nuevas. Ahí la posventa define el resultado: una relación rentable, o una nueva baja." Alternativa más conservadora: (c), sacar la cifra y dejar "Captar un cliente nuevo suele costar más que retener a uno que ya confía en tu empresa".

Confianza: alta en que HBR dice "5 a 25"; media en el valor empírico del dato.

## 2. /posventa: "60% a 70%" frente a "5% a 20%"

Ubicación: `src/content/posventa.ts:28`.

Texto exacto: "Un cliente existente tiene entre 60% y 70% de probabilidad de volver a comprarte; un prospecto nuevo, apenas 5% a 20%. Por eso pequeñas mejoras en retención impactan tanto en la rentabilidad: la posventa no es soporte, es el **activo más subestimado del ciclo**."

Qué encontré:

- Se atribuye a *Marketing Metrics: 50+ Metrics Every Executive Should Master* (Farris, Bendle, Pfeifer, Reibstein, Pearson/Wharton, 2006). La atribución aparece solo en fuentes secundarias (por ejemplo un blog de 2013). No pude confirmar la frase ni los porcentajes dentro del libro, ni encontrar página o estudio de origen. La muestra editorial no reproduce esa sección (la sección pertinente, "Acquisition Versus Retention Spending", está hacia las pp. 152-154 de la primera edición, pero eso es el índice, no una página verificada con la cifra).
- Sin fuente primaria auditable, no recomiendo enlazar. Si se cita "Marketing Metrics" sin poder mostrar la página, el enlace sería a una ficha del libro y daría una apariencia de respaldo que no tenemos.

Propuesta: (c). Sacar las cifras y mantener la idea. Texto sugerido: "Un cliente existente ya te conoce y ya confía en ti; vender a un cliente nuevo suele ser más difícil. Por eso pequeñas mejoras en retención impactan tanto en la rentabilidad: la posventa no es soporte, es el **activo más subestimado del ciclo**." Si Mariano prefiere conservar un número, la única cifra con enlace verificable en este bloque es la de HBR (punto 1); con una sola cifra enlazada alcanza.

Confianza: alta en la recomendación de sacar.

## 3. /venta: "80%" y "44%"

Ubicación: `src/content/venta.ts:29`.

Texto exacto: "Un pipeline sin métricas es, literalmente, un pipeline ciego. El 80% de las ventas requiere al menos cinco contactos para concretarse, pero el 44% de los vendedores abandona tras el primero. Esa brecha se cierra con un proceso que defina **cuándo y cómo avanzar**."

Qué encontré:

- No se rastrea hasta un estudio original auditable. Lo más cercano:
  - Verificado con WebFetch (https://smei.org/sales-statistics/): SMEI (ex NSEA) cuenta que el 80% sale de una encuesta de 1942 del capítulo de Long Island: "the sample size was less than 40" y mide la relación llamadas/ventas, no cinco seguimientos.
  - El 44% aparece impreso en Michael LeBoeuf, *How to Win Customers and Keep Them for Life* (1987) como "44 percent give up after one 'no'", sin estudio de respaldo. Un "no" no es lo mismo que un seguimiento.
  - La formulación conjunta la difundió Marketing Donut y la repiten Scripted y otras recopilaciones, sin nombrar estudio. Atribuciones a The Brevet Group o Dartnell tampoco tienen informe original localizable.
  - El estudio de Baylor sobre llamados en frío (2012) existe, pero mide citas y referidos en 6.264 llamadas de 50 agentes inmobiliarios, no estas cifras.
- Datos recientes y verificables (distinta medición, no equivalen):
  - Belkins, *Sales Follow-Up Statistics* (publicado 12/6/2023, actualizado 26/6/2026; 7,5 millones de emails): el primer email genera 41,4% de las respuestas y los pasos 2 a 6 en conjunto, el 58,6%. Mide respuestas por email, no ventas cerradas. URL: https://belkins.io/blog/sales-follow-up-statistics (verificada con WebFetch).
  - Outreach, análisis 2026 de su plataforma: 4,8 toques para una primera respuesta y 7,4 para agendar una reunión (verificado con WebFetch). Mide toques totales para reunión, no ventas. URL: https://www.outreach.ai/resources/blog/email-sequencing-best-practices.

Propuesta: (c). Sacar las dos cifras y reformular sin números. Texto sugerido: "Un pipeline sin métricas es, literalmente, un pipeline ciego. Muchas ventas no se cierran en el primer contacto, pero sin un proceso definido el seguimiento depende de la memoria de cada vendedor. Esa brecha se cierra con un proceso que defina **cuándo y cómo avanzar**." (el blog `como-hacer-seguimiento-comercial` ya trata el tema sin esas cifras). Si Mariano quiere un número, la opción (b) es usar Belkins con su unidad real: "En una muestra de 7,5 millones de emails B2B, el 58,6% de las respuestas llegó en los seguimientos y no en el primer mensaje (Belkins, 2026)". Ojo: es prospección por email, no venta; encaja mejor en /preventa que en /venta.

Confianza: alta en que las cifras actuales no se pueden respaldar; alta en Belkins y Outreach como datos reales de otra medición.

## 4. /tecnologia: "más de la mitad de las implementaciones de CRM falla"

Ubicación: `src/app/(es)/tecnologia/page.tsx:179-182`.

Texto exacto: "Más de la mitad de las implementaciones de CRM para empresas falla por falta de adopción, roles poco claros o flujos que nunca se ordenaron. Un CRM no ordena un proceso comercial, lo refleja. Por eso definimos el proceso antes de implementar la herramienta."

Qué encontré:

- Origen probable: Gartner, estudio de fines de 2001 (documento original no localizado). Verificado con WebFetch (Bob Thompson, CustomerThink, 6/12/2004, entrevista a Ed Thompson de Gartner, https://customerthink.com/reports_crm_failure_highly_exaggerated/): "the figure we originally quoted was 55 percent failed to meet expectations"; la gente "chopped the 'meet expectations' off it and just said, 'failure'"; y "if you're looking at absolute failure, you're looking at 5 percent, maybe". Es decir, 55% no cumplió expectativas, no 55% fracasó.
- Otras cifras que circulan no sirven para esta frase: Forrester 2008 (*Answers To Five Frequently Asked Questions About CRM Projects*, 133 organizaciones) mide éxito (28% de las grandes y 47% de las medianas alcanzaron o superaron lo esperado), no fracaso; CSO Insights mide mejora significativa de rendimiento (26%); el CHAOS Report de Standish es de proyectos de software en general; la cifra del 50% de McKinsey (2023, sobre Salesforce, opinión de directivos) no se pudo abrir (timeout), así que no la propongo.
- La frase de causas ("falta de adopción, roles poco claros, flujos desordenados") no tiene fuente en el sitio. Es consistente con la tesis de la página, pero hoy se presenta como explicación de una cifra.

Propuesta: (b). Quitar la cifra y plantearlo como la premisa de trabajo de Base Core, sin enlace. Texto sugerido: "Muchas implementaciones de CRM no cumplen lo que se esperaba de ellas, casi siempre por falta de adopción, roles poco claros o flujos que nunca se ordenaron. Un CRM no ordena un proceso comercial, lo refleja. Por eso definimos el proceso **antes de implementar** la herramienta." Si Mariano insiste en un número, la única formulación honesta es "en 2001, Gartner halló que el 55% de las implementaciones no cumplió las expectativas (con cerca de 5% de fracaso absoluto)", que tiene 25 años y pierde impacto: recomiendo no usarla. Alternativa: (c), sacar la frase de apertura.

Confianza: alta.

## 5. /marketing: "90% de los compradores B2B"

Ubicación: `src/app/(es)/marketing/page.tsx:209`.

Texto exacto: "El 90% de los compradores B2B empieza su proceso de compra investigando por su cuenta, mucho antes de hablar con un vendedor. Para cuando llegan a tu equipo comercial, ya se formaron una opinión: el marketing define **con qué opinión llegan**."

Qué encontré: ninguna fuente primaria dice "90% de los compradores empieza investigando por su cuenta". Las cifras de ese orden miden otras cosas:

- Forrester (Lori Wizdo, 2013): los compradores pueden estar entre dos tercios y 90% del recorrido antes de contactar a ventas (90% es un extremo del avance del proceso, según producto y mercado). La URL de ese blog (13-01-23-accelerating_revenue_in_a_changed_economy) devolvió 404 en WebFetch, así que no la recomiendo.
- Forrester, 21/8/2017 (Lori Wizdo, verificado con WebFetch): "68% prefer to research on their own, online"; 60% prefiere no usar al vendedor como fuente principal de información; 62% dice poder definir criterios o lista de proveedores solo con contenido digital. Es una preferencia, de 2017. URL: https://www.forrester.com/blogs/the-ways-and-means-of-b2b-buyer-journey-maps-were-going-deep-at-forresters-b2b-forum/.
- 6sense, *2024 Buyer Experience Report* (2.509 compradores, verificado con WebFetch): "81% of buyers choose a preferred vendor prior to speaking with sales" y el 69% del proceso de compra ocurre antes de que el comprador hable con vendedores (la página lo describe como cerca del primer 70% del recorrido). URL: https://6sense.com/science-of-b2b/2024-buyer-experience-report/. Es el dato más reciente, con muestra identificada y mide exactamente lo que dice la página: qué pasa antes del contacto con ventas.
- Gartner (comunicado del 25/6/2025, encuesta a 632 compradores, ago-sep 2024): 61% prefiere una experiencia de compra sin representantes. No pude abrir la página (403); la cifra viene de Perplexity. Mide preferencia, no investigación previa.
- TrustRadius 2024: el 90% de ahí corresponde a compradores que valoran las conversaciones con colegas, no a investigación previa. Es probable que sea el origen de la confusión.

Propuesta: (b). Reformular con 6sense y enlazar. Texto sugerido: "Según el [2024 Buyer Experience Report de 6sense](https://6sense.com/science-of-b2b/2024-buyer-experience-report/), el 81% de los compradores B2B elige un proveedor preferido antes de hablar con un vendedor, y cerca del 70% del proceso de compra ocurre antes de ese primer contacto. Para cuando llegan a tu equipo comercial, ya se formaron una opinión: el marketing define **con qué opinión llegan**." Se mantiene la tesis de la página y el cierre.

Confianza: alta en 6sense (cifra y URL verificadas); media en que quede mejor que la cifra actual (cambia de 90% a 81% y 70%).

## 6. Extra detectada: /preventa, McKinsey

Ubicación: `src/content/preventa.ts:28`.

Texto exacto: "Según **McKinsey & Company**, las empresas con procesos de preventa sólidos logran tasas de éxito de 40% a 50% en negocios nuevos y de 80% a 90% en renovaciones. Ese resultado no sale de un informe: sale de un proceso bien construido y sostenido en el tiempo."

Qué encontré: la cifra existe. McKinsey, "To improve sales, pay more attention to presales", Homayoun Hatami, Candace Lun Plotkin y Saurab Mishra, 1/2/2015 (la referencia de McKinsey también cita una publicación en HBR del 17/2/2015). Cita (dos corridas de Perplexity coinciden): "companies with strong presales capabilities consistently achieve win rates of 40–50% in new business and 80–90% in renewal business—well above average rates". El artículo no detalla muestra ni método. URL: https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/to-improve-sales-pay-more-attention-to-presales. Limitación: WebFetch dio timeout en las tres tentativas, así que la cita textual no se contrastó abriendo la página.

Propuesta: (a). Enlazar la fuente tal cual y ajustar el término: "tasas de éxito" por "tasas de cierre (win rates)", y agregar el enlace en "McKinsey & Company". Conviene también suavizar "logran" por "consiguen de forma consistente", más fiel a la cita. No usar esta cifra en las FAQs de /preventa (así quedó).

Confianza: media-alta. Antes de publicar, que alguien abra la URL en un navegador y confirme la frase.

## Otras estadísticas sin fuente en esas páginas

Se buscó en `src/app/(es)`, `src/content/*.ts` y `src/components` toda cifra con porcentaje o múltiplo ("veces", "de cada", "mitad") en las páginas Home, /preventa, /venta, /posventa, /marketing y /tecnologia. Resultado:

- Las cinco pedidas más la de McKinsey (punto 6) son todas las que hay en esas páginas. Los demás `%` del código son de CSS y comentarios.
- En el blog (fuera de las páginas, pero relacionado): `como-prevenir-el-churn.ts:15` (y su versión EN) repite las cifras 1 y 2; `como-prevenir-el-churn.ts:23` usa "si el 80% de las bajas ocurre a los cuatro meses de la primera compra" como ejemplo hipotético, correctamente planteado con "si", sin presentarlo como dato. `que-crm-elegir-para-pyme.ts:97` ("100%") es una frase de diseño, no estadística. `como-hacer-seguimiento-comercial.ts:38` da una cadencia de ejemplo y aclara que no hay que copiar los números exactos, correcto.
- Cifras no porcentuales sin fuente que no son estadística de mercado (por ejemplo "nueve etapas", "ocho pilares") son descripciones del servicio propio: no requieren fuente.
