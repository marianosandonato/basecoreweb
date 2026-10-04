# Tarea 5.2, segunda vuelta: 16 opciones de posts con demanda real

Fecha: 4/10/2026. Autor: `seo-marketing`. Estado: SOLO PROPUESTA. No se escribió ningún post ni se tocó código del sitio. Pendiente de revisión de `web-lead` y de la elección de Mariano (6 u 8 de las 16).

Este documento reemplaza el criterio de elección de `5-2-propuesta-tanda-posts.md` (que se conserva, con una nota de actualización en su sección 13). Las fichas largas de esa propuesta (esquema de H2, tabla, FAQs, fuentes) siguen valiendo para las opciones que se repiten; acá van solo los datos nuevos y la decisión.

## 0. Resumen en una pantalla

**Qué cambió respecto de la primera vuelta:** ahora todas las keywords se validaron con Keyword Planner real (`scripts/seo/kw.py`, cuenta de Mariano, solo lectura, 4/10/2026), en España, Argentina y EN (US). Resultado: 5 de las 8 originales siguen dentro de las 16 (con otro lugar), 3 se reemplazan porque los datos reales muestran demanda casi nula (agencia vs. freelance vs. interno en la cola larga, diagnóstico comercial, "primer vendedor").

**Las 16 opciones, ordenadas por puntaje** (demanda × alcanzabilidad × valor comercial, cada factor de 1 a 5, máximo 125; detalle y criterios en la sección 2):

| # | Rama | Título ES | Keyword principal | Vol. ES | Vol. AR | Comp. Ads | Puntaje |
|---|---|---|---|---|---|---|---|
| 1 | Posventa | Customer success sin equipo de CS: cómo hacerlo en una pyme | customer success | 720 | 590 | Baja | 64 |
| 2 | Preventa | Appointment setting y SDR en B2B: qué son y cómo armarlo en una pyme | appointment setting | 170 | 30 | Media | 60 |
| 3 | Recruiting | ¿Gerente comercial o consultor comercial? Cuándo conviene cada uno | director comercial / gerente comercial | 390 / 50 | 70 / 320 | Baja | 60 |
| 4 | Posventa | Cómo pedir referidos a tus clientes B2B, sin armar un programa complicado | programa de referidos | 110 | 140 | Media | 48 |
| 5 | Tecnología | Por qué tu equipo no usa el CRM (y cómo lograr que lo adopte) | implementación de crm ("adopción crm": sin dato) | 40 (ES+AR) | n/d | Media | 40 |
| 6 | Venta | Plan comercial para una pyme B2B: cómo armarlo paso a paso | estrategia de ventas | 260 | 390 | Baja/Media | 40 |
| 7 | Transversal | RevOps para pymes: qué es y cuándo tiene sentido, sin armar un departamento | revops | 320 | 90 | Baja | 40 |
| 8 | Venta | Forecast de ventas para pymes: cómo hacerlo con pocos datos | forecast de ventas | 90 | 90 | Baja | 36 |
| 9 | Posventa | Upselling y cross-selling en B2B: cómo vender más a tu cartera sin sonar a oferta | cross selling | 1.900 | 1.600 | Baja | 36 |
| 10 | Marketing | Account-based marketing para pymes: cómo hacerlo con pocas cuentas objetivo | account based marketing | 210 | 40 | Media | 36 |
| 11 | Marketing | LinkedIn para empresas B2B: perfil del fundador o página de empresa, qué priorizar | linkedin para empresas | 320 | 140 | Baja/Media | 36 |
| 12 | Marketing | Marketing y ventas alineados: el acuerdo de una página sobre MQL y SQL | mql | 390 | 140 | Baja | 32 |
| 13 | Venta | Venta consultiva en B2B: cómo llevar la reunión de descubrimiento | venta consultiva | 260 | 140 | Baja | 32 |
| 14 | Tecnología | WhatsApp y CRM: cómo registrar las conversaciones comerciales sin perder el control | crm whatsapp | 260 | 260 | Media/Alta | 32 |
| 15 | Preventa | Prospección B2B: llamada en frío, email o LinkedIn, qué canal elegir | cold calling | 720 | 210 | Baja | 32 |
| 16 | Recruiting | Agente comercial, vendedor propio u outsourcing comercial: cómo decidir | agente comercial | 480 | 50 | Baja | 24 |

"Comp. Ads" es la competencia de Google Ads (Baja/Media/Alta), no dificultad SEO: indica cuánto pagan los anunciantes, no cuánto cuesta rankear.

**Recomendación en una línea.**
- **Las 6 (una por rama):** Customer success, Appointment setting/SDR, Gerente o consultor, Plan comercial, Adopción de CRM, LinkedIn B2B.
- **Las 8:** esas 6 más Referidos B2B y RevOps para pymes (la reserva si RevOps parece demasiado disputado es Forecast).
- **Orden:** Customer success, Gerente o consultor, Appointment setting, Referidos, Adopción de CRM, LinkedIn B2B, Plan comercial, RevOps.

## 1. Cómo se obtuvieron los datos (y sus límites)

| Dato | Fuente | Límites |
|---|---|---|
| Volúmenes | Keyword Planner vía `kw.py` (`volume` y `ideas`), 4/10/2026, geos ES, AR (idioma es) y US (idioma en). Más de 450 keywords consultadas en 8 tandas agrupadas. | Es el promedio mensual de 12 meses y Google lo redondea (10, 20, 30...). "—" significa que Google no devuelve volumen: lo confirmé consultando varias de esas frases sueltas, incluidas las claves (por ejemplo "cómo contratar un vendedor", "adopción de crm"). Los totales por opción son la suma de frases distintas del mismo grupo temático y son aproximados: Google agrupa variantes cercanas y puede haber solapamiento. |
| EN con geo ES | Mismo `kw.py` con `--geo ES --lang en` | **Para frases idénticas en ambos idiomas el número es el mismo que en español** (customer success 720, cross selling 1.900, sdr 14.800), porque el idioma solo filtra el anuncio, no la búsqueda. Por eso la demanda EN real se mide con US. En la tabla de cada ficha la columna EN es US salvo que diga otra cosa. |
| SERP y citas | `perplexity_search` y `perplexity_ask` (4/10/2026), país ES o US | Aproximación de qué dominios aparecen y qué cita un motor con IA (Perplexity), una corrida por tema. No son posiciones exactas ni ChatGPT/AI Overviews reales. Sirve para ver qué tipo de actor domina. |
| Cifras citables | Solo una verificada con WebFetch hoy: Metricool, *Estudio de LinkedIn 2026* (página del 8/7/2026) | El resto de las fichas va sin cifras de terceros, como pide la regla del sitio. |
| Puntajes | Mi criterio, con la rúbrica de la sección 2 | Son juicio sobre datos reales, no medición. Diferencias menores a 8 puntos son ruido. |

## 2. Rúbrica del puntaje

Puntaje = Demanda × Alcanzabilidad × Valor comercial. Cada factor de 1 a 5. Máximo 125.

- **Demanda (D):** suma mensual ES + AR de las frases del grupo temático propio de la opción (sin contar las que pertenecen a otra página, como "fidelización de clientes", que es la primaria de /posventa). Escala: 1 = menos de 80; 2 = 80 a 199; 3 = 200 a 499; 4 = 500 a 1.499; 5 = 1.500 o más. Se aplica un ajuste de −1 o −2 cuando el volumen mezcla otra intención (empleo, e-commerce, consumo, ambigüedad), y se indica en la ficha. EN se anota aparte, sin entrar en el puntaje.
- **Alcanzabilidad (A):** qué tan posible es que un dominio nuevo sea citado o rankee en esa búsqueda. 1 = cabecera masiva dominada por HubSpot, Salesforce o similares. 3 = mezcla de vendors y blogs/consultoras pequeñas. 5 = nicho casi vacío. Sale de la SERP de Perplexity del 4/10 y de la lección de 5.10 (Base Core sale citado en nichos, no en cabeceras).
- **Valor comercial (V):** cuánto acerca al lector a un servicio de Base Core (consultoría comercial para pymes B2B) y cuánto encaja con las buyer personas. 5 = objeción o decisión previa a contratar; 3 = tema de marca o de apoyo.

## 3. Fichas

Convenciones. ES y AR son los volúmenes mensuales de Keyword Planner en España y Argentina. "Comp." es la competencia de Google Ads. Todas las reglas del sitio aplican: pymes B2B de España y Latinoamérica, tuteo neutro, sin precios, plazos ni cifras de clientes, y toda cifra con fuente verificable abierta.

### 3.1 Customer success (Posventa). Puntaje 64. Venía de la primera vuelta (post 1).

- **Título ES:** Customer success sin equipo de CS: cómo hacerlo en una pyme.
- **Título EN:** Customer success without a CS team: how a small business can do it.
- **Keyword principal:** customer success. ES 720 (Baja, CPC €0,88 a €4,34), AR 590 (Baja). Mapa: 100 a 1.000; confirmado.
- **Secundarias:** retención de clientes 70 / 20. Onboarding de clientes 40 / 20. Key account management 50 / 20. Gestión de cartera de clientes 20 / 10. "Qué es customer success" 10 / 10. (No apuntar a "fidelización de clientes", 390 / 320, que es la primaria de /posventa.)
- **EN:** customer success US 2.900 (Baja). En ES con idioma inglés devuelve 720 (es la misma cadena). Secundarias US: client retention 3.600, account management 4.400, customer retention strategies 2.900. "Customer success small business": sin dato.
- **Intención:** informacional, con salida a "cómo se hace". Un dueño o gerente que ya vende y no sabe si necesita una persona dedicada.
- **Qué rankea y cita hoy:** definiciones de HubSpot, Zendesk y similares. Para el ángulo "pyme sin equipo de CS" la SERP de la primera vuelta mostraba solo blogs pequeños.
- **Ángulo diferencial:** customer success como proceso repartido entre ventas, operaciones y dirección, con cuatro momentos (cierre, onboarding, primer valor, renovación) y quién responde en cada uno cuando no hay un CSM. Encaja con la tesis de marca sobre la cartera.
- **Destino:** /posventa. **Fichas completas** en la sección 3.1 de la propuesta anterior (H2, tabla, FAQs, fuentes).
- **Canibalización: media.** H2 "Customer success vs. fidelización" del post de churn y /posventa. Resolución ya propuesta: el nuevo es dueño de la definición; acortar ese H2 y enlazar después de publicar (requiere aprobación de Mariano).
- **Puntaje 4 × 4 × 4 = 64.** D4: suma del grupo 1.490 (justo en el borde del 4). A4: ángulo de nicho con poca competencia directa. V4: pega con la tesis de cartera, pero quien busca "customer success" no está comprando una consultoría.

### 3.2 Appointment setting y SDR (Preventa). Puntaje 60. Venía (post 4), con un dato ES nuevo.

- **Título ES:** Appointment setting y SDR en B2B: qué son y cómo armarlo en una pyme.
- **Título EN:** B2B appointment setting and SDRs: in-house or outsourced for a small business.
- **Keyword principal:** appointment setting. ES 170 (Media), AR 30 (Media). Antes era "solo EN, ES sin dato".
- **Secundarias:** qué es un sdr 170 / 70. Sdr ventas 50 / 20. Concertación de citas 10 / 10 (la frase que usan Back In Town e igtelcom casi no se busca). "Setter ventas" 140 / 20 existe pero es ambigua (mundo de infoproductos): no apuntar. No usar "sdr" a secas (14.800 ES / 1.900 AR): es ambiguo.
- **EN:** appointment setting US 880 (Media). B2B appointment setting US 260. What is an sdr US 1.900. Outsourced sdr US 260 (Media). En ES con idioma inglés: appointment setting 170 (misma cadena).
- **Intención:** informacional con evaluación de modelo ("¿lo hago yo o lo tercerizo?").
- **Qué rankea y cita hoy:** proveedores (Back In Town, igtelcom, Olymp, Martal, Intelemark), páginas de freelancers y una página de infoproductos ("setters y closers"). Ninguno define "cita válida" ni plantea la decisión sin vender el servicio.
- **Ángulo diferencial:** qué cuenta como cita válida, equipo propio, externo o híbrido con criterio de decisión, y medir citas celebradas y oportunidades, no citas agendadas. Base Core diseña el modelo de contactación y capacita al equipo del cliente, que lo ejecuta (FAQ de /preventa). Sin precios aunque los proveedores los publiquen.
- **Destino:** /preventa (EN: /en/presales).
- **Canibalización: media a alta.** /preventa ya lista los puestos SDR, BDR y Account Development y /en/presales usa "Appointment Setting" en el título. El post toma las búsquedas informacionales y no replica el H1. Con `como-calificar-leads-b2b` y `como-hacer-seguimiento-comercial`: baja, enlazar. Medir en 5.10 que /en/presales no pierda su keyword transaccional.
- **Puntaje 4 × 3 × 5 = 60.** D4: suma 530 (sin "setter ventas"). A3: la SERP es de proveedores, pero un criterio neutral es poco frecuente. V5: es la decisión previa a contratar Preventa.

### 3.3 Gerente (o director) comercial frente a consultor (Recruiting). Puntaje 60. Venía como Extra 1, con keyword principal nueva.

- **Título ES:** ¿Gerente comercial o consultor comercial? Cuándo conviene cada uno.
- **Título EN:** Sales manager or sales consultant: which does a small business need?
- **Keyword principal (cambia):** "director comercial" ES 390 / AR 70 y "gerente comercial" ES 50 / AR 320 (Baja las dos). Antes era "consultoría comercial", que en realidad tiene ES 30 / AR 10.
- **Secundarias:** dirección comercial 170 / 40 (Media). Gerente de ventas 70 / 140. Director de ventas 50 / 10. Funciones del director comercial 90 / 10. Consultoría de ventas 50 / 10. Consultoría comercial 30 / 10. Consultoría para pymes 110 / 170 (Alta en AR).
- **EN:** sales consultant US 3.600. Sales director US 1.900. Head of sales US 320. Fractional sales US 260. Fractional sales leader US 70. "Sales manager vs sales consultant": sin dato. Parte del volumen EN es de búsqueda de empleo.
- **Intención:** comercial/consideración. Objeción número 1 de Marcos en las buyer personas.
- **Qué rankea y cita hoy:** consultoras boutique y consultores individuales, definiciones de cargos y portales de empleo. No lo domina ningún software.
- **Ángulo diferencial:** regla de decisión simple (si la necesidad se repite todas las semanas es un cargo, si tiene principio y fin es un proyecto), tercera opción de dirección comercial externalizada, y cuándo contratar al gerente directamente sin vender nada. Usar "gerente" en el título (LatAm) y "director" en H1/H2 y descripción para capturar España.
- **Destino:** /venta (bloque de Recruiting y cards de puestos), con enlace a Home. Recruiting enlaza a /venta, como acordó la revisión anterior.
- **Canibalización: media.** Home (campo de "consultoría comercial") y la FAQ "¿Reemplaza a mi gerente comercial?" (`src/content/faqs.ts:36`). El post apoya y no copia el H1 de la Home.
- **Puntaje 4 × 3 × 5 = 60.** D4: bruto 1.510, ajustado −1 por intención de empleo y definiciones. A3. V5: responde la objeción más frecuente.
- **Hallazgo lateral:** la primaria de la Home ("consultoría comercial") tiene 30 / 10 de volumen. Los términos de ese campo con más demanda son "consultoría para pymes" 110 / 170 y "director comercial" 390 / 70. Para `web-lead`: el Mapa ya decía "10 a 100", pero conviene saberlo antes de seguir empujando esa frase.

### 3.4 Referidos B2B (Posventa). Puntaje 48. Opción nueva.

- **Título ES:** Cómo pedir referidos a tus clientes B2B, sin armar un programa complicado.
- **Título EN:** How to ask B2B clients for referrals (without a complicated referral program).
- **Keyword principal:** programa de referidos. ES 110 (Media), AR 140 (Media). Ideas combinado: 260 (CPC hasta €14,36).
- **Secundarias:** programa referidos 70 (combinado). Plan de referidos 30. Marketing de referidos 10 / 10. Pedir referidos 10 / 10. Ojo: "referidos" a secas (1.300) es sobre todo consumo y "ganar dinero con referidos": excluido.
- **EN:** customer referral program US 480 (Baja). Referral marketing US 480. Client referrals US 260. B2B referral program US 110 (Media). Ask for referrals US 110.
- **Intención:** informacional práctica, con valor comercial: es el canal de menor costo para una pyme con cartera.
- **Qué rankea y cita hoy:** una pregunta a Perplexity en español devolvió HubSpot, Hostinger, Zendesk, Rework, Salesflare, Referral Factory y blogs genéricos. Los pocos resultados que tratan referidos B2B en español son un vendor (Vonsel) y una biblioteca de contenido genérico (Rework). Hueco claro de ángulo B2B para pymes de servicios.
- **Ángulo diferencial:** pedirlos como parte del proceso de posventa, no como campaña: cuándo pedirlos (después de un resultado concreto, no al firmar), a quién (cuentas sanas, no todas), cómo facilitar la introducción, registro en una hoja o en el CRM y qué hacer con el referido. Sin software ni incentivos económicos como condición. Conecta el post de customer success con el de prospección.
- **Destino:** /posventa (EN: /en/post-sales), con enlace secundario a /preventa.
- **Canibalización: baja.** El post de churn no trata referidos. Enlazarlo con Customer success.
- **Puntaje 3 × 4 × 4 = 48.** D3: suma 390. A4: SERP genérica sin ángulo B2B de servicios. V4.

### 3.5 Adopción de CRM (Tecnología). Puntaje 40. Venía (post 2); la demanda real resultó baja.

- **Título ES:** Por qué tu equipo no usa el CRM (y cómo lograr que lo adopte).
- **Título EN:** Why your team isn't using the CRM (and how to get adoption).
- **Keyword principal:** "adopción de crm" y "adopción crm": Google no devuelve volumen en ES ni en AR. Lo que sí tiene volumen: implementación de crm 40 (combinado, Media), implementación crm 20 / 10, implantación crm 20, implementar crm 20.
- **Secundarias:** crm excel 90 / 40 (Alta; es búsqueda de plantillas, usar como vocabulario del síntoma "volvemos al Excel"). Crm pyme 110 / 10. Plantilla crm excel 20 / 10. "Crm para pymes" 210 / 30 es de /tecnologia y del post de selección: no apuntar.
- **EN:** crm implementation US 480 (Baja). Crm consultant US 590. Crm migration US 90. Crm data quality US 50. Crm adoption US 40. Why crm fails US 10. En ES con idioma inglés: crm implementation 10.
- **Intención:** informacional de un problema ya instalado ("tenemos CRM y nadie lo usa"). Intención opuesta a "qué CRM elegir".
- **Qué rankea y cita hoy:** consultoras y blogs pequeños (play2sell, landoo, revopspymes, vonsel); Pipedrive aparece sin dominar. Ver sección 3.2 de la propuesta anterior.
- **Ángulo diferencial:** diagnóstico por proceso, no por disciplina; tabla síntoma, causa de proceso, ajuste; y la corrección de la cifra mal citada de "más de la mitad de las implementaciones falla" (fuente: entrevista a un analista de Gartner publicada en CustomerThink en 2004, verificada el 3/10). [Revisión web-lead 4/10: la corrección en /tecnologia YA está hecha y en producción (commit f51da87, ES/EN y post de CRM). Ya no es condición ni gancho del post: el ángulo debe sostenerse por el diagnóstico por proceso, y la cifra de Gartner/CustomerThink no se usa.]
- **Destino:** /tecnologia.
- **Canibalización: baja a media.** `que-crm-elegir-para-pyme` (selección, no adopción), /tecnologia y el H3 "Implementación CRM" de /venta.
- **Puntaje 2 × 4 × 5 = 40.** D2: el grupo propio suma 110; esta es la opción de menor demanda del conjunto y conviene decirlo. A4: SERP de boutiques y el ángulo de corrección de cifra es citable. V5: es la entrada natural al servicio de Tecnología.
- **Conclusión cambiada:** la primera vuelta la ubicaba por encima de Customer success (8,3 vs 7,9) con demanda "indirecta". Con datos reales baja al puesto 5. Se mantiene en las recomendaciones por valor comercial, no por demanda.

### 3.6 Plan comercial para pymes B2B (Venta). Puntaje 40. Opción nueva.

- **Título ES:** Plan comercial para una pyme B2B: cómo armarlo paso a paso.
- **Título EN:** How to build a B2B sales plan for a small business.
- **Keyword principal:** estrategia de ventas. ES 260 (Baja), AR 390 (Media). Ideas combinado: 720.
- **Secundarias:** estrategia comercial 210 / 90 (Mapa: 100 a 1.000, confirmado). Plan de ventas 140 / 50 (Media en AR). Plan comercial 90 / 50. Objetivos comerciales 40 / 30. Plan de acción comercial 30 / 10. Suma del grupo: 1.390.
- **EN:** sales strategy US 1.900. Sales plan US 1.300. B2B sales strategy US 260. B2B sales plan US 20. "Sales strategy small business" US 90.
- **Intención:** informacional práctica, a un paso de pedir ayuda.
- **Qué rankea y cita hoy:** Zendesk, HubSpot, Pipedrive, Clientify, Efficy, Euncet, Leadscraper, LinkedHelper. Plantillas genéricas basadas en FODA y 4P, casi ninguna centrada en una pyme B2B de servicios con ciclo largo.
- **Ángulo diferencial:** plan de una página en seis decisiones (a quién, qué ofreces, por qué canales, cómo se avanza una oportunidad, con qué indicadores y con qué revisión semanal), con el proceso por delante de la herramienta y sin plantillas de Word. Es el artículo "madre": enlaza a los de prospección, forecast, CRM y descubrimiento.
- **Destino:** /venta.
- **Canibalización: media a alta.** El Mapa asigna "estrategia comercial" y "estrategia de ventas" como secundarias de /venta, y la Home lista "Estrategia y plan comercial". Resolución: el post es "cómo se arma", la página es "qué hacemos"; el título no repite el H1 de /venta y enlaza a ella desde el primer tercio. Medir en 5.10 que /venta no pierda posición.
- **Puntaje 4 × 2 × 5 = 40.** D4: suma 1.390. A2: SERP dominada por vendors. V5: es el núcleo de la consultoría.

### 3.7 RevOps para pymes (Transversal). Puntaje 40. Opción nueva.

- **Título ES:** RevOps para pymes: qué es y cuándo tiene sentido, sin armar un departamento.
- **Título EN:** RevOps for small businesses: what it is and when it makes sense.
- **Keyword principal:** revops. ES 320 (Baja), AR 90 (Baja). Ideas: 320 combinado.
- **Secundarias:** revenue operations 90 / 30 (Media en AR). Revops qué es 50 (combinado). Sales ops 70 / 30. Sales operations 70 / 30. Rev ops 30 / 10. "Revops para pymes": sin dato.
- **EN:** revops US 2.400 (Baja). Revenue operations US 1.600. Sales ops US 1.600. Sales operations US 1.600. En ES con idioma inglés: revenue operations 90.
- **Intención:** informacional (definición) con evaluación de si lo necesito.
- **Qué rankea y cita hoy:** hay boutiques en español (revopspymes.com, rev-ops.studio, mentorday, tisconsulting, revenuehublatam, aulacm, inesdi), más Salesforce y Rework. Un "qué es RevOps" a secas no alcanza.
- **Ángulo diferencial:** RevOps como responsabilidad asignada a una persona con tres definiciones compartidas, un CRM y pocas métricas, no como departamento (una respuesta de Perplexity ya apunta en esa dirección). Es el marco que explica el ciclo completo de Base Core: marketing, preventa, venta y posventa con un solo dueño del proceso. Diferenciador: "cuándo no hace falta".
- **Destino:** Home y /venta (el enfoque del ciclo completo). Decisión para `web-lead`: si se prefiere un destino de servicio único, /venta.
- **Canibalización: baja** con posts existentes. Si se publica junto con "Marketing y ventas alineados", se solapan (ver 3.12): publicar solo uno.
- **Puntaje 4 × 2 × 5 = 40.** D4: suma 820. A2: nicho ya ocupado por varias boutiques. V5: es el encuadre de marca.
- **Riesgo:** es el único tema del conjunto en el que ya compiten varias consultoras especializadas. Si Mariano prefiere menos competencia, la reserva es Forecast (3.8).

### 3.8 Forecast de ventas (Venta). Puntaje 36. Venía (post 5), ahora con dato.

- **Título ES:** Forecast de ventas para pymes: cómo hacerlo con pocos datos.
- **Título EN:** How to build a sales forecast with little historical data.
- **Keyword principal:** forecast de ventas. ES 90 (Baja, CPC €1,49 a €15,27), AR 90 (Baja). Antes: "sin fila propia".
- **Secundarias:** previsión de ventas 50 / 10 (término de España; Alta en AR). Pronóstico de ventas 40 / 30. Variantes de cola larga con 10 cada una (ejemplo, calcular, para empresa nueva). Mapa: "gestión comercial" 210 / 480 respalda la página, no el post.
- **EN:** sales forecast US 1.000 (Baja). Sales forecasting US 1.000. Sales forecasting methods US 320. CPC alto en US (€5 a €24 el término principal): señal de intención comercial.
- **Intención:** informacional práctica (dolor de Julieta: "el forecast no es confiable").
- **Qué rankea y cita hoy:** vendors y medios de software; un blog de pymes (meridiandata). Hueco para tratamiento de proceso.
- **Ángulo diferencial:** el forecast falla por el proceso (etapas sin criterio de salida, fechas sin respaldo), no por la fórmula. Pipeline ponderado con probabilidades calibradas con cierres propios, tres escenarios y revisión semanal. Sin ejemplos numéricos inventados, como recomendó `web-lead`. Mencionar "previsión" y "pronóstico" en el cuerpo para cubrir España y LatAm.
- **Destino:** /venta.
- **Canibalización: baja a media.** H3 "Forecast" de /venta (el post es soporte). `como-hacer-seguimiento-comercial`: enlazar. Con "Plan comercial" (3.6): enlazar, no repetir el pipeline ponderado.
- **Puntaje 3 × 3 × 4 = 36.** D3: suma 310. A3. V4.

### 3.9 Upselling y cross-selling en B2B (Posventa). Puntaje 36. Opción nueva.

- **Título ES:** Upselling y cross-selling en B2B: cómo vender más a tu cartera sin sonar a oferta.
- **Título EN:** Upselling and cross-selling in B2B services: how to grow existing accounts.
- **Keyword principal:** cross selling. ES 1.900 (Baja), AR 1.600 (Baja). Upselling 1.300 / 1.300 (Media en AR). Venta cruzada 320 / 110.
- **Secundarias:** upselling y cross selling 140 / 70. Diferencia entre upselling y cross selling 20 / 10. Estrategia de upselling 10 / 10. "Upselling b2b": 10 ES, 0 AR (sin volumen B2B propio).
- **EN:** cross selling US 4.400. Upselling US 3.600. Upselling vs cross selling US 170. B2B upselling US 10. En ES con idioma inglés: cross selling 1.900, upselling 1.300 (misma cadena).
- **Intención:** informacional. **Aviso:** casi todo el volumen es de e-commerce y retail ("ofrecer un accesorio al pagar"); la parte B2B de servicios no tiene volumen medible. Por eso se ajusta la demanda de 5 a 3.
- **Qué rankea y cita hoy:** Sage, HubSpot, AhaSlides, Salesdorado, Zendesk, Shopify, Rework (con una página de cross-sell para servicios profesionales), Amplitude y Thales (SaaS). Para "B2B de servicios" la SERP es delgada.
- **Ángulo diferencial:** mapear qué compra cada cliente y qué no compra todavía (el análisis de cartera que ya describe /posventa), momentos de ampliación (después de un resultado, en la renovación) y cuándo no ofrecer. Coherente con la tesis "la cartera es la fuente de rentabilidad más subestimada".
- **Destino:** /posventa.
- **Canibalización: media.** El post de churn tiene el H2 "Dónde entra el cross-selling y el up-selling" (`como-prevenir-el-churn.ts:81`). Resolución: el nuevo toma el desarrollo y el H2 se acorta con enlace (igual que en Customer success). Y /posventa describe el análisis de cartera.
- **Puntaje 3 × 3 × 4 = 36.** D5 bruto (6.700), ajustado −2 por intención de e-commerce. A3. V4.

### 3.10 Account-based marketing para pymes (Marketing). Puntaje 36. Opción nueva.

- **Título ES:** Account-based marketing para pymes: cómo hacerlo con pocas cuentas objetivo.
- **Título EN:** Account-based marketing for small businesses: how to run it with a short target-account list.
- **Keyword principal:** account based marketing. ES 210 (Media), AR 40 (Media).
- **Secundarias:** abm marketing 140 / 30. Estrategia abm 40 / 10. No apuntar a "abm" (1.000 ES / 1.900 AR): en Argentina es también un término de bases de datos (alta, baja, modificación), ambiguo. "ABM para pymes": sin dato. "Marketing de cuentas": 10.
- **EN:** account based marketing US 2.400 (Media). En ES con idioma inglés: 210 (misma cadena). ABM for small business US 10 (el ángulo de pyme casi no se busca, y por eso hay hueco).
- **Intención:** informacional. Público: pyme que vende pocos contratos grandes a pocas cuentas.
- **Qué rankea y cita hoy:** HubSpot, Salesforce y vendors; ningún resultado trata ABM a escala de pyme (Perplexity no devolvió uno).
- **Ángulo diferencial:** ABM "ligero" con una lista corta de cuentas (de la lista de cliente ideal), un contacto por rol, coordinación entre marketing y preventa y una revisión semanal. Une el marketing de contenido con la prospección dirigida.
- **Destino:** /marketing, con enlace a /preventa.
- **Canibalización: baja.** No hay posts ni páginas que traten ABM. Se roza con "Prospección B2B" (3.15) y con "Marketing y ventas alineados" (3.12): diferenciar por el foco en cuentas.
- **Puntaje 3 × 3 × 4 = 36.** D3: suma 470. A3. V4.

### 3.11 LinkedIn para empresas B2B (Marketing). Puntaje 36. Opción nueva.

- **Título ES:** LinkedIn para empresas B2B: perfil del fundador o página de empresa, qué priorizar.
- **Título EN:** LinkedIn for B2B companies: founder profile or company page, what to prioritize.
- **Keyword principal:** linkedin para empresas. ES 320 (Baja), AR 140 (Media).
- **Secundarias:** social selling 210 / 70. Marketing en linkedin 90 / 20. Social selling linkedin 50 / 10. Linkedin b2b 40 / 10. No apuntar a "sales navigator" (2.400 ES / 720 AR): casi todo es navegacional (login, precio) y "qué es" suma 30.
- **EN:** linkedin company page US 4.400. Linkedin for business US 1.600 (Media). Linkedin b2b marketing US 590. Social selling US 880. Linkedin marketing US 880.
- **Intención:** informacional práctica (crear y usar la página), con decisión de dónde invertir el tiempo.
- **Qué rankea y cita hoy:** Hootsuite, Metricool, Zendesk, Kontentino, Snov y CepymeNews. Mucho "cómo crear una página". Poca guía sobre cómo repartir esfuerzo entre fundador y página.
- **Ángulo diferencial:** reparto de roles entre perfil del fundador, perfiles del equipo y página de empresa, qué publica cada uno y cómo se conecta con prospección. Cifra citable verificada hoy: Metricool, *Estudio de LinkedIn 2026* (artículo del 8/7/2026): 831 impresiones medias por publicación en páginas frente a 817 en perfiles, y un engagement rate 63% superior en perfiles personales. Rotular como "según el estudio de Metricool", dato de un proveedor de herramientas (el artículo no informa tamaño de muestra).
- **Destino:** /marketing.
- **Canibalización: baja.** No hay posts de LinkedIn. /preventa menciona audiencias de Sales Navigator (otro tema).
- **Sinergia:** Mariano comparte los posts en LinkedIn, así que este es el que mejor se difunde en el propio canal. Escribirlo como método, sin resultados propios.
- **Puntaje 4 × 3 × 3 = 36.** D4: suma 960. A3. V3: tema de marca más que de decisión de compra.

### 3.12 Marketing y ventas alineados (Marketing). Puntaje 32. Fallback de la primera vuelta, ahora con dato.

- **Título ES:** Marketing y ventas alineados: el acuerdo de una página sobre MQL y SQL.
- **Título EN:** Sales and marketing alignment: a one-page MQL and SQL agreement.
- **Keyword principal:** mql. ES 390 (Baja), AR 140 (Baja). Ya no hay "sin dato".
- **Secundarias:** smarketing 170 / 30. Marketing y ventas 210 / 140 (genérica, solo vocabulario). Mql y sql 40 / 10. "Alineación marketing y ventas" y "sla marketing y ventas": sin dato.
- **EN:** mql vs sql US 880. Sales and marketing alignment US 390. Smarketing US 210. En ES con idioma inglés: smarketing 170 (misma cadena).
- **Intención:** informacional. Es el contenido de Julieta en las buyer personas.
- **Qué rankea y cita hoy:** SOUL, Alegra, Rableb, La Growth Machine, Effiqs, Tupacbruch y HubSpot. Es una SERP de consultoras y agencias, todas con el mismo esquema de MQL, SQL y SLA.
- **Ángulo diferencial:** un acuerdo de una página (definiciones, quién devuelve qué, cuándo se descarta un lead) más el traspaso en el CRM, sin SLA de volumen comprometido por contrato. Se diferencia del resto por la escala de pyme: dos o tres personas, no dos equipos.
- **Destino:** /marketing (EN: /en/marketing).
- **Canibalización: media.** `como-crear-estrategia-de-marketing-pyme` (menciona la alineación), `que-crm-elegir-para-pyme` y RevOps (3.7). Publicar este o RevOps, no los dos.
- **Puntaje 4 × 2 × 4 = 32.** D4: suma 780. A2: muchas consultoras con el mismo guion. V4.

### 3.13 Venta consultiva y reunión de descubrimiento (Venta). Puntaje 32. Opción nueva.

- **Título ES:** Venta consultiva en B2B: cómo llevar la reunión de descubrimiento.
- **Título EN:** B2B discovery call: what to ask and in what order.
- **Keyword principal:** venta consultiva. ES 260 (Baja), AR 140 (Baja). Mapa: "venta consultiva b2b" 10 a 100.
- **Secundarias:** ventas consultivas 30 / 90. Venta consultiva b2b 30 (combinado). Discovery call 40 / 10. Spin selling 480 / 170 (Alta en ES; es un método ya muy cubierto, usarlo solo como vocabulario).
- **EN:** discovery call US 4.400 (Baja). Sales discovery questions US 260. Sales methodology US 390. Sales objections US 480.
- **Intención:** informacional práctica.
- **Qué rankea y cita hoy:** Doppler, Sparkle, Salesflare, ClickUp, Leadscraper, Rework y posts de LinkedIn. Muchas listas de preguntas, casi todas basadas en SPIN.
- **Ángulo diferencial:** la reunión de descubrimiento como el momento en que se decide si hay un diagnóstico (conexión con el relevamiento inicial de Base Core), con preguntas por bloque (situación actual, proceso, impacto, decisión) y qué registrar en el CRM. Sin SPIN como dogma.
- **Destino:** /venta.
- **Canibalización: media.** `como-calificar-leads-b2b` menciona la venta consultiva y la calificación; /venta. Distinguir: calificar es antes de la reunión, descubrir es la reunión.
- **Puntaje 4 × 2 × 4 = 32.** D4: suma 600. A2. V4.

### 3.14 WhatsApp y CRM (Tecnología). Puntaje 32. Opción nueva.

- **Título ES:** WhatsApp y CRM: cómo registrar las conversaciones comerciales sin perder el control.
- **Título EN:** WhatsApp and CRM: how to keep sales conversations from living only on a phone.
- **Keyword principal:** crm whatsapp. ES 260 (Media), AR 260 (Alta). Ideas combinado: 480 (CPC €1,83 a €9,55).
- **Secundarias:** crm para whatsapp 140 (combinado). Crm whatsapp business 90. Ventas por whatsapp 30 / 40. Whatsapp business ventas 10 / 10.
- **EN:** whatsapp crm US 320 (Media). Whatsapp business crm US 20. Es una cadena en inglés con poca demanda propia.
- **Intención:** comparación de herramientas con trasfondo de proceso (el síntoma "volvemos al Excel y al WhatsApp" ya figura en el esquema del post de adopción de CRM).
- **Qué rankea y cita hoy:** vendors (Leadjet, HubSpot, Wati, Folk, Lark, Pipedrive, Clientify, Albato). La mayoría explica cómo conectar el canal, no qué registrar ni quién responde por el número.
- **Ángulo diferencial:** proceso antes que integración: qué conversaciones se registran y cuáles no, quién es dueño del número, qué pasa cuando el vendedor se va con el chat en su teléfono personal, y cuándo alcanza una nota manual frente a una integración. Sin recomendar un vendor.
- **Destino:** /tecnologia.
- **Canibalización: baja a media.** `que-crm-elegir-para-pyme` no trata WhatsApp. /tecnologia. Con "Adopción de CRM" (3.5): enlazar.
- **Puntaje 4 × 2 × 4 = 32.** D4: suma 840. A2: SERP de vendors con Ads de competencia Alta. V4.
- **Aviso legal:** cualquier afirmación sobre datos personales de clientes en chats o sobre las condiciones de uso de WhatsApp Business debe verificarse con fuente primaria o consultarse con un asesor, y no entra como consejo legal.

### 3.15 Canal de prospección B2B (Preventa). Puntaje 32. Opción nueva.

- **Título ES:** Prospección B2B: llamada en frío, email o LinkedIn, qué canal elegir.
- **Título EN:** B2B prospecting: cold call, cold email or LinkedIn, which channel to use.
- **Keyword principal:** cold calling. ES 720 (Baja), AR 210 (Baja).
- **Secundarias:** cold email 170 / 50 (Media). Prospección comercial 90 / 20. Prospección de clientes 50 / 30. Llamadas en frío 40 / 20. Prospección b2b 30 / 20 (Mapa: primaria de /preventa, 10 a 100). Social selling 210 / 70.
- **EN:** cold calling US 12.100 (Baja). Cold email US 3.600. Outbound sales US 720. Sales prospecting US 720. Linkedin outreach US 390. En ES con idioma inglés: cold calling 720, cold email 170.
- **Intención:** informacional con decisión de canal.
- **Qué rankea y cita hoy:** Leadscraper, Rework, CloudTalk, Enginy, Compleadly, Oliverlist y LinkedIn Advice. Todos recomiendan "multicanal" sin ayudar a una pyme con poco equipo a elegir un canal primero.
- **Ángulo diferencial:** matriz de decisión de un canal inicial según el tipo de comprador, el ciclo y el equipo disponible, más cuándo sumar el segundo. Incluir una nota de cautela sobre las reglas de contacto no solicitado, que varían por país, remitiendo a asesoría (sin cifras ni afirmaciones legales sin fuente primaria).
- **Destino:** /preventa.
- **Canibalización: media.** /preventa (primaria "prospección B2B"), el post de Appointment setting (3.2) y `como-hacer-seguimiento-comercial`. Diferenciar: este elige el canal, el de appointment setting define la función.
- **Puntaje 4 × 2 × 4 = 32.** D4: suma 1.450. A2: SERP saturada de vendors. V4.

### 3.16 Agente comercial, vendedor propio u outsourcing (Recruiting). Puntaje 24. Reemplaza al "primer vendedor" de la primera vuelta.

- **Título ES:** Agente comercial, vendedor propio u outsourcing comercial: cómo decidir.
- **Título EN:** Independent sales agent, in-house salesperson or outsourced sales: how to decide.
- **Keyword principal:** agente comercial. ES 480 (Baja), AR 50 (Baja). Casi todo el volumen es de España.
- **Secundarias:** outsourcing comercial 210 / 10 (Media; CPC €1,29 a €7,01). Agente comercial autónomo 40 / 10. Outsourcing de ventas 30 / 10. Buscar comerciales 30 / 20. Contratar comercial 20 / 0.
- **EN:** outsourced sales US 480 (Media). Independent sales rep US 390. Outsourced sales team US 170. Fractional sales US 260.
- **Intención:** comercial/comparación. **Aviso:** parte del volumen de "agente comercial" es de gente que busca ser agente o entender la figura legal. Ajuste −1 en demanda.
- **Qué rankea y cita hoy:** Back In Town domina (4 de las 10 fuentes de la respuesta de Perplexity son suyas, y es competidor directo), más Cesce, Adecco, gestorías y blogs de pymes. Una guía neutral con criterio, sin vender outsourcing, no la ofrece ninguno.
- **Ángulo diferencial:** tres modos de ampliar la fuerza comercial con la pregunta de partida "qué hueco del proceso cubres", qué exige cada uno de tu lado (dirección, información, seguimiento) y cuándo no conviene ninguno (si el problema es de oferta o de proceso). Sin costos ni comisiones. Cualquier mención de la figura legal del agente debe limitarse a "varía por país, consulta con un asesor" o citar la norma con fuente abierta (Perplexity no devolvió una verificada).
- **Destino:** /venta (bloque de Recruiting), con enlace a /preventa.
- **Canibalización: baja a media.** Con "Gerente o consultor" (3.3), que es la decisión sobre la dirección, mientras que este trata de la fuerza de ventas: enlazarlos. Con "Appointment setting" (3.2) en la parte de tercerizar la prospección.
- **Puntaje 3 × 2 × 4 = 24.** D4 bruto (890), ajustado −1. A2: Back In Town domina. V4.
- **Por qué está en las 16:** es la mejor opción de demanda que encontré para Recruiting; la rama tiene la demanda más baja de todas y el pedido exige al menos 2 opciones por rama.

## 4. Ranking de las 16 y desempates

| Pos. | Opción | Rama | Puntaje | D × A × V | Nota de desempate |
|---|---|---|---|---|---|
| 1 | Customer success sin equipo de CS | Posventa | 64 | 4 × 4 × 4 | La única con A4 y D4 a la vez. |
| 2 | Appointment setting y SDR | Preventa | 60 | 4 × 3 × 5 | Empata con la 3; arriba por el dato EN (880 US) y por ser Preventa. |
| 3 | Gerente comercial o consultor | Recruiting | 60 | 4 × 3 × 5 | Objeción 1 de Marcos. |
| 4 | Referidos B2B | Posventa | 48 | 3 × 4 × 4 | Mayor hueco de ángulo B2B. |
| 5 | Adopción de CRM | Tecnología | 40 | 2 × 4 × 5 | Menor demanda del conjunto, valor máximo. |
| 6 | Plan comercial para pymes B2B | Venta | 40 | 4 × 2 × 5 | A2 por SERP de vendors. |
| 7 | RevOps para pymes | Transversal | 40 | 4 × 2 × 5 | Boutiques ya establecidas. |
| 8 | Forecast de ventas | Venta | 36 | 3 × 3 × 4 | Reserva de RevOps. |
| 9 | Upselling y cross-selling B2B | Posventa | 36 | 3 × 3 × 4 | Demanda bruta alta, mucha de e-commerce. |
| 10 | Account-based marketing para pymes | Marketing | 36 | 3 × 3 × 4 | Hueco de ángulo pyme. |
| 11 | LinkedIn para empresas B2B | Marketing | 36 | 4 × 3 × 3 | Único con cifra citable verificada. |
| 12 | Marketing y ventas alineados | Marketing | 32 | 4 × 2 × 4 | Se solapa con RevOps. |
| 13 | Venta consultiva y reunión de descubrimiento | Venta | 32 | 4 × 2 × 4 | |
| 14 | WhatsApp y CRM | Tecnología | 32 | 4 × 2 × 4 | |
| 15 | Canal de prospección B2B | Preventa | 32 | 4 × 2 × 4 | |
| 16 | Agente comercial, vendedor propio u outsourcing | Recruiting | 24 | 3 × 2 × 4 | Entra por el mínimo de 2 por rama. |

Cobertura por rama: Marketing 3 (10, 11, 12), Preventa 2 (2, 15), Venta 3 (6, 8, 13), Posventa 3 (1, 4, 9), Tecnología 2 (5, 14), Recruiting 2 (3, 16), transversal 1 (7). Seis ramas con al menos 2 opciones.

## 5. Recomendación de 8

Las 6 de la sección 6 más:

7. **Referidos B2B** (puesto 4, puntaje 48). Mayor puntaje fuera del conjunto de las 6, hueco claro de ángulo B2B y se encadena con Customer success.
8. **RevOps para pymes** (puesto 7, puntaje 40). Es el marco que explica el ciclo completo de Base Core y tiene demanda propia en español y mucho más en inglés. Riesgo: la SERP ya tiene varias boutiques. **Si Mariano prefiere menos competencia, cambiar por Forecast de ventas (36, A3).**

Distribución resultante: Posventa 2, Preventa 1, Recruiting 1, Tecnología 1, Venta 1, Marketing 1, transversal 1. Todas las ramas cubiertas.

## 6. Recomendación de 6 (una por rama, la de mayor puntaje de cada una)

| Rama | Opción | Puntaje | Por qué esta y no otra de la rama |
|---|---|---|---|
| Posventa | Customer success sin equipo de CS | 64 | Mayor puntaje de todo el conjunto, demanda verificada en ES, AR y US, y limpia el solapamiento con el post de churn. |
| Preventa | Appointment setting y SDR | 60 | Mayor puntaje de la rama (el "Canal de prospección" saca 32). Datos reales en ES (170), AR (30) y US (880). |
| Recruiting | Gerente comercial o consultor | 60 | Responde la objeción número 1 y trae un grupo de búsquedas con volumen (director comercial 390 ES, gerente comercial 320 AR). La otra opción de la rama saca 24. |
| Venta | Plan comercial para una pyme B2B | 40 | Mayor demanda de la rama (1.390 ES+AR) y valor máximo. Forecast (36) queda como siguiente. Es el post "madre" al que enlazan los demás. |
| Tecnología | Adopción de CRM | 40 | Valor máximo y ángulo citable (corrección de la cifra de fracaso de CRM). **Es la opción de menor demanda de las 6 (110)**: se elige por valor, no por búsquedas. WhatsApp y CRM (32) tiene más demanda pero SERP de vendors. |
| Marketing | LinkedIn para empresas B2B | 36 | Empata con Account-based marketing (36). Se elige por la sinergia con el canal donde Mariano comparte los posts y por tener una cifra verificada. |

Suma de puntajes: 300. Con los dos extras de la sección 5: 388.

## 7. Orden de publicación sugerido

Contexto: 1 o 2 posts por semana compartidos en LinkedIn, después de terminar Instagram y el post de lanzamiento en LinkedIn; sin fecha fija. La cola ya programada termina el 11/10 según la propuesta anterior; la tanda nueva empieza cuando Mariano defina.

| Orden | Post | Rama | Razón del lugar |
|---|---|---|---|
| 1 | Customer success sin equipo de CS | Posventa | Mayor puntaje y menor riesgo. Se difunde bien en LinkedIn por el tema. Limpia el solapamiento con churn antes de que crezca. |
| 2 | Gerente comercial o consultor | Recruiting | Formato de opinión con regla de decisión, el que mejor funciona como publicación de LinkedIn. Aporta el enlace a /venta y a Home. |
| 3 | Appointment setting y SDR | Preventa | Tercer tema con demanda sólida. Mejor después de que 5.10 mida /en/presales. |
| 4 | Referidos B2B | Posventa | Se encadena con el 1 ("la cartera como fuente de negocio"). |
| 5 | Adopción de CRM | Tecnología | Da tiempo a decidir la corrección en /tecnologia (condición del post). |
| 6 | LinkedIn para empresas B2B | Marketing | Una vez que Mariano ya compartió varios posts y tiene criterio propio sobre el canal. |
| 7 | Plan comercial para una pyme B2B | Venta | Artículo "madre": cuando ya existen los posts de prospección, referidos y CRM para enlazarlos. |
| 8 | RevOps para pymes | Transversal | Cierre del conjunto: enlaza todo lo anterior bajo el marco del ciclo completo. |

Ritmo orientativo: a un post por semana son 8 semanas; con 2 por semana (1 y 2, 3 y 4, 5 y 6, 7 y 8) son 4. Para un conjunto de 6 se omiten los puestos 4 y 8.

Medición: cada publicación suma su query a 5.10 (misma redacción exacta, mismos motores) y se revisa a las 4 semanas. Hipótesis a contrastar, no dadas por hechas: que el ángulo de nicho se cite más que los temas masivos (lección de 5.10) y que los posts con respuesta corta y tabla se citen más (refuerzo de 3.14, todavía sin dato).

Enlaces internos clave entre los nuevos posts: Customer success ↔ Referidos; Gerente o consultor ↔ Agente comercial (si se elige) ↔ Appointment setting; Adopción de CRM ↔ WhatsApp y CRM (si se elige) ↔ `que-crm-elegir-para-pyme`; Plan comercial → todos los anteriores; RevOps → Plan comercial y Customer success. Las ediciones en posts ya publicados (por ejemplo el H2 de churn) se piden y aprueban aparte, como en la propuesta anterior.

## 8. Qué pasó con las 8 de la primera vuelta

| Primera vuelta | Datos reales (ES / AR) | Veredicto |
|---|---|---|
| 1 Customer success | 720 / 590 | Se mantiene, puesto 1. |
| 2 Adopción de CRM | "adopción crm": sin dato; implementación de crm 40 combinado | Se mantiene por valor, baja al puesto 5. Es la de menor demanda. |
| 3 Gerente o consultor | consultoría comercial 30 / 10; director comercial 390 / 70; gerente comercial 50 / 320 | Se mantiene, puesto 3, con keyword principal nueva. |
| 4 Appointment setting | appointment setting 170 / 30 (antes: sin dato en ES) | Se mantiene, puesto 2. |
| 5 Forecast de ventas | 90 / 90; previsión 50 / 10; pronóstico 40 / 30 (antes: sin dato) | Se mantiene, puesto 8; reserva de RevOps. |
| 6 Agencia, freelance o interno | agencia de marketing 5.400 / 1.900 (cabecera); agencia de marketing b2b 170 / 20; agencia de marketing para pymes 90 / 10; "cómo elegir una agencia de marketing" 0 / 10 | **Se reemplaza.** La cabecera es de intención local o de contratación y no se gana con una guía de decisión. Las colas que sí captaría suman unos 300 y la SERP es de agencias con precios. |
| 7 Diagnóstico comercial | diagnóstico comercial 10 / 10; auditoría comercial 10 / 10; auditoría de ventas 10 / 10; EN sales audit US 90 | **Se reemplaza.** Cumple la letra de la condición de la primera vuelta ("al menos 10 a 100") porque 10 es el piso de la escala de Google, pero en la práctica es demanda nula. Su valor de método se cubre en la reunión de descubrimiento (3.13) y en el artículo sobre el plan comercial. |
| 8 Primer vendedor (Recruiting) | cómo contratar un vendedor: sin dato; selección de vendedores 0 / 10; reclutamiento de vendedores 10 / 10; perfil de un vendedor 10 / 20; contratar comercial 20 / 0; EN how to hire a salesperson US 40 | **Se reemplaza** por "agente comercial, vendedor propio u outsourcing" (3.16) dentro de la misma rama. Recruiting es la rama con la demanda más baja. |

## 9. Evaluadas y no incluidas (con su dato)

| Opción evaluada | Dato real (ES / AR) | Por qué no entra |
|---|---|---|
| Cliente ideal (ICP) | cliente ideal 110 / 50; ideal customer profile 70 / 30; perfil de cliente 140 (combinado); buyer persona b2b 50 / 10. EN ICP US 1.300 | Puntaje 24 (D3 × A2 × V4). SERP de ClickUp, HubSpot, Salesforce, Rework y Berger. Es buena opción si Mariano quiere reforzar Marketing: se puede sumar como sección de "Plan comercial" o de ABM. |
| CRM vs ERP | crm vs erp 210 / 110 | Puntaje 27. SERP de Holded, SAP, Vexeo y vendors. Valor menor: Base Core no es un proveedor de ERP. |
| KPIs de ventas | kpis de ventas 880 / 40; kpis comerciales 90 / 40; indicadores de ventas 30 / 20 | Puntaje 24. Demanda casi toda de España y mezcla con retail. Ya hay H3 de KPIs en /venta y tableros en /tecnologia. |
| BANT y MEDDIC | bant 390 / 110; meddic 320 / 40. EN bant US 5.400, meddic US 4.400 | **Ya cubierto por el post de 3.14** (`como-calificar-leads-b2b`, que trata BANT, MEDDIC y CHAMP). Un post nuevo lo canibalizaría. Si se quiere capturar más demanda, ampliar ese post. |
| IA aplicada a ventas / AI SDR | ia para ventas 30 / 30; ia en ventas 10 / 10; ia para pymes 90 / 50; chatgpt para ventas 20 / 10. EN ai sdr US 1.600, ai for sales US 1.600, ai sales agent US 1.300 | La demanda en español es mínima y el tema ya tiene un post publicado (`que-automatizar-con-ia-equipo-comercial`). Si Mariano quiere un tema de IA, la única opción con demanda es en inglés (AI SDR para pymes: la SERP de Perplexity muestra vendors y guías de Prospeo, Layer3Labs). Se puede tratar en la tarea 8.4 (IA escalonada). |
| Propuesta de valor | propuesta de valor 1.300 / 720; propuesta de valor ejemplos 170 / 140 | Demanda alta, pero es un término genérico de cabecera con intención de definición y ejemplos. No corrí SERP ni puntué. Cae bajo la lección de 5.10. |
| NPS | nps 3.600 / 1.900; qué es nps 1.900 / 1.300; encuesta nps 140 / 110; nps b2b 10 / 10 | Cabecera de experiencia de cliente dominada por herramientas de encuestas; el ángulo B2B no tiene volumen. Sin SERP ni puntaje. |
| Sales Navigator | sales navigator 2.400 / 720; linkedin sales navigator 1.900 / 590; "qué es" 30; "cómo funciona" 20; precio 90 | Casi todo el volumen es navegacional (acceso, precio). La parte informacional es de 50 a 100. |
| QBR (revisión trimestral con clientes) | qbr 480 / 170; qbr significado 10 / 10; EN qbr US 12.100, quarterly business review US 590 | La cadena "qbr" es ambigua (en EN es también una métrica deportiva; no puedo atribuir el volumen a negocio) y se solapa con Customer success. Como complemento posterior de Customer success tiene sentido. |
| Fidelización de clientes B2B | fidelización de clientes 390 / 320; fidelizar clientes 170 / 90; estrategias de fidelización 90 / 10 | Es la primaria de /posventa y el post de churn la cubre. Un post nuevo compite con ambos. |
| CRM gratis | crm gratis 720 / 390 (Alta); hubspot crm 1.900 / 720; hubspot gratis 50 / 20 | Mayor demanda de Tecnología, pero SERP de vendors y comparadores, y se solapa con `que-crm-elegir-para-pyme`. El contenido envejece rápido (límites de planes gratuitos). |
| Embudo y pipeline de ventas | embudo de ventas 880 / 880; funnel de ventas 1.900 (combinado); pipeline de ventas 210 / 140 | Cabecera masiva; se cubre dentro de "Plan comercial" y "Forecast". |
| Lead magnet, mapa de empatía, buyer persona, elevator pitch | lead magnet 880 / 390; mapa de empatía 3.600 / 1.300; buyer persona 4.400 / 1.900; elevator pitch 5.400 / 1.300 | Términos genéricos masivos de formación y marketing general: tráfico fuera del cliente de Base Core. |
| n8n, Zapier, Make, Odoo CRM | n8n 60.500 / 27.100; zapier 18.100 / 5.400; make automatización 260 / 140; odoo crm 880 / 390 | Demanda alta de público técnico o de producto específico. Atrae tráfico fuera del perfil (dueños y gerentes de pymes) y no hay experiencia de Base Core verificada para respaldarlo. |
| Propuesta comercial, objeciones | propuesta comercial 90 / 70; manejo de objeciones 20 / 50; objeciones ventas 70 (combinado) | Demanda baja y búsqueda de plantillas. |
| Gestión comercial | gestión comercial 210 / 480 | Es la primaria de /venta: un post nuevo la canibaliza. Ya cubierta por "Plan comercial" como soporte. |

## 10. Hallazgos laterales (para la sesión principal y `web-lead`)

1. **La primaria de la Home ("consultoría comercial") tiene 30 / 10.** Las frases del mismo campo con más demanda son "consultoría para pymes" 110 / 170, "director comercial" 390 / 70 y "gerente comercial" 50 / 320. El Mapa ya decía 10 a 100; ahora hay cifra exacta. Decisión de keyword de la Home pendiente de `web-lead` (no es parte de 5.2).
2. **El EN con geo ES no mide demanda en inglés** para cadenas iguales en los dos idiomas. Para EN usar siempre US (o GB si se quiere ampliar). Vale para futuras tareas de keywords.
3. **"—" en Keyword Planner no significa que el tema no exista**, sino que Google no devuelve cifra (por debajo de su piso). Para decidir temas de cola larga conviene combinar el volumen del grupo, como hice acá.
4. **Términos ambiguos con volumen engañoso:** "gestión de cuentas" 40.500 ES (bancario), "sdr" 14.800, "setter" 6.600 (perros), "abm" (alta, baja y modificación en AR), "qbr". Ninguno entró como keyword principal.
5. **Pendientes de aprobación heredados** que condicionan fichas: acortar el H2 de customer success y el de cross-selling en el post de churn (3.1 y 3.9), (resuelto: la frase de CRM en /tecnologia ya se reformuló, commit f51da87).

## 11. Decisiones para Mariano (con recomendación)

1. **Elegir 6 u 8 de las 16.** Recomiendo las 8 de la sección 5 (6 por rama más Referidos y RevOps), con orden de la sección 7. Si se quiere menos riesgo, las 6.
2. **RevOps o Forecast como octavo.** Recomiendo RevOps por valor de marca; Forecast si se prefiere menor competencia.
3. **Título de "Gerente o consultor":** usar "gerente" en el título (LatAm) y "director" en H1/H2 y descripción (España). Recomiendo sí.
4. **Aprobar la edición heredada del H2 de churn** (la de /tecnologia ya está hecha, f51da87) o aceptar que el post 1 se publique sin ella. Recomiendo aprobarlas después de publicar cada post, no antes.
5. **Las opciones con aviso legal** (WhatsApp y CRM, Canal de prospección, Agente comercial) llevan una nota explícita de "consulta con un asesor" y ninguna afirmación legal sin fuente primaria abierta. Recomiendo no elegirlas en la primera tanda por ese costo extra de verificación.

## 12. Límites de esta propuesta

- Las cifras de volumen salen de Keyword Planner del 4/10/2026 (promedio de 12 meses, redondeado por Google). Los totales por opción son sumas aproximadas de frases distintas.
- La SERP y las citas de IA son de una corrida de `perplexity_search` y `perplexity_ask` por tema; no representan posiciones exactas ni ChatGPT o AI Overviews reales.
- No se verificó el estado de `plan-seo.md` contra el artifact (lo hace la sesión principal).
- No se usó ninguna cifra de terceros salvo la de Metricool (3.11), verificada abriendo la página el 4/10/2026. Cualquier cifra adicional que se quiera sumar al redactar debe pasar la misma verificación y llevar fuente y año.
- Puntajes: son criterio sobre datos reales. Diferencias menores a 8 puntos son ruido y el orden dentro de un empate es juicio.

## 13. Revisión web-lead (4/10/2026)

**Veredicto:** propuesta sólida, datos reales bien usados y límites honestos. Aprobable con tres ajustes: (a) cambiar Plan comercial por Forecast en las 6 y rearmar las 8, (b) reconocer que "Gerente o consultor" no es Recruiting en sentido estricto, (c) bajar la confianza en Customer success. Verifiqué con `kw.py` (ES): customer success 720 (confirmado), revops 260 (la propuesta dice 320; ruido de 12 meses), sales ops 70, cross selling b2b 10, venta cruzada b2b sin dato; para Recruiting, entrevista a vendedores, descripción del puesto, contratar vendedores, reclutamiento comercial y headhunter comercial dan 10 cada una, el resto sin dato.

**Puntajes y ranking**
- Cross-selling (36, puesto 9): bien puntuado, no está infravalorado. El 1.900/1.600 es e-commerce/retail; el B2B de servicios mide 10. Lo dejaría fuera de la tanda (tráfico fuera del ICP).
- Customer success: la A4 es optimista. "customer success" a secas es cabecera de HubSpot/Zendesk/Salesforce y mezcla búsqueda de empleo ("customer success manager"). El nicho "sin equipo de CS" no tiene volumen medible: se gana por ángulo, no por la cifra de 720. Con A3 sería 48, sigue entre los 3 primeros. Se mantiene el 1, pero no esperar tráfico de esa keyword.
- Appointment setting: AR 30 confirma que es una opción de España y EN (170 ES, 880 US), no de LatAm. Valor alto (decisión previa a Preventa). Se mantiene, aclarando ese sesgo geográfico. Sin cambio de puntaje.
- RevOps: sobrevalorado para Base Core. Es una etiqueta de industria con boutiques establecidas (A2, contra la lección de 5.10) y puede confundir el posicionamiento de "ciclo completo". Se baja a reserva, no a las 8.
- Gerente/director comercial: los volúmenes (director 390, gerente 320 AR) incluyen empleo y definiciones; el ajuste -1 es razonable, no más.
- Forecast: algo infravalorado (nicho, A3, dolor explícito de Julieta, canibalización baja a media). Sube a las 6.

**Recruiting.** "Gerente o consultor" es en realidad una objeción de decisión (contratar dirección vs. consultoría), con destino /venta y Home; no es Recruiting tal como el sitio lo define (perfiles, fuentes, guía de entrevista, ternas de candidatos del equipo de cada etapa). Para ser honestos, hay que rotularlo "Venta/decisión de dirección, adyacente a Recruiting". Recruiting puro no tiene demanda en ES (todas las variantes miden 10 o sin dato, verificado hoy). "Agente comercial u outsourcing" sí tiene volumen, pero lo domina un competidor directo (Back In Town), mezcla gente que busca ser agente y tiene riesgo legal sobre la figura del agente: no entra. Conclusión: no hay una opción de Recruiting mejor por SEO; si Mariano quiere cubrir la rama como contenido de LinkedIn (no de búsqueda), el único post defendible sería "cómo entrevistar a un vendedor B2B" con la guía de entrevista de Recruiting, aceptando demanda cero.

**Canibalización.** Revisé los 7 posts existentes: ninguno trata referidos, ABM, LinkedIn, forecast ni appointment setting. Riesgos reales: Customer success y cross-selling contra los H2 del post de churn (el cross-selling queda fuera); Plan comercial contra la primaria de /venta ("estrategia comercial"/"gestión comercial"), que es el riesgo más alto entre las 8 y otra razón para sacarlo de las 6.

**Mi recomendación**
- **6 (una por rama, ajustada):** Customer success (Posventa), Appointment setting/SDR (Preventa), Gerente o consultor (Venta/Recruiting adyacente), Forecast de ventas (Venta o Tecnología según destino; va a /venta), Adopción de CRM (Tecnología), LinkedIn B2B (Marketing). Distribución: 1 por Marketing, Preventa, Venta, Posventa, Tecnología y la decisión de dirección; Recruiting solo adyacente.
- **8:** las 6 más Referidos B2B (hueco claro, A4, se encadena con CS) y Plan comercial (post madre, enlaza a los demás, pero publicarlo al final con título que no repita el H1 de /venta y medir /venta en 5.10). RevOps queda de reserva; si Mariano prefiere un octavo más de nicho, ABM para pymes (A3, canibalización baja).
- **Orden:** 1 Customer success, 2 Gerente o consultor, 3 Appointment setting, 4 Referidos, 5 Adopción de CRM, 6 Forecast, 7 LinkedIn B2B, 8 Plan comercial. Cada rama sigue siendo la elegida pero con Forecast antes que RevOps/Plan comercial por menor riesgo.

**Riesgos de cifras y legales**
- Metricool (LinkedIn, 831 vs 817 impresiones, 63%): solo con "según el estudio de Metricool 2026", dato de proveedor, sin generalizar. Sin cifra es mejor que mal rotulada.
- Ninguna cifra de Gartner/Belkins/Outreach/Salesforce/HBR de la primera vuelta se usa sin abrirla y verificarla. La de "más de la mitad de CRM falla" ya está fuera del sitio.
- Avisos legales (WhatsApp y CRM, canal de prospección, agente comercial): correcto no incluirlos en la primera tanda.

**Decisiones para Mariano (con recomendación)**
1. 6 u 8: recomiendo 8 (publica 1-2 por semana y el ciclo de ramas queda cubierto), con la lista de arriba.
2. RevOps: recomiendo no publicarlo ahora; reserva.
3. Recruiting: recomiendo aceptar que no hay demanda SEO y rotular el post de dirección como "adyacente"; no forzar un post de agente comercial.
4. "Gerente" en el título y "director" en H1/descripción: sí.
5. Editar el H2 de churn después de publicar Customer success: sí.
6. Hallazgo lateral para la Home: "consultoría comercial" mide 30/10, evaluar la keyword aparte de 5.2 (no ahora).
