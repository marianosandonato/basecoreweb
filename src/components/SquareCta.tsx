import Link from "next/link";

/**
 * The theme's `btn-cta.btn-theme` link: Gilmer 14px/700, 2px tracking,
 * uppercase, `padding: 18px 30px`, square corners, `#0787D9`.
 *
 * Distinct from `Button` (Gilmer 16/500, 4px radius, not uppercase). Used by
 * the cycle pages' next-cycle CTA and by /marketing #931c3da
 * ("HAGAMOS NEGOCIOS", which is a `.heading-action` inside the heading widget).
 */
export default function SquareCta({
  href,
  external = false,
  className = "",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = `inline-block bg-primary px-[30px] py-[18px] font-heading text-[14px] font-bold uppercase leading-[22px] tracking-[2px] text-white transition-colors duration-300 hover:bg-[rgba(0,0,0,0.77)] ${className}`;

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
