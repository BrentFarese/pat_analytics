import { fromJS } from 'immutable'
import { 
	OA_BY_YEAR, 
	ALLOWANCE_BY_YEAR, 
	OA_AVERAGE,
	ALLOWANCE_AVERAGE,
	FETCH_ALLOWANCE_RATES_DATA_SUCCESS,
	FETCH_AVG_OFFICE_ACTIONS_DATA_SUCCESS,
	FETCH_EXAMINER_DATA_SUCCESS,
	FETCH_DATA_REQUEST
} from './actions';

const initialState = fromJS({
	allowanceRateData: {
		average: false,
		byYear: true,
		data: []
	},
	officeActionData: {
		average: false,
		byYear: true, 
		data: []
	},
	currentExaminerData: {}
});

export default function examinerAnalyticsReducer(state=initialState, action) {
	switch(action.type) {
		case OA_BY_YEAR:
		return state.mergeDeep(fromJS({
			officeActionData: {
				average: false,
				byYear: true
			}
		}));
		case ALLOWANCE_BY_YEAR:
		return state.mergeDeep(fromJS({
			allowanceRateData: {
				average: false,
				byYear: true
			}
		}));
		case OA_AVERAGE:
		return state.mergeDeep(fromJS({
			officeActionData: {
				average: true,
				byYear: false
			}
		}));
		case ALLOWANCE_AVERAGE:
		return state.mergeDeep(fromJS({
			allowanceRateData: {
				average: true,
				byYear: false
			}
		}));
		case FETCH_ALLOWANCE_RATES_DATA_SUCCESS:
		return state.mergeDeep(fromJS({
			allowanceRateData: {
				data: action.data
			}
		}));
		case FETCH_AVG_OFFICE_ACTIONS_DATA_SUCCESS:
		return state.mergeDeep(fromJS({
			officeActionData: {
				data: action.data
			}
		}));
		case FETCH_EXAMINER_DATA_SUCCESS:
		return state.mergeDeep(fromJS({
			currentExaminerData: {
				examinerInfo: action.examinerInfo,
				data: action.data
			}
		}));
		case FETCH_DATA_REQUEST:
		return state.mergeDeep(fromJS({
			loading: action.loading
		}));
		// case FETCH_DATA_SUCCESS:
			//For fetching Examiner allowanceRateData from API, byYear.
			// if (action.selector.includes('examiners') && state.getIn(['allowanceRateData', 'byYear']) === true) {
			// 	const data = action.data.year;
			// 	let examinerData = [];
			// 	const examinerDataArray = () => {
			// 		for (const x in data) {
			// 			examinerData.push({
			// 				year: x,
			// 				examinerAllowanceRate: data[x].allowance_rates.overall
			// 			});
			// 		}
			// 		return examinerData;
			// 	}
			// 	return state.mergeDeep(fromJS({
			// 		allowanceRateData: {
			// 			average: false,
			// 			byYear: true,
			// 			examinerAllowanceData: examinerDataArray()
			// 		}
			// 	}))
			// }
			//For fetching Art Unit allowanceRateData from API, by year.
			// else if (action.selector.includes('art-units') && state.getIn(['allowanceRateData', 'byYear']) === true) {
			// 	const data = action.data.year;
			// 	let artUnitData = [];
			// 	const artUnitDataArray = () => {
			// 		for (const x in data) {
			// 			artUnitData.push({
			// 				year: x,
			// 				artUnitAllowanceRate: data[x].allowance_rates.overall
			// 			});
			// 		}
			// 		return artUnitData;
			// 	}
			// 	return state.mergeDeep(fromJS({
			// 		allowanceRateData: {
			// 			average: false,
			// 			byYear: true,
			// 			artUnitAllowanceData: artUnitDataArray()
			// 		}
			// 	}))
			// }
			default:
			return state;
		}
	}