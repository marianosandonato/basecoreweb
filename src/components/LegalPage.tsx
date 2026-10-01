import Breadcrumb from "@/components/Breadcrumb";
import type { Lang } from "@/lib/site";
import type { LegalDoc } from "@/content/legal/types";

/**
 * Shared renderer for the four legal pages (plan-seo 4.5.4: /privacidad,
 * /en/privacy, /cookies, /en/cookies). Same long-form-content shell as
 * BlogPostPage.tsx (Breadcrumb "bar" variant + a 760px reading column) since
 * this is the closest existing pattern for plain, typography-heavy prose —
 * plus a table renderer neither the blog nor any other page needs yet.
 *
 * Content itself lives in src/content/legal/*.ts as a plain block list
 * (h2/h3/p/ul/table), transcribed verbatim from the lawyer-reviewed
 * markdown in documentation/legal/publicar/ — this component only lays it
 * out, it never edits wording.
 */
export default function LegalPage({
  doc,
  updatedDate,
  lang = "es",
  path,
  breadcrumbCurrent,
}: {
  doc: LegalDoc;
  /** LEGAL_PUBLICATION_DATE[lang] — the only substitution made on top of the
      verbatim content (replaces the lawyer draft's placeholder). */
  updatedDate: string;
  lang?: Lang;
  path: string;
  breadcrumbCurrent: string;
}) {
  return (
    <>
      <Breadcrumb current={breadcrumbCurrent} lang={lang} path={path} variant="solid" />

      <article className="container-bc py-[70px] xl:py-[90px]">
        <div className="mx-auto max-w-[760px]">
          <h1 className="font-heading text-[32px] font-bold leading-[40px] text-heading md:text-[42px] md:leading-[52px]">
            {doc.title}
          </h1>
          <p className="mt-[14px] font-sans text-[13px] font-medium uppercase tracking-[1.5px] text-body">
            {doc.updatedLabel}: {updatedDate}
          </p>

          <div className="mt-[40px] font-sans text-[17px] leading-[1.8] text-body">
            {doc.blocks.map((block, index) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={index}
                    className="mb-[16px] mt-[36px] font-heading text-[24px] font-bold leading-[32px] text-heading first:mt-0"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "h3") {
                return (
                  <h3
                    key={index}
                    className="mb-[10px] mt-[28px] font-heading text-[19px] font-bold leading-[26px] text-heading"
                  >
                    {block.text}
                  </h3>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={index} className="mb-[20px] list-disc space-y-[8px] pl-[22px]">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "table") {
                return (
                  <div key={index} className="mb-[20px] overflow-x-auto rounded-[8px] border border-line">
                    <table className="w-full min-w-[640px] border-collapse font-sans text-[14px] leading-[1.5]">
                      <thead>
                        <tr>
                          {block.headers.map((header) => (
                            <th
                              key={header}
                              scope="col"
                              className="border-b-2 border-line bg-soft px-[14px] py-[10px] text-left font-heading text-[13px] font-semibold uppercase tracking-[0.5px] text-heading"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="odd:bg-white even:bg-soft/40">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className="border-b border-line px-[14px] py-[10px] align-top text-body">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return (
                <p key={index} className="mb-[20px]">
                  {block.text}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </>
  );
}
