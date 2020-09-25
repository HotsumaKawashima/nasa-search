import * as Action from './action';
import * as FetchPhotoAction from '../../sagas/fetchPhoto/action';

import { pushSearchPage } from './operation';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    const searchParams = new URLSearchParams(getState().router.location.search)

    if(searchParams.has('q')) {
      dispatch(Action.changeInput(searchParams.get('q')));
      dispatch(FetchPhotoAction.fetchPhoto(searchParams.get('q')));
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
