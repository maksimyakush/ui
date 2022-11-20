import {
  Button,
  Tabs,
  Tab,
  Container,
  Typography,
  Grid,
} from "@maksimyakush/ui";
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
      <Grid>
        <Grid.Column md={6}><p style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>Col1</p>   </Grid.Column>
        <Grid.Column md={6}>Col2</Grid.Column>
        <Grid.Column md={6}>Col3</Grid.Column>
        <Grid.Column md={6}>Col4</Grid.Column>
        <Grid.Column md={6}>Col5</Grid.Column>
        <Grid.Column md={6}>Col6</Grid.Column>
      </Grid>
    </div>
  );
};
