import { PaletteMode } from '@mui/material';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          secondary: {
            main: '#293845',
          },
          background: {
            button: '#192344',
          },
          text: {
            primary: '#293845',
            secondary: '#eee',
            alternate: '#fff',
          },
        }
      : {
          secondary: {
            main: '#fff',
          },
          background: {
            default: '#293845',
            paper: '#293845',
          },
          text: {
            primary: '#fff',
            secondary: '#293845',
            alternate: '#fff',
          },
        }),
  },
});

export default getDesignTokens;
