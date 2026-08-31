import { site, siteEn } from "@/lib/site";
import { blogPosts } from "@/content/blog/posts";

/**
 * /llms.txt (llmstxt.org) -- a plain-language summary for AI assistants that
 * fetch it directly (ChatGPT, Claude, Perplexity). Google says explicitly it
 * doesn't need this for AI Overviews, but it costs one route handler and the
 * blog links build themselves from `blogPosts`, so a new article never goes
 * stale here the way a hand-written static file would. See Fase 6.4 in the
 * SEO plan.
 */
const services = [
  {
    es: { title: "Marketing", href: "/marketing", blurb: "Estrategia de marca, SEO, redes sociales, pauta publicitaria, diseño gráfico y sitios web." },
    en: { title: "Marketing", href: "/en/marketing", blurb: "Brand strategy, SEO, social media, paid ads, graphic design and websites." },
  },
  {
    es: { title: "Preventa", href: "/preventa", blurb: "Prospección y captación de clientes B2B: armado de base de datos, calificación de leads." },
    en: { title: "Presales", href: "/en/presales", blurb: "B2B prospecting and lead generation: database building, lead qualification." },
  },
  {
    es: { title: "Venta", href: "/venta", blurb: "Modelo comercial, pipeline, KPIs, forecast, esquemas de compensación e implementación de CRM." },
    en: { title: "Sales", href: "/en/sales", blurb: "Sales model, pipeline, KPIs, forecasting, compensation schemes and CRM implementation." },
  },
  {
    es: { title: "Posventa", href: "/posventa", blurb: "Fidelización y retención de clientes: reducción de churn, cross selling y up selling." },
    en: { title: "Post-Sales", href: "/en/post-sales", blurb: "Customer retention and loyalty: reducing churn, cross-selling and up-selling." },
  },
  {
    es: { title: "Tecnología", href: "/tecnologia", blurb: "Implementación de CRM, agentes de IA y automatización de procesos comerciales." },
    en: { title: "Technology", href: "/en/tecnologia", blurb: "CRM implementation, AI agents and commercial process automation." },
  },
] as const;

export async function GET() {
  const esBlog = blogPosts
    .map((p) => `- [${p.es.title}](${site.url}/blog/${p.esSlug}): ${p.es.description}`)
    .join("\n");
  const enBlog = blogPosts
    .map((p) => `- [${p.en.title}](${site.url}/en/blog/${p.enSlug}): ${p.en.description}`)
    .join("\n");

  const esServices = services
    .map((s) => `- [${s.es.title}](${site.url}${s.es.href}): ${s.es.blurb}`)
    .join("\n");
  const enServices = services
    .map((s) => `- [${s.en.title}](${site.url}${s.en.href}): ${s.en.blurb}`)
    .join("\n");

  const body = `# ${site.shortName}

> ${site.description}

Founded by ${site.founder.name} (${site.founder.role} / ${siteEn.founderRole}) -- ${site.founder.linkedin}

## Servicios (Español)

${esServices}

## Blog (Español)

${esBlog}

## Contacto

- [Diagnóstico comercial gratuito](${site.url}/contacto)

## Services (English)

${enServices}

## Blog (English)

${enBlog}

## Contact

- [Free sales consultation](${site.url}/en/contact)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
