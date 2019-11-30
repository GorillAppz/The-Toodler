import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import Text from '../Text';
import BoardItem from '../BoardItem';

import styles from './styles';

import { boardsType } from '../../types';


const BoardList = ({ boards }) => (
	<FlatList
		data={boards}
		contentContainerStyle={{ flex: 1 }}
		renderItem={({ item }) => (
			<BoardItem board={item} />
		)}
		keyExtractor={(board) => `${board.name}_${board.id}`}
		ListEmptyComponent={(
			<Text h3 style={styles.emptyBoardText}>
				{'You have no boards...\nAdd one!'}
			</Text>
		)}
	/>
);

BoardList.propTypes = {
	boards: boardsType.isRequired
};

const mapStateToProps = ({ data }) => ({
	boards: data.boards
});

export default connect(mapStateToProps)(BoardList);