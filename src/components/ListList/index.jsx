import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import styles from './styles';

const ListList = ({ lists }) => (
	<View>
		<Button
			icon={{
				name: 'add-circle-outline',
				size: 20,
				color: 'white'
			}}
			buttonStyle={styles.addButton}
			title="Add List"
		/>
		{lists.length
			? (
				<View>
					<Text>
						{`Board #${lists[0].boardId}`}
					</Text>
					<FlatList
						contentContainerStyle={styles.container}
						data={lists}
						renderItem={({ item }) => (
							<ListItem data={item} />
						)}
						keyExtractor={(task) => task.name}
					/>
				</View>
			)
			: (
				<Text h3>
					You have no lists, add some!
				</Text>
			)}
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

const mapStateToProps = (state) => ({
	boards: state.lists
});

export default connect(mapStateToProps)(ListList);