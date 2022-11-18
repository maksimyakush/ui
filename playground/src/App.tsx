import { Button, Tabs, Tab, Container } from "@maksimyakush/ui";
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
      <Tabs value={value} onTabChange={(value) => setValue(value)}>
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
      <Button>Click</Button>
      <Container size='sm'><p style={{backgroundColor: 'yellow'}}>
      Hello there
        </p> </Container>
    </div>
  );
};
