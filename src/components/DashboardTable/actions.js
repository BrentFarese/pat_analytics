import ApplicationData from '../../api/ApplicationData';
import Applications from '../../api/Applications';

export const TOGGLE_ADD_ROW_MODAL = 'TOGGLE_ADD_ROW_MODAL';
export const toggleAddRowModal = () => ({
	type: TOGGLE_ADD_ROW_MODAL,
});

export const DELETE_ROW = 'DELETE_ROW';
export const deleteApplicationTableRow = index => ({
	type: DELETE_ROW,
	index
});

export const UPDATE_APPLICATION_ROW = 'UPDATE_APPLICATION_ROW';
export const updateApplicationTableRow = index => ({
	type: UPDATE_APPLICATION_ROW,
	index
});

export const SELECT_ROW = 'SELECT_ROW';
export const selectRow = selectedRowId => ({
	type: SELECT_ROW,
	selectedRowId
});

export const SELECT_ALL_ROWS = 'SELECT_ALL_ROWS';
export const selectAllRows = () => ({
	type: SELECT_ALL_ROWS,
});

export const SORT_TABLE = 'SORT_TABLE';
export const sortTable = orderBy => ({
	type: SORT_TABLE,
	orderBy
});

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const fetchDataRequest = bool => ({
	type: FETCH_DATA_REQUEST,
	loading: bool
});

export const fetchApplicationData = (applicationNo) => dispatch => {
	dispatch(fetchDataRequest(true));
	return ApplicationData.get(`${applicationNo}`)
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		else {
			dispatch(fetchDataRequest(false));
			return res.json(res);
		}
	}).then(data => {
		dispatch(fetchApplicationDataSuccess(data));
		return data;
	}).catch(err => {
		dispatch(fetchError(err));
		console.log(err);
	})
};

export const FETCH_APPLICATION_DATA_SUCCESS = 'FETCH_APPLICATION_DATA_SUCCESS';
export const fetchApplicationDataSuccess = data => ({
	type: FETCH_APPLICATION_DATA_SUCCESS,
	data
});

export const FETCH_ERROR = 'FETCH_ERROR';
export const fetchError = err => ({
	type: FETCH_ERROR,
	error: err
});

export const postApplication = (applicationNo, myInit) => dispatch => {
	return Applications.post(`${applicationNo}`, myInit)
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		else {
			return Promise.resolve(res.statusText)
		}
	}).then(successMessage => {
	}).catch(err => {
		dispatch(fetchError(err));
		console.log(err);
	})
};

export const fetchSavedApplications = () => dispatch => {
	dispatch(fetchDataRequest(true));
	return Applications.get()
	.then(res => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		else {
			dispatch(fetchDataRequest(false));
			return res.json(res);
		}
	}).then(data => {
		for (const x in data) {
			for (const y of data[x]) {
				dispatch(fetchApplicationData(y.serialNumber));
			}
		}
	}).catch(err => {
		dispatch(fetchError(err));
		console.log(err);
	})
};


