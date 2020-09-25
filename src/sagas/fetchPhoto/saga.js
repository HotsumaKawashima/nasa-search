import { take, put, call, fork, select, all } from 'redux-saga/effects'

import * as Action from './action';

function timer() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ payload: [] });
    }, 3000);
  });
}

const fetchPhoto = payload => {
  const searchParams = new URLSearchParams();
  searchParams.append('q', payload.query);
  searchParams.append('media_type', 'image');

  return fetch('https://images-api.nasa.gov/search?' + searchParams.toString())
    .then(response => response.json())
    .then(json => ({ json }));
}

function* watch(api) {
  while (true) {
    const { payload } = yield take(Action.FETCH_PHOTO);

    const { error, json } = yield call(api, payload);

    if(error) {
      yield put(Action.fetchPhotoFailure());
      continue;
    }

    const items = json.collection.items.slice(0, 10);

    yield put(Action.fetchPhotoSuccess(items));
  }
}

export default function* () {
  yield watch(fetchPhoto);
}

export function* watchFetchPhoto() {
  yield watch(timer);
}
