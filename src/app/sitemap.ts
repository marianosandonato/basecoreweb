import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/preventa", "/venta", "/posventa", "/marketing", "/contacto"];
  const entries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
    // Only "/" has an /en counterpart so far (see documentation/PLAN-I18N.md).
    ...(route === ""
      ? { alternates: { languages: { es: site.url, en: `${site.url}/en` } } }
      : {}),
  }));

  entries.push({
    url: `${site.url}/en`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: { es: site.url, en: `${site.url}/en` } },
  });

  return entries;
}
