import Image from "next/image";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

/**
 * Home/service-page teaser for BaseHub — links to the bespoke /basehub page.
 * Same 50/50 construction as the "Agencia de Marketing" cajón it sits next to
 * on the home page (photo half + navy text half), but the photo half shows
 * the real BaseHub dashboard at native resolution instead of a tinted stock
 * shot — the product itself is the proof, not a caption.
 */
const copy = {
  es: {
    title: "Tu proyecto, en un solo lugar",
    description:
      "Sin pagar una herramienta de gestión de proyectos aparte. BaseHub es la plataforma de seguimiento e implementación de Base Core, incluida en tu proyecto. Estado en tiempo real, tarea por tarea, rama por rama.",
    cta: "CONOCÉ BASEHUB",
    href: "/basehub",
    alt: "Panel de BaseHub con el avance de las seis áreas de un proyecto",
  },
  en: {
    title: "Your project, in one place",
    description:
      "No separate project management tool to pay for. BaseHub is Base Core's own tracking and implementation platform, included with your project. Real-time status, task by task, branch by branch.",
    cta: "SEE BASEHUB",
    href: "/en/basehub",
    alt: "BaseHub dashboard showing progress across a project's six areas",
  },
} as const;

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
      <div className="relative min-h-[240px] md:min-h-0 md:w-1/2">
        <Image
          src="/images/basehub-dashboard.webp"
          alt={t.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="bg-navy px-[15px] py-[60px] max-md:pl-[35px] md:w-1/2 dt:py-[106px] dt:pl-[100px]">
        <div className="max-w-[680px]">
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
