import { Typography } from "./Typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: "body1",
  children: 'Lorem ipsum',
  as: 'p'
};
