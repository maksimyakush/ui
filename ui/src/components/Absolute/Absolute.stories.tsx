import { Absolute } from "./Absolute";
import { Text } from "../Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Absolute",
  component: Absolute,
} as ComponentMeta<typeof Absolute>;

const Template: ComponentStory<typeof Absolute> = (args) => (
  <div
    style={{
      height: 300,
      width: 300,
      position: "relative",
      backgroundColor: "grey",
    }}
  >
    <Text weight={900} color='info.dark'>Relative text 😀</Text>
    <Absolute {...args}></Absolute>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  top: "auto",
  bottom: "auto",
  right: "auto",
  left: "auto",
  children: <Text color='secondary' weight={900} >Absolute text</Text>,
};
