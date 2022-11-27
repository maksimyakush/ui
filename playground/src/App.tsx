import {
  Button,
  Tabs,
  Tab,
  Container,
  Text,
  Grid,
  Group,
  Absolute,
} from "@maksimyakush/ui";

export const App = () => {
  return (
    <div style={{ height: "90vh", position: 'relative' }}>
      <Grid
        h="full"
      >
        <Grid.Column>
          <Text lineclamp={6} weight={700} color={"grey.900"} >
            Hi Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Text>
        </Grid.Column>
        <Grid.Column>
          <Text variant='h2'>
            Hi Lorem ipsum dolor, sit amet consectetur adipisicing elit.

            fugit quas ducimus.
          </Text>
        </Grid.Column>
      </Grid>
    </div>
  );
};
