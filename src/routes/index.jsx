import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';
import Lists from '../views/Lists';
import Tasks from '../views/Tasks';

const MainNavigator = createStackNavigator(
	{
		Boards: { screen: Boards },
		Lists: { screen: Lists },
		Tasks: { screen: Tasks }
	},
	{
		initialRouteName: 'Boards',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e'
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold'
			},
			title: 'Toodler - Todo App!'
		}
	}
);

export default createAppContainer(MainNavigator);