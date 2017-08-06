import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

ReactDOM.render(
	<MuiThemeProvider>
			<Provider store={store}>
				<App />
			</Provider>
	</MuiThemeProvider>, 
	document.getElementById('root')
);

registerServiceWorker();
