import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Elementor button widget as themed on basecoresales.com.
 *
 * Gilmer 16px / weight 500, letter-spacing 2px, NO text-transform (the labels are
 * typed in caps), radius 4px, #0787D9, hover to black @ 77%.
 *
 * Two paddings are in use on the home page:
 *   md   17px 23px -> 50px tall  (CONTÁCTANOS, #6b8fb4a)
 *   sm   15px 30px -> 46px tall  (MÁS INFORMACIÓN #df899e2, DESCARGAR #4eed6ba)
 */
type Props = {
  href: string;
  children: ReactNode;
  size?: "md" | "sm";
  external?: boolean;
  className?: string;
};

const sizes = {
  md: "px-[23px] py-[17px]",
  sm: "px-[30px] py-[15px]",
} as const;

export default function Button({
  href,
  children,
  size = "md",
  external = false,
  className = "",
}: Props) {
  const cls = [
    "inline-block rounded-[4px] bg-primary font-heading text-[16px] font-medium leading-none tracking-[2px] text-white",
    "transition-colors duration-300 hover:bg-[rgba(0,0,0,0.77)] focus-visible:bg-[rgba(0,0,0,0.77)]",
    sizes[size],
    className,
  ].join(" ");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
