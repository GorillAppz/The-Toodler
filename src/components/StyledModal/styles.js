import { StyleSheet } from 'react-native';
import { LIGHT } from '../../styles/colors';
import { INPUT_MODAL_TITLE } from '../../styles/fonts';

export default StyleSheet.create({
	modalContainer: {
		backgroundColor: LIGHT,
		borderRadius: 10,
		padding: 10,
		display: 'flex',
		flexDirection: 'column',
		maxHeight: '95%'
	},
	modalHeader: {
		...INPUT_MODAL_TITLE
	}
});