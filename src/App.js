import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LamiaChanDark } from './Themes';
import { observer } from "mobx-react-lite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RequireAuth, RequireAuthOrGuest, RequireNotAuthOrGuest } from './components/RRDAuth';
import AppBar from './components/Appbar';

import HomePage from './view/HomePage/HomePage';
import CatalogPage from './view/CatalogPage/CatalogPage';
import { GuestPage } from "./view/GuestPage/GuestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <RequireAuthOrGuest>
        <AppBar />
        <HomePage />
      </RequireAuthOrGuest>,
  },
  {
    path: "auth",
    element: 
      <RequireNotAuthOrGuest>
        <AppBar />
        <div>auth Page</div>
      </RequireNotAuthOrGuest>,
  },
  {
    path: "guest",
    element: 
      <RequireNotAuthOrGuest>
        <GuestPage />
      </RequireNotAuthOrGuest>,
  },
  {
    path: "catalog",
    element: 
      <RequireAuthOrGuest>
        <AppBar />
        <CatalogPage />
      </RequireAuthOrGuest>,
  },
]);

export const App = observer(() => {
  return (
    <ThemeProvider theme={LamiaChanDark}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
});