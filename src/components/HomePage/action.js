export const CHANGE_INPUT = 'HomePage.CHANGE_INPUT';

export const changeInput = value => {
  return {
    type: CHANGE_INPUT,
    payload: { value }
  }
}
