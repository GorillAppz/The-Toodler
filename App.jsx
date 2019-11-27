import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppContainer from './src/routes';
import dataReducer from './src/reducers/dataReducer';

const store = createStore(dataReducer);

export default function App() {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}