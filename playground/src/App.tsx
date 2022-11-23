import {
  Button,
  Tabs,
  Tab,
  Container,
  Typography,
  Grid,
  Group,
  Absolute,
} from "@maksimyakush/ui";

export const App = () => {
  return (
    <div style={{ height: "30vh" }}>
      <Absolute content={<h1>Absolute</h1>}>
        <Grid>
          <Button>Click</Button>
          <Button>Click</Button>
        </Grid>
      </Absolute>
    </div>
  );
};
