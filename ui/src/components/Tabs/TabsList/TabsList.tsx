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
  // const { activeTab, setActiveTab } = useTabsContext();

  return (
    <ul {...props} className="flex border-b border-b-grey-400">
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
