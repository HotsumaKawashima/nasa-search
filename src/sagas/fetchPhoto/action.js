export const FETCH_PHOTO = 'FetchPhotoAction.FETCH_PHOTO';

export const fetchPhoto = (query) => {
  return {
    type: FETCH_PHOTO,
    payload: {
      query
    }
  }
}

export const FETCH_PHOTO_SUCCESS = 'FetchPhotoAction.FETCH_PHOTO_SUCCESS';

export const fetchPhotoSuccess = (items) => {
  return {
    type: FETCH_PHOTO_SUCCESS,
    payload: {
      items
    }
  }
}

export const FETCH_PHOTO_FAILURE = 'FetchPhotoAction.FETCH_PHOTO_FAILURE';

export const fetchPhotoFailure = () => {
  return {
    type: FETCH_PHOTO_FAILURE,
    payload: {
    }
  }
}
