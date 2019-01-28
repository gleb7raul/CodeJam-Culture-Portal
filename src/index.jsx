import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './i18n';

import App from './containers/App';
import HomePage from './containers/HomePage';
import PoetsList from './containers/PoetsList';
import Poet from './containers/Poet';

render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/poets" component={PoetsList} />
        <Route exact path="/poets/:id" component={Poet} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('app'),
);
