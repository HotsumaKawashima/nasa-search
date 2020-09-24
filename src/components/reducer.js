import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router'

import homePage from './HomePage/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  homePage,
});
