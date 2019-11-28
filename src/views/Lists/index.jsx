import React from 'react';
import { View } from 'react-native';
import ListList from '../../components/ListList';
import data from '../../resources/data.json';
import styles from './styles';

const Lists = () => (
	<View style={styles.main}>
		<ListList lists={data.lists} />
	</View>
);

export default Lists;