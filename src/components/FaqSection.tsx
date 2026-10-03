import type { FaqData } from "@/content/types";
import { site } from "@/lib/site";
import { renderRich } from "@/lib/renderBold";
import SectionHeading from "./SectionHeading";

/** Plain-text version of a `renderRich` string for the JSON-LD: `**x**` -> x,
    `[label](href)` -> label. Keeps the schema identical to the visible copy. */
function toPlainText(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[(.+?)\]\((.+?)\)/g, "$1");
}

/**
 * "Preguntas frecuentes" block + its FAQPage JSON-LD (seo-plan 3.13), from a
 * single data source so the schema can never drift from the visible text.
 *
 * Native <details>/<summary>, server-rendered and closed by default: every
 * answer ships in the initial HTML (Google indexes collapsed content at full
 * weight; AI crawlers mostly don't run JS, so nothing may load on click), and
 * keyboard/screen-reader support comes from the browser with no client JS.
 */
export default function FaqSection({
  data,
  eyebrow = "FAQ",
  className = "pt-[70px] xl:pt-[90px]",
}: {
  data: FaqData;
  eyebrow?: string;
  /** Top padding only. No bottom padding on purpose: ContactSection always
      follows and brings its own top padding (70-120px), so a pb here doubled
      the gap to ~210px. Override where the section above is already white
      with its own bottom padding (Home's blog teaser) to avoid doubling it. */
  className?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${site.url}${data.path}`,
    mainEntity: data.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: toPlainText(item.answer) },
    })),
  };

  return (
    <section className={`container-bc ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <SectionHeading
        eyebrow={eyebrow}
        title={data.title}
        maxWidth={800}
        className="mb-[40px]"
      />

      <div className="mx-auto max-w-[900px] border-t border-line">
        {data.items.map((item) => (
          <details key={item.question} className="group border-b border-line">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-[20px] py-[22px] text-left font-heading text-[18px] font-semibold leading-[1.5] text-heading transition-colors hover:text-primary md:text-[20px] [&::-webkit-details-marker]:hidden">
              <h3 className="font-[inherit] text-[inherit] leading-[inherit] text-inherit">
                {item.question}
              </h3>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px] shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <p className="pb-[24px] pr-[42px] font-sans text-[17px] leading-[1.8] text-body">
              {renderRich(item.answer, {
                boldClassName: "text-heading",
                linkClassName: "text-primary underline underline-offset-2 hover:no-underline",
              })}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
