import { StyleSheet } from 'react-native';
import { GRAY } from '../../styles/colors';

export default StyleSheet.create({
	inputContainer: {
		margin: 5
	},
	colorPickerContainer: {
		marginVertical: 10
	},
	colorPickerTitle: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: GRAY,
		marginTop: 5
	},
	colorPicker: {
		height: 250,
		marginVertical: 10
	}
});