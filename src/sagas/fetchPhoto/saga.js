import { take, put, call, fork, select, all } from 'redux-saga/effects'

import * as Action from './action';

function timer() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ payload: [] });
    }, 3000);
  });
}

const fetchPhoto = request => {
  const searchParams = new URLSearchParams();
  searchParams.append('q', request.query);
  searchParams.append('media_type', 'image');
  searchParams.append('page', request.page);

  return fetch('https://images-api.nasa.gov/search?' + searchParams.toString())
    .then(response => response.json())
    .then(json => ({ json }));
}

function* watch(api) {
  while (true) {
    const { payload } = yield take(Action.FETCH_PHOTO);

    const request = {
      query: payload.query,
      page: Math.floor((payload.page - 1) * 10 / 100) + 1
    }

    const { error, json } = yield call(api, request);

    if(error) {
      yield put(Action.fetchPhotoFailure());
      continue;
    }

    console.log((payload.page - 1) * 10 % 100);
    console.log(payload.page * 10 % 100 ? payload.page * 10 % 100 : 100);
    const items = json.collection.items.slice((payload.page - 1) * 10 % 100, payload.page * 10 % 100 ? payload.page * 10 % 100 : 100);

    yield put(Action.fetchPhotoSuccess(items));
  }
}

export default function* () {
  yield watch(fetchPhoto);
}

export function* watchFetchPhoto() {
  yield watch(timer);
}
