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
            {/* >=md: unchanged hover-flip. Below md, hover doesn't exist and
                tap-to-reveal meant anyone who only scrolls never sees the
                description — so mobile gets a single static card instead
                (test case for the rest of the site's flip-boxes). */}
            <div className="hidden md:block">
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

            <div
              className="relative flex flex-col items-center bg-cover bg-center bg-no-repeat p-[35px] text-center md:hidden"
              style={{ backgroundImage: `url(${step.backImage})` }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(0, 41, 75, 0.24)" }}
              />
              <div className="relative">
                <div className="mb-[20px] flex justify-center">
                  <Icon className="text-[50px] text-white" />
                </div>
                <h3 className="font-heading text-[21px] font-semibold leading-none text-white">
                  {step.title}
                </h3>
                <div className="mt-[20px] font-sans text-[14px] leading-[1.8] text-white">
                  {step.items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
