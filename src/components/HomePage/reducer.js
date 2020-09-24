import * as ACTION_TYPE from './action';

const initialState = {
  input: '',
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPE.CHANGE_INPUT : {
      return {
        ...state,
        input: action.payload.value
      }
    }

    default: {
      return state
    }

  }
}
