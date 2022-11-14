import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LamiaChanDark } from './Themes';
import { observer } from "mobx-react-lite";

import { GuestPage } from "./view/GuestPage/GuestPage";

export const App = observer(() => {
  return (
    <ThemeProvider theme={LamiaChanDark}>
      <CssBaseline />
      <GuestPage />
    </ThemeProvider>
  );
});