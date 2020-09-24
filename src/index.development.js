import React               from 'react';
import ReactDOM            from 'react-dom';
import { Provider }        from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'

import { configureStore } from './components/store';
import history            from './components/history';
import App                from './components/App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);
