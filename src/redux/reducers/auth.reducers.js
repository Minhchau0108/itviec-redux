import * as types from '../constants/auth.constant'
const initialState = {
	user: null,
	isAuthenticated: false,
	loading: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case types.LOADING_REQUEST:
			return { ...state, loading: true };
		case types.LOGIN_SUCCESS:
            return { ...state, user: payload, isAuthenticated: true, loading: false, error: null};
		case types.LOGIN_FAIL:
			return { ...state, user: null, isAuthenticated: false, error: payload, loading: false };
		default:
			return state; 
	}
};

export default authReducer;