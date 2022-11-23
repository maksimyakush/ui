import { Absolute } from "./Absolute";
import { Typography } from "../Typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Absolute",
  component: Absolute,
} as ComponentMeta<typeof Absolute>;

const Template: ComponentStory<typeof Absolute> = (args) => (
  <Absolute {...args} w="fit">
    <div
      style={{
        height: 300,
        width: 300,
        position: "relative",
        backgroundColor: "grey",
      }}
    ></div>
  </Absolute>
);

export const Playground = Template.bind({});
Playground.args = {
  top: "auto",
  bottom: "auto",
  right: "auto",
  left: "auto",
  content: <div style={{ backgroundColor: "yellow" }}>Absolute</div>,
};
