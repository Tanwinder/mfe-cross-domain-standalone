
import {AUTH_RESULT, LOG_OUT_USER} from './actionTypes';
// const initialState = {
//     userInfo: JSON.parse(localStorage.getItem('profile')) || null
// }
export default (state= {userInfo: null}, action) => {
    switch(action.type) {
        case AUTH_RESULT:
            return {
                ...state,
                userInfo: action.payload
            };
        case LOG_OUT_USER:
            localStorage.removeItem('profile');
            return {
                userInfo: null
            };        
        default:
            return state;
    }
}