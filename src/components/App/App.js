import React from "react";
import "@fontsource/roboto";
import { Route, HashRouter as Router } from "react-router-dom";
//import components
import FavoritesList from "../FavoritesList/FavoritesList";
import Header from "../Header/Header";

import Search from '../Search/Search';

function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact>
          <Search />
      </Route>
        <Route path="/favorites">
          <FavoritesList />
        </Route>
      </div>
    </Router>
  );
}

export default App;
