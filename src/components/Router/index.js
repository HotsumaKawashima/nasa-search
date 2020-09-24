import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SearchPage from '../SearchPage';

export default function Router(props) {
  return (
    <Switch>
      <Route exact  path='/' component={SearchPage} />
      <Redirect    to='/' />
    </Switch>
  );
}
