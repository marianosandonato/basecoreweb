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
};

export default function CheckList({
  items,
  dark = false,
  columns = 1,
  size = "sm",
}: Props) {
  const text =
    size === "sm"
      ? `text-[17px] font-medium ${dark ? "text-white" : "text-navy"}`
      : `text-[18px] font-normal ${dark ? "text-white" : "text-body"}`;

  return (
    <ul className={columns === 2 ? "grid gap-x-8 sm:grid-cols-2" : ""}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-[10px] font-sans leading-[1.8] ${text}`}>
          <CheckCircleIcon className="mt-[9px] shrink-0 text-[14px] text-primary" />
          <span>{renderBold(item)}</span>
        </li>
      ))}
    </ul>
  );
}
