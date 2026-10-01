/**
 * Single source for the publication date shown on the four legal pages
 * (plan-seo 4.5.4) and referenced by src/content/legal — bump this one
 * constant (both languages) the day the pages actually go live, instead of
 * hunting down "[FECHA DE PUBLICACIÓN]" / "[PUBLICATION DATE]" placeholders
 * across four content files.
 */
export const LEGAL_PUBLICATION_DATE = {
  es: "1 de octubre de 2026",
  en: "1 October 2026",
} as const;
