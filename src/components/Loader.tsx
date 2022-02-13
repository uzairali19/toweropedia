import React from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        minHeight: 500,
        flexDirection: 'column',
      }}
    >
      <CircularProgress
        sx={{
          width: '150px !important',
          height: '150px !important',
          animation:
            'animation-61bdi0 1.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite',
        }}
      />
      <Typography
        className="loading-text"
        variant="h5"
        component="h2"
        sx={{
          mt: '1rem',
          color: 'text.primary',
        }}
      >
        Loading ...
      </Typography>
    </Box>
  );
};

export default Loading;
