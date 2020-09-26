import * as ACTION_TYPE from './action';
import * as FETCH_PHOTO_ACTION_TYPE from '../../sagas/fetchPhoto/action';

const initialState = {
  input: '',
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPE.CHANGE_INPUT : {
      return {
        ...state,
        input: action.payload.value
      }
    }

    case FETCH_PHOTO_ACTION_TYPE.FETCH_PHOTO_SUCCESS : {
      return {
        ...state,
        items: action.payload.items,
      }
    }

    default: {
      return state
    }

  }
}
