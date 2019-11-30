import { StyleSheet } from 'react-native';
import { GREEN, AMBER, RED, LIGHT, DARK } from '../../styles/colors';

export default StyleSheet.create({
	title: {
		textAlign: 'center',
		color: LIGHT,
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
		backgroundColor: RED
	},
	edit: {
		backgroundColor: GREEN
	},
	move: {
		backgroundColor: AMBER
	}
});