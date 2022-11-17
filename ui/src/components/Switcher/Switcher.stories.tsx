import { Switcher } from "./Switcher";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Switcher",
  component: Switcher,
  parameters: {
    controls: {
      exclude: "checked",
    },
  },
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = ({
  onChange,
  checked,
  ...args
}) => {
  const [value, setValue] = useState(false);

  return (
    <Switcher onChange={() => setValue(!value)} {...args} checked={value} />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  color: "primary",
  label: "On/Off",
};
