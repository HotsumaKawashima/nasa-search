import * as Action from './action';

import { pushSearchPage } from '../SearchPage/operation';

export const onInputKeyDown = (e) => {
  return (dispatch, getState) => {
    if (e.key === 'Enter') {
      dispatch(pushSearchPage(getState().homePage.input));
    }
  }
}

export const onInputChange = (e) => {
  return (dispatch, getState) => {
    dispatch(Action.changeInput(e.target.value));
  }
}
