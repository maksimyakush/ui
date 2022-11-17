import { forwardRef, ForwardedRef } from "react";
import { twMerge } from "tailwind-merge";

type ToLowercaseEnumValues<T> = `${Lowercase<string & T>}`;

enum Color {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
type ColorVaraints = ToLowercaseEnumValues<Color>;

type SwitcherProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
  color?: ColorVaraints;
  label?: string;
};

export const Switcher = forwardRef(
  (
    { checked, onChange, color = "secondary", label = "" }: SwitcherProps,
    ref: ForwardedRef<HTMLElement>
  ) => {
    return (
      <span className="inline-flex items-center gap-1">
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
          <label htmlFor="switcher" className='text-base font-semibold'>
            {label}
          </label>
        )}
      </span>
    );
  }
);
