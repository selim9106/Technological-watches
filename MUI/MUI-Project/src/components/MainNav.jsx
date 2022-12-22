
import { IconButton, Typography, AppBar, Toolbar } from '@mui/material';

const MainNav = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}>
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI Project
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default MainNav