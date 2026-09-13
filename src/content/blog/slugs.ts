/**
 * Slug pairs only, mirroring `blogPosts` in `posts.ts` -- kept in sync by hand.
 *
 * This module exists so client components (LanguageSwitcher) that only need
 * to resolve es<->en slugs don't pull in the full post bodies via `posts.ts`,
 * which imports all 14 post modules (~120KB of copy) into the same chunk.
 *
 * If you add/reorder/rename a post in `posts.ts`, update this list too.
 */
export const blogSlugPairs: readonly { es: string; en: string }[] = [
  {
    es: "que-automatizar-con-ia-equipo-comercial",
    en: "what-to-automate-with-ai-in-a-sales-team",
  },
  {
    es: "como-calificar-leads-b2b",
    en: "how-to-qualify-b2b-leads",
  },
  {
    es: "como-hacer-seguimiento-comercial",
    en: "how-to-do-sales-follow-up",
  },
  {
    es: "como-prevenir-el-churn",
    en: "how-to-prevent-churn",
  },
  {
    es: "como-crear-estrategia-de-marketing-pyme",
    en: "how-to-create-a-marketing-strategy-for-a-small-business",
  },
  {
    es: "que-crm-elegir-para-pyme",
    en: "which-crm-to-choose-for-a-small-business",
  },
  {
    es: "pmo-por-que-tu-pyme-no-necesita-pagar-uno-aparte",
    en: "pmo-why-your-small-business-doesnt-need-to-pay-for-one",
  },
] as const;
