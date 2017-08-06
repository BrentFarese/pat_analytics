import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducer';
import Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const middleware = [
	thunk,
	routerMiddleware(history)
]

export default createStore(
	rootReducer,
	Immutable.Map({}), 
	composeWithDevTools(applyMiddleware(...middleware))
);

