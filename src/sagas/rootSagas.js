import { all, fork } from 'redux-saga/effects';
// import eventsSaga from './eventSaga';
import SearchByItem from '../components/SearchByItem/SearchByItemSaga'
import user from '../components/Auth/loginSaga'

export default function* rootSaga() {
    yield all([
        // fork(eventsSaga),
        fork(SearchByItem),
        fork(user)
    ])
}