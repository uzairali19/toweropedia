import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Swtich from './Switch';

const Header = ({ mode }: { mode: any }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">TowerOpedia</Typography>
          <Swtich mode={mode} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
