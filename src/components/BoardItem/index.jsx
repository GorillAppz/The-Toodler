import React from 'react';
import Swipeout from 'react-native-swipeout';
import { Card } from 'react-native-elements';
import { View, Text } from 'react-native';

const BoardItem = ({ data }) => {
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

export default BoardItem;