import * as Action from './action';

export const onInputKeyDown = (e) => {
  return (dispatch, getState) => {
    if (e.key === 'Enter') {
      console.log(getState().searchPage.input);
    }
  }
}

export const onInputChange = (e) => {
  return (dispatch, getState) => {
    dispatch(Action.changeInput(e.target.value));
  }
}
