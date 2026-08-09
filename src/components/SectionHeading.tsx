import type { ReactNode } from "react";

/**
 * Theme `gsc-heading` widget (style-1, auto-responsive).
 *
 * Renders the four stacked parts of the original:
 *   .heading-line  two 13x2px primary dashes
 *   .sub-title     eyebrow, DM Sans 14/30, 500, ls 1.5px, uppercase, #7A838B
 *   .title         Gilmer 700, 45px -> 28px responsive, #1B1F2E
 *   .title-desc    DM Sans 18/1.8, #7A838B, padding-top 25px (10px <=1024)
 */
type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** Light text for navy/photo backgrounds. */
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
  /** Hide the two decorative dashes (the E-Book heading has none). */
  showLine?: boolean;
  /** Caps `.content-inner` — matches the per-section max-width in post-1369.css. */
  maxWidth?: number;
  /** Per-section overrides for the title (size/colour). */
  titleClassName?: string;
  /** Per-section overrides for the eyebrow (the NaN one is Montserrat 26/200). */
  eyebrowClassName?: string;
  descriptionClassName?: string;
  className?: string;
  /**
   * Extra content inside `.content-inner`, below the description. The theme's
   * `.heading-action` CTA lives here rather than in its own widget
   * (/marketing #931c3da).
   */
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  as: Tag = "h2",
  showLine = true,
  maxWidth,
  titleClassName = "",
  eyebrowClassName = "",
  descriptionClassName = "",
  className = "",
  children,
}: Props) {
  const centered = align === "center";

  return (
    <div className={`w-full ${centered ? "text-center" : "text-left"} ${className}`}>
      <div
        className={centered ? "mx-auto" : ""}
        style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      >
        {showLine && (
          <div className="heading-line" aria-hidden="true">
            <span />
            <span />
          </div>
        )}

        {eyebrow && (
          <div
            className={`font-sans text-[14px] font-medium uppercase leading-[30px] tracking-[1.5px] ${
              dark ? "text-muted" : "text-body"
            } ${eyebrowClassName}`}
          >
            {eyebrow}
          </div>
        )}

        <Tag
          className={`heading-title font-heading font-bold ${
            dark ? "text-white" : "text-heading"
          } ${titleClassName}`}
        >
          {title}
        </Tag>

        {description && (
          <div
            className={`pt-[10px] font-sans text-[18px] leading-[1.8] lg:pt-[25px] ${
              dark ? "text-muted" : "text-body"
            } ${descriptionClassName}`}
          >
            {description}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
