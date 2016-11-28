import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  // auth piece of state is produced by AuthReducer
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});

