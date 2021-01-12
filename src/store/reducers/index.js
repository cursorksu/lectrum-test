import { combineReducers } from 'redux';
import userReducer from './userReducer';

// our store
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
