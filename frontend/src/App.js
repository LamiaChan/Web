
import React from "react";
import Main from './components/MainPage/Main'
import Catalog from './components/Catalog/Catalog'
import Rate from './components/Rate/Rate'
import LamiaNavbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/catalog">About</Link>
            </li>
            <li>
              <Link to="/rate">Users</Link>
            </li>
          </ul>
        </nav>
        <LamiaNavbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact strict path="/">
            <Main />
          </Route>
          <Route exact strict path="/catalog">
            <Catalog />
          </Route>
          <Route exact strict path="/rate">
            <Rate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}