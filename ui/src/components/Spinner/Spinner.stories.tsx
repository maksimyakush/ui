import { Spinner } from "./Spinner";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useEffect, useState } from "react";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = ({
  size,
  loading,
  ...args
}) => {
  const [load, setLoad] = useState(loading);

  useEffect(() => {
    setLoad(loading);
  }, [loading]);

  /**
   * This is just to force rerender Spiner.
   * Only works in  < react 18
   */
  useEffect(() => {
    new Promise((res) => {
      setLoad((loading) => !loading);
      return res(undefined);
    }).then(() => setLoad((loading) => !loading));
  }, [size]);

  return (
    <div className="h-screen">
      <Spinner size={size} loading={load} {...args} />
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  size: "lg",
  loading: true,
  bg: true,
};
