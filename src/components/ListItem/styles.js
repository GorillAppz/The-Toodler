import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		display: 'flex',
		borderBottomWidth: 1,
		borderBottomColor: 'lightgray'
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