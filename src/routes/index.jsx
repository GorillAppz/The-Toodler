import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';
import Lists from '../views/Lists';

const MainNavigator = createStackNavigator(
	{
		Boards: { screen: Boards },
		Lists: { screen: Lists },
	},
	{
		initialRouteName: 'Boards',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default createAppContainer(MainNavigator);