import { takeLatest, call, put, all } from 'redux-saga/effects';

import { AUTH_RESULT, CALL_LOGIN, CALL_SIGNUP, LOG_OUT, LOG_OUT_USER } from './actionTypes';
import { Api } from '../../utils/api';

function* callLoginSaga({ formData, history, alreadyLoggedIn }) {
  const { from } = history?.location?.state || { from: { pathname: '/' } };
  try {
    if (!!alreadyLoggedIn) {
      yield put({ type: AUTH_RESULT, payload: JSON.parse(formData) });
      history.push('/');
    } else {
      const options = {
        method: 'post',
        payload: formData,
      };
      const { data } = yield call(Api, '/auth/signin', options);
      // localStorage.setItem('profile', JSON.stringify(data));
      localStorage.setItem('storenumber', 333);
      sessionStorage.setItem('profile', JSON.stringify(data));
      yield put({ type: AUTH_RESULT, payload: data });
      history.push('/');
      // history.push(from?.pathname, { from: history?.location });
      // window.location.href= from;  //to redirect to different previous domain
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* callSignUpSaga({ formData, history, alreadyLoggedIn }) {
  // const { from } = history?.location?.state || { from: { pathname: "/" } };
  try {
    if (!!alreadyLoggedIn) {
      yield put({ type: 'AUTH', payload: formData });
    } else {
      const options = {
        method: 'post',
        payload: formData,
      };
      const { data } = yield call(Api, '/auth/signup', options);
      localStorage.setItem('profile', JSON.stringify(data));
      sessionStorage.setItem('profile', JSON.stringify(data));
      yield put({ type: AUTH_RESULT, payload: data });
      // history.push(from?.pathname, { from: history?.location });
    }
  } catch (error) {
    console.log('error', error);
  }
}

function* logOut() {
  yield put({ type: LOG_OUT_USER });
}

export default function* loginSaga() {
  yield all([
    takeLatest(CALL_LOGIN, callLoginSaga),
    takeLatest(LOG_OUT, logOut),
    takeLatest(CALL_SIGNUP, callSignUpSaga),
  ]);
}
