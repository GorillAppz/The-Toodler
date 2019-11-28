import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../views/Boards';
import Lists from '../views/Lists';

const MainNavigator = createStackNavigator({
	Boards: { screen: Boards },
	Lists: { screen: Lists }
});

export default createAppContainer(MainNavigator);