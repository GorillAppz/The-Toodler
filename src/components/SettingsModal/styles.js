import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	darkThemeText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold'
	},
	darkThemeContainer: {
		flex: 1,
		alignItems: 'flex-end',
		justifyContent: 'flex-start',
		marginVertical: 100
	},
	switch: {
		transform: [{ scaleX: 1.5 }, { scaleY: 1 }],
		marginEnd: 10
	}
});