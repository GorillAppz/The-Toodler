import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row',
		borderBottomColor: 'grey',
		borderBottomWidth: 1
	},
	nameWrapper: {
		justifyContent: 'center',
		marginLeft: 10
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});