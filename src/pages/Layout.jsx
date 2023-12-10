import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';

const Layout = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'purple' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            >
              Mentis Arena
            </Typography>

            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/manageusers">
              Users
            </Button>
            <Button color="inherit" component={Link} to="/realgame">
              Game
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Layout;
