import { combineReducers } from 'redux';
import jobReducer from './job.reducers';
import authReducer from './auth.reducers';

export default combineReducers({
	job: jobReducer,
	auth: authReducer,
});