import * as Action from './action';

import { pushSearchPage } from './operation';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    const { q } = getState().router.location.query;

    if(q) {
      dispatch(Action.changeInput(q));
    }
  }
}

export const onInputKeyDown = (e) => {
  return (dispatch, getState) => {
    if (e.key === 'Enter') {
      dispatch(pushSearchPage(getState().searchPage.input));
    }
  }
}

export const onInputChange = (e) => {
  return (dispatch, getState) => {
    dispatch(Action.changeInput(e.target.value));
  }
}
