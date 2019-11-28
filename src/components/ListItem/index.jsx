import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const ListItem = ({ data }) => {
	return (
		<View>
			<Text>
				{data.name}
			</Text>
		</View>
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