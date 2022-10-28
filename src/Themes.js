import { createTheme } from '@mui/material/styles';

export const LamiaChanDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#B52959',
      contrastText: 'rgba(255,255,255,0.87)',
    },
    secondary: {
      main: '#60B429',
    },
    background: {
      default: '#1D1C1C',
      paper: '#313131',
    },
    text: {
      secondary: '#b3b3b3',
    },
  },
});