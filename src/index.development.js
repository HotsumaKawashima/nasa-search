import React               from 'react';
import ReactDOM            from 'react-dom';
import { Provider }        from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { fork, all }       from 'redux-saga/effects'

import { configureStore } from './components/store';
import history            from './components/history';
import App                from './components/App';

import watchFetchPhoto from './sagas/fetchPhoto/saga';

function* sagas() {
  yield all([
    fork(watchFetchPhoto),
  ])
}

const store = configureStore();
store.runSaga(sagas);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);
