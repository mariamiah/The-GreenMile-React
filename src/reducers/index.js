import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import FetchPackagesReducer from './FetchPackagesReducer';
import RegisterUserReducer from './RegisterUserReducer';

export default combineReducers({
  LoginReducer,
  FetchPackagesReducer,
  RegisterUserReducer,
});
