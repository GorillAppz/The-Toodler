import * as constants from '../constants';

const initState = { isDarkTheme: false };

export default (state = initState, action) => {
	const newState = { ...state };
	const { type } = action;

	switch (type) {
		case constants.TOGGLE_DARK_THEME: {
			newState.isDarkTheme = !newState.isDarkTheme;
			return newState;
		}
		default:
			return state;
	}
};