import { combineReducers } from 'redux';
import { connectRouter }   from 'connected-react-router'

import homePage   from './HomePage/reducer';
import searchPage from './SearchPage/reducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  homePage,
  searchPage,
});
