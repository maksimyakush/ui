import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { GlobalProps, ToLowercase } from "../../types";
import {
  extractGlobalProps,
  getGlobalPropsClasses,
} from "../../utils/get-global-props";

enum Variant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  BODY1 = "body1",
}
const FontWeight = [400, 500, 600, 700, 800, 900] as const;
const FontSize = [
  "xs",
  "sm",
  "base",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
] as const;

const LineClamp = ["none", 1, 2, 3, 4, 5, 6] as const;

enum Align {
  START = "start",
  END = "end",
  CENTER = "center",
  JUSTIFY = "justify",
}

enum Color {
  PRIMARY = "primary",
  PRIMARY_LIGHT = "primary.light",
  PRIMARY_DARK = "primary.dark",
  SECONDARY = "secondary",
  SECONDARY_LIGHT = "secondary.light",
  SECONDARY_DARK = "secondary.dark",
  ERROR = "error",
  ERROR_LIGHT = "error.light",
  ERROR_DARK = "error.dark",
  INFO = "info",
  INFO_LIGHT = "info.light",
  INFO_DARK = "info.dark",
  WARNING = "warning",
  WARNING_LIGHT = "warning.light",
  WARNING_DARK = "warning.dark",
  SUCCESS = "success",
  SUCCESS_LIGHT = "success.light",
  SUCCESS_DARK = "success.dark",
  GREY_100 = "grey.100",
  GREY_200 = "grey.200",
  GREY_300 = "grey.300",
  GREY_400 = "grey.400",
  GREY_500 = "grey.500",
  GREY_600 = "grey.600",
  GREY_700 = "grey.700",
  GREY_800 = "grey.800",
  GREY_900 = "grey.900",
}

type VariantVariants = ToLowercase<Variant>;
type AlignVariants = ToLowercase<Align>;
type ColorVariants = ToLowercase<Color>;
type FontWeightVariants = typeof FontWeight[number];
type FontSizeVariants = typeof FontSize[number];
type LineClampVariants = typeof LineClamp[number];

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.H1]:
    "font-black font-nunito leading-tight tracking-widest text-grey-800 text-h1",
  [Variant.H2]:
    "font-black font-nunito  leading-tight tracking-widest text-grey-800 text-h2",
  [Variant.H3]:
    "font-black font-nunito text-3xl leading-tight tracking-widest text-grey-800",
  [Variant.H4]:
    "font-black font-nunito text-2xl leading-tight tracking-widest text-grey-800",
  [Variant.H5]:
    "font-black font-nunito text-xl leading-tight tracking-widest text-grey-800",
  [Variant.H6]:
    "font-black font-nunito text-base leading-tight tracking-widest text-grey-800",
  [Variant.BODY1]:
    "font-medium font-nunito text-lg leading-normal tracking-normal text-grey-800",
};
const ALIGN_MAPS: Record<Align, string> = {
  [Align.START]: "text-start",
  [Align.CENTER]: "text-center",
  [Align.END]: "text-end",
  [Align.JUSTIFY]: "text-justify",
};
const COLOR_MAPS: Record<Color, string> = {
  [Color.PRIMARY]: "text-primary-main",
  [Color.PRIMARY_LIGHT]: "text-primary-light",
  [Color.PRIMARY_DARK]: "text-primary-dark",
  [Color.SECONDARY]: "text-secondary-main",
  [Color.SECONDARY_LIGHT]: "text-secondary-light",
  [Color.SECONDARY_DARK]: "text-secondary-dark",
  [Color.ERROR]: "text-error-main",
  [Color.ERROR_LIGHT]: "text-error-light",
  [Color.ERROR_DARK]: "text-error-dark",
  [Color.WARNING]: "text-warning-main",
  [Color.WARNING_LIGHT]: "text-warning-light",
  [Color.WARNING_DARK]: "text-warning-dark",
  [Color.SUCCESS]: "text-success-main",
  [Color.SUCCESS_LIGHT]: "text-success-light",
  [Color.SUCCESS_DARK]: "text-success-dark",
  [Color.INFO]: "text-info-main",
  [Color.INFO_LIGHT]: "text-info-light",
  [Color.INFO_DARK]: "text-info-dark",
  [Color.GREY_100]: "text-grey-100",
  [Color.GREY_200]: "text-grey-200",
  [Color.GREY_300]: "text-grey-300",
  [Color.GREY_400]: "text-grey-400",
  [Color.GREY_500]: "text-grey-500",
  [Color.GREY_600]: "text-grey-600",
  [Color.GREY_700]: "text-grey-700",
  [Color.GREY_800]: "text-grey-800",
  [Color.GREY_900]: "text-grey-900",
};

const FONT_WEIGHT_MAPS: { [k in FontWeightVariants]: string } = {
  400: "font-normal",
  500: "font-medium",
  600: "font-semibold",
  700: "font-bold",
  800: "font-extrabold",
  900: "font-black",
};
const FONT_SIZE_MAPS: { [k in FontSizeVariants]: string } = {
  xs: "text-xs", // 12px
  sm: "text-sm", // 14px
  base: "text-base", // 16px
  lg: "text-lg", // 18px
  xl: "text-xl", // 20px
  "2xl": "text-2xl", // 24px
  "3xl": "text-3xl", // 30px
  "4xl": "text-4xl", // 36px
  "5xl": "text-5xl", // 48px
};
const LINE_CLAMP_MAPS: { [k in LineClampVariants]: string } = {
  none: "line-clamp-none", // 12px
  1: "line-clamp-1", // 12px
  2: "line-clamp-2", // 12px
  3: "line-clamp-3", // 12px
  4: "line-clamp-4", // 12px
  5: "line-clamp-5", // 12px
  6: "line-clamp-6", // 12px
};

type TextProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
  variant?: VariantVariants;
  align?: AlignVariants;
  color?: ColorVariants;
  weight?: FontWeightVariants;
  /**
   * Defines the font size and the line height of the text
   *
   * xs=12px (line-height: 16px)),
   *
   * sm=14px (line-height: 20px),
   *
   * base=16px (line-height: 24px),
   *
   * lg=18px (line-height: 28px),
   *
   * xl=20px (line-height: 28px),
   *
   * 2xl=24px (line-height: 32px),
   *
   * 3xl=30px (line-height: 36px),
   *
   * 4xl=36px (line-height: 40px),
   *
   * 5xl=48px (line-height: 1)
   */
  size?: FontSizeVariants;
  lineclamp?: LineClampVariants;
};

export const Text = <C extends ElementType = "p">({
  as,
  variant = "body1",
  align = "start",
  color,
  weight,
  size,
  italic = false,
  children,
  lineclamp = "none",
  ...restProps
}: TextProps<C> & ComponentPropsWithoutRef<C> & GlobalProps) => {
  const Component = as || (variant !== "body1" && variant) || "p";
  const { rest } = extractGlobalProps(restProps);

  return (
    <>
      <Component
        className={twMerge(
          "box-border p-0 m-0 relative",
          VARIANT_MAPS[variant],
          ALIGN_MAPS[align],
          LINE_CLAMP_MAPS[lineclamp],
          color && COLOR_MAPS[color],
          weight && FONT_WEIGHT_MAPS[weight],
          size && FONT_SIZE_MAPS[size],
          italic && "italic",
          getGlobalPropsClasses(restProps)
        )}
        {...rest}
      >
        {children}
      </Component>
    </>
  );
};
