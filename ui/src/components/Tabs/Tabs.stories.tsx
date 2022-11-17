import { Tabs, Tab } from "./Tabs";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Components/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
  <Tabs {...args}>
    <Tab label="Tab 1" value="1">
      Tab 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis id
      sint maiores cumque autem molestias cum quia libero amet? Suscipit dolorum
      dicta tenetur! Maiores necessitatibus unde vel ratione! Sit necessitatibus
      nostrum qui deleniti iure odit totam, temporibus esse perferendis tempora?
    </Tab>
    <Tab label="Tab 2" value="2">
      Tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
      optio quas quisquam molestias vitae iure fugit iste possimus quod ut!
    </Tab>
    <Tab label="Tab 3" value="3">
      Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe
      repellendus praesentium nulla possimus dolor?
    </Tab>
  </Tabs>
);

export const Playground = () => (
  <Tabs defaultValue={"1"}>
    <Tab label="Tab 1" value="1">
      Tab 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis id
      sint maiores cumque autem molestias cum quia libero amet? Suscipit dolorum
      dicta tenetur! Maiores necessitatibus unde vel ratione! Sit necessitatibus
      nostrum qui deleniti iure odit totam, temporibus esse perferendis tempora?
    </Tab>
    <Tab label="Tab 2" value="2">
      Tab 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
      optio quas quisquam molestias vitae iure fugit iste possimus quod ut!
    </Tab>
    <Tab label="Tab 3" value="3">
      Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe
      repellendus praesentium nulla possimus dolor?
    </Tab>
  </Tabs>
);
