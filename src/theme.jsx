// theme.jsx
import { createTheme } from '@mui/material/styles';

// Define your theme design tokens
const getDesignTokens = (mode) => ({
  // Theme configuration based on mode (light/dark)
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // primary: {
          //   main: '#1976d2',
          // },
          // background: {
          //   default: '#ffffff',
          //   paper: '#ffffff',
          // },
        }
      : {
          // primary: {
          //   main: '#90caf9',
          // },
          // background: {
          //   default: '#121212',
          //   paper: '#424242',
          // },
        }),
  },
});

export default getDesignTokens;
