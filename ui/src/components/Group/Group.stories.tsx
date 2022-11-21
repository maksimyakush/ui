import { Group } from "./Group";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "Components/Group",
  component: Group,
} as ComponentMeta<typeof Group>;

const Template: ComponentStory<typeof Group> = (args) => (
  <Group {...args}>
    <Button>Button1</Button>
    <Button color="secondary">Button2</Button>
    <Button variant="outlined">Button3</Button>
  </Group>
);

export const Playground = Template.bind({});
Playground.args = {
  position: "start",
  gap: 1,
};
