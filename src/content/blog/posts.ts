import type { BlogPost } from "./types";
import { queCrmElegirParaPyme } from "./es/que-crm-elegir-para-pyme";
import { whichCrmToChoose } from "./en/which-crm-to-choose-for-a-small-business";

/**
 * One entry per post, in publish order (newest first). `esSlug`/`enSlug` are
 * independent — each is written for its own language's SEO, not a literal
 * translation of the other — so this table is also the single source of
 * truth the language switcher and the sitemap use to pair them up.
 */
export type BlogEntry = {
  esSlug: string;
  enSlug: string;
  es: BlogPost;
  en: BlogPost;
};

export const blogPosts: readonly BlogEntry[] = [
  {
    esSlug: "que-crm-elegir-para-pyme",
    enSlug: "which-crm-to-choose-for-a-small-business",
    es: queCrmElegirParaPyme,
    en: whichCrmToChoose,
  },
];

/** Lightweight slug pairs only — safe to import from a client component (LanguageSwitcher). */
export const blogSlugPairs: readonly { es: string; en: string }[] = blogPosts.map((p) => ({
  es: p.esSlug,
  en: p.enSlug,
}));

export function getBlogPost(lang: "es" | "en", slug: string): BlogPost | undefined {
  const entry = blogPosts.find((p) => (lang === "es" ? p.esSlug : p.enSlug) === slug);
  return entry?.[lang];
}
