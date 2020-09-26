import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router'

import app        from './App/reducer';
import homePage   from './HomePage/reducer';
import searchPage from './SearchPage/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  app,
  homePage,
  searchPage,
});
