import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/content/blog/posts";

/**
 * ES path -> EN path, for every page that now has both (see routeMap in
 * src/lib/site.ts, the same pairing used by the language switcher/banner),
 * plus a real `lastModified` per page instead of recomputing `new Date()`
 * on every request (seo-plan 1.20) — Google was seeing today's date on
 * every single crawl, an obviously-fake freshness signal it can end up
 * discounting entirely. Each date below is when that page's on-page copy
 * was actually last touched (per the SEO plan's own change log/git
 * history) — bump it in the same change that next edits a page's copy.
 */
const pairs: { es: string; en: string; lastModified: string }[] = [
  { es: "", en: "/en", lastModified: "2026-09-13" }, // TechnologyBlock copy real del dueño (5.8, #36) — más reciente que el hero mobile + cajón Nosotros del 12/9
  { es: "/preventa", en: "/en/presales", lastModified: "2026-09-13" }, // TechnologyBlock copy real del dueño, vía ServiceCyclePage (5.8, #36)
  { es: "/venta", en: "/en/sales", lastModified: "2026-09-13" }, // TechnologyBlock copy real del dueño, vía ServiceCyclePage (5.8, #36)
  { es: "/posventa", en: "/en/post-sales", lastModified: "2026-09-13" }, // TechnologyBlock copy real del dueño, vía ServiceCyclePage (5.8, #36)
  { es: "/marketing", en: "/en/marketing", lastModified: "2026-09-13" }, // TechnologyBlock copy real del dueño (5.8, #36)
  { es: "/tecnologia", en: "/en/tecnologia", lastModified: "2026-09-13" }, // 3 rediseños: TechStageMatrix (#22), Agentes en producción (#34), TechnologyBlock (#36) (5.8)
  { es: "/basehub", en: "/en/basehub", lastModified: "2026-09-05" }, // <br/> textContent fix (7.9)
  { es: "/contacto", en: "/en/contact", lastModified: "2026-09-04" }, // form <label>s (1.19)
  { es: "/ebook", en: "/en/ebook", lastModified: "2026-09-05" }, // H1 rewrite (3.10)
  { es: "/blog", en: "/en/blog", lastModified: "2026-09-05" }, // title + OG image (3.9, 1.20)
];

// Each post's ES/EN pair shares the same publishedAt in every case today —
// verified against src/content/blog/{es,en}/*.ts — so one date covers both
// sitemap entries; this stays real per-post data, not a guess.
const blogPairs = blogPosts.map((p) => ({
  es: `/blog/${p.esSlug}`,
  en: `/en/blog/${p.enSlug}`,
  lastModified: p.es.publishedAt,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { es, en, lastModified } of [...pairs, ...blogPairs]) {
    const esUrl = `${site.url}${es}`;
    const languages = { es: esUrl, en: `${site.url}${en}`, "x-default": esUrl };
    entries.push({
      url: `${site.url}${es}`,
      lastModified,
      changeFrequency: "monthly",
      priority: es === "" ? 1 : 0.8,
      alternates: { languages },
    });
    entries.push({
      url: `${site.url}${en}`,
      lastModified,
      changeFrequency: "monthly",
      priority: es === "" ? 1 : 0.8,
      alternates: { languages },
    });
  }

  return entries;
}
