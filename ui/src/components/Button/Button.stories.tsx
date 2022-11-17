import { Button, Size } from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: "outlined",
  color: "primary",
  size: Size["MD"],
  children: "Click",
  type: "button",
};
