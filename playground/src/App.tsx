import { Button, Tabs, Tab, Container, Typography } from "@maksimyakush/ui";
import { useState } from "react";

export const App = () => {
  const [value, setValue] = useState("1");

  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "1200px",
        minHeight: "50vh",
      }}
    >
      <Tabs p={1} value={value} onTabChange={(value: any) => setValue(value)}>
        <Tab label="qwerty222" value="1">
          Helen
        </Tab>
        <Tab label="qwerty" value="2">
          Maksim
        </Tab>
        <Tab label="qwerty" value="3">
          Peter
        </Tab>
      </Tabs>
      <Button px={5}>Click</Button>
      <Container size="sm" mt={4} mb={10}>
        <p style={{ backgroundColor: "yellow" }}>Hello there</p>{" "}
      </Container>
      <Typography mt={6}>Hi</Typography>
    </div>
  );
};
