import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		margin: 10
	},
	image: {
		width: 200,
		height: 200,
		margin: 20,
		borderRadius: 10
	},
	label: {
		fontSize: 20,
		color: 'grey',
		fontWeight: 'bold'
	},
	buttonsContainer: {
		display: 'flex',
		width: '50%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button: {
		width: '100%'
	},
	errorMsg: {
		color: 'red'
	}
});