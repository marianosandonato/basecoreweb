import type { ComponentType, SVGProps } from "react";
import FlipBox from "./FlipBox";

export type MethodologyStep = {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** White card carrying the outlined 01–04 numeral. */
  frontImage: string;
  /** Photo revealed behind the description. */
  backImage: string;
  items: readonly string[];
};

type Props = {
  steps: readonly MethodologyStep[];
};

/** Home "Metodología" row — four zoom-in flip boxes (#aa22304). */
export default function MethodologyGrid({ steps }: Props) {
  return (
    // Cells carry 10px padding on all four sides: an Elementor flip row is 20px
    // taller than its boxes, which is 4 x 20 at mobile where they stack.
    <div className="grid grid-cols-1 gap-0 md:grid-cols-4">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className="px-[10px] py-[10px]">
            <FlipBox
              label={step.title}
              frontImage={step.frontImage}
              backImage={step.backImage}
              front={
                <>
                  <div className="mb-[20px] flex justify-center">
                    <Icon className="text-[50px] text-primary" />
                  </div>
                  <h3 className="font-heading text-[21px] font-semibold leading-none text-heading">
                    {step.title}
                  </h3>
                </>
              }
              back={
                <div className="font-sans text-[14px] leading-[1.8] text-white">
                  {step.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              }
            />
          </div>
        );
      })}
    </div>
  );
}
