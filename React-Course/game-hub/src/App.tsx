import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componets/NavBar";
import GameGrid from "./componets/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerBlue">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
