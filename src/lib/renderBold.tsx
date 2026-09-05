import type { ReactNode } from "react";
import Link from "next/link";

/** Renders `**bold**` markers in content-file copy as `<strong>`. */
export function renderBold(text: string, boldClassName = "") {
  return text.split(/\*\*(.+?)\*\*/g).map((chunk, index) =>
    index % 2 === 1 ? (
      <strong key={index} className={`font-bold ${boldClassName}`.trim()}>
        {chunk}
      </strong>
    ) : (
      chunk
    ),
  );
}

/**
 * Same as `renderBold`, plus `[label](href)` markers rendered as an internal
 * `next/link` — lets a content-file paragraph carry a real contextual link
 * (see /preventa, /venta e-book cross-links, seo-plan 3.8) without reaching
 * for raw JSX in the page for a single sentence. Text with no `[...](...)`
 * behaves identically to `renderBold`.
 */
export function renderRich(
  text: string,
  options: { boldClassName?: string; linkClassName?: string } = {},
) {
  const { boldClassName = "", linkClassName = "" } = options;
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (match[1] !== undefined) {
      nodes.push(
        <strong key={key++} className={`font-bold ${boldClassName}`.trim()}>
          {match[1]}
        </strong>,
      );
    } else {
      nodes.push(
        <Link key={key++} href={match[3]} className={linkClassName}>
          {match[2]}
        </Link>,
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
