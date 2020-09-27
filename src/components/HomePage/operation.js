import { push } from 'connected-react-router';

import * as Action from './action';

export const pushHomePage = (input, page) => {
  return (dispatch, getState) => {
    dispatch(Action.changeInput(''));
    dispatch(push('/'));
  }
}
