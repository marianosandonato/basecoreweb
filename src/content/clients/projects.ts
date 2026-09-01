/**
 * Home's "Empresas con las que trabajamos" carousel (#seo-plan 4.4). No case
 * studies or metrics here on purpose -- Base Core doesn't have documented
 * results for these yet, only the services actually delivered. Don't add a
 * result/number to a card unless it's been verified with the client.
 *
 * Order is editorial, not alphabetical: most-developed brand first, since
 * the Home carousel only shows 3 cards before the visitor has to interact
 * with it (see the #seo-plan 4.4 session notes for the per-client rationale).
 */
export type ClientProject = {
  slug: string;
  name: string;
  logo: string;
  logoAlt: { es: string; en: string };
  href: string;
  description: { es: string; en: string };
  tags: { es: readonly string[]; en: readonly string[] };
};

export const clientProjects: readonly ClientProject[] = [
  {
    slug: "barfer",
    name: "Barfer",
    logo: "/images/clientes/barfer-logo.png",
    logoAlt: { es: "Logo de Barfer", en: "Barfer logo" },
    href: "https://www.barferalimento.com/",
    description: {
      es: "Desarrollo de estrategia de ventas, canales comerciales e implementación de herramientas tecnológicas.",
      en: "Sales strategy development, commercial channels and technology implementation.",
    },
    tags: {
      es: ["Estrategia de ventas", "Canales comerciales", "Tecnología"],
      en: ["Sales strategy", "Commercial channels", "Technology"],
    },
  },
  {
    slug: "don-seitan",
    name: "Don Seitán",
    logo: "/images/clientes/don-seitan-logo.webp",
    logoAlt: { es: "Logo de Don Seitán", en: "Don Seitán logo" },
    href: "https://donseitan.com/",
    description: {
      es: "Desarrollo de estrategia comercial y marketing.",
      en: "Commercial strategy and marketing development.",
    },
    tags: {
      es: ["Estrategia comercial", "Marketing"],
      en: ["Commercial strategy", "Marketing"],
    },
  },
  {
    slug: "w-profesional",
    name: "W Profesional – Hair Therapy",
    logo: "/images/clientes/w-profesional-logo.png",
    logoAlt: {
      es: "Logo de W Profesional – Hair Therapy",
      en: "W Profesional – Hair Therapy logo",
    },
    href: "https://wprofesional.com/",
    description: {
      es: "Estrategia de marketing, desarrollo de procesos comerciales e implementación de herramientas tecnológicas.",
      en: "Marketing strategy, commercial process development and technology implementation.",
    },
    tags: {
      es: ["Marketing", "Procesos comerciales", "Tecnología"],
      en: ["Marketing", "Commercial processes", "Technology"],
    },
  },
  {
    slug: "grand-market-open",
    name: "Grand Market Open",
    logo: "/images/clientes/grand-market-open-logo.jpg",
    logoAlt: { es: "Logo de Grand Market Open", en: "Grand Market Open logo" },
    href: "https://grandmarketopen.com/",
    description: {
      es: "Desarrollo de estrategia de marketing e implementación de herramientas tecnológicas.",
      en: "Marketing strategy development and technology implementation.",
    },
    tags: {
      es: ["Marketing", "Tecnología"],
      en: ["Marketing", "Technology"],
    },
  },
  {
    slug: "street-market-norte",
    name: "Street Market Norte",
    logo: "/images/clientes/street-market-norte-logo.jpg",
    logoAlt: { es: "Logo de Street Market Norte", en: "Street Market Norte logo" },
    href: "https://www.instagram.com/streetmarketnorte/",
    description: {
      es: "Desarrollo de estrategia de marketing e implementación de herramientas tecnológicas.",
      en: "Marketing strategy development and technology implementation.",
    },
    tags: {
      es: ["Marketing", "Tecnología"],
      en: ["Marketing", "Technology"],
    },
  },
];
