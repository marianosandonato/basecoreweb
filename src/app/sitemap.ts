import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// ES path -> EN path, for every page that now has both (see routeMap in
// src/lib/site.ts, the same pairing used by the language switcher/banner).
const pairs: [string, string][] = [
  ["", "/en"],
  ["/preventa", "/en/presales"],
  ["/venta", "/en/sales"],
  ["/posventa", "/en/post-sales"],
  ["/marketing", "/en/marketing"],
  ["/contacto", "/en/contact"],
  ["/ebook", "/en/ebook"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [es, en] of pairs) {
    const languages = { es: `${site.url}${es}`, en: `${site.url}${en}` };
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

  // /tecnologia has no /en counterpart yet, so it isn't part of the ES/EN
  // pairs above — add it standalone once src/app/en/tecnologia exists.
  entries.push({
    url: `${site.url}/tecnologia`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  });

  return entries;
}
