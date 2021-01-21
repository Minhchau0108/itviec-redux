import * as types from '../constants/auth.constant'

const login = (user) => async (dispatch) => {
	dispatch({ type: types.LOADING_REQUEST});
	try {
		if (!user || !user.email || !user.password) {
			console.log('error here', user);
			dispatch({ type: types.LOGIN_FAIL, payload: 'give me all info' });
			return;
		}
        dispatch({ type: types.LOGIN_SUCCESS, payload: user }); 
        
	} catch (error) {
		console.log('error', error);
	}
};
export const authAction = {
	login,
};