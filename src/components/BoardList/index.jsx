import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import styles from './styles';
import BoardItem from '../BoardItem';

const BoardList = ({ boards }) => (
	<View>
		{boards.length
			? (
				<FlatList
					contentContainerStyle={styles.container}
					data={boards}
					renderItem={({ item }) => (
						<BoardItem data={item} />
					)}
					keyExtractor={(board) => board.name}
				/>
			)
			: (
				<Text h3>
					You have no boards, add some!
				</Text>
			)}
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