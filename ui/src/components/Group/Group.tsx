import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { getGlobalPropsClasses } from "../../utils/get-global-props";
import { GlobalProps, RangeOf } from "../../types";

type GroupProps = {
  children: ReactNode;
  gap?: RangeOf<0, 10>;
  position?: "start" | "end" | "center" | "between";
  grow?: boolean;
  wrap?: boolean;
};

export const Group = ({
  children,
  gap = 0,
  position = "start",
  grow = false,
  wrap = true,
  ...restProps
}: GroupProps & GlobalProps) => {
  return (
    <div
      className={twMerge(
        "flex relative content-center items-center box-border",
        `gap-${gap}`,
        `justify-${position}`,
        grow ? "children:grow" : "children:grow-0",
        wrap ? "flex-wrap" : "flex-nowrap",
        getGlobalPropsClasses(restProps)
      )}
    >
      {children}
    </div>
  );
};
