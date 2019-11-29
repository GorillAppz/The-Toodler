import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import logo from '../../resources/logo.png';

const Main = () => (
	<View style={styles.container}>
		<Image source={logo} style={styles.logo} />
	</View>
);

Main.navigationOptions = {
	headerStyle: {
		backgroundColor: 'transparent'
	},
	title: 'Welcome To The Toodler!'
};
export default Main;