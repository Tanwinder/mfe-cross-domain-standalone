import { all, fork } from 'redux-saga/effects';
import LoginSaga from '../../components/Login/loginSaga';
// import SearchByItem from '../../components/SearchByItem/SearchByItemSaga'

export default function* rootSaga() {
  yield all([
    // fork(SearchByItem),
    fork(LoginSaga),
  ]);
}
