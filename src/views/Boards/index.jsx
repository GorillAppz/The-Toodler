import React from 'react';
import { View } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';

const Boards = () => (
	<View style={styles.main}>
		<BoardList boards={data.boards} />
	</View>
);

export default Boards;