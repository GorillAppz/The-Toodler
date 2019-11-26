import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import data from './src/resources/data.json';
import AppContainer from './src/routes'

const Boards: IBoard[] = data.boards;
const Lists: IList[] = data.lists;
const Tasks: ITask[] = data.tasks; // BARA PRUFA!

export default function App() {
	return (
		<AppContainer />
	);
}
