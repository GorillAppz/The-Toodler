import React from 'react';
import { View, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import styles from './styles';

const ListList = ({ lists }) => (
	<View>
		<Text>
			{`Board #${lists.boardId}`}
		</Text>
		<FlatList
			contentContainerStyle={styles.container}
			data={lists}
			renderItem={({ item }) => (
				<ListItem data={item} />
			)}
			keyExtractor={(list) => list.name}
		/>
	</View>
);

ListList.propTypes = {
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
			boardId: PropTypes.number.isRequired
		}).isRequired
	).isRequired
};

export default ListList;