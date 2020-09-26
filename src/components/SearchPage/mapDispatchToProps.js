import * as Action from './action';
import * as FetchPhotoAction from '../../sagas/fetchPhoto/action';

import { pushSearchPage } from './operation';

export const onLoadPage = () => {
  return (dispatch, getState) => {
    const searchParams = new URLSearchParams(getState().router.location.search)
    let page = 1;

    if(searchParams.has('page')) {
      page = searchParams.get('page');
    }

    if(searchParams.has('q')) {
      dispatch(Action.changeInput(searchParams.get('q')));
      dispatch(FetchPhotoAction.fetchPhoto(searchParams.get('q'), page));
    }
  }
}

export const onInputKeyDown = (e) => {
  return (dispatch, getState) => {
    if (e.key === 'Enter') {
      dispatch(pushSearchPage(getState().searchPage.input, 1));
    }
  }
}

export const onClickSearchButton = () => {
  return (dispatch, getState) => {
    dispatch(pushSearchPage(getState().searchPage.input, 1));
  }
}

export const onInputChange = (e) => {
  return (dispatch, getState) => {
    dispatch(Action.changeInput(e.target.value));
  }
}

export const onClickNext = (e) => {
  return (dispatch, getState) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(getState().router.location.search)

    if(!searchParams.has('q')) {
      return;
    }

    document.documentElement.scrollTop = 0;

    if(!searchParams.has('page')) {
      dispatch(pushSearchPage(searchParams.get('q'), 2));
      return;
    }

    dispatch(pushSearchPage(searchParams.get('q'), Number(searchParams.get('page')) + 1));
  }
}

export const onClickPrev = (e) => {
  return (dispatch, getState) => {
    e.preventDefault();

    const searchParams = new URLSearchParams(getState().router.location.search)

    if(!searchParams.has('q')) {
      return;
    }

    if(!searchParams.has('page')) {
      return;
    }

    document.documentElement.scrollTop = 0;
    dispatch(pushSearchPage(searchParams.get('q'), Number(searchParams.get('page')) - 1));
  }
}
