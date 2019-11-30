import { StyleSheet } from 'react-native';
import { basicShadowDrop } from '../../styles';

export default StyleSheet.create({
	addButton: {
		...basicShadowDrop,
		height: 35,
		width: '100%',
		marginBottom: 5
	},
	addButtonTitle: {
		fontSize: 12,
		fontWeight: 'bold'
	},
	emptyTaskText: {
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 5
	}
});