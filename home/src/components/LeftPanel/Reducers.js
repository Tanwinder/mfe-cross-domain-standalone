
import {ADD_TO_CART} from './Actions';

export default (state= {items : []}, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...items, action.payload]
            };        
        default:
            return state;
    }
}