import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	modal: {
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 10,
		display: 'flex',
		flexDirection: 'column'
	},
	inputContainer: {
		margin: 5
	},
	buttonsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%'
	},
	submitButton: {
		backgroundColor: 'green'
	},
	title: {
		color: 'grey',
		textAlign: 'center'
	},
	colorPickerTitle: {
		textAlign: 'center',
		color: 'gray',
		fontWeight: 'bold',
		marginTop: 5
	},
	colorPicker: {
		height: 250
	}
});