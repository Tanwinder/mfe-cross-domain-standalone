import { combineReducers } from 'redux';
import user from '../../components/Login/LoginReducers';
// import leftPanelReducer from '../../components/LeftPanel/Reducers'
// import SearchByItem from '../../components/SearchByItem/SearchByItemReducer'

export default combineReducers({
  user,
  // SearchByItem,
  // cart: leftPanelReducer
});
