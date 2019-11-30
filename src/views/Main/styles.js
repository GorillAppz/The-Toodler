import { StyleSheet } from 'react-native';
import { LIGHT, PURPLE } from '../../styles/colors';
import { basicShadowDrop } from '../../styles';

export default StyleSheet.create({
	logo: {
		flex: 1,
		alignSelf: 'stretch'
	},
	button: {
		...basicShadowDrop,
		height: 75,
		width: 300,
		borderRadius: 30,
		backgroundColor: PURPLE,
		borderColor: LIGHT,
		borderWidth: 2
	},
	buttonTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		color: LIGHT
	},
	icon: {
		backgroundColor: 'transparent'
	},
	settingContainer: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		paddingTop: '10%',
		height: '81.5%'
	},
	bottomButtonContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	readMeButton: {
		margin: 10,
		borderRadius: 30,
		backgroundColor: '#b5b861',
		borderColor: LIGHT,
		borderWidth: 2
	}
});