import {combineReducers} from 'redux';
import {authReducer} from './auth.slice';

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
