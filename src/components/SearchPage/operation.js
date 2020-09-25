import { push } from 'connected-react-router';

import * as Action from './action';

export const pushSearchPage = (input) => {
  return (dispatch, getState) => {
    const searchParams = new URLSearchParams();
    searchParams.append('q', input);

    dispatch(push('/search?' + searchParams.toString()));
  }
}
