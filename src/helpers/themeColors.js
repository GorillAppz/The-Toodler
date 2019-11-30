/* Used to get colors depending on theme */
import { DARK, LIGHT, SALMON, DARK_SALMON } from '../styles/colors';

export const getBackgroundColor = (isDarkTheme) => (isDarkTheme ? DARK : LIGHT);
export const getTextColor = (isDarkTheme) => (isDarkTheme ? LIGHT : DARK);
export const getLargeAddButtonColor = (isDarkTheme) => (isDarkTheme ? DARK_SALMON : SALMON);