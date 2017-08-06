import { fromJS } from 'immutable'
import { TOGGLE_ADD_ROW_MODAL, SORT_TABLE, SELECT_ALL_ROWS, SELECT_ROW, FETCH_APPLICATION_DATA_SUCCESS } from './actions';

const initialState = fromJS({
	order: 'asc',
	orderBy: 'appno',
	selected: {},
	applicationData: [],
	allSelected: false,
	toggleAddRowModal: false,
	addRowModal: false
});

export default function dashboardTable(state=initialState, action) {
	switch(action.type) {
		case TOGGLE_ADD_ROW_MODAL:
			return state.set('addRowModal', !state.get('addRowModal'));
		case SORT_TABLE:
			let order = state.get('order')
			if (order === 'asc') {
				order = 'desc';
			}
			else {
				order = 'asc';
			};
			return state.mergeDeep(fromJS({
				order: order,
				orderBy: action.orderBy,
				applicationData: state.get('applicationData').sort((a, b) => (state.get('order') === 'desc' ? b.get(action.orderBy) > a.get(action.orderBy) : a.get(action.orderBy) > b.get(action.orderBy)))
			}));
		case SELECT_ALL_ROWS:
			let toggle;	
			let selected = {};
			state.get('applicationData').forEach((data, index) => {
				if (state.get('allSelected') === false) {
					toggle = true;
				}
				else {
					toggle=false;
				}
				selected[index] = toggle;
			});
			return state.mergeDeep(fromJS({
				selected: selected,
				allSelected: toggle
		}));
		case SELECT_ROW:
			let toggleBool;
			let selectedRow = {};
			let allSelected = state.get('allSelected');
			const rowId = state.getIn(['selected', action.selectedRowId.toString()]);
			if (rowId === false || rowId === undefined) {
				toggleBool=true;
			}
			else {
				toggleBool=false;
			}
			selectedRow[action.selectedRowId] = toggleBool;
			return state.mergeDeep(fromJS({
				selected: selectedRow,
				allSelected: false
			}));
		case FETCH_APPLICATION_DATA_SUCCESS:
			let existingApplicationData = state.get('applicationData').toJS();
			if (!(existingApplicationData.find((application) => {
				return application.appno === action.data.appno;
			}))) {
				return state.set('applicationData', fromJS([...state.getIn(['applicationData']), action.data]));
			}
			else {
				return state;
			}
		default:
			return state;
	}
}