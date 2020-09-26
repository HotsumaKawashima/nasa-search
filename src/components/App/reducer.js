import * as FETCH_PHOTO_ACTION_TYPE from '../../sagas/fetchPhoto/action';

const initialState = {
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case FETCH_PHOTO_ACTION_TYPE.FETCH_PHOTO : {
      return {
        ...state,
        loading: true
      }
    }

    case FETCH_PHOTO_ACTION_TYPE.FETCH_PHOTO_SUCCESS : {
      return {
        ...state,
        loading: false
      }
    }

    case FETCH_PHOTO_ACTION_TYPE.FETCH_PHOTO_FAILURE : {
      return {
        ...state,
        loading: false
      }
    }

    default: {
      return state
    }

  }
}
