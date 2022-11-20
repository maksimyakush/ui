import { createContext, ReactNode, useContext } from "react";

export const GridContext = createContext({});

export const useGridContext = (): any => {
  return useContext(GridContext);
};

export const GridContextProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: any;
}): any => {
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};
