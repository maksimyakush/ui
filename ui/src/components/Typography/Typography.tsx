import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ToLowercaseEnumValues<T> = `${Lowercase<string & T>}`;
enum Variant {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  BODY1 = "body1",
}
type VariantVariants = ToLowercaseEnumValues<Variant>;

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.H1]: "t-h1",
  [Variant.H2]: "t-h2",
  [Variant.H3]: "t-h3",
  [Variant.H4]: "t-h4",
  [Variant.H5]: "t-h5",
  [Variant.H6]: "t-h6",
  [Variant.BODY1]: "t-body1",
};

type TypographyProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
  variant?: VariantVariants;
} & ComponentPropsWithoutRef<C>;

export const Typography = <C extends ElementType = "p">({
  as,
  variant = "body1",
  children,
  ...restProps
}: TypographyProps<C>) => {
  const Component = as || "p";

  return (
    <>
      <Component className={VARIANT_MAPS[variant]} {...restProps}>
        {children}
      </Component>
    </>
  );
};
