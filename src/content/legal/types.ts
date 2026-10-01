/**
 * Block model for the four legal pages (plan-seo 4.5.4) — mirrors the exact
 * structure of the lawyer-reviewed markdown in
 * documentation/legal/publicar/*.md (headings, paragraphs, bullet lists and
 * one table per document) so each content file can stay a byte-for-byte
 * transcription instead of hand-written JSX prose.
 */
export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalDoc = {
  title: string;
  /** "Última actualización" / "Last updated" — the date itself is injected
      by the page component from LEGAL_PUBLICATION_DATE, not stored here. */
  updatedLabel: string;
  blocks: LegalBlock[];
};
