import { Container, Grid, Button } from "@mui/material";
import Card from './Card'

const MainContainer = () => {
  return (
    <Container sx={ { background: "red" } }>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Card />
        </Grid>
        <Grid item xs={2}>
          <Card />
        </Grid>
        <Grid item xs={2}>
          <Card />
        </Grid>
        <Grid item xs={2}>
          <Card />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Card />
        </Grid>
        <Grid item xs={2}>
          <Card />
        </Grid>
        <Grid item xs={2}>
          <Card />
        </Grid>
        <Grid item xs={2}>
          <Card />
        </Grid>
      </Grid>
      <Button variant="contained">Click Here</Button>
    </Container>
  );
};
export default MainContainer;
