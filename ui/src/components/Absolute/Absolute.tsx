import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import { GlobalProps } from "../../types";
import { getGlobalPropsClasses } from "../../utils/get-global-props";

type DirectionValues =
  | -10
  | -9
  | -8
  | -7
  | -6
  | -5
  | -4
  | -3
  | -2
  | -1
  | "auto"
  | 0
  | "1/2";
type AbsoluteProps = {
  children: ReactElement;
  left?: DirectionValues | "1/2-translate";
  right?: DirectionValues;
  top?: DirectionValues | "1/2-translate";
  bottom?: DirectionValues;
};

enum Directions {
  LEFT = "left",
  RIGHT = "right",
  TOP = "top",
  BOTTOM = "bottom",
}

type DirectionClassType<T = typeof Directions> = {
  [P in keyof T as `${Lowercase<string & P>}`]:
    | `-${Lowercase<string & T[P]>}${Exclude<
        DirectionValues,
        "auto" | "1/2" | 0
      >}`
    | `${Lowercase<string & T[P]>}-${Exclude<
        DirectionValues,
        -1 | -2 | -3 | -4 | -5 | -6 | -7 | -8 | -9 | -10
      >}`;
};

const getAbsolutClasses = ({
  left = "auto",
  right = "auto",
  top = "auto",
  bottom = "auto",
}: Pick<AbsoluteProps, "left" | "right" | "top" | "bottom">) => {
  const leftClass: DirectionClassType["left"] | "left-1/2 translate-x-[-50%]" =
    left === "1/2-translate"
      ? `left-1/2 translate-x-[-50%]`
      : left === "1/2" || left === "auto" || left === 0
      ? `left-${left}`
      : `-left${left}`;
  const rightClass: DirectionClassType["right"] =
    right === "1/2" || right === "auto" || right === 0
      ? `right-${right}`
      : `-right${right}`;
  const topClass: DirectionClassType["top"] | "top-1/2 translate-y-[-50%]" =
    top === "1/2-translate"
      ? `top-1/2 translate-y-[-50%]`
      : top === "1/2" || top === "auto" || top === 0
      ? `top-${top}`
      : `-top${top}`;

  const bottomClass: DirectionClassType["bottom"] =
    bottom === "1/2" || bottom === "auto" || bottom === 0
      ? `bottom-${bottom}`
      : `-bottom${bottom}`;

  return `${leftClass} ${rightClass} ${topClass} ${bottomClass}`;
};

export const Absolute = ({
  children,
  left = "auto",
  right = "auto",
  top = "auto",
  bottom = "auto",
  ...restProps
}: AbsoluteProps & GlobalProps) => {
  return (
    <div
      className={twMerge(
        "absolute",
        getAbsolutClasses({
          top,
          left,
          right,
          bottom,
        }),
        getGlobalPropsClasses(restProps)
      )}
    >
      {children}
    </div>
  );
};
