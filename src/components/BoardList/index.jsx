import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native-elements';
import styles from './styles';
import BoardItem from '../BoardItem';

const BoardList = ({ boards }) => (
	<View>
		<FlatList
			data={boards}
			contentContainerStyle={{ flex: 1 }}
			renderItem={({ item }) => (
				<BoardItem data={item} />
			)}
			keyExtractor={(board) => `${board.name}_${board.id}`}
			ListEmptyComponent={(
				<Text h3 style={styles.emptyMessage}>
					You have no boards... Create one!
				</Text>
			)}
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

const mapStateToProps = (state) => ({
	boards: state.boards
});

export default connect(mapStateToProps)(BoardList);