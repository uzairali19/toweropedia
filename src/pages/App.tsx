import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Header from '../components/Header';
import getDesignTokens from '../theme/theme';

function MyApp({ modeHandler }: { modeHandler: any }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Header mode={modeHandler} />
    </Paper>
  );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));
const lightModeTheme = createTheme(getDesignTokens('light'));

export default function App() {
  const [mode, setMode] = useState(lightModeTheme);

  const modeHandler = () => {
    setMode(mode === lightModeTheme ? darkModeTheme : lightModeTheme);
  };

  return (
    <ThemeProvider theme={mode}>
      <MyApp modeHandler={modeHandler} />
    </ThemeProvider>
  );
}
