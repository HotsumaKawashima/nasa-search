export const CHANGE_INPUT = 'SearchInput.CHANGE_INPUT';

export const changeInput = value => {
  return {
    type: CHANGE_INPUT,
    payload: { value }
  }
}
