import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import style from './style';
import ImageThumbnail from '../ImageThumbnail';
import { deleteBoard } from '../../actions/boardActions';

const BoardItem = ({ data, deleteBoard, navigation: { navigate } }) => {
	const [showDialog, toggleDialog] = useState(false);

	return (
		<View>
			<TouchableHighlight
				onLongPress={() => toggleDialog(!showDialog)}
				onPress={() => navigate('Lists', { id: data.id })}
			>
				<View style={style.item}>
					<ImageThumbnail thumbnailPhoto={data.thumbnailPhoto} style={style.thumbnail} />
					<View style={style.nameWrapper}>
						<Text style={style.name}>
							{data.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
			{
				showDialog && (
					<View>
						<>
							<Button title="Edit" />
							<Button title="Delete" onPress={() => deleteBoard(data.id)} />
						</>
					</View>
				)
			}
		</View>
	);
};

export default connect(null, { deleteBoard })(withNavigation(BoardItem));