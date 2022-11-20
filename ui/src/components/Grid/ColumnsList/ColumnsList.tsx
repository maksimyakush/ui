import { ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { getGlobalPropsClasses } from "../../../utils/get-global-props";
import { useGridContext } from "../common";
import { Column } from "./Column";

type ColumnsListProps = {
  children: ReactNode;
};

const ColumnsList = ({ children }: ColumnsListProps) => {
  const {
    alignItems,
    justifyItems,
    alignContent,
    justifyContent,
    gap,
    ...restProps
  } = useGridContext();
  return (
    <div
      className={twMerge(
        "grid grid-flow-dense grid-cols-12",
        `justify-${justifyContent}`,
        `justify-items-${justifyItems}`,
        `content-${alignContent}`,
        `items-${alignItems}`,
        `gap-${gap}`,
        getGlobalPropsClasses(restProps),
      )}
    >
      {children}
    </div>
  );
};

export { ColumnsList, Column };
