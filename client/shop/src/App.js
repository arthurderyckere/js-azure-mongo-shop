import React from 'react';
import './App.css';
import { Nav } from "./components/nav/Nav";
import { Header } from "./components/header/Header";
import {
  Route,
  Switch
} from "react-router-dom";

import { Shop } from "./containers/shop/Shop";
import { Admin } from "./containers/admin/Admin";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Nav />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
