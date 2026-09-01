import Image from "next/image";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

/**
 * Home/service-page teaser for BaseHub — links to the bespoke /basehub page.
 * Same 50/50 construction as the "Agencia de Marketing" cajón it sits next to
 * on the home page (photo half + navy text half). The photo half is the real
 * BaseHub dashboard set inside a laptop mockup (asset from Mariano), not a
 * bare cropped screenshot.
 */
const copy = {
  es: {
    kicker: "BaseHub",
    title: "Tu proyecto, en un solo lugar",
    description:
      "Sin pagar una herramienta de gestión de proyectos aparte. BaseHub es la plataforma de seguimiento e implementación de Base Core, incluida en tu proyecto. Estado en tiempo real, tarea por tarea, rama por rama.",
    cta: "CONOCÉ BASEHUB",
    href: "/basehub",
    alt: "Panel de BaseHub con el avance de las seis áreas de un proyecto",
  },
  en: {
    kicker: "BaseHub",
    title: "Your project, in one place",
    description:
      "No separate project management tool to pay for. BaseHub is Base Core's own tracking and implementation platform, included with your project. Real-time status, task by task, branch by branch.",
    cta: "SEE BASEHUB",
    href: "/en/basehub",
    alt: "BaseHub dashboard showing progress across a project's six areas",
  },
} as const;

/**
 * Screen cutout of /images/basehub-mockup.png, measured directly on the
 * asset (829x427): the light-grey screen rect sits at x=119-708, y=39-373.
 * Expressed as % so the layered screenshot scales with the frame at any size.
 */
const SCREEN = { left: "14.355%", top: "9.133%", width: "71.170%", height: "78.454%" };

export default function BaseHubTeaser({
  lang = "es",
  className = "",
}: {
  lang?: Lang;
  className?: string;
}) {
  const t = copy[lang];

  return (
    <section className={`relative z-[1] md:flex ${className}`}>
      <div className="flex min-h-[240px] items-center justify-center bg-soft px-[24px] py-[32px] md:min-h-0 md:w-1/2">
        <div className="relative w-full max-w-[520px]" style={{ aspectRatio: "829 / 427" }}>
          {/* Frame first: its "screen" is an opaque fill, not a transparent
              cutout, so the screenshot has to paint on top of it, clipped to
              the measured screen rect, rather than behind it. */}
          <Image
            src="/images/basehub-mockup.png"
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 90vw"
            className="object-contain"
          />
          <div className="absolute overflow-hidden" style={SCREEN}>
            <Image src="/images/basehub-dashboard.webp" alt={t.alt} fill className="object-cover object-top" />
          </div>
        </div>
      </div>

      <div className="bg-navy px-[15px] py-[60px] max-md:pl-[35px] md:w-1/2 dt:py-[106px] dt:pl-[100px]">
        <div className="max-w-[680px]">
          <span className="mb-[6px] block font-sora text-[22px] font-bold tracking-[2px] text-white md:text-[26px]">
            {t.kicker}
          </span>
          <SectionHeading
            title={t.title}
            description={t.description}
            align="left"
            dark
            showLine={false}
            maxWidth={800}
            className="mb-[15px]"
            titleClassName="!text-[36px] !leading-[1.3] md:!text-[44px]"
          />
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
