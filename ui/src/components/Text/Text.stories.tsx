import { Text } from "./Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  variant: "body1",
  children: 'Lorem ipsum',
  as: 'p'
};
