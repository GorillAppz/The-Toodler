import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AppContainer from './src/routes';
import dataReducer from './src/reducers/dataReducer';
import themeReducer from './src/reducers/themeReducer';

const store = createStore(combineReducers({
	data: dataReducer,
	theme: themeReducer
}));

export default function App() {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}