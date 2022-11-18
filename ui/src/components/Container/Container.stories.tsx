import { Container, Size } from "./Container";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Container",
  component: Container,
  argTypes: {
    size: {
      control: {
        labels: {
          xs: "xs (576px)",
          sm: "sm (768px)",
          md: "md (1024px)",
          lg: "lg (1152px)",
          xl: "xl (1280px)",
        },
      },
    },
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = ({ size, ...args }) => (
  <Container size={size}>
    <p style={{ backgroundColor: "rgba(0,0,0, .05)" }}>{size}</p>
  </Container>
);

export const Playground = Template.bind({});
Playground.args = {
  size: Size["MD"],
};
