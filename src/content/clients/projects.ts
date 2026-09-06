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
  /** Renders as a second line under `name` in the card heading (W Profesional's
   * full name gets clipped on one line otherwise). Aria-label/alt text keep
   * using the plain `name`/`logoAlt`, unaffected. */
  nameSecondLine?: string;
  logo: string;
  logoAlt: { es: string; en: string };
  href: string;
  description: { es: string; en: string };
  tags: { es: readonly string[]; en: readonly string[] };
  /** Optional client testimonial for the Home's testimonials section. Only
   * set for clients who gave us a quote for this launch (Barfer, Don Seitán,
   * W Profesional) -- Grand Market Open and Street Market Norte don't have
   * one yet, so this stays optional rather than forcing empty strings. */
  testimonial?: {
    quote: { es: string; en: string };
    /** First name only, no last name -- deliberate choice across all three
     * (one client shares a last name with Base Core's founder). */
    author: string;
    role: { es: string; en: string };
  };
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
    testimonial: {
      quote: {
        es: "Antes de trabajar con Base Core vendíamos por varios canales sin un criterio claro de cuál priorizar cada semana. Nos ayudaron a ordenar la estrategia comercial y a elegir las herramientas que hoy usamos para gestionar pedidos y seguimiento. Hoy sabemos por qué canal entra cada venta, y eso cambia cómo tomamos decisiones.",
        en: "Before working with Base Core we were selling through several channels without a clear sense of which one to prioritize week to week. They helped us structure our sales strategy and choose the tools we now use to manage orders and follow-up. We know where each sale is coming from now, and that changes how we make decisions.",
      },
      author: "Luciano",
      role: { es: "CEO de Barfer", en: "CEO of Barfer" },
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
    testimonial: {
      quote: {
        es: "Teníamos un buen producto, pero no una estrategia clara para hacerlo crecer más allá de quienes ya nos conocían. Con Base Core armamos un plan comercial y de marketing con foco, en vez de probar cosas sueltas. Ahora tomamos decisiones de marketing con un rumbo definido, no a prueba y error.",
        en: "We had a good product, but no clear strategy to grow beyond the people who already knew us. With Base Core we put together a focused commercial and marketing plan instead of trying scattered things. Now we make marketing decisions with a defined direction, not by trial and error.",
      },
      author: "Agustín",
      role: { es: "Fundador de Don Seitán", en: "Founder of Don Seitán" },
    },
  },
  {
    slug: "w-profesional",
    name: "W Profesional",
    nameSecondLine: "Hair Therapy",
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
    testimonial: {
      quote: {
        es: "Nuestro proceso de ventas a salones dependía mucho de la memoria y el criterio de cada vendedor, sin un método en común. Base Core nos ayudó a ordenar ese proceso, sumar una estrategia de marketing más consistente e incorporar herramientas para no perder el seguimiento de cada cliente. Hoy el equipo comercial trabaja con un proceso que se puede repetir, no que depende de una sola persona.",
        en: "Our sales process with salons relied a lot on memory and each salesperson's own judgment, with no shared method. Base Core helped us structure that process, add a more consistent marketing strategy, and bring in tools so we don't lose track of any client. Today our sales team works with a process that can be repeated, not one that depends on a single person.",
      },
      author: "Mario",
      role: { es: "Fundador de W Profesional", en: "Founder of W Profesional" },
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
