import {
  Button,
  Tabs,
  Tab,
  Container,
  Typography,
  Grid,
  Group,
} from "@maksimyakush/ui";
import { lazy, Suspense, useState } from "react";

export const App = () => {
  return (
    <div style={{ height: "30vh" }}>
      <Group gap={1} position="between">
        <Button color="secondary" variant="outlined">
          Click
        </Button>
        <Button color="secondary">Click</Button>
        <Button color="secondary">Click</Button>
      </Group>
    </div>
  );
};
