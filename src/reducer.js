import { combineReducers } from 'redux-immutable';
import toggleLeftNav from './components/Navigation/reducers';
import dashboardTable from './components/DashboardTable/reducer';
import examinerAnalyticsReducer from './components/Application/ExaminerAnalytics/reducer';
import currentApplication from './components/Application/reducer';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
	toggleLeftNav,
	dashboardTable,
	router: routerReducer,
	form: formReducer,
	analytics: examinerAnalyticsReducer,
	currentApplication,
});

export default rootReducer;