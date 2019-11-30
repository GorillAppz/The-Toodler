import * as constants from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const toggleDarkTheme = (isDarkTheme) => ({
	type: constants.TOGGLE_DARK_THEME,
	payload: {
		isDarkTheme
	}
});