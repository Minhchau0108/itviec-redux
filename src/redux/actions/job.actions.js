import * as types from '../constants/job.constant'


const getJobData = () => async (dispatch)=>{
    dispatch({type: types.JOB_REQUEST, payload: null});
    try{
        let url = `http://localhost:3001/jobs`;
		console.log('url', url);
		let response = await fetch(url);
        let data = await response.json();
        console.log('data', data)
        dispatch({type: types.JOB_REQUEST_SUCCESS, payload: data})
    }
    catch(error){
        console.log('error', error)
        dispatch({type: types.JOB_REQUEST_FAIL, payload: error})
    }
}
const getSingleJob = (id) => async(dispatch)=>{
    dispatch({type: types.SINGLE_JOB_REQUEST, payload: null});
    try{
        let url = `http://localhost:3001/jobs/${id}`;
		console.log('url', url);
		let response = await fetch(url);
        let data = await response.json();
        console.log('data', data)
        dispatch({type: types.SINGLE_JOB_REQUEST_SUCCESS, payload: data})
    }
    catch(error){
        console.error();
        dispatch({type: types.SINGLE_JOB_REQUEST_FAIL, payload: error})
    }

}

export const jobAction = {
    getJobData,
    getSingleJob
}
