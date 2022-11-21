import {
  Button,
  Tabs,
  Tab,
  Container,
  Typography,
  Grid,
} from "@maksimyakush/ui";
import { lazy, Suspense, useState } from "react";

export const App = () => {
  const [value, setValue] = useState("1");

  return (
    <>
      <Button  color='secondary'>Click</Button>
    </>
  );
};
