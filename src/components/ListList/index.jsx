import React, { useState } from 'react';
import { View, ScrollView, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import ListItem from '../ListItem';
import styles from './styles';
import { listsType, numberType, boardsType, boolType } from '../../types';

const ListList = ({ boardId, lists, boards, isDarkTheme }) => {
	const [taskListToExpand, setTaskListToExpand] = useState(null);

	const getBackgroundColor = () => (isDarkTheme ? 'black' : 'white');
	const getTextColor = () => (isDarkTheme ? 'white' : 'black');


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
		<View style={{ backgroundColor: getBackgroundColor() }}>
			<ScrollView>
				<View style={styles.header}>
					<Image source={{ uri: board.thumbnailPhoto }} resizeMode="cover" style={styles.thumbnail} />
					<Text style={{ ...styles.boardName, color: getTextColor() }}>
						{board.name}
					</Text>
					<Text style={{ ...styles.boardDescription, color: getTextColor() }}>
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
					keyExtractor={(list) => `${list.name}_${list.id}`}
					ListEmptyComponent={(
						<Text h3 style={styles.emptyListText}>
							You have no lists...
							{'\n'}
							Add one!
						</Text>
					)}
				/>
			</ScrollView>
		</View>
	);
};

ListList.propTypes = {
	lists: listsType.isRequired,
	boardId: numberType.isRequired,
	boards: boardsType.isRequired,
	isDarkTheme: boolType.isRequired
};

const mapStateToProps = (state) => ({
	boards: state.boards,
	lists: state.lists,
	isDarkTheme: state.isDarkTheme
});

export default connect(mapStateToProps)(ListList);