import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import data from './src/resources/data.json';

const Boards: IBoard[] = data.boards;
const Lists: IList[] = data.lists;
const Tasks: ITask[] = data.tasks; // BARA PRUFA!

export default function App() {
	return (
		<View style={styles.container}>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
