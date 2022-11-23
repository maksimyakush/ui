import { forwardRef, ForwardedRef } from "react";
import { twMerge } from "tailwind-merge";
import { GlobalProps, ToLowercase } from "../../types";
import { getGlobalPropsClasses } from "../../utils/get-global-props";
import { Typography } from "../Typography";

enum Color {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
type ColorVaraints = ToLowercase<Color>;

type SwitcherProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  color?: ColorVaraints;
  label?: string;
};

export const Switcher = forwardRef(
  (
    {
      checked,
      onChange,
      color = "secondary",
      label = "",
      ...restProps
    }: SwitcherProps & GlobalProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <span
        className={twMerge(
          "inline-flex items-center gap-1 relative",
          getGlobalPropsClasses(restProps)
        )}
      >
        <span className="inline-flex relative w-10 h-6">
          <span
            className={twMerge(
              `
        transition
        -translate-y-1/2
        translate-x-0
        rounded
        absolute
        w-4
        h-4
        left-1
        bottom-0
        top-1/2
        duration-200
        `,
              checked
                ? `translate-x-4 ${
                    color === Color.PRIMARY
                      ? "bg-primary-dark"
                      : "bg-secondary-dark"
                  }`
                : `translate-x-0 ${
                    color === Color.PRIMARY
                      ? "bg-primary-main"
                      : "bg-secondary-main"
                  }`
            )}
          ></span>
          <span
            className={twMerge(
              `flex rounded  ${
                color === Color.PRIMARY
                  ? "bg-secondary-main"
                  : "bg-primary-main"
              }  w-full h-full`
            )}
          ></span>
          <input
            type="checkbox"
            checked={checked}
            id="switcher"
            onChange={({ target }) => onChange(target.checked)}
            className={twMerge(
              `
            absolute
            cursor-pointer
            opacity-0
            w-full
            h-full
          `
            )}
          />
        </span>
        {label && (
          <Typography as="label" htmlFor="switcher">
            {label}
          </Typography>
        )}
      </span>
    );
  }
);
