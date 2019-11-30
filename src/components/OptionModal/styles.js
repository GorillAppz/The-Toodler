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
		height: 500
	},
	button: {
		padding: 25
	},
	buttonText: {
		fontWeight: 'bold',
		marginLeft: 10
	},
	delete: {
		backgroundColor: 'red'
	},
	edit: {
		backgroundColor: 'green'
	},
	move: {
		backgroundColor: '#ffb347'
	}
});