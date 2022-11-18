import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { ToLowercase } from "../../types";

export enum Size {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.XS]: "max-w-xl", // 576px
  [Size.SM]: "max-w-3xl", // 768px
  [Size.MD]: "max-w-5xl", // 1024px
  [Size.LG]: "max-w-6xl", // 1152px
  [Size.XL]: "max-w-7xl", // 1280px
};

type ContainerProps = {
  children: ReactNode;
  size?: ToLowercase<Size>;
};

export const Container = ({ size = "xl", children }: ContainerProps) => {
  return (
    <div className={twMerge(`my-0 mx-auto ${SIZE_MAPS[size]}`)}>{children}</div>
  );
};
