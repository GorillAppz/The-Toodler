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
		initialRouteName: 'Main',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#9CC69B'
			},
			headerTintColor: '#1f2d3d',
			headerTitleStyle: {
				fontWeight: 'bold'
			},
			title: 'Toodler - Todo App!'
		}
	}
);

export default createAppContainer(MainNavigator);