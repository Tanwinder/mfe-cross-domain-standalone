import { combineReducers } from 'redux';
// import events from './eventsReducer'
import SearchByItem from '../components/SearchByItem/SearchByItemReducer'
import user from '../components/Auth/LoginReducers'

export default combineReducers({
    SearchByItem,
    user
})