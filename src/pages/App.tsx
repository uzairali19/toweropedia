import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import getDesignTokens from '../theme/theme';
import { getClients } from '../redux/actions/clients';
import Body from './Body';

const MyApp = ({ modeHandler }: { modeHandler: any }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <Paper
      sx={{
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Header mode={modeHandler} />
      <Body />
    </Paper>
  );
};

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
