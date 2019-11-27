import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
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
					<Text style={{ textAlign: 'center' }}>{name}</Text>
					<ImageThumbnail thumbnailPhoto={thumbnailPhoto} />
					<Button
						buttonStyle={styles.button}
						title="Check It Out!"
					/>
				</Card>
			)}
			keyExtractor={(board) => board.name}
		/>
	</View>
);

export default BoardList;