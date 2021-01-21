import * as types from '../constants/job.constant'

const initialState = {
	jobs: [],
	loading: false,
	selectedJob: null,
};

const jobReducer = (state = initialState, action) => {
 
    const { type, payload } = action;
    
	switch (type) {
		case types.JOB_REQUEST:
		case types.SINGLE_JOB_REQUEST:
            return { ...state, loading: true };
            
		case types.JOB_REQUEST_SUCCESS:
			console.log('payload', payload);
            return { ...state, jobs: payload, loading: false};
            
		case types.SINGLE_JOB_REQUEST_SUCCESS:
			console.log('payload', payload);
            return { ...state, selectedJob: payload};
            
		case types.JOB_REQUEST_FAIL:
		case types.SINGLE_JOB_REQUEST_FAIL:
			return { ...state, loading: false };

		default:
			return state;
	}
};

export default jobReducer;