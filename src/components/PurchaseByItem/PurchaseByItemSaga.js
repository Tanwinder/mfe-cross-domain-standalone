import { takeLatest, call, put, all } from 'redux-saga/effects'
// import {Api} from '../utils/api';
import {CALLLIST, GETLIST} from '../../actions/actionTypes';
// const {LOG_OUT_USER, LOG_OUT, CALL_AUTH} = obj;

function* callLoginSaga({val}) {
    const items1 = [
        {
            id: 11,
            value:" pipes"
        },
        {
            id: 22,
            value:" toolbar"
        },
        {
            id: 33,
            value:" shower"
        },
        {
            id: 44,
            value:" hammer"
        },
        {
            id:55,
            value:" pipes22"
        },
        {
            id: 66,
            value:" toolbar22"
        },
        {
            id:77,
            value:" shower22"
        },
        {
            id:88,
            value:" hammer22"
        }
    ]
    try {
        let payload;
        if(val === 'even') {
            payload = items1.filter(ac => ac.id % 2 === 0)
        } else {
            payload = items1.filter(ac => ac.id % 2 !== 0)
        }
        yield put({type: GETLIST, payload})
    } catch (error) {
        console.log('error', error)
    }
}

export default function* loginSaga() {
    yield all([
        takeLatest(CALLLIST, callLoginSaga)
        // takeLatest(LOG_OUT, logOut),
        // takeLatest(CALL_SIGNUP, callSignUpSaga)
    ])
}
