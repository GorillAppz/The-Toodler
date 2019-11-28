import React from 'react';
import Swipeout from 'react-native-swipeout';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const ListItem = ({ data }) => {
	const swipeoutBtns = [{ text: 'delete' }, { text: 'edit' }];
	return (
		<Swipeout right={swipeoutBtns}>
			<View>
				<Text>
					{data.name}
				</Text>
			</View>
		</Swipeout>
	);
};

ListItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
		boardId: PropTypes.number.isRequired
	}).isRequired
};

export default ListItem;