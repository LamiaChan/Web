import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LamiaChanDark } from './Themes';

import { GuestPage } from "./view/GuestPage/GuestPage";

export default function App() {
  return (
    <ThemeProvider theme={LamiaChanDark}>
      <CssBaseline />
      <GuestPage />
    </ThemeProvider>
  )
}