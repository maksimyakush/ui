import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ColumnProps = {
  children: ReactNode;
  sm?: 3 | 4 | 6 | 12;
  md?: 3 | 4 | 6 | 12;
  lg?: 3 | 4 | 6 | 12;
  xl?: 3 | 4 | 6 | 12;
};

export const Column = ({ children, sm, md, lg, xl }: ColumnProps) => {
  return (
    <div
      className={twMerge(
        `
          col-span-full
          sm:col-span-${sm}
          md:col-span-${md}
          lg:col-span-${lg}
          xl:col-span-${xl}
        `
      )}
    >
      {children}
    </div>
  );
};
