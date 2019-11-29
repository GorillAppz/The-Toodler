import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		display: 'flex'
	},
	boardName: {
		fontWeight: 'bold',
		fontSize: 20,
		alignSelf: 'center',
		margin: 10
	},
	boardDescription: {
		fontSize: 12,
		fontWeight: 'normal',
		alignSelf: 'center',
		paddingHorizontal: 8,
		marginTop: -10,
		textAlign: 'center'
	},
	thumbnail: {
		alignSelf: 'center',
		height: 70,
		width: 70,
		borderRadius: 15
	},
	header: {
		borderBottomWidth: 1,
		borderColor: 'lightgray',
		paddingVertical: 5
	},
	emptyListText: {
		alignSelf: 'center',
		marginVertical: '50%',
		color: 'gray',
		textAlign: 'center'
	}
});