import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	item: {
		display: 'flex',
		flexDirection: 'row',
		borderBottomColor: 'lightgray',
		borderBottomWidth: 1
	},
	infoWrapper: {
		justifyContent: 'center',
		marginLeft: 10,
		width: '70%'
	},
	name: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	description: {
		width: '100%',
		marginTop: 5
	},
	thumbnail: {
		height: 100,
		width: 100,
		borderRadius: 15,
		margin: 5
	}
});