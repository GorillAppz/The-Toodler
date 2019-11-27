import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import ImageThumbnail from '../ImageThumbnail';
import styles from './styles';

const BoardList = ({ boards }) => (
	<View>
		<Text style={styles.welcomeMessage}> Welcome </Text>
		<FlatList
			contentContainerStyle={styles.list}
			numColumns={2}
			data={boards}
			renderItem={({ item: { id, name, thumbnailPhoto } }) => (
				<Card containerStyle={styles.card} title={`Board #${id}`}>
					<Button
						buttonStyle={styles.deleteButton}
						title="Delete Me!"
					/>
					<Button
						buttonStyle={styles.editButton}
						title="Edit Me!"
					/>
					<Text style={{ textAlign: 'center' }}>{name}</Text>
					<ImageThumbnail thumbnailPhoto={thumbnailPhoto} />
					<Button
						buttonStyle={styles.button}
						title="Check Me Out!"
					/>
				</Card>
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