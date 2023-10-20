import {combineReducers} from 'redux';
import {authReducer} from './auth.slice';
import {utilsReducer} from './utils.slice';

const rootReducer = combineReducers({
  authReducer,
  utilsReducer,
});

export default rootReducer;
