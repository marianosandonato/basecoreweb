import Image from "next/image";
import type { Lang } from "@/lib/site";
import type { ClientProject } from "@/content/clients/projects";

const copy = {
  es: { visit: (name: string) => `${name} — sitio web (se abre en una pestaña nueva)` },
  en: { visit: (name: string) => `${name} — website (opens in a new tab)` },
} as const;

export default function ClientCard({
  project,
  lang = "es",
}: {
  project: ClientProject;
  lang?: Lang;
}) {
  const t = copy[lang];
  const fullName = project.nameSecondLine
    ? `${project.name} ${project.nameSecondLine}`
    : project.name;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.visit(fullName)}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-line bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative h-[160px] w-full shrink-0 border-b border-line bg-soft">
        <Image
          src={project.logo}
          alt={project.logoAlt[lang]}
          fill
          /* Card's actual rendered width inside ClientsCarousel, measured live at
             each breakpoint (not guessed): 1-col mobile ~= 100vw - 237px, 2-col
             sm/tablet ~= 50vw - 134px (offsets come from the region's px-[95px]
             gutters + gap), 3-col dt caps at 305px once the 1200px container
             maxes out. The previous 100vw/50vw/380px values assumed the logo
             filled the viewport/half-viewport, which it never does in this
             horizontally-scrolling carousel -- that mismatch is what caused
             next/image to fetch oversized srcset candidates (PSI "Improve
             image delivery", ~61 KiB on the client logos). */
          sizes="(max-width: 639px) calc(100vw - 237px), (max-width: 1024px) calc(50vw - 134px), 305px"
          className="object-contain p-[24px] transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-[24px]">
        <h3 className="font-heading text-[20px] font-bold leading-[28px] text-heading">
          {project.name}
          {project.nameSecondLine && (
            <>
              <br />
              {project.nameSecondLine}
            </>
          )}
        </h3>
        {project.tags[lang].length > 0 && (
          <ul className="mt-[12px] flex flex-wrap gap-[8px]">
            {project.tags[lang].map((tag) => (
              <li
                key={tag}
                className="rounded-[4px] bg-soft px-[10px] py-[4px] font-sans text-[12px] font-medium uppercase tracking-[0.5px] text-body"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
}
