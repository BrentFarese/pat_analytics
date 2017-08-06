import AllowanceRates from '../../../api/AllowanceRates';
import AvgOfficeActions from '../../../api/AvgOfficeActions';
import ExaminerData from '../../../api/ExaminerData';


export const OA_AVERAGE = 'OA_AVERAGE';
export const oaAverage = () => ({
	type: OA_AVERAGE
});

export const OA_BY_YEAR = 'OA_BY_YEAR';
export const oaByYear = () => ({
	type: OA_BY_YEAR
});

export const ALLOWANCE_AVERAGE = 'ALLOWANCE_AVERAGE';
export const allowanceAverage = () => ({
	type: ALLOWANCE_AVERAGE
});

export const ALLOWANCE_BY_YEAR = 'ALLOWANCE_BY_YEAR';
export const allowanceByYear = () => ({
	type: ALLOWANCE_BY_YEAR
});

export const fetchAllowanceRatesData = (examinerId, artUnitId) => dispatch => {
	dispatch(fetchDataRequest(true));
	return AllowanceRates.get(`${examinerId}/${artUnitId}`)
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		else {
			dispatch(fetchDataRequest(false));
			return res.json(res);
		}
	}).then(data => {
		dispatch(fetchAllowanceRatesDataSuccess(data));
	}).catch(err => {
		dispatch(fetchError(err));
		console.log(err);
	})
};

export const FETCH_ALLOWANCE_RATES_DATA_SUCCESS = 'FETCH_ALLOWANCE_RATES_DATA_SUCCESS';
export const fetchAllowanceRatesDataSuccess = data => ({
	type: FETCH_ALLOWANCE_RATES_DATA_SUCCESS,
	data
});

export const fetchAvgOfficeActionsData = (examinerId, artUnitId) => dispatch => {
	dispatch(fetchDataRequest(true));
	return AvgOfficeActions.get(`${examinerId}/${artUnitId}`)
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		else {
			dispatch(fetchDataRequest(false));
			return res.json(res);
		}
	}).then(data => {
		dispatch(fetchAvgOfficeActionsDataSuccess(data));
	}).catch(err => {
		dispatch(fetchError(err));
		console.log(err);
	})
};

export const FETCH_AVG_OFFICE_ACTIONS_DATA_SUCCESS = 'FETCH_AVG_OFFICE_ACTIONS_DATA_SUCCESS';
export const fetchAvgOfficeActionsDataSuccess = data => ({
	type: FETCH_AVG_OFFICE_ACTIONS_DATA_SUCCESS,
	data
});

export const fetchExaminerData = examinerInfo => dispatch => {
	dispatch(fetchDataRequest(true));
	return ExaminerData.get(examinerInfo.examiners.main.id)
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		else {
			dispatch(fetchDataRequest(false));
			return res.json(res);
		}
	}).then(data => {
		dispatch(fetchExaminerDataSuccess(data, examinerInfo));
	}).catch(err => {
		dispatch(fetchError(err));
		console.log(err);
	})
};

export const FETCH_EXAMINER_DATA_SUCCESS = 'FETCH_EXAMINER_DATA_SUCCESS';
export const fetchExaminerDataSuccess = (data, examinerInfo) => ({
	type: FETCH_EXAMINER_DATA_SUCCESS,
	data,
	examinerInfo
});

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const fetchDataRequest = bool => ({
	type: FETCH_DATA_REQUEST,
	loading: bool
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = err => ({
	type: FETCH_ERROR,
	error: err
});
