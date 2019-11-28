import React, { useState } from 'react';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { View, Text, TouchableHighlight, Button } from 'react-native';
import { navigate } from 'react-navigation-stack';
import { connect } from 'react-redux';
import style from './style';
import ImageThumbnail from '../ImageThumbnail';
import { deleteBoard } from '../../actions/boardActions';

const BoardItem = ({ data, deleteBoard }) => {
	const [showDialog, toggleDialog] = useState(false);
	return (
		<View>
			<TouchableHighlight
				onLongPress={() => toggleDialog(!showDialog)}
				onPress={() => navigate('List', { id: data.id })}
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

export default connect(null, { deleteBoard })(BoardItem);