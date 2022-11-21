import { Children, cloneElement, ReactElement, useState } from "react";

type TabsListProps = {
  children: ReactElement[];
  value: any;
  setActiveTab: any;
};

export const TabsList = ({
  children,
  value,
  setActiveTab,
  ...props
}: TabsListProps) => {
  return (
    <ul
      {...props}
      className="flex list-none p-0 m-0 border-0 border-b-grey-400 border-b-2 border-solid"
    >
      {Children.map(children, (child) => {
        const isActive = child.props.value === value;

        return (
          <>
            {cloneElement(child as ReactElement, {
              isActive,
              onClick: (e: any) => {
                setActiveTab(child.props.value);
              },
            })}
          </>
        );
      })}
    </ul>
  );
};
