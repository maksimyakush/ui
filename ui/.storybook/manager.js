import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";
import logo from "./logo.svg";

addons.setConfig({
  theme: create({
    base: "dark",
    brandImage: logo,
    brandUrl: 'https://www.npmjs.com/package/@maksimyakush/ui',
  }),
});
