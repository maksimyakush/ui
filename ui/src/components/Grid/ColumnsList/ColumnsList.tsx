import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { GlobalProps, RangeOf } from "../../../types";
import { getGlobalPropsClasses } from "../../../utils/get-global-props";
import { Column } from "./Column";

type ColumnsListProps = {
  children: ReactNode;
  gap?: RangeOf<0, 10>;
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  alignContent?:
    | "start"
    | "center"
    | "end"
    | "stretch"
    | "between"
    | "around"
    | "evenly"
    | "baseline";
  justifyItems?: "start" | "center" | "end" | "stretch";
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "stretch"
    | "between"
    | "around"
    | "evenly";
};

const ColumnsList = ({
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
  gap,
  children,
  ...restProps
}: ColumnsListProps  & GlobalProps) => {
  return (
    <div
      className={twMerge(
        "grid grid-flow-dense grid-cols-12",
        `justify-${justifyContent}`,
        `justify-items-${justifyItems}`,
        `content-${alignContent}`,
        `items-${alignItems}`,
        `gap-${gap}`,
        getGlobalPropsClasses(restProps)
      )}
    >
      {children}
    </div>
  );
};

export { ColumnsList, Column };
