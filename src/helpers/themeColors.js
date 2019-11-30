/* Used to get colors depending on theme */
import { DARK, LIGHT, GREEN, DARK_THEME_GREEN, SALMON, DARK_SALMON } from '../styles/colors';

export const getBackgroundColor = (isDarkTheme) => (isDarkTheme ? DARK : LIGHT);
export const getTextColor = (isDarkTheme) => (isDarkTheme ? LIGHT : DARK);
export const getLargeAddButtonColor = (isDarkTheme) => (isDarkTheme ? DARK_SALMON : SALMON);