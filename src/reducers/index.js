import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  // auth piece of state is produced by AuthReducer
  auth: AuthReducer
});

