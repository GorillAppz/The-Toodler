import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	logo: {
		flex: 1,
		alignSelf: 'stretch',
		width: undefined,
		height: undefined
	},
	button: {
		height: 75,
		width: 300,
		borderRadius: 30
	},
	buttonTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black'
	},
	icon: {
		backgroundColor: 'transparent'
	},
	settingContainer: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		height: '75%'
	},
	visitButtonContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
});