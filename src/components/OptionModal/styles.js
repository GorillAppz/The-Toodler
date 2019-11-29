import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	title: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold'
	},
	modal: {
		display: 'flex',
		justifyContent: 'space-around',
		height: 400
	},
	button: {
		padding: 25
	},
	delete: {
		backgroundColor: 'red'
	},
	edit: {
		backgroundColor: 'green'
	}
});