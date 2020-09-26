import { push } from 'connected-react-router';

import * as Action from './action';

export const pushSearchPage = (input, page) => {
  return (dispatch, getState) => {
    const searchParams = new URLSearchParams();
    searchParams.append('q', input);

    if(page) {
      searchParams.append('page', page);
    }

    dispatch(push('/search?' + searchParams.toString()));
  }
}
