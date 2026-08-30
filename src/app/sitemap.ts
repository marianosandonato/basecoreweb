import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { blogPosts } from "@/content/blog/posts";

// ES path -> EN path, for every page that now has both (see routeMap in
// src/lib/site.ts, the same pairing used by the language switcher/banner).
const pairs: [string, string][] = [
  ["", "/en"],
  ["/preventa", "/en/presales"],
  ["/venta", "/en/sales"],
  ["/posventa", "/en/post-sales"],
  ["/marketing", "/en/marketing"],
  ["/tecnologia", "/en/tecnologia"],
  ["/contacto", "/en/contact"],
  ["/ebook", "/en/ebook"],
  ["/blog", "/en/blog"],
  ...blogPosts.map((p): [string, string] => [`/blog/${p.esSlug}`, `/en/blog/${p.enSlug}`]),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [es, en] of pairs) {
    const esUrl = `${site.url}${es}`;
    const languages = { es: esUrl, en: `${site.url}${en}`, "x-default": esUrl };
    entries.push({
      url: `${site.url}${es}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: es === "" ? 1 : 0.8,
      alternates: { languages },
    });
    entries.push({
      url: `${site.url}${en}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: es === "" ? 1 : 0.8,
      alternates: { languages },
    });
  }

  return entries;
}
