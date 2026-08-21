import type { CSSProperties } from "react";
import type { ServicePageData } from "@/content/types";
import type { Lang } from "@/lib/site";
import Breadcrumb from "./Breadcrumb";
import CheckList from "./CheckList";
import ContactSection from "./ContactSection";
import FlipCardGrid from "./FlipCardGrid";
import PageHero from "./PageHero";
import SectionHeading from "./SectionHeading";
import ServiceCards from "./ServiceCards";
import SquareCta from "./SquareCta";

const copy = {
  es: {
    cta: "AGENDAR RELEVAMIENTO",
    etapas: "Etapas",
    recruitingEyebrow: "RECLUTAMIENTO: FUERZA DE VENTAS",
    recruitingDescription:
      "Además de nuestro modelo de formación, buscamos perfiles acordes y eficientes al modelo de ventas propuesto.",
    puestos: "Puestos",
    nextCycleTitle: "Descubrí cómo continúan los ciclos",
  },
  en: {
    cta: "BOOK A DISCOVERY CALL",
    etapas: "Stages",
    recruitingEyebrow: "RECRUITING: SALES FORCE",
    recruitingDescription:
      "Beyond our training model, we look for profiles that fit and perform within the proposed sales model.",
    puestos: "Positions",
    nextCycleTitle: "See how the cycles continue",
  },
} as const;

/**
 * Shared layout for Preventa / Venta / Posventa (Elementor page 24 on /preventa).
 * Section ids in the comments refer to that template — see documentation/PLAN-PREVENTA.md.
 */
export default function ServiceCyclePage({
  data,
  lang = "es",
}: {
  data: ServicePageData;
  lang?: Lang;
}) {
  const t = copy[lang];

  return (
    <>
      <Breadcrumb current={data.breadcrumb} lang={lang} />

      {/* Hero (#7f215f0) */}
      <PageHero
        title={data.hero.title}
        lines={data.hero.lines}
        image={data.hero.image}
        cta={{ label: t.cta, href: "#contacto" }}
      />

      {/* "Etapas" heading (#41a6ea0c) — full-width section, centred text.
          50px gap from the hero image, matching the 50px foot below the
          flip-card grid — same on every cycle page and on /marketing. */}
      <section className="py-[10px]">
        <div className="h-[50px]" aria-hidden="true" />
        <div className="px-[15px]">
          <SectionHeading eyebrow={data.etapas.eyebrow} title={t.etapas} maxWidth={800} />
        </div>
      </section>

      {/* Flip boxes — /preventa (#81be2e9) is full-width; /venta (#9a1d78f et al)
          and /posventa sit inside the 1200px container. */}
      {/* No section padding: the 10px top/bottom cell padding is what makes an
          Elementor flip row 20px taller than its boxes. A pb-[20px] here matched
          /preventa's single row at desktop by coincidence and added a spurious
          +20 to every extra row on /venta and /posventa. */}
      <section>
        {data.etapas.grid.layout === "boxed" ? (
          <div className="container-bc px-0">
            <FlipCardGrid cards={data.etapas.cards} grid={data.etapas.grid} />
          </div>
        ) : (
          <FlipCardGrid cards={data.etapas.cards} grid={data.etapas.grid} />
        )}
      </section>

      {/* Foot of the Etapas box — same 50px as the gap above it. */}
      <div className="h-[50px]" aria-hidden="true" />

      {/* Recruiting (#27c2ba5f) — same construction as the home page:
          one photo, no overlay, dark text on the light half. */}
      <section
        /* Measured: the two columns stack at <=1024 (both at x=0, on separate
           rows) and only sit side by side from 1025 up. Column padding at
           <=1024 is 60px 15px 80px on the spacer and 0 15px 45px on the text. */
        className="relative z-[1] bg-cover bg-right bg-no-repeat dt:flex dt:bg-fixed"
        style={{ backgroundImage: "url(/images/Fondo-Base-Core-01.webp)" }}
      >
        <div className="px-[15px] pb-0 pt-[20px] md:pb-[80px] md:pt-[60px] dt:w-[55%] dt:py-0">
          <div className="h-[10px] dt:h-[160px]" />
        </div>
        <div className="px-[15px] pb-[45px] max-md:pl-[25px] dt:w-[45%] dt:py-[100px] dt:pl-[85px]">
          <SectionHeading
            eyebrow={t.recruitingEyebrow}
            title={data.recruiting.title}
            description={t.recruitingDescription}
            align="left"
            maxWidth={800}
            className="mb-[8px] pr-[50px] dt:mb-[10px]"
          />
          <div className="mt-[20px]">
            <CheckList items={data.recruiting.items} size="md" />
          </div>
        </div>
      </section>

      {/* Puestos (#e55ea54) — full-width section; the card grid is a 994px
          block-grid centred inside it, so cards land at 467px wide. */}
      <section
        /* Elementor: 110/90 desktop (90 on /venta, 120 on /posventa), 70/40 at
           <=1024. The desktop value has to ride a CSS variable — as an inline
           `paddingTop` it beat the responsive class at every width. */
        className="pb-[40px] pt-[70px] dt:pb-[90px] dt:pt-[var(--puestos-pt)]"
        style={{ "--puestos-pt": `${data.puestos.paddingTop ?? 110}px` } as CSSProperties}
      >
        <div className="px-[15px] py-[10px]">
          <SectionHeading
            eyebrow={data.puestos.eyebrow}
            title={t.puestos}
            maxWidth={800}
            className="mb-[20px]"
          />
          <ServiceCards
            cards={data.puestos.cards}
            cellClass="w-full md:w-[35%]"
            className="justify-center"
          />
        </div>
      </section>

      {/* Next cycle (#60e50265) */}
      {data.nextCycle && (
        <section
          className="relative bg-cover bg-center bg-no-repeat pb-[70px] pt-[80px] dt:bg-fixed dt:pb-[100px] dt:pt-[110px]"
          style={{ backgroundImage: "url(/images/redireccionamiento.webp)" }}
        >
          <span aria-hidden="true" className="absolute inset-0 bg-navy opacity-[0.82]" />
          <div className="container-bc relative py-[10px] text-center">
            <h2 className="mx-auto max-w-[900px] font-heading text-[26px] font-bold leading-[40px] text-white md:text-[40px] md:leading-[50px] dt:text-[60px] dt:leading-[68px]">
              {t.nextCycleTitle}
            </h2>
            <SquareCta href={data.nextCycle.href} className="mt-[35px]">
              {data.nextCycle.label}
            </SquareCta>
          </div>
        </section>
      )}

      {/* Contacto (#71f8f2e1) */}
      <ContactSection
        titleAs={data.contactTitleAs ?? "h3"}
        backgroundImage="/images/bg-5.jpg"
        className="mt-[65px] pb-[70px] pt-0 md:mt-0 dt:py-[120px]"
        lang={lang}
      />
    </>
  );
}
