import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Main from '../views/Main';

const MainNavigator = createStackNavigator(
	{
		Main: { screen: Main },
		Boards: { screen: Boards },
		Lists: { screen: Lists }
	},
	{
		initialRouteName: 'Boards',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#9CC69B'
			},
			headerTintColor: '#1f2d3d',
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);

export default createAppContainer(MainNavigator);