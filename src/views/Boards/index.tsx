import React from 'react';
import { View, Text } from 'react-native';
import BoardList from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';

class Boards extends React.Component {
	render() {
		return (
			<View style={ styles.main }>
				<BoardList boards={ data.boards }/>
			</View>
		);
	};
}

export default Boards;
