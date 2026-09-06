import { renderBold } from "@/lib/renderBold";
import { CheckCircleIcon } from "./icons";

/**
 * Elementor `icon-list` widget.
 *
 * The original uses two distinct styles, so this takes a `size`:
 *   "sm"  17px / 500, navy   — "Nosotros" (#4a70955), contact cycle list (#1ba3c267)
 *   "md"  18px / 400, body   — Recruiting (#3e239de2, #11397e5f), NaN partner (#a4af108)
 *
 * The icon is a 14px solid `fa-check-circle` in primary blue. Row rhythm comes from
 * the inherited 1.8 line-height, so there is no extra vertical gap.
 */
type Props = {
  items: readonly string[];
  dark?: boolean;
  columns?: 1 | 2;
  size?: "sm" | "md";
  /** Centers the whole list as a block below `md` (icon-list version of
      SectionHeading's own `centerOnMobile`) — opt-in per call site. The
      `<ul>` itself shrinks to its widest row and gets `mx-auto`, so rows of
      different text length still share one left edge instead of each row
      centering independently (which floats them to different centers). */
  centerOnMobile?: boolean;
};

export default function CheckList({
  items,
  dark = false,
  columns = 1,
  size = "sm",
  centerOnMobile = false,
}: Props) {
  const text =
    size === "sm"
      ? `text-[17px] font-medium ${dark ? "text-white" : "text-navy"}`
      : `text-[18px] font-normal ${dark ? "text-white" : "text-body"}`;
  const center = centerOnMobile ? "mx-auto w-fit md:mx-0 md:w-auto" : "";

  return (
    <ul className={`${columns === 2 ? "grid gap-x-8 sm:grid-cols-2" : ""} ${center}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-[10px] text-left font-sans leading-[1.8] ${text}`}
        >
          {/* Explicit text-left (bug fix): without it, a `centerOnMobile`
              ancestor's inherited text-center reaches this span too. A
              one-line bullet never shows it (nothing to center within its
              own row), but a bullet long enough to wrap gets its wrapped
              lines centered against each other instead of left-aligned --
              only visible on the longest bullet in a list, easy to miss. */}
          <CheckCircleIcon className="mt-[9px] shrink-0 text-[14px] text-primary" />
          <span className="text-left">{renderBold(item)}</span>
        </li>
      ))}
    </ul>
  );
}
