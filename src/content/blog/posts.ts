import type { BlogPost } from "./types";
import { queCrmElegirParaPyme } from "./es/que-crm-elegir-para-pyme";
import { whichCrmToChoose } from "./en/which-crm-to-choose-for-a-small-business";
import { queAutomatizarConIaEquipoComercial } from "./es/que-automatizar-con-ia-equipo-comercial";
import { whatToAutomateWithAiInASalesTeam } from "./en/what-to-automate-with-ai-in-a-sales-team";
import { comoHacerSeguimientoComercial } from "./es/como-hacer-seguimiento-comercial";
import { howToDoSalesFollowUp } from "./en/how-to-do-sales-follow-up";
import { comoCalificarLeadsB2b } from "./es/como-calificar-leads-b2b";
import { howToQualifyB2bLeads } from "./en/how-to-qualify-b2b-leads";
import { comoCrearEstrategiaDeMarketingPyme } from "./es/como-crear-estrategia-de-marketing-pyme";
import { howToCreateAMarketingStrategyForASmallBusiness } from "./en/how-to-create-a-marketing-strategy-for-a-small-business";
import { comoPrevenirElChurn } from "./es/como-prevenir-el-churn";
import { howToPreventChurn } from "./en/how-to-prevent-churn";
import { pmoPorQueTuPymeNoNecesitaPagarUnoAparte } from "./es/pmo-por-que-tu-pyme-no-necesita-pagar-uno-aparte";
import { pmoWhyYourSmallBusinessDoesntNeedToPayForOne } from "./en/pmo-why-your-small-business-doesnt-need-to-pay-for-one";

/**
 * One entry per post, in the order the Home carousel and /blog display them
 * -- curated editorially, not strictly by `publishedAt` (see the 2026-09
 * reorder: IA leads even though it isn't the newest). `esSlug`/`enSlug` are
 * independent -- each is written for its own language's SEO, not a literal
 * translation of the other -- so this table is also the single source of
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
    esSlug: "que-automatizar-con-ia-equipo-comercial",
    enSlug: "what-to-automate-with-ai-in-a-sales-team",
    es: queAutomatizarConIaEquipoComercial,
    en: whatToAutomateWithAiInASalesTeam,
  },
  {
    esSlug: "como-calificar-leads-b2b",
    enSlug: "how-to-qualify-b2b-leads",
    es: comoCalificarLeadsB2b,
    en: howToQualifyB2bLeads,
  },
  {
    esSlug: "como-hacer-seguimiento-comercial",
    enSlug: "how-to-do-sales-follow-up",
    es: comoHacerSeguimientoComercial,
    en: howToDoSalesFollowUp,
  },
  {
    esSlug: "como-prevenir-el-churn",
    enSlug: "how-to-prevent-churn",
    es: comoPrevenirElChurn,
    en: howToPreventChurn,
  },
  {
    esSlug: "como-crear-estrategia-de-marketing-pyme",
    enSlug: "how-to-create-a-marketing-strategy-for-a-small-business",
    es: comoCrearEstrategiaDeMarketingPyme,
    en: howToCreateAMarketingStrategyForASmallBusiness,
  },
  {
    esSlug: "que-crm-elegir-para-pyme",
    enSlug: "which-crm-to-choose-for-a-small-business",
    es: queCrmElegirParaPyme,
    en: whichCrmToChoose,
  },
  {
    esSlug: "pmo-por-que-tu-pyme-no-necesita-pagar-uno-aparte",
    enSlug: "pmo-why-your-small-business-doesnt-need-to-pay-for-one",
    es: pmoPorQueTuPymeNoNecesitaPagarUnoAparte,
    en: pmoWhyYourSmallBusinessDoesntNeedToPayForOne,
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
