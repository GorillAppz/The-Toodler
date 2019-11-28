import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';
import { deleteBoard } from '../../actions/boardActions';
import OptionModal from '../OptionModal';

const BoardItem = ({ data, deleteBoard, navigation: { navigate } }) => {
	const [showOptions, toggleOptions] = useState(false);

	return (
		<View>
			<TouchableHighlight
				onLongPress={() => toggleOptions(true)}
				onPress={() => navigate('Lists', { id: data.id })}
			>
				<View style={styles.item}>
					<ImageThumbnail thumbnailPhoto={data.thumbnailPhoto} style={styles.thumbnail} />
					<View style={styles.nameWrapper}>
						<Text style={styles.name}>
							{data.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
			<OptionModal
				title={data.name}
				isVisible={showOptions}
				deleteHandler={() => { deleteBoard(data.id); toggleOptions(false); }}
				editHandler={() => toggleOptions(false)}
				cancelHandler={() => toggleOptions(false)}
			/>
		</View>
	);
};

export default connect(null, { deleteBoard })(withNavigation(BoardItem));