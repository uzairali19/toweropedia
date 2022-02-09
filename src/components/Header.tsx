import * as React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import Switch from './Switch';

const Header = ({ mode }: { mode?: any }) => {
  return (
    <AppBar position="static" sx={{ transition: 'all 0.5s ease-in-out' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            data-testid="title"
          >
            TowerOpedia
          </Typography>
          <Box>
            <Switch mode={mode} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
