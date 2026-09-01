import Button from "./Button";
import SectionHeading from "./SectionHeading";
import type { Lang } from "@/lib/site";

/**
 * Home/service-page teaser for BaseHub — links to the bespoke /basehub page.
 * Same shape as the Blog teaser section (container-bc, centred SectionHeading,
 * centred Button below): no product screenshot yet (reserved on /basehub
 * itself until the real capture is provided), so a plain text+CTA block reuses
 * an existing pattern instead of inventing a new visual treatment.
 */
const copy = {
  es: {
    eyebrow: "BASEHUB",
    title: "Tu proyecto, en un solo lugar",
    description:
      "Sin pagar una herramienta de gestión de proyectos aparte. BaseHub es nuestra plataforma de seguimiento e implementación, incluida en tu proyecto.",
    cta: "CONOCÉ BASEHUB",
    href: "/basehub",
  },
  en: {
    eyebrow: "BASEHUB",
    title: "Your project, in one place",
    description:
      "No separate project management tool to pay for. BaseHub is our own tracking and implementation platform, included with your project.",
    cta: "SEE BASEHUB",
    href: "/en/basehub",
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
    <section className={`container-bc py-[70px] xl:py-[90px] ${className}`}>
      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.description}
        maxWidth={700}
        className="mb-[30px]"
      />
      <div className="text-center">
        <Button href={t.href} size="sm">
          {t.cta}
        </Button>
      </div>
    </section>
  );
}
