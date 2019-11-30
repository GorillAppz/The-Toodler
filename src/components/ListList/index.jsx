import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, FlatList, Image } from 'react-native';

import Text from '../Text';
import ListItem from '../ListItem';

import styles from './styles';

import { getBackgroundColor, getTextColor } from '../../helpers/themeColors';
import { listsType, numberType, boardsType, boolType } from '../../types';

const ListList = ({ boardId, lists, boards, isDarkTheme }) => {
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
		<View style={{ backgroundColor: getBackgroundColor(isDarkTheme) }}>
			<ScrollView>
				<View style={styles.header}>
					<Image source={{ uri: board.thumbnailPhoto }} resizeMode="cover" style={styles.thumbnail} />
					<Text style={{ ...styles.boardName, color: getTextColor(isDarkTheme) }}>
						{board.name}
					</Text>
					<Text style={{ ...styles.boardDescription, color: getTextColor(isDarkTheme) }}>
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
							{`'${board.name}' is empty...\nAdd a task list!`}
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

const mapStateToProps = ({ data, theme }) => ({
	boards: data.boards,
	lists: data.lists,
	isDarkTheme: theme.isDarkTheme
});

export default connect(mapStateToProps)(ListList);