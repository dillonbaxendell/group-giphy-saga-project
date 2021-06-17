import React from 'react';
import '@fontsource/roboto';
import {Route, HashRouter as Router} from 'react-router-dom';

import Search from '../Search/Search';

function App(props) {
  return (
    <Router>
    <div>
      <h1>Giphy Search!</h1>
      <Route path='/' exact>
          <Search />
      </Route>
    </div>
    </Router>
  );
}

export default App;
