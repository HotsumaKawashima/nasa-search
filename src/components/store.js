import { applyMiddleware, createStore, compose } from 'redux';
import thunk                    from 'redux-thunk';
import createSagaMiddleware     from 'redux-saga';
import { composeWithDevTools }  from 'redux-devtools-extension';
import { createLogger }         from 'redux-logger';
import { routerMiddleware }     from 'connected-react-router'

import history       from './history';
import createReducer from './reducer';

const logger = createLogger({
  collapsed: true,
})

export default initialState => {
  const sagaMiddleware = createSagaMiddleware()

  return {
    ...createStore(
      createReducer(history),
      initialState,
      compose(applyMiddleware(
        routerMiddleware(history),
        thunk,
        sagaMiddleware,
      ))
    ),
    runSaga: sagaMiddleware.run
  }
}

export const configureStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()

  return {
    ...createStore(
      createReducer(history),
      initialState,
      composeWithDevTools(applyMiddleware(
        routerMiddleware(history),
        thunk,
        sagaMiddleware,
        logger,
      ))
    ),
    runSaga: sagaMiddleware.run
  }
}
