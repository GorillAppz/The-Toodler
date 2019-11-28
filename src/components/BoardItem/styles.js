import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row'
	},
	nameWrapper: {
		justifyContent: 'center',
		marginLeft: 10
	},
	name: {
		fontSize: 20
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