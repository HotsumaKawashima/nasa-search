export const CHANGE_INPUT = 'SearchPage.CHANGE_INPUT';

export const changeInput = value => {
  return {
    type: CHANGE_INPUT,
    payload: { value }
  }
}
