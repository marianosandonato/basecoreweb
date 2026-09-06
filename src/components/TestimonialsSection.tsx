import Image from "next/image";
import { QuoteIcon } from "@/components/icons";
import type { Lang } from "@/lib/site";
import type { ClientProject } from "@/content/clients/projects";

/**
 * Home's client testimonials grid. Server component -- unlike
 * ClientsCarousel there's no scroll/drag interactivity here, just a static
 * 3-column grid (stacked on mobile), so no "use client" is needed.
 *
 * Filters `projects` down to the ones that actually have a `testimonial`
 * (Barfer, Don Seitán, W Profesional at launch) so callers can keep passing
 * the same `clientProjects` array used by ClientsCarousel without slicing it
 * themselves.
 */
export default function TestimonialsSection({
  projects,
  lang = "es",
}: {
  projects: readonly ClientProject[];
  lang?: Lang;
}) {
  const withTestimonial = projects.filter(
    (project): project is ClientProject & { testimonial: NonNullable<ClientProject["testimonial"]> } =>
      Boolean(project.testimonial)
  );

  if (withTestimonial.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 dt:grid-cols-3">
      {withTestimonial.map((project) => (
        <figure
          key={project.slug}
          className="flex h-full flex-col rounded-[8px] border border-line bg-white p-[30px]"
        >
          <QuoteIcon className="text-[28px] text-primary" />

          <blockquote className="mt-[16px] flex-1 font-sans text-[16px] leading-[1.8] text-body">
            {project.testimonial.quote[lang]}
          </blockquote>

          <figcaption className="mt-[24px] flex items-center gap-[14px] border-t border-line pt-[20px]">
            <div className="relative h-[40px] w-[64px] shrink-0">
              <Image
                src={project.logo}
                alt={project.logoAlt[lang]}
                fill
                sizes="64px"
                className="object-contain object-left"
              />
            </div>
            <div className="min-w-0">
              <div className="font-heading text-[15px] font-bold leading-[20px] text-heading">
                {project.testimonial.author}
              </div>
              <div className="font-sans text-[13px] leading-[18px] text-body">
                {project.testimonial.role[lang]}
              </div>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
