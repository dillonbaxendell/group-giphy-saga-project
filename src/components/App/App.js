//CSS
import "./App.css";
import React from "react";
import "@fontsource/roboto";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route, HashRouter as Router } from "react-router-dom";
//import components
import FavoritesList from "../FavoritesList/FavoritesList";
import Header from "../Header/Header";

import Search from '../Search/Search';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#263238'
      },
      secondary : {
          main: '#ffc107'
      }
  }
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
