import Image from "next/image";
import Button from "./Button";
import CheckList from "./CheckList";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

const copy = {
  es: {
    label: "Tecnología",
    eyebrow: "Implementaciones Tecnológicas",
    title: "IA + Software",
    bullets: [
      "Implementación de agentes y automatizaciones con Claude",
      "Desarrollo de software con Claude Code",
      "Implementación de CRM (Hubspot y otros)",
    ],
    cta: "MÁS INFORMACIÓN",
    href: "/tecnologia",
  },
  en: {
    label: "Technology",
    eyebrow: "Technology Implementations",
    title: "AI + Software",
    bullets: [
      "AI agent & automation implementation with Claude",
      "Custom software development with Claude Code",
      "CRM implementation (HubSpot and others)",
    ],
    cta: "LEARN MORE",
    href: "/en/tecnologia",
  },
} as const;

/**
 * "Tecnología / IA + Software" — full-bleed photo, logo on the left and the
 * text block on the right, ~2cm (76px) apart, both groups sitting directly
 * on the photo. First built on the home page, then reused on the cycle pages
 * (between Etapas and Recruiting) and /marketing (below Pilares).
 */
export default function TechnologyBlock({ lang = "es" }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <section
      className="relative z-[1] bg-cover bg-center bg-no-repeat px-[15px] py-[70px] dt:bg-fixed dt:py-[110px]"
      style={{ backgroundImage: "url(/images/TECNOLOGIA-BASECORE.jpg)" }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/55 to-navy/45"
      />
      <div className="relative mx-auto flex max-w-[960px] flex-col items-center gap-[40px] md:flex-row md:justify-center md:gap-[76px]">
        <div className="flex shrink-0 flex-col items-center gap-[16px] text-center">
          <Image
            src="/images/base-core-logo-blanco-sin-slogan.webp"
            alt="Base Core"
            width={900}
            height={927}
            className="h-auto w-[140px] md:w-[190px]"
          />
          <span className="font-sora text-[24px] font-extralight tracking-[2px] text-white md:text-[30px]">
            {t.label}
          </span>
        </div>

        <div className="flex max-w-[460px] flex-col items-center text-center md:items-start md:text-left">
          <SectionHeading
            eyebrow={t.eyebrow}
            title={t.title}
            align="left"
            dark
            maxWidth={800}
            className="mb-[15px] w-full"
            titleClassName="!text-[44px] !leading-[1.3]"
          />
          <CheckList items={t.bullets} dark size="md" />
          <div className="mt-[15px]">
            <Button href={t.href} size="sm">
              {t.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
