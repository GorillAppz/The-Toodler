import { StyleSheet } from 'react-native';
import { DARK } from '../../styles/colors';

export default StyleSheet.create({
	darkThemeText: {
		color: DARK,
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 20
	},
	darkThemeContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		padding: 30
	},
	switch: {
		transform: [{ scale: 1.5 }],
		marginEnd: 10
	}
});