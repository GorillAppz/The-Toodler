import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';
import BoardItem from '../BoardItem';

const BoardList = ({ boards }) => (
	<View>
		<Text style={styles.welcomeMessage}> Welcome </Text>
		<FlatList
			contentContainerStyle={styles.container}
			data={boards}
			renderItem={({ item }) => (
				<BoardItem data={item} />
			)}
			keyExtractor={(board) => board.name}
		/>
	</View>
);

BoardList.propTypes = {
	boards: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			thumbnailPhoto: PropTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default BoardList;