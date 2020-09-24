import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage   from '../HomePage';
import SearchPage from '../SearchPage';

export default function Router(props) {
  return (
    <Switch>
      <Route exact path='/'       component={HomePage} />
      <Route exact path='/search' component={SearchPage} />
      <Redirect    to='/' />
    </Switch>
  );
}
