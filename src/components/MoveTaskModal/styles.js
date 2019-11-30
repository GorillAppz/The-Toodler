import { StyleSheet } from 'react-native';
import { INPUT_MODAL_TITLE } from '../../styles/fonts';
export default StyleSheet.create({
	infoContainer: {
		marginVertical: 10
	},
	oldListName: {
		...INPUT_MODAL_TITLE,
		marginTop: 5
	}
});