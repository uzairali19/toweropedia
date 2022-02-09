import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#fff',
          },
          // divider: amber[200],
          text: {
            primary: '#293845',
            secondary: '#6c757d',
          },
        }
      : {
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          background: {
            default: '#293845',
            paper: '#293845',
          },
          text: {
            primary: '#fff',
            // secondary: grey[500],
          },
        }),
  },
});

export default getDesignTokens;
