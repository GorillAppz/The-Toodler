import React from 'react';
import { Text, View } from 'react-native';
import BoardList from '../../components/BoardList';
import styles from './styles';

const Boards = () => (
	<View style={styles.main}>
		<Text style={styles.title}>Tis are your boards</Text>
		<BoardList />
	</View>
);

export default Boards;