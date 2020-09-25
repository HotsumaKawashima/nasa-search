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
  return new Promise(resolve => {
    google.script.run
      .withFailureHandler(error => resolve({ error: true, payload: error }))
      .withSuccessHandler(() => resolve({}))
      .generateSpreadsheet(payload);
  });
}

function* watch(api) {
  while (true) {
    const { payload } = yield take(Action.FETCH_PHOTO);

    const { error } = yield call(api, payload);

    if (!error) {
      yield put(Action.fetchPhotoSuccess());
    } else {
      yield put(Action.fetchPhotoFailure());
    }
  }
}

export default function* () {
  yield watch(fetchPhoto);
}

export function* watchFetchPhoto() {
  yield watch(timer);
}
