import { DARK } from './colors';

export const viewStyle = {
	container: {
		flex: 1,
		backgroundColor: 'green',
		height: '100%'
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 10
	},
	bottom: {
		justifyContent: 'flex-end'
	},
	addButton: {
		height: 85,
		width: '100%'
	},
	buttonTitleStyle: {
		fontWeight: 'bold'
	}
};

export const basicShadowDrop = {
	shadowColor: DARK,
	shadowOpacity: 0.5,
	shadowOffset: {
		height: 5,
		width: 0
	},
	elevation: 5
};