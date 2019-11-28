import React from 'react';
import { Text, View } from 'react-native';
import BoardList from '../../components/BoardList';
import styles from './styles';

const Boards = () => (
	<View style={styles.main}>
		<BoardList />
	</View>
);

export default Boards;