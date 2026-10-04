# Tarea 5.2: propuesta de la próxima tanda de posts del blog

Fecha: 4/10/2026. Autor: `seo-marketing`. Estado: SOLO PROPUESTA. No se escribió ningún post ni se tocó código. Pendiente de revisión de `web-lead` y decisión de Mariano.

> **ACTUALIZADO 4/10/2026 (segunda vuelta):** las keywords "sin dato" de este documento ya se validaron con Keyword Planner real. Varias conclusiones cambian (posts 3, 6, 7 y 8 y los puntajes). Ver la sección 13 al final. La elección entre alternativas se hace ahora en `5-2-propuesta-16-opciones.md`.

## 0. Cómo leer este documento

**Qué se pidió:** un post nuevo por rama (Marketing, Preventa, Venta, Posventa, Tecnología, Recruiting) y hasta 2 extras justificados, con orden de publicación.

**Resultado en una línea:** 6 posts por rama + 2 extras = 8 posts. Todos ES + EN. Orden recomendado: Customer success, adopción de CRM, gerente comercial vs consultor, appointment setting, forecast, agencia vs freelance vs equipo interno, diagnóstico comercial, Recruiting.

### Qué quedó verificado y qué no (leer antes de decidir)

| Tipo de dato | Fuente | Estado |
|---|---|---|
| Volúmenes de búsqueda | Solo el Mapa de Keywords (Keyword Planner ES/AR/EN, rangos, no cifras exactas) | Citado con la fila del Mapa. No consulté Keyword Planner ni ninguna otra herramienta de volumen. |
| Keywords sin fila en el Mapa | Ninguna | Marcadas "sin dato". Hay una tanda de validación pendiente para Mariano (sección 6). No estimé volúmenes. |
| Qué rankea y qué cita la IA | Perplexity (API) en español e inglés, 4/10/2026 | Es una aproximación: una corrida por tema, sin ChatGPT ni AI Overviews reales (misma limitación que la ronda 2 de 5.10). Sirve para ver el tipo de actor que aparece, no una posición exacta. |
| Cifras citables | Páginas abiertas con WebFetch hoy o en la tarea de estadísticas del 3/10 | Cada cifra lleva su estado en la sección 5. Dos quedan "confirmar en navegador" (Gartner devolvió 403). |
| Puntajes de priorización | Mi criterio, con los pesos de la skill `content-strategy` (impacto 40, encaje 30, búsqueda 20, recursos 10) | Son juicio, no dato. |

### Lecciones que condicionan la elección de ángulos

1. **5.10 (2/10):** los temas masivos (CRM, marketing, churn) los dominan Salesforce, HubSpot, Pipedrive y similares. Donde Base Core sale citado es en nichos (PMO) y calificación de leads. Por eso ningún post de esta tanda ataca un tema genérico de cabecera ("qué es un CRM", "estrategia de marketing"): cada uno toma un ángulo de problema o de decisión con menos competencia.
2. **Hallazgo de esta investigación:** en varios temas la SERP en español no está solo en manos de gigantes. Para adopción de CRM, KPIs, gerente vs consultor y customer success aparecen consultoras boutique y blogs pequeños (Back In Town, angelortegacastro.com, play2sell, landoo, revopspymes, vonsel). Ahí un dominio nuevo con ángulo propio tiene opción de ser citado.
3. **Reglas del sitio aplicadas a todo el documento:** tuteo neutro, sin precios ni plazos ni resultados de clientes, ninguna estadística sin fuente que alguien pueda abrir, lo gratuito es el relevamiento inicial (el "diagnóstico gratuito" es una primera reunión; el diagnóstico en profundidad forma parte del servicio si se avanza, tal como quedó en las FAQs de 3.13).

## 1. Resumen de la tanda

| # | Rama | Título ES | Keyword principal | Respaldo de demanda | Destino | Puntaje |
|---|---|---|---|---|---|---|
| 1 | Posventa | Customer success sin equipo de CS: cómo hacerlo en una pyme | customer success | Verificada (Mapa): 100–1.000, Baja, ES y AR; EN idéntico | /posventa | 7,9 |
| 2 | Tecnología | Por qué tu equipo no usa el CRM (y cómo lograr que lo adopte) | adopción de CRM | Indirecta: "implementar crm en una empresa" 10–100 (Mapa). Frase exacta sin dato | /tecnologia | 8,3 |
| 3 | Extra 1 | ¿Gerente comercial o consultor comercial? Cuándo conviene cada uno | consultoría comercial | Indirecta: 10–100 ES/AR (Mapa). Frase exacta sin dato | /venta | 7,7 |
| 4 | Preventa | Appointment setting B2B: qué es y cómo armarlo en una pyme | appointment setting | Verificada solo en EN (Mapa): 100–1.000 ES, 10–100 AR. ES sin dato | /preventa | 7,3 |
| 5 | Venta | Forecast de ventas para pymes: cómo hacerlo con pocos datos | forecast de ventas | Sin dato propio (el Mapa lo ubica en la capa informacional 100–1.000 sin fila) | /venta | 7,3 |
| 6 | Marketing | Agencia de marketing, freelance o equipo interno: cómo decidir | agencia de marketing | Verificada la cabecera (1.000–10.000, Media). Cola larga sin dato | /marketing | 6,9 |
| 7 | Extra 2 | Diagnóstico comercial de una pyme: qué revisar y en qué orden | diagnóstico comercial | Sin dato (solo "diagnóstico comercial gratuito" 0–10) | /contacto o /venta | 6,8 |
| 8 | Recruiting | Cómo contratar a tu primer vendedor B2B en una pyme | cómo contratar un vendedor | Sin dato: el Mapa no tiene ninguna fila de reclutamiento | /venta | 5,9 |

Los extras son los de las filas 3 y 7. La columna "Puntaje" sale de la tabla de la sección 7.

## 2. Reglas de formato comunes (para quien redacte)

Ya validadas en 3.14 (post de leads B2B) y en la skill `ai-seo`. No son "contenido para IA": es la misma estructura que ayuda a una persona a escanear.

- **Respuesta corta de 40 a 60 palabras al inicio**, en negrita, que responda la pregunta del título por sí sola.
- **Una tabla comparativa** donde el tema es una decisión o un diagnóstico (ya hay bloque `table` en `types.ts`).
- **3 FAQs** al final como párrafos con pregunta en negrita, redactadas como las busca una persona. Cada respuesta se entiende sola.
- **Toda cifra con fuente enlazada y año** en el mismo párrafo. Si no hay fuente abierta y verificada, el post se escribe sin cifra.
- **Enlace a la página de servicio** dentro del cuerpo (el renderer soporta `[texto](url)`) y CTA final. Además, 1 o 2 enlaces a posts hermanos (mapa en la sección 4).
- **Slug de EN independiente**, escrito para búsquedas en inglés, no traducción literal (convención vigente de `posts.ts`).
- **Sin precios, plazos ni cifras de clientes.** Los ejemplos numéricos solo con valores claramente ilustrativos y rotulados como tales (decisión para `web-lead` en el post de forecast).
- **Sin keyword stuffing:** según la skill `ai-seo` baja la visibilidad en respuestas de IA; la keyword principal aparece en título, respuesta corta, un H2 y la descripción.
- Implementación futura (no se hace ahora): alta en `src/content/blog/posts.ts` y `src/content/blog/slugs.ts` (se mantienen a mano, ver comentario del archivo), `publishedAt` semanal siguiendo la cadencia existente (domingos; el último es el 11/10), y registro de las queries nuevas en 5.10.

## 3. Fichas por post

### 3.1 Posventa: Customer success

- **Título ES:** Customer success sin equipo de CS: cómo hacerlo en una pyme
- **Título EN:** Customer success without a CS team: how a small business can do it
- **Slug ES:** `customer-success-sin-equipo-de-cs-pyme`
- **Slug EN:** `customer-success-without-a-cs-team-small-business`
- **Keyword principal:** customer success. ES España 100–1.000, Baja, CPC €1,36–6,39. ES Argentina 100–1.000, Baja, CPC €0,22–0,83. EN idéntico en los dos mercados (Mapa 8.4 y sección 9, "validado 30/8").
- **Secundarias:** retención de clientes (10–100, Baja, ES y AR; Mapa 8.4). Gestión de cartera de clientes (10–100, Baja; Mapa 8.4). Experiencia del cliente (100–1.000 solo AR, Media; terciaria, usar solo como vocabulario). EN: account development (10–100, Baja, ambos mercados; Mapa 9). "Qué es customer success" y "cómo implementar customer success": sin dato, entran en la validación pendiente.
- **Intención:** informacional (definición) con salida de "cómo se hace". Un lector que ya vende y no sabe si necesita una persona dedicada.
- **Qué rankea y qué cita hoy:** definiciones de HubSpot, Zendesk, Hotmart, Crehana, Doppler, Payoneer, Zenvia. Para el ángulo "pyme sin equipo de CS" aparecen solo blogs pequeños (gurusup, bonusqr). Nadie lo trata desde el reparto de roles entre ventas, operaciones y dirección.
- **Ángulo diferencial:** customer success como proceso compartido con un responsable parcial, no como un cargo. Cuatro momentos que sí hay que cubrir (cierre, onboarding, primer valor, renovación o expansión), con quién responde en cada uno cuando no hay un CSM. Encaja con la tesis de la marca "la cartera es la fuente de rentabilidad más subestimada" (Marketing Strategy, Posicionamiento) y con los puestos "Customer Success Manager/Rep" que ya aparecen en /posventa.
- **Destino y CTA:** /posventa. ES: "VER CÓMO ORDENAMOS TU POSVENTA Y CUSTOMER SUCCESS". EN: "SEE HOW WE STRUCTURE YOUR CUSTOMER SUCCESS" → /en/post-sales.
- **Esquema H2 tentativo (7):**
  1. Qué es customer success (y en qué se diferencia de soporte y de fidelización)
  2. Por qué una pyme B2B lo necesita aunque no tenga un equipo de CS
  3. Los cuatro momentos que hay que cubrir: cierre, onboarding, primer valor y renovación
  4. Quién responde cuando no hay un customer success manager
  5. Cómo decidir a qué clientes dedicarles tiempo (segmentar la cartera)
  6. Qué medir con una hoja de cálculo o un CRM
  7. Cuándo conviene sumar una persona dedicada, y preguntas frecuentes
- **Tabla / FAQ:** sí a las dos. Tabla "Soporte, customer success y fidelización: qué resuelve cada uno" (pregunta que responde, cuándo actúa, quién lo hace). FAQs: ¿customer success es lo mismo que soporte?, ¿cuándo contratar un CSM?, ¿qué es el "primer valor"?
- **Fuentes candidatas:** el post es de método; puede escribirse sin cifras. Si se quiere una: HBR (Amy Gallo, 29/10/2014), captar un cliente nuevo cuesta "entre 5 y 25 veces" más que retener, con la salvedad del propio artículo ("depending on which study you believe"). Verificada hoy. No usar "25% a 95%": HBR 2014 lo repite, pero la fuente original (HBR 1990, Reichheld y Sasser) dice 25% a 85% (Perplexity, sin abrir el PDF).
- **Canibalización: media.** El post de churn tiene el H2 "Customer success vs. fidelización: no es lo mismo" (`src/content/blog/es/como-prevenir-el-churn.ts:73`) y /posventa lo tiene como secundaria. Resolución propuesta: el post nuevo es el dueño de la definición. El H2 del post de churn se acorta a 2 líneas y enlaza al nuevo (cambio aparte, requiere aprobación de Mariano, mismo criterio Camino B). No repetir ese párrafo en el post nuevo.

### 3.2 Tecnología: adopción de CRM

- **Título ES:** Por qué tu equipo no usa el CRM (y cómo lograr que lo adopte)
- **Título EN:** Why your team isn't using the CRM (and how to get adoption)
- **Slug ES:** `por-que-tu-equipo-no-usa-el-crm`
- **Slug EN:** `how-to-get-your-sales-team-to-use-the-crm`
- **Keyword principal:** adopción de CRM. **Sin dato en el Mapa.** Respaldo con dato: "implementar crm en una empresa" 10–100, Alta, AR (Mapa 8.6, decisión "Blog, informacional, alimenta a Tecnología"). "Implementación crm" 10–100, Alta, ES y AR (8.2). "Consultoría crm" 10–100, Baja, ES y AR (8.2). "Crm para empresas" 100–1.000 ES, 10–100 AR (primaria de la página, no del post). EN: crm consulting 10–100, Baja (Mapa 9).
- **Secundarias:** "mi equipo no usa el CRM", "por qué fracasa un CRM", "implementar un CRM en una pyme". Todas sin dato, a validar.
- **Intención:** informacional de problema ya instalado ("tenemos CRM y nadie lo usa", dolor literal de Marcos en las buyer personas). Es la intención opuesta a "qué CRM elegir".
- **Qué rankea y qué cita hoy:** una mezcla que incluye blogs pequeños y consultoras: play2sell, landoo, revopspymes, vonsel, hoyvendemas, revenuehublatam, icx. Todos dicen lo mismo (simplificar campos, capacitar, que la jefatura lo use). Pipedrive aparece, pero no domina.
- **Ángulo diferencial:** (a) el problema se diagnostica como un problema de proceso, no de disciplina: una tabla "síntoma, causa de proceso, qué ajustar" ("Tu CRM no está desordenado. Tu proceso no está definido", frase de territorio de la estrategia creativa). (b) La cifra correcta: la frase "más de la mitad de las implementaciones falla" viene de un estudio de Gartner de 2001 que medía "no cumplió expectativas" (55%), y el propio Gartner aclaró que el fracaso absoluto rondaba el 5% (verificado el 3/10). Ser la fuente que corrige la cifra es citable y consistente con la auditoría de estadísticas. (c) Fricción medible: Salesforce, State of Sales 2026, "60% del tiempo en tareas que no son vender", incluido cargar notas a mano en el CRM.
- **Destino y CTA:** /tecnologia. ES: "VER CÓMO IMPLEMENTAMOS TU CRM PARA QUE SE USE". EN: "SEE HOW WE IMPLEMENT A CRM YOUR TEAM WILL USE" → /en/tecnologia.
- **Esquema H2 tentativo (7):**
  1. Qué significa "no usar el CRM" (iniciar sesión no es usarlo)
  2. Cuántas implementaciones fallan de verdad: lo que dice y lo que no dice la cifra del 55%
  3. Cinco causas por las que un equipo vuelve al Excel y al WhatsApp
  4. Qué ordenar antes de tocar la herramienta: etapas, responsables y campos mínimos
  5. Cómo hacer que el CRM sea útil para el vendedor y no solo para dirección
  6. Cómo medir la adopción (actividad útil, no accesos)
  7. Cuándo pedir ayuda externa, y preguntas frecuentes
- **Tabla / FAQ:** sí a las dos. Tabla "síntoma, causa de proceso, ajuste" (5 filas). FAQs: ¿cuánto tarda en adoptarse un CRM? (responder sin plazos: depende del proceso y del equipo), ¿conviene cambiar de CRM si nadie lo usa?, ¿quién debe ser responsable del CRM?
- **Fuentes candidatas:** Bob Thompson (CustomerThink, 6/12/2004), entrevista a Ed Thompson de Gartner: "55 percent failed to meet expectations", fracaso absoluto "5 percent, maybe". Verificada con WebFetch el 3/10. Salesforce, *State of Sales* 2026 (página de estadísticas), "60% of their time on non-selling tasks". Verificada con WebFetch hoy.
- **Dependencia a tener en cuenta:** la tarea de estadísticas del 3/10 propone reescribir en /tecnologia la frase "más de la mitad de las implementaciones de CRM falla" (punto 4). Si Mariano la aprueba, el post queda coherente con la página. Si la rechaza, el post debe seguir diciendo lo que la fuente dice y señalar la diferencia sin contradecir a la página de frente: avisar a `web-lead` antes de publicar.
- **Canibalización: baja a media.** Con `que-crm-elegir-para-pyme` (selección, no adopción): enlazarlos entre sí. Con /tecnologia (dueña de "CRM para empresas" y "consultoría CRM") y con el H3 "Implementación CRM" de /venta: el Mapa ya resolvió que /tecnologia es la dueña. No usar "crm para pymes" ni "qué crm elegir" como keyword de este post.

### 3.3 Extra 1: gerente comercial o consultor comercial

- **Título ES:** ¿Gerente comercial o consultor comercial? Cuándo conviene cada uno
- **Título EN:** Sales manager or sales consultant: which does a small business need?
- **Slug ES:** `gerente-comercial-o-consultor-comercial-pyme`
- **Slug EN:** `sales-manager-or-sales-consultant-for-a-small-business`
- **Keyword principal:** consultoría comercial. ES España 10–100, Baja, CPC €1,73–2,49; ES Argentina 10–100 (Mapa 8.1). Es la primaria de Home y hoy no devuelve ninguna página de Base Core (5.10, query 7).
- **Secundarias:** consultoría de ventas (10–100; Baja en España, Alta en Argentina), consultoría para pymes (100–1.000 en ambos mercados; Baja en España, Alta en Argentina), asesoría comercial (100–1.000 en Argentina, Baja). Todas del Mapa 8.1. La frase "gerente comercial o consultor": sin dato.
- **Intención:** comercial/consideración. Es la objeción número 1 de Marcos en las buyer personas, literal: "¿Por qué no contrato un gerente comercial?". Quien lo busca está a un paso de decidir.
- **Qué rankea y qué cita hoy:** consultoras boutique y consultores individuales (angelortegacastro.com en tres consultas, backintown.io, advisorsam.com), más Forbes Argentina. No lo domina ningún software ni gigante.
- **Ángulo diferencial:** respuesta honesta, con una regla de decisión simple ("si la necesidad se repite todas las semanas durante años, es un cargo; si tiene principio y fin, es un proyecto") y una tercera opción (dirección comercial externalizada, a tiempo parcial). Incluye cuándo conviene contratar al gerente directamente, sin vender nada. Coincide con lo que ya dice la FAQ de 3.13 ("complementa tu dirección comercial, no la reemplaza", `src/content/faqs.en.ts:38`). El post muestra criterio en vez de promoción, lo que la skill `ai-seo` marca como requisito para que un comparativo no se lea como autopromoción.
- **Destino y CTA:** /venta, con enlace en el cuerpo a Home (donde vive el posicionamiento de consultoría comercial). ES: "VER CÓMO ORDENAMOS TU PROCESO DE VENTAS". Ojo: ese texto ya lo usa el post de seguimiento comercial. Alternativa: "VER CÓMO TRABAJAMOS CON TU EQUIPO COMERCIAL". EN: "SEE HOW WE WORK WITH YOUR SALES TEAM" → /en/sales. Decisión para `web-lead`: si se prefiere /contacto como CTA (relevamiento inicial), rompe la regla "cada post enlaza a su página de servicio".
- **Esquema H2 tentativo (6):**
  1. Dos decisiones distintas: dirigir un equipo o resolver un problema
  2. Qué hace un gerente comercial y qué hace un consultor
  3. Cuándo conviene contratar un gerente comercial
  4. Cuándo conviene ordenar el proceso primero con un consultor
  5. La opción intermedia: dirección comercial externalizada
  6. Cómo se combinan, y preguntas frecuentes
- **Tabla / FAQ:** sí a las dos. Tabla "necesidad de la empresa, opción más adecuada, por qué" (4 a 5 filas). FAQs: ¿puedo contratar a un consultor y a un gerente a la vez?, ¿un consultor reemplaza a mi gerente comercial?, ¿qué pasa si todavía no tengo proceso definido?
- **Fuentes candidatas:** ninguna cifra necesaria; escribirlo sin números y sin remuneraciones. Perplexity no devolvió una fuente de mercado verificable para costos de cada opción, y las reglas del sitio no permiten precios.
- **Canibalización: baja a media.** Con la Home (mismo campo semántico, "consultoría comercial"): el H1 no debe copiar el de la Home; el post apoya, no compite. Con el post de Recruiting (contratar un vendedor frente a contratar un gerente): enlazarlos.

### 3.4 Preventa: appointment setting

- **Título ES:** Appointment setting B2B: qué es y cómo armarlo en una pyme
- **Título EN:** B2B appointment setting: in-house or outsourced for a small business
- **Slug ES:** `appointment-setting-b2b-que-es-y-como-armarlo`
- **Slug EN:** `b2b-appointment-setting-in-house-or-outsourced`
- **Keyword principal:** appointment setting. **EN** España 100–1.000, Media, CPC €0,96–4,94; Argentina 10–100, Baja, CPC €0,27–1,92 (Mapa sección 9, "hallazgo accionable más fuerte"). **ES: sin dato** para "appointment setting" ni para "concertación de citas comerciales" (término que usan Back In Town e igtelcom según la corrida de Perplexity).
- **Secundarias:** lead qualification (EN, 10–100, Media en España, CPC €5,58–17,88). Ventas B2B (ES, 100–1.000, Baja/Media en ambos mercados, Mapa 8.3, "secundaria de mayor volumen que la propia primaria"). Prospección B2B (10–100) y generación de leads B2B (10–100). Todas del Mapa.
- **Intención:** informacional con evaluación de proveedor ("¿lo hago yo o lo tercerizo?").
- **Qué rankea y qué cita hoy:** en inglés, casi solo proveedores de outsourcing (Callbox, Martal, KeyOutreach, Tomba, Saleshive, ZoomInfo). En español, Back In Town (competidor directo), igtelcom y glosarios. Nadie plantea la decisión con una definición explícita de "cita válida".
- **Ángulo diferencial:** (a) qué cuenta como cita válida (empresa que encaja con el perfil, interlocutor correcto, motivo conocido, reunión confirmada) y cómo se conecta con los criterios de calificación del post de leads B2B. (b) Equipo propio, externo o híbrido, con criterio de decisión, sin vender outsourcing: el modelo de Base Core es diseñar el modelo de contactación y capacitar al equipo del cliente, que lo ejecuta (FAQ de /preventa). (c) Medir citas celebradas y oportunidades creadas, no citas agendadas.
- **Destino y CTA:** /preventa. El CTA del post de leads ya es "VER CÓMO ESTRUCTURAMOS TU PROSPECCIÓN B2B"; proponer uno distinto: "VER CÓMO ARMAMOS TU PREVENTA". EN: "SEE HOW WE BUILD YOUR PRESALES" → /en/presales.
- **Esquema H2 tentativo (7):**
  1. Qué es appointment setting (y qué no es)
  2. Qué cuenta como una cita válida
  3. Equipo propio, externo o híbrido: cómo decidir
  4. Cómo se ve una semana de trabajo: lista, contacto, seguimiento, agenda y traspaso
  5. Cuántos intentos de contacto hacen falta
  6. Qué medir: citas celebradas y oportunidades, no citas agendadas
  7. Preguntas frecuentes
- **Tabla / FAQ:** sí a las dos. Tabla "equipo propio, externo, híbrido" (cuándo conviene, ventaja, riesgo). Segunda tabla corta con los criterios de "cita válida". FAQs: ¿en qué se diferencia de generar leads?, ¿necesito un setter dedicado?, ¿cuántas reuniones puedo esperar? (responder que depende del segmento y la oferta, sin cifras).
- **Fuentes candidatas (ver sección 5):** Outreach 2026 (4,8 toques para una primera respuesta, 7,4 para agendar una reunión). Belkins, *Sales Follow-Up Statistics* (el primer email genera 41,4% de las respuestas; pasos 2 a 6, 58,6%; 7,5 millones de emails). Gartner (2018 y comunicado del 15/9/2020): los compradores dedican solo 17% de su tiempo a reunirse con proveedores potenciales; confirmar en navegador.
- **Canibalización: media.** La keyword coincide con el título de /en/presales ("B2B Lead Generation & Appointment Setting"). Para evitar que compitan: el post toma las búsquedas informacionales ("qué es", "propio vs externo") y no replica el título ni el H1 de la página. Con el post de leads B2B (calificación) y el de seguimiento comercial (cadencia): baja, enlazar. Chequear en la próxima ronda de 5.10 que la página siga rankeando por su keyword transaccional.

### 3.5 Venta: forecast de ventas

- **Título ES:** Forecast de ventas para pymes: cómo hacerlo con pocos datos
- **Título EN:** How to build a sales forecast with little historical data
- **Slug ES:** `como-hacer-forecast-de-ventas-pyme`
- **Slug EN:** `how-to-build-a-sales-forecast-with-little-data`
- **Keyword principal:** forecast de ventas. **Sin fila propia en el Mapa.** Dato indirecto: el Mapa 2.1 menciona "cómo hacer un forecast" como ejemplo de la capa informacional con 100–1.000 búsquedas/mes, sin cifra por mercado. La meta description de /venta ya incluye "forecast". EN: "sales forecasting for smb" 0–10, descartada como target por el Mapa (9.1-9.6). **Esperar poco del post en inglés.**
- **Secundarias a validar:** previsión de ventas (término de España), pronóstico de ventas (LatAm), pipeline ponderado. Hay que ver en Keyword Planner cuál variante pesa más por mercado; la elección del término del título depende de eso. Respaldo de la página: "gestión comercial" 100–1.000 en ambos mercados (Mapa 8.2).
- **Intención:** informacional práctica. Es el dolor de Julieta ("el forecast no es confiable").
- **Qué rankea y qué cita hoy:** vendors y medios de software (Sage, HubSpot, Pipedrive, Asana, Zendesk, Ringover) y un blog especializado en pymes (meridiandata). Hay hueco para un tratamiento de proceso, no de fórmula.
- **Ángulo diferencial:** el forecast de una pyme falla por el proceso (etapas sin criterio de salida, fechas de cierre sin respaldo, probabilidades genéricas), no por la fórmula. Método: pipeline ponderado con probabilidades propias que se calibran con los cierres reales, tres escenarios en lugar de una cifra y una revisión semanal. Coherente con la tesis "proceso antes que herramienta".
- **Destino y CTA:** /venta (la página ya nombra el forecast como H3). ES: "VER CÓMO ARMAMOS TU PIPELINE Y TU FORECAST". EN: "SEE HOW WE BUILD YOUR PIPELINE AND FORECAST" → /en/sales.
- **Esquema H2 tentativo (7):**
  1. Por qué el forecast de una pyme casi nunca es confiable
  2. Antes de calcular: etapas con criterio de salida y fecha de cierre con respaldo
  3. Pipeline ponderado paso a paso
  4. Probabilidades: cómo calibrarlas con tus propios cierres
  5. Tres escenarios en vez de una cifra
  6. Cadencia de revisión y qué hacer con las oportunidades estancadas
  7. Preguntas frecuentes
- **Tabla / FAQ:** sí a las dos. Tabla "etapa, criterio para entrar, probabilidad inicial a calibrar" (solo estructura, sin porcentajes presentados como dato). FAQs: ¿cuántos datos hacen falta?, ¿qué diferencia hay entre forecast y objetivo de ventas?, ¿necesito un CRM para hacerlo?
- **Fuentes candidatas:** Gartner, comunicado del 12/2/2020: "Only 45% of sales leaders and sellers have high confidence in their organization's forecasting accuracy" (fecha y frase vía Perplexity; la página devolvió 403; **confirmar en navegador antes de usar**). Es de 2020, no de 2023 como suele circular: ojo al fechar.
- **Decisión para `web-lead`:** si se incluye un ejemplo de cálculo, usar valores rotulados como ilustrativos y sin moneda. Si prefieren cero números inventados, mostrar solo la fórmula con variables.
- **Canibalización: baja a media.** Con el post de seguimiento comercial (ambos hablan de proceso de ventas; este de estimación): enlazar. Con el H3 "Forecast" de /venta: es soporte, no competencia. Con el post de adopción de CRM (calidad de datos): enlazar.
- **Alternativa con dato duro si la validación sale mal:** un post sobre "gestión comercial" (100–1.000 en España y Argentina, primaria de /venta, Mapa 8.2). La SERP la ocupan Cesce, Exact, DocuSign, Zendesk y Cegid: tema de cabecera, el riesgo de la lección de 5.10. Por eso no es la primera opción.

### 3.6 Marketing: agencia, freelance o equipo interno

- **Título ES:** Agencia de marketing, freelance o equipo interno: cómo decidir
- **Título EN:** Marketing agency, freelancer or in-house team: how to choose
- **Slug ES:** `agencia-de-marketing-freelance-o-equipo-interno`
- **Slug EN:** `marketing-agency-freelancer-or-in-house-team`
- **Keyword principal:** agencia de marketing. ES/AR 1.000–10.000, Media, CPC €1,63–5,50 (ES) y €0,79–3,84 (AR); es la secundaria fuerte de /marketing (Mapa 8.5, corregido 30/8). **Cautela:** es un término de cabecera y el Mapa no separa cuánto es búsqueda "cerca de mí" o navegacional. La cola larga ("cómo elegir una agencia de marketing") no tiene dato.
- **Secundarias:** consultoría de marketing (ES 100–1.000, Media; AR 10–100), marketing para pymes (ES 100–1.000, Baja; AR 10–100), marketing B2B (100–1.000, Media, ambos). EN: marketing consulting for small business (10–100, ambos); el resto de las EN de este cluster son 0–10 o 10–100.
- **Intención:** comercial/comparación. Alguien que decide cómo resolver el marketing.
- **Qué rankea y qué cita hoy:** comparativas de agencias con rangos de precio (esconzeta, andresospina, cyberclick), consultores y un artículo sobre CMO fraccional. Es un terreno donde los actores venden el servicio y compiten con precios.
- **Ángulo diferencial:** no se puede competir con precios (regla del sitio). Se compite con criterio: qué se compra realmente (estrategia, ejecución o ambas), qué no conviene tercerizar nunca del todo (la decisión y la aprobación quedan adentro, con un responsable con autoridad), cómo acordar objetivos ligados a oportunidades comerciales y no a actividad, preguntas y señales de alerta, y cuándo la respuesta es "todavía ninguno" (si no hay cliente ideal ni propuesta de valor definidos, ordenar eso primero). Base Core aparece como un modelo más (ejecución conectada con el resto del ciclo), con una mención breve y declarada. Riesgo a vigilar: un comparativo autopromocional puede ser citado en respuestas que recomiendan a la competencia (skill `ai-seo`, referencia `citations-vs-recommendations`). Por eso, criterios y no ranking.
- **Destino y CTA:** /marketing. ES: "VER CÓMO EJECUTAMOS TU MARKETING" (ya lo usa el post de estrategia; aceptable si `web-lead` lo prefiere, o variar a "VER CÓMO TRABAJAMOS TU MARKETING"). EN: "SEE HOW WE RUN YOUR MARKETING" → /en/marketing.
- **Esquema H2 tentativo (7):**
  1. Qué estás contratando realmente: estrategia, ejecución o las dos
  2. Agencia, freelance y equipo interno: qué resuelve cada uno
  3. Lo que nunca conviene tercerizar del todo
  4. Cómo evaluar a un proveedor: preguntas y señales de alerta
  5. Cómo acordar objetivos ligados a oportunidades comerciales
  6. Cuándo la respuesta es "todavía ninguno"
  7. Preguntas frecuentes
- **Tabla / FAQ:** sí a las dos. Tabla de 3 columnas (agencia, freelance, equipo interno) por criterio (alcance, dependencia, flexibilidad, qué exige de tu lado), sin costos. FAQs: ¿es mejor una agencia especializada en B2B?, ¿puedo combinar un responsable interno con un proveedor externo?, ¿cuánto debo involucrarme?
- **Fuentes candidatas:** el post puede ir sin cifras. Opcional: 6sense, *2024 Buyer Experience Report* (81% de los compradores elige un proveedor preferido antes de hablar con ventas), verificada el 3/10, para justificar que el marketing define con qué opinión llega el comprador. No usar los rangos de precios de esconzeta: son de un tercero, no verificables y contradicen la regla de no precios.
- **Canibalización: media.** Con /marketing (la keyword "agencia de marketing" es su secundaria): el post no repite el título ni el H1 de la página ("Marketing Digital para Pymes") y toma la intención comparativa. Con el post de estrategia de marketing (intención y público distintos): enlazar. Medir en la ronda de 5.10 que ninguno desplace al otro.

### 3.7 Extra 2: diagnóstico comercial

- **Título ES:** Diagnóstico comercial de una pyme: qué revisar y en qué orden
- **Título EN:** Sales process audit for a small business: what to review
- **Slug ES:** `diagnostico-comercial-pyme-que-revisar`
- **Slug EN:** `sales-process-audit-for-a-small-business`
- **Keyword principal:** diagnóstico comercial. **Sin dato.** Lo único con fila es "diagnóstico comercial gratuito" (0–10, CTA de marca de /contacto, Mapa 9.7) y "free business consultation" (EN, 10–100 en España). "Auditoría de ventas" y "auditoría comercial": a validar.
- **Intención:** informacional con alto valor comercial: quien busca cómo auditar su proceso está cerca de pedir ayuda.
- **Qué rankea y qué cita hoy:** Cesce, gestionar-facil, tisconsulting, Zendesk, inboundcycle. Resultados de tamaño medio, sin una consultora de pymes que lo trate con método propio.
- **Ángulo diferencial:** la metodología de Base Core contada con transparencia (relevamiento de la situación actual, "El proceso invisible"), con una tabla de revisión por área ("qué se mira, qué pregunta hacerse, señal de alarma"). Es contenido de experiencia directa (E-E-A-T), difícil de copiar. Esquema coherente con el documento de marketing: "mostrar el razonamiento, no dar consejos genéricos".
- **Destino y CTA:** /contacto, porque ahí vive el relevamiento inicial, o /venta si se mantiene la regla estricta. ES: "RESERVAR MI DIAGNÓSTICO GRATUITO" (alinear con el H1 y los botones vigentes de /contacto). EN: "BOOK MY FREE DIAGNOSTIC" → /en/contact. Redacción obligatoria: lo gratuito es la primera reunión de relevamiento inicial; el diagnóstico en profundidad forma parte del servicio si se avanza (texto validado en 3.13). El post no debe prometer un diagnóstico completo gratis.
- **Esquema H2 tentativo (6):**
  1. Qué es un diagnóstico comercial (y qué no es)
  2. Los ocho puntos del proceso: de la captación a la posventa
  3. Qué datos reunir antes de empezar
  4. Cómo detectar dónde se pierden las oportunidades
  5. Cómo convertir los hallazgos en prioridades
  6. Qué puedes hacer por tu cuenta y cuándo conviene pedir ayuda
- **Tabla / FAQ:** sí a las dos. Tabla "área, pregunta clave, señal de alarma". FAQs: ¿cuánto tiempo lleva?, ¿puedo hacerlo con mi propio equipo?, ¿qué pasa después del diagnóstico? (responder sin plazos).
- **Fuentes candidatas:** sin cifras; post de método.
- **Condición para recomendarlo:** es la propuesta con peor respaldo de demanda de la tanda. Se justifica solo por valor comercial y por ser el artículo que mejor muestra el método. Si la validación en Keyword Planner no muestra al menos 10–100 en alguna variante ("diagnóstico comercial", "auditoría de ventas", "auditoría comercial"), cambiarlo por un post de alineación entre marketing y ventas (MQL, SQL y un acuerdo de una página; es el contenido de Julieta en las buyer personas, con una SERP de consultoras y blogs pequeños: rableb, andresospina, lagrowthmachine) o por el pilar "gestión comercial".
- **Canibalización: baja a media.** Con /contacto (CTA de marca "diagnóstico comercial gratuito"): el post es informacional y no usa "gratuito" como keyword. Con el post de gerente vs consultor: enlazar.

### 3.8 Recruiting: primer vendedor B2B

- **Título ES:** Cómo contratar a tu primer vendedor B2B en una pyme
- **Título EN:** How to hire your first B2B salesperson at a small business
- **Slug ES:** `como-contratar-primer-vendedor-b2b`
- **Slug EN:** `how-to-hire-your-first-b2b-salesperson`
- **Keyword principal:** cómo contratar un vendedor. **Sin dato: el Mapa no tiene ninguna fila de reclutamiento ni de selección de vendedores** (revisé el espejo completo). A validar: "cómo contratar un vendedor", "perfil de un vendedor B2B", "selección de vendedores", "reclutamiento de vendedores", "entrevista a vendedores". EN: "how to hire a salesperson", "sales recruitment".
- **Intención:** informacional práctica. Fundador (Ramiro) o dueño (Marcos) que va a hacer su primera contratación comercial.
- **Qué rankea y qué cita hoy:** portales de selección y blogs de herramientas (Rework, Zenind, Cazvid, RD Station, Appvizer, Evalart, somospymes). Perplexity no pudo identificar qué cita hoy la IA para esta consulta; no hay base para suponer una oportunidad de cita, solo un hueco de ángulo.
- **Ángulo diferencial:** contratar para cubrir un hueco del proceso, no "alguien que venda". Perfil según el ciclo (cerrador, nuevos negocios, preventa: la misma estructura que muestra /venta), entrevista estructurada con un ejercicio de venta (simular una llamada de descubrimiento) y un plan de 30-60-90 días con indicadores controlables (calidad de conversaciones, oportunidades calificadas, disciplina de seguimiento) antes que ingresos cerrados. Sin remuneraciones ni cifras de mercado. Advertencia legal explícita: la duración y condiciones del período de prueba dependen de cada país; no dar plazos y remitir a asesoría laboral local.
- **Página de destino recomendada: /venta (EN: /en/sales).** Razón: el bloque de Recruiting de /venta es el que habla de "equipo de ventas sólido y profesional" (descripciones de puesto, fuentes de reclutamiento, direccionamiento de entrevistas, presentación de candidatos) y tiene las cards de puestos (Cerradores, Nuevos negocios). En el Home, Recruiting es una sección sin página propia y sin ancla; en /marketing el bloque es de fuerza de marketing; /preventa y /posventa tienen su propio bloque, de otros equipos. Mencionar en el cuerpo, de pasada, /preventa si el puesto es de prospección. Dos notas para `web-lead`: (a) ninguna de esas secciones tiene `id`, por lo que no se puede enlazar directo al bloque sin un cambio de código en `ServiceCyclePage.tsx`; (b) crear una página propia de Recruiting no se recomienda hoy: no hay un solo dato de demanda; reevaluar si la validación muestra volumen.
- **CTA:** ES "VER CÓMO ARMAMOS TU EQUIPO DE VENTAS". EN: "SEE HOW WE BUILD YOUR SALES TEAM" → /en/sales.
- **Esquema H2 tentativo (7):**
  1. Antes de publicar la vacante: qué hueco del proceso cubre
  2. Qué perfil buscar según el rol: cerrador, nuevos negocios o preventa
  3. Dónde buscar candidatos
  4. Entrevista estructurada y ejercicio de venta
  5. Plan de 30-60-90 días con indicadores controlables
  6. Errores frecuentes en la primera contratación
  7. Preguntas frecuentes
- **Tabla / FAQ:** tabla sí ("rol, qué hace, perfil, indicadores de los primeros 90 días"); FAQs sí (¿perfil senior o junior?, ¿conviene contratar o tercerizar la prospección?, ¿qué hago si no hay un proceso definido?).
- **Fuentes candidatas:** no hay cifra de mercado verificada. Recomiendo escribirlo sin estadísticas.
- **Canibalización: baja.** Con el post de gerente vs consultor (contratar un vendedor frente a contratar un gerente o un consultor): enlazar. Con el bloque de Recruiting de /venta (servicio frente a guía): sin conflicto.

## 4. Enlaces internos entre los posts (nuevos y existentes)

| Post nuevo | Enlaza a (existentes y nuevos) | Debería recibir enlace desde |
|---|---|---|
| 1 Customer success | `como-prevenir-el-churn` (segmentación y señales), /posventa | `como-prevenir-el-churn` (reemplaza el desarrollo del H2 "Customer success vs. fidelización") |
| 2 Adopción de CRM | `que-crm-elegir-para-pyme`, `como-hacer-seguimiento-comercial`, /tecnologia, /venta | `que-crm-elegir-para-pyme`, post de forecast |
| 3 Gerente o consultor | Post de Recruiting, post de diagnóstico, /venta, Home | Post de Recruiting |
| 4 Appointment setting | `como-calificar-leads-b2b`, `como-hacer-seguimiento-comercial`, /preventa | `como-calificar-leads-b2b` |
| 5 Forecast | `como-hacer-seguimiento-comercial`, post de adopción de CRM, /venta | `como-hacer-seguimiento-comercial` |
| 6 Agencia/freelance/interno | `como-crear-estrategia-de-marketing-pyme`, /marketing | `como-crear-estrategia-de-marketing-pyme` |
| 7 Diagnóstico comercial | Post de gerente vs consultor, /contacto, /venta | Post de gerente vs consultor |
| 8 Recruiting | Post de gerente vs consultor, /venta, /preventa | Post de gerente vs consultor |

Los enlaces desde posts ya publicados son ediciones de una línea, a pedir y aprobar por separado después de cada publicación.

## 5. Fuentes citables: estado de verificación

| Cifra | Fuente | Estado | Uso previsto |
|---|---|---|---|
| Captar un cliente cuesta 5 a 25 veces más que retener | Amy Gallo, HBR, 29/10/2014, hbr.org/2014/10/the-value-of-keeping-the-right-customers | Verificada con WebFetch hoy. HBR aclara que depende del estudio y la industria. | Post 1 (opcional) |
| 55% no cumplió expectativas; fracaso absoluto cerca de 5% | Bob Thompson, CustomerThink, 6/12/2004, customerthink.com/reports_crm_failure_highly_exaggerated | Verificada con WebFetch el 3/10 (tarea de estadísticas) | Post 2 |
| 60% del tiempo en tareas que no son vender | Salesforce, *State of Sales* 2026, salesforce.com/sales/state-of-sales/sales-statistics | Verificada con WebFetch hoy | Post 2 |
| 4,8 toques para una primera respuesta; 7,4 para agendar una reunión | Outreach, análisis 2026, outreach.ai/resources/blog/email-sequencing-best-practices | Verificada con WebFetch el 3/10 | Post 4 |
| 41,4% de las respuestas llega con el primer email; 58,6% con los pasos 2 a 6 (7,5 millones de emails) | Belkins, *Sales Follow-Up Statistics*, actualizada 26/6/2026, belkins.io/blog/sales-follow-up-statistics | Verificada con WebFetch el 3/10. Mide respuestas por email, no ventas. | Post 4 |
| 17% del tiempo de compra con proveedores | Gartner, 2018 (smarterwithgartner) y comunicado del 15/9/2020; encuesta a 750 compradores B2B | Solo vía Perplexity. **Confirmar abriendo la página en navegador.** | Post 4 (opcional) |
| 45% de líderes y vendedores con alta confianza en la precisión del forecast | Gartner, comunicado del 12/2/2020 | Solo vía Perplexity; la página devolvió 403. **Confirmar en navegador.** Es de 2020. | Post 5 |
| 81% elige proveedor preferido antes de hablar con ventas | 6sense, *2024 Buyer Experience Report* (2.509 compradores) | Verificada con WebFetch el 3/10 | Post 6 (opcional) |

Cifras que NO propongo y por qué: "25% a 95%" de retención (la fuente original dice 25% a 85%); "7 veces" de costo de adquisición (sin fuente primaria, ya detectada el 3/10); cualquier rango de precios de agencias, freelances o salarios (regla del sitio y fuentes de terceros no verificables).

## 6. Validación pendiente antes de redactar (para Mariano)

Una sola pasada en Keyword Planner (ES España, ES Argentina, EN España, mismos filtros que el research del 30/8) con estas frases. Sin esto, las filas "sin dato" siguen siendo hipótesis.

- Post 2: adopción del crm, por qué no usan el crm, mi equipo no usa el crm, por qué fracasa un crm. EN: crm adoption.
- Post 3: gerente comercial, director comercial (término de España), consultor comercial para pymes, dirección comercial externalizada.
- Post 4: concertación de citas comerciales, concertación de visitas comerciales, setting de citas. (EN ya tiene dato.)
- Post 5: forecast de ventas, previsión de ventas, pronóstico de ventas. EN: sales forecast.
- Post 6: cómo elegir una agencia de marketing, agencia de marketing para pymes, agencia de marketing b2b.
- Post 7: diagnóstico comercial, auditoría comercial, auditoría de ventas. EN: sales audit.
- Post 8: cómo contratar un vendedor, perfil de un vendedor b2b, selección de vendedores, reclutamiento de vendedores, entrevista a vendedores. EN: how to hire a salesperson.

Preguntas de decisión:
1. ¿Se aprueba el cambio del H2 de customer success en el post de churn (ver 3.1)?
2. ¿Se aprueba la reformulación de "más de la mitad de las implementaciones de CRM falla" en /tecnologia (tarea de estadísticas del 3/10, punto 4)? Condiciona el tono del post 2.
3. ¿El CTA del post 7 va a /contacto (rompe la regla "página de servicio") o a /venta?
4. ¿Se aceptan ejemplos numéricos ilustrativos rotulados en el post de forecast?

## 7. Priorización (skill `content-strategy`)

Puntajes de 1 a 10 por factor, con los pesos de la skill. Es juicio mío, no medición.

| Post | Impacto en el cliente (40%) | Encaje con el negocio (30%) | Potencial de búsqueda (20%) | Recursos (10%) | Total |
|---|---|---|---|---|---|
| 2 Adopción de CRM | 9 | 9 | 6 | 8 | 8,3 |
| 1 Customer success | 7 | 9 | 8 | 8 | 7,9 |
| 3 Gerente o consultor | 9 | 8 | 5 | 7 | 7,7 |
| 4 Appointment setting | 7 | 8 | 7 | 7 | 7,3 |
| 5 Forecast | 8 | 8 | 5 | 7 | 7,3 |
| 6 Agencia/freelance/interno | 7 | 7 | 7 | 6 | 6,9 |
| 7 Diagnóstico comercial | 7 | 9 | 3 | 7 | 6,8 |
| 8 Recruiting | 6 | 7 | 4 | 6 | 5,9 |

"Potencial de búsqueda" puntúa más alto donde el dato es verificado (Mapa) y más bajo donde es indirecto o inexistente. Si la validación de la sección 6 cambia un dato, el puntaje se recalcula.

Mezcla de tipos (skill `content-strategy`, 60/30/10): los 8 son contenido "buscable" por diseño. No hay piezas compartibles (datos propios, opinión) porque el negocio no tiene todavía datos propios publicables ni casos de clientes verificados. Es una limitación de recursos, no una preferencia.

## 8. Orden de publicación recomendado y razón

Cadencia semanal (domingos), continuando la existente que termina el 11/10 con el post de PMO: primer post nuevo el 18/10/2026.

| Orden | Fecha sugerida | Post | Razón |
|---|---|---|---|
| 1 | 18/10 | Customer success | Es el único con demanda validada con números reales en ES, AR y EN a la vez, con competencia Baja. Menor riesgo de toda la tanda. Además limpia el solapamiento con el H2 del post de churn antes de que se acumule. |
| 2 | 25/10 | Adopción de CRM | Mayor puntaje. La demanda es indirecta, pero la SERP tiene blogs pequeños (alcanzable) y el ángulo corrige una cifra mal citada con fuente verificada, que es lo más citable de toda la tanda. Publicarlo segundo da una semana para que Mariano corra la validación de Keyword Planner y decida la reformulación de /tecnologia (condición del post). |
| 3 | 1/11 | Gerente o consultor | Objeción número 1 de las buyer personas y hueco de la Home en 5.10. SERP con consultoras boutique citadas. Va tercero porque ya hay tres posts de cluster informado para enlazarlo. |
| 4 | 8/11 | Appointment setting | Único dato EN fuerte de Preventa. Requiere definir el término ES con la validación. Conviene después de que 5.10 mida cómo se comporta /en/presales, para no desplazarla. |
| 5 | 15/11 | Forecast | Valor alto, dato de demanda ausente. Se publica cuando la validación confirme el término ES dominante. Se enlaza con el post de adopción de CRM. |
| 6 | 22/11 | Agencia, freelance o equipo interno | Cabecera con volumen real pero SERP de vendors con precios. Se deja más tarde porque exige más cuidado editorial (comparación honesta, autopromoción mínima). |
| 7 | 29/11 | Diagnóstico comercial | Solo si la validación muestra señal; si no, se sustituye (ver 3.7). |
| 8 | 6/12 | Recruiting | Sin dato de demanda ni de citación de IA. Va último y se adelanta solo si la validación muestra volumen. |

Cada publicación se mide con la cadencia de 5.10: sumar la query del post a la lista base (misma redacción exacta, mismos motores) y revisar a las 4 semanas. Dos hipótesis a contrastar, no a dar por hechas: que el ángulo de nicho se cite más que los temas masivos (lección de 5.10) y que los posts con respuesta corta y tabla se citen más que los que no la tienen (refuerzo de 3.14, todavía sin dato).

## 9. Extras: resumen de la recomendación

- **Extra 1, gerente comercial o consultor (recomendado, orden 3).** Por valor comercial (responde la objeción más frecuente de Marcos), por oportunidad de cita (la IA ya cita consultoras boutique en esta pregunta) y por soporte a la keyword primaria de la Home, que hoy no devuelve ninguna página de Base Core.
- **Extra 2, diagnóstico comercial (condicionado, orden 7).** Por valor comercial y por mostrar el método propio. Es la propuesta más débil en demanda: solo avanza si Keyword Planner muestra señal. Alternativas ya identificadas: alineación entre marketing y ventas (MQL, SQL y un acuerdo de una página) o el pilar "gestión comercial" (100–1.000 en España y Argentina, tema de cabecera).

## 10. Límites de esta propuesta

- No consulté Keyword Planner ni ninguna herramienta de volumen: toda cifra de búsqueda sale del espejo del Mapa (última sincronización 3/9, aunque el contenido relevante es del 30/8 y 3/9).
- Perplexity es una aproximación a lo que citan los motores, sin ChatGPT ni AI Overviews reales, y con una sola corrida por tema.
- Los puestos de la SERP son los que devolvió Perplexity hoy; pueden variar por país y por día.
- No se verificó el estado actual de `plan-seo.md` contra el artifact (esa verificación de frescura la hace la sesión principal).

## 11. Revisión web-lead (4/10/2026)

**Veredicto:** propuesta sólida y bien fundada; aprobable con los ajustes de abajo. Honesta con lo verificado y lo no verificado, ángulos de nicho coherentes con la lección de 5.10, canibalización identificada en los tres casos de riesgo. Debilidad estructural, no del documento: 5 de los 8 temas no tienen dato de demanda, así que el orden 4 a 8 es provisorio hasta la pasada de Keyword Planner.

**Cambios hechos en este archivo**
1. Post 1: título y slugs cambiados. "Qué es y cómo empezar" compite con definiciones de HubSpot/Zendesk; el ángulo diferencial (pyme sin equipo de CS) debe estar en el título para ser el dueño de esa consulta y no pisar el H2 del post de churn. Nuevo ES: "Customer success sin equipo de CS: cómo hacerlo en una pyme".
2. Post 4: "montarlo" por "armarlo" (montar un proceso es giro de España; el sitio usa tuteo neutro para ES y LatAm). Slug ajustado.
3. Sección 6, post 3: agregada la variante "director comercial". En España el cargo se llama así; el título usa "gerente" (LatAm). Validar cuál pesa más y, si gana "director", ajustar el título o el H2 1.

**Evaluación puntual**
- Canibalización bien resuelta en appointment setting (el post toma "qué es / propio vs externo", no la transaccional) y agencia (criterio, no ranking). Customer success: la resolución depende de acortar el H2 del churn; si Mariano no lo aprueba, igual funciona porque el post nuevo ahora no es "qué es" a secas.
- Extras: gerente vs consultor es el mejor candidato (objeción literal de Marcos, SERP alcanzable, apoya la primaria de Home que hoy no rankea). Diagnóstico comercial es defendible por diferenciación (método propio) pero es el más débil en demanda; el reemplazo ya previsto (alineación marketing-ventas) es el fallback correcto y es una idea mejor si la validación sale en cero. No encontré un tercer candidato claramente superior.
- Orden: correcto. Customer success primero por demanda validada; CRM segundo da margen a la decisión sobre /tecnologia. Recruiting a /venta es correcto (el bloque de Recruiting y las cards de puestos viven ahí). Crear página propia de Recruiting: no, sin datos.
- Nota: Recruiting y Diagnóstico son intercambiables en el orden 7/8; si la validación no muestra volumen en ninguno, publicar primero el de mayor valor de marca (Diagnóstico o su reemplazo).

**Cifras: marcar como dudosas hasta confirmar**
- Gartner 17% (tiempo con proveedores) y Gartner 45% (confianza en forecast): solo vía Perplexity, una devolvió 403. NO usar en ningún post hasta abrirlas en navegador y verificar texto, fecha y muestra. Si no se confirman, los posts 4 y 5 van sin cifra (ya es lo previsto).
- Gartner 55% / 5% (post 2): cifra de 2001 citada vía CustomerThink 2004 (entrevista, fuente secundaria). Citarla como "según una entrevista a un analista de Gartner publicada en CustomerThink en 2004", nunca como dato de Gartner actual, y solo si Mariano aprueba también la corrección en /tecnologia.
- HBR 5 a 25 veces: usar con la salvedad del propio artículo, o no usar.
- Belkins 41,4% y Outreach 4,8/7,4: son datos de vendors sobre su propia muestra de emails; si se usan, rotular "según el análisis de X" y no generalizar.
- Salesforce 60%: es autodeclarado por vendedores encuestados por un vendor de CRM; rotular como encuesta.

## 12. Decisiones para Mariano (con recomendación)

1. Aprobar el alcance de 8 posts (6 ramas + 2 extras). Recomiendo sí, con publicación semanal desde el 18/10.
2. Pasada de Keyword Planner (sección 6) antes de redactar los posts 4 a 8. Recomiendo sí, una sola pasada; sin ella el orden 4 a 8 es hipótesis.
3. Acortar el H2 "Customer success vs. fidelización" del post de churn y enlazar al nuevo. Recomiendo sí, después de publicar el nuevo, no antes.
4. Reformular en /tecnologia la frase "más de la mitad de las implementaciones falla". Recomiendo sí (la fuente no la respalda tal cual); condiciona el post 2.
5. CTA del post 7 (diagnóstico): recomiendo /venta, para respetar "cada post enlaza a su servicio", con enlace secundario a /contacto en el cuerpo.
6. Ejemplos numéricos ilustrativos en el post de forecast: recomiendo no; fórmula con variables y tabla de estructura, cero números inventados.
7. Extra 2: recomiendo mantener diagnóstico comercial solo si Keyword Planner muestra al menos 10 a 100 en alguna variante; si no, alineación marketing-ventas.
8. Recruiting: confirmar que se publica último y sin página propia. Recomiendo sí.

## 13. Actualización con volúmenes reales (4/10/2026, segunda vuelta)

Las secciones 3, 6 y 7 de este documento se escribieron sin acceso a Keyword Planner. Se dejan como estaban (registro de lo que se pensó) y esta sección marca lo que cambia con los datos reales (`scripts/seo/kw.py`, ES, AR y US, 4/10/2026; volúmenes mensuales, ES / AR).

| Post de esta propuesta | Dato real | ¿Cambia la conclusión? |
|---|---|---|
| 1 Customer success | customer success 720 / 590 (Baja) | No. Se confirma como el de mayor puntaje. |
| 2 Adopción de CRM | "adopción crm" y "adopción de crm": sin dato; implementación de crm 40 (ES+AR); implementación crm 20 / 10 | **Sí.** La demanda es la más baja del conjunto; se mantiene solo por valor comercial. Ya no es el primero por puntaje. |
| 3 Gerente o consultor | consultoría comercial 30 / 10; director comercial 390 / 70; gerente comercial 50 / 320 | **Sí.** La keyword principal pasa a ser "director comercial" y "gerente comercial", no "consultoría comercial". |
| 4 Appointment setting | appointment setting 170 / 30 (antes "ES sin dato"); qué es un sdr 170 / 70; concertación de citas 10 / 10 | **Sí, a favor.** Ya hay dato en español. "Concertación de citas" casi no se busca. |
| 5 Forecast | forecast de ventas 90 / 90; previsión de ventas 50 / 10; pronóstico de ventas 40 / 30 | Parcial. Hay dato (antes "sin dato") pero es de demanda modesta. |
| 6 Agencia, freelance o interno | agencia de marketing 5.400 / 1.900; agencia de marketing b2b 170 / 20; para pymes 90 / 10; "cómo elegir una agencia de marketing" 0 / 10 | **Sí.** Se reemplaza: la cabecera es de intención de contratación y la cola larga no tiene demanda. |
| 7 Diagnóstico comercial | diagnóstico comercial 10 / 10; auditoría comercial 10 / 10; auditoría de ventas 10 / 10 | **Sí.** Se reemplaza (la condición de la sección 3.7 se cumple solo en la letra: 10 es el piso de la escala de Google). |
| 8 Recruiting, primer vendedor | cómo contratar un vendedor: sin dato; selección de vendedores 0 / 10; perfil de un vendedor 10 / 20 | **Sí.** Se reemplaza por "agente comercial, vendedor propio u outsourcing" dentro de la misma rama. |

La sección 6 ("Validación pendiente") queda resuelta por esta tabla y por `5-2-propuesta-16-opciones.md`. Los puntajes de la sección 7 se reemplazan por los de ese documento (demanda × alcanzabilidad × valor, con datos reales). El orden de la sección 8 queda superado por el de la sección 7 del documento nuevo.
