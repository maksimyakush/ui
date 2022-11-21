import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { getGlobalPropsClasses } from "../../utils/get-global-props";
import { GlobalProps, RangeOf } from "../../types";

type GroupProps = {
  children: ReactNode;
  gap?: RangeOf<0, 10>;
  position?: "start" | "end" | "center" | "between" | "stretch";
};

export const Group = ({
  children,
  gap = 0,
  position = "start",
  ...restProps
}: GroupProps & GlobalProps) => {
  return (
    <div
      className={twMerge(
        "grid grid-flow-col content-center items-center box-border",
        `gap-${gap}`,
        `justify-${position}`,
        getGlobalPropsClasses(restProps)
      )}
    >
      {children}
    </div>
  );
};
