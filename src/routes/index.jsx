import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Main from '../views/Main';
import { Platform } from 'react-native';

import { LIGHT, PURPLE } from '../styles/colors';

const MainNavigator = createStackNavigator(
	{
		Main: { screen: Main },
		Boards: { screen: Boards },
		Lists: { screen: Lists }
	},
	{
		initialRouteName: 'Main',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: PURPLE
			},
			headerTintColor: LIGHT,
			headerTitleStyle: {
				fontWeight: 'bold',
				alignSelf: 'center',
				fontFamily: 'Roboto',
				...Platform.select({
					ios: { fontFamily: 'Helvetica Neue' },
					android: { fontFamily: 'Roboto' }
				})
			}
		}
	}
);

export default createAppContainer(MainNavigator);