import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
// import Card from './Card'

const MainContainer = () => {
  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center" spacing={5}>
        <Button variant="contained">Hello World</Button>
      </Grid>
    </Container>
  );
};
export default MainContainer;
