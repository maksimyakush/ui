import {
  MouseEvent,
  forwardRef,
  ReactNode,
  ComponentPropsWithRef,
  ButtonHTMLAttributes,
  ForwardedRef,
} from "react";
import { twMerge } from "tailwind-merge";

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
    [Color.PRIMARY]:
      "bg-common-white text-primary-main border-2  border-primary-main",
    [Color.SECONDARY]:
      "bg-common-white text-secondary-main border-2  border-secondary-main",
  },
  [Variant.CONTAINED]: {
    [Color.PRIMARY]: "bg-primary-main",
    [Color.SECONDARY]: "bg-secondary-main",
  },
};

const SIZE_MAPS: Record<Size, string> = {
  [Size.SM]: "p-1 text-sm",
  [Size.MD]: "p-2 text-lg",
  [Size.LG]: "p-3 text-xl",
};

const DISABLED = "cursor-not-allowed opacity-50";

type ButtonProps<T> = {
  children: ReactNode;
  color?: ColorVaraints;
  variant?: VariantVaraints;
  size?: SizeVaraints;
  disabled?: boolean;
  className?: string;
  type?: T;
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
      className,
      type = "button",
      onClick,
      children,
      ...restProps
    }: ButtonProps<T> &
      ButtonOnClickProp<T> &
      Omit<ComponentPropsWithRef<"button">, "type">,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        type={type}
        className={twMerge(
          `
            border-0
            cursor-pointer
            font-nunito
            font-bold
            tracking-widest
            rounded-lg
            text-common-white`,
          SIZE_MAPS[size],
          disabled && DISABLED,
          VARIANT_MAPS[variant][color],
          className
        )}
        onClick={onClick}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
