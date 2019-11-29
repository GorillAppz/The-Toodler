import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import styles from './styles';
import BoardItem from '../BoardItem';
import { boardsType } from '../../types';

const BoardList = ({ boards }) => (
	<View>
		<FlatList
			data={boards}
			contentContainerStyle={{ flex: 1 }}
			renderItem={({ item }) => (
				<BoardItem board={item} />
			)}
			keyExtractor={(board) => `${board.name}_${board.id}`}
			ListEmptyComponent={(
				<Text h3 style={styles.emptyBoardText}>
					You have no boards... Add one!
				</Text>
			)}
		/>
	</View>
);

BoardList.propTypes = {
	boards: boardsType.isRequired
};

const mapStateToProps = (state) => ({
	boards: state.boards
});

export default connect(mapStateToProps)(BoardList);