import { StyleSheet } from 'react-native';
import { LIGHT, GRAY } from '../../styles/colors';
import { INPUT_MODAL_TITLE } from '../../styles/fonts';

export default StyleSheet.create({
	modalContainer: {
		backgroundColor: LIGHT,
		borderRadius: 10,
		padding: 10,
		display: 'flex',
		flexDirection: 'column'
	},
	modalHeader: {
		...INPUT_MODAL_TITLE,
	}
});