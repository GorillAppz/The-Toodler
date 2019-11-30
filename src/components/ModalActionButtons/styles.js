import { StyleSheet } from 'react-native';
import { GREEN } from '../../styles/colors';

export default StyleSheet.create({
	buttonsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignContent: 'center',
		marginVertical: 10
	},
	buttonContainer: {
		width: '45%'
	},
	button: {
		width: '100%'
	},
	saveButton: {
		backgroundColor: GREEN
	}
});