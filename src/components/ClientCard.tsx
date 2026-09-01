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

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.visit(project.name)}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-line bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative h-[140px] w-full shrink-0 border-b border-line bg-soft">
        <Image
          src={project.logo}
          alt={project.logoAlt[lang]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
          className="object-contain p-[28px] transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-[24px]">
        <h3 className="font-heading text-[20px] font-bold leading-[28px] text-heading">
          {project.name}
        </h3>
        <p className="mt-[10px] font-sans text-[15px] leading-[26px] text-body">
          {project.description[lang]}
        </p>
        {project.tags[lang].length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-[8px] pt-[16px]">
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
