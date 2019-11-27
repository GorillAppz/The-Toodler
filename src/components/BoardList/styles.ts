import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	list: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		borderRadius: 10,
		borderWidth: 3,
		shadowColor: '#000',
		shadowOpacity: 0.6,
		shadowRadius: 3,
		height: 45,
		backgroundColor: '#000',
		borderColor: '#fff',
	},
	card: {
		height: 260,
		width: 160,
		paddingBottom: 10,
		marginBottom: 10
	},
	welcomeMessage: {
		alignSelf: 'center',
		marginTop: 15,
		fontSize: 25,
		fontFamily: 'Palatino',
		fontWeight: 'bold'
	}
});
