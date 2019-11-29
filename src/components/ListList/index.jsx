import React, { useState } from 'react';
import { View, ScrollView, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import ListItem from '../ListItem';
import styles from './styles';
import ListFormModal from '../ListFormModal';
import { listsType, numberType, boardsType } from '../../types';

const ListList = ({ boardId, lists, boards }) => {
	const [taskListToExpand, setTaskListToExpand] = useState(null);

	const expandListHandler = (listId) => {
		if (listId === taskListToExpand) {
			setTaskListToExpand(null);
		} else {
			setTaskListToExpand(listId);
		}
	};

	const filteredLists = lists.filter((list) => list.boardId === boardId);
	const board = boards.find((b) => b.id === boardId);
	return (
		<View>
			<ScrollView>
				<View style={styles.header}>
					<Image source={{ uri: board.thumbnailPhoto }} resizeMode="cover" style={styles.thumbnail} />
					<Text style={styles.boardName}>
						{board.name}
					</Text>
					<Text style={styles.boardDescription}>
						{board.description}
					</Text>
				</View>
				<FlatList
					contentContainerStyle={styles.container}
					data={filteredLists}
					renderItem={({ item }) => (
						<ListItem
							list={item}
							expandHandler={(listId) => expandListHandler(listId)}
							expanded={(taskListToExpand === item.id)}
						/>
					)}
					keyExtractor={(task) => task.name}
					ListEmptyComponent={(
						<Text h3 style={styles.emptyListText}>
							You have no lists...
							{ '\n' }
							Add one!
						</Text>
					)}
				/>
			</ScrollView>
			<ListFormModal />
		</View>
	);
};

ListList.propTypes = {
	lists: listsType.isRequired,
	boardId: numberType.isRequired,
	boards: boardsType.isRequired
};

const mapStateToProps = (state) => ({
	boards: state.boards,
	lists: state.lists
});

export default connect(mapStateToProps)(ListList);