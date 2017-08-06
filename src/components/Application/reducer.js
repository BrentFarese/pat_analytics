import { fromJS } from 'immutable'

const initialState = fromJS({
	currentApplication: ''
});

export default function currentApplication(state=initialState, action) {
	switch(action.type) {
		case '@@router/LOCATION_CHANGE':
			const match = action.payload.pathname.match(/\/application\/([0-9]+)/)
			if(match) {
				return state.mergeDeep({
					currentApplication: match[1]
				})
			}
		default:
		return state;
	}
}