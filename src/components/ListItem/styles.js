import { StyleSheet } from 'react-native';
import { basicShadowDrop } from '../../styles';

export default StyleSheet.create({
	container: {
		...basicShadowDrop,
		display: 'flex',
		marginBottom: 7.5
	},
	nameWrapper: {
		alignItems: 'center',
		paddingTop: 5
	},
	name: {
		fontWeight: 'bold',
		fontSize: 16
	}
});