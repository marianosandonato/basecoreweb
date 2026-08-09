import type { ComponentType, SVGProps } from "react";

/**
 * `milestone-block.style-1` — the three counters in /marketing #dc71230.
 *
 * Measured on the original: 157 x 160 each, laid out in a row at
 * x=189 / 366 / 543, so a 20px gap. Icon 60px #0787D9, number DM Sans
 * 35px/32.4px weight 700 #1B1F2E with the symbol in a separate span, label
 * DM Sans 16px/24px weight 500 #1B1F2E.
 *
 * Deliberate deviation: the original prints a raw PHP warning
 * (`Undefined array key "desc_text"` from conult-themer's counter.php) inside
 * every one of these blocks, which inflates each to 451px and the section to
 * 1056px. We omit it, so this section measures short against the original by
 * design. See documentation/PLAN-MARKETING.md.
 */
export type CounterData = {
  value: string;
  symbol?: string;
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function Counters({ items }: { items: readonly CounterData[] }) {
  return (
    <div className="flex flex-wrap gap-[20px] max-sm:justify-center">
      {items.map(({ value, symbol, label, icon: Icon }) => (
        /* 5 + 63 + 20 + 32 + 15 + 24 = 160, matching `.milestone-block`. */
        <div key={label} className="w-[157px] pt-[5px] text-center">
          <div className="mb-[20px] flex h-[63px] items-center justify-center">
            <Icon className="text-[60px] text-primary" />
          </div>
          <div className="font-sans text-[35px] font-bold leading-[32.4px] text-heading">
            <span>{value}</span>
            {symbol && <span>{symbol}</span>}
          </div>
          <div className="mt-[15px] font-sans text-[16px] font-medium leading-[24px] text-heading">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
