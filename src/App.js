import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LamiaChanDark } from './Themes';
import { observer } from "mobx-react-lite";
import { useStore } from './store/hooks';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { RequireAuth, RequireAuthOrGuest } from './components/RRDAuth';
import AppBar from './components/Appbar';
import { GuestPage } from "./view/GuestPage/GuestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuthOrGuest><div>Home Page</div></RequireAuthOrGuest>,
  },
  {
    path: "auth",
    element: <div>auth Page</div>,
  },
  {
    path: "guest",
    element: <GuestPage />,
  },
]);

export const App = observer(() => {
  const userStore = useStore('userStore')
  return (
    <ThemeProvider theme={LamiaChanDark}>
      <CssBaseline />
      {/* {!userStore.data.user.bAuth && !userStore.data.user.bContinueAsGuest
        ? <GuestPage />
        : <div></div>
      } */}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
});