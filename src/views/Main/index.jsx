import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import logo from '../../resources/pen-2294478_1280.jpg';

const Main = () => (
	<View style={styles.container}>
		<Image style={styles.logo} source={logo} />
		<Text>Reorganize your life with The-Toodler!</Text>
	</View>
);

export default Main;