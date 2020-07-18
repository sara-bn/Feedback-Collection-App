import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('./api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

//post request to backend
export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data });
};

// post surveys to database
export const submitSurvey = (values, history) => async (dispatch) => {
	const res = await axios.post('/api/surveys', values);
	history.push('/surveys');
	dispatch({ type: FETCH_USER, payload: res.data });
};

//get all surveys
export const fetchSurveys = () => async (dispatch) => {
	const res = await axios.get('./api/surveys');
	dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
