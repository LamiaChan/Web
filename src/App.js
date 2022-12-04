import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LamiaChanDark } from './Themes';
import { observer } from "mobx-react-lite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RequireAuth, RequireAuthOrGuest, RequireNotAuthOrGuest } from './components/RRDAuth';
import AppBar from './components/Appbar';

import HomePage from './view/HomePage/HomePage';
import CatalogPage from './view/CatalogPage/CatalogPage';
import LogoutPage from './view/LogoutPage/LogoutPage';
import SettingsPage from './view/SettingsPage/SettingsPage';
import ProfilePage from './view/ProfilePage/ProfilePage';
import SearchPage from './view/SearchPage/SearchPage';
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
  {
    path: "search",
    element: 
      <RequireAuthOrGuest>
        <AppBar />
        <SearchPage />
      </RequireAuthOrGuest>,
  },
  {
    path: "logout",
    element: 
      <RequireAuth>
        <AppBar />
        <LogoutPage />
      </RequireAuth>,
  },
  {
    path: "settings",
    element: 
      <RequireAuth>
        <AppBar />
        <SettingsPage />
      </RequireAuth>,
  },
  {
    path: "profile",
    element: 
      <RequireAuth>
        <AppBar />
        <ProfilePage />
      </RequireAuth>,
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