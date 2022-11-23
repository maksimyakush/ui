import {
  MouseEvent,
  forwardRef,
  ReactNode,
  ComponentPropsWithRef,
  ButtonHTMLAttributes,
  ForwardedRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { GlobalProps } from "../../types";
import {
  extractGlobalProps,
  getGlobalPropsClasses,
} from "../../utils/get-global-props";

type ToLowercaseEnumValues<T> = `${Lowercase<string & T>}`;

export enum Size {
  SM = "sm",
  MD = "md",
  LG = "lg",
}
type SizeVaraints = ToLowercaseEnumValues<Size>;

enum Color {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
type ColorVaraints = ToLowercaseEnumValues<Color>;

enum Variant {
  OUTLINED = "outlined",
  CONTAINED = "contained",
}
type VariantVaraints = ToLowercaseEnumValues<Variant>;

const VARIANT_MAPS = {
  [Variant.OUTLINED]: {
    [Color.PRIMARY]: `
        text-primary-main
        border-2
        border-primary-main
        hover:border-primary-light
        hover:text-primary-light
        transition
        duration-150
        ease-out
      `,
    [Color.SECONDARY]:
      "text-secondary-main border-2  border-secondary-main hover:border-secondary-light hover:text-secondary-light transition duration-150 ease-out",
  },
  [Variant.CONTAINED]: {
    [Color.PRIMARY]:
      "bg-primary-main hover:bg-primary-light transition duration-150 ease-out",
    [Color.SECONDARY]:
      "bg-secondary-main hover:bg-secondary-light transition duration-150 ease-out",
  },
};

const SIZE_MAPS: Record<Size, string> = {
  [Size.SM]: "py-1 px-2 text-sm",
  [Size.MD]: "p-2 text-lg",
  [Size.LG]: "p-3 text-xl",
};

const DISABLED =
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30";
const FULL = "w-full";

type ButtonProps<T> = {
  children: ReactNode;
  color?: ColorVaraints;
  variant?: VariantVaraints;
  size?: SizeVaraints;
  disabled?: boolean;
  className?: string;
  type?: T;
  full?: boolean;
};

type ButtonOnClickProp<T> = T extends "button"
  ? { onClick: (event: MouseEvent<HTMLButtonElement>) => void }
  : { onClick?: (event: MouseEvent<HTMLButtonElement>) => void };

export const Button = forwardRef(
  <T extends ButtonHTMLAttributes<HTMLButtonElement>["type"] = "button">(
    {
      variant = "contained",
      color = "primary",
      size = "md",
      disabled = false,
      type = "button",
      full = false,
      onClick,
      children,
      ...restProps
    }: ButtonProps<T> &
      ButtonOnClickProp<T> &
      Omit<ComponentPropsWithRef<"button">, "type"> &
      GlobalProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { rest } = extractGlobalProps(restProps);
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={twMerge(
          `
            relative
            box-border
            appearance-none
            border-0
            border-solid
            cursor-pointer
            font-nunito
            font-bold
            tracking-widest
            bg-common-transparent
            rounded-lg
            text-common-white
          `,
          SIZE_MAPS[size],
          disabled && DISABLED,
          full && FULL,
          VARIANT_MAPS[variant][color],
          getGlobalPropsClasses(restProps)
        )}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);
