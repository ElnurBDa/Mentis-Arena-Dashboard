import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';

const MainMenu = () => {
  return (
    <Container maxWidth="md">
      <Box mt={16}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          This is the main menu of the admin dashboard. Here you can navigate to different sections of the website to manage users, monitor game progress, and access other administrative features. Use the navigation links below to explore the site.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" component={Link} to="/manageusers" sx={{ mr: 2 }}>
            Manage Users
          </Button>
          <Button variant="contained" color="secondary" component={Link} to="/realgame">
            Real Game
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MainMenu;
