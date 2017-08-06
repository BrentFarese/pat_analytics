import { OPEN_LEFT_NAV, CLOSE_LEFT_NAV } from './actions';
import { fromJS } from 'immutable';


const initialState = fromJS({
	open: false
});

export default function toggleLeftNav(state = initialState, action) {
	switch(action.type) {
		case OPEN_LEFT_NAV:
		return state.set('open', true)
		case CLOSE_LEFT_NAV:
		return state.set('open', false)
		default:
			return state
	}
}