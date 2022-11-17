import { Children, useState } from "react";
import { useControlledState } from "../../hooks/useControlledState";
import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";
import { TabsList } from "./TabsList/TabsList";

type TabsProps = {
  defaultValue?: string;
  children: any;
  onTabChange?: (value: string) => void;
  value?: string;
};

const Tabs = ({
  children,
  value='',
  onTabChange,
  defaultValue='',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useControlledState({
    value,
    onChange: onTabChange,
    defaultValue
  });

  return (
    <div className="grid gap-4">
      <TabsList value={activeTab} setActiveTab={setActiveTab}>
        {children}
      </TabsList>
      <TabPanel>
        {Children.map(children, (child) => {
          const isActive = child.props.value === activeTab;

          return isActive && child.props.children;
        })}
      </TabPanel>
    </div>
  );
};

export { Tabs, Tab };
