
import React from "react";
import Main from './components/MainPage/Main'
import Catalog from './components/Catalog/Catalog'
import Rate from './components/Rate/Rate'
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/rate">
            <Rate />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}