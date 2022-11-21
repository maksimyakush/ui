import { ReactNode } from "react";
import { GlobalProps, RangeOf } from "../../types";
import { ColumnsList, Column } from "./ColumnsList";

type GridProps = {
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
};

const Grid = ({
  children,
  alignItems = "stretch",
  justifyItems = "stretch",
  alignContent = "stretch",
  gap = 0,
  ...restProps
}: GridProps & GlobalProps) => {
  return (
    <ColumnsList
      alignItems={alignItems}
      justifyItems={justifyItems}
      alignContent={alignContent}
      gap={gap}
      {...restProps}
    >
      {children}
    </ColumnsList>
  );
};

Grid.Column = Column;

export { Grid };
