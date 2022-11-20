import { Grid } from "./Grid";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Column } from "./ColumnsList";

export default {
  title: "Components/Grid",
  component: Grid,
  subcomponents: { "Grid.Column": Column },
} as ComponentMeta<typeof Grid>;

export const Playground: ComponentStory<typeof Grid> = ({ ...args }) => {
  return (
    <Grid {...args}>
      <Grid.Column md={6} lg={3}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Col1</p>
      </Grid.Column>
      <Grid.Column md={6} lg={3}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Col2</p>
      </Grid.Column>
      <Grid.Column md={6} lg={3}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Col3</p>
      </Grid.Column>
      <Grid.Column md={6} lg={3}>
        <p style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>Col4</p>
      </Grid.Column>
    </Grid>
  );
};

Playground.args = {
  gap: 4,
  alignItems: "stretch",
  alignContent: "stretch",
  justifyItems: "stretch",
  justifyContent: "stretch",
};
