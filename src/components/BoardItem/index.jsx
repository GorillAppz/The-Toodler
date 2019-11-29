import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import ImageThumbnail from '../ImageThumbnail';
import { deleteBoard, updateBoard } from '../../actions/boardActions';
import OptionModal from '../OptionModal';
import BoardFormModal from '../BoardFormModal';

const BoardItem = ({
	data, deleteBoard, updateBoard, navigation: { navigate }
}) => {
	const [activeModal, setActiveModal] = useState('');

	const modalToShow = () => {
		if (activeModal === 'option') {
			return (
				<OptionModal
					title={data.name}
					isVisible={true}
					deleteHandler={() => { deleteBoard(data.id); setActiveModal(''); }}
					editHandler={() => { setActiveModal('edit'); }}
					cancelHandler={() => setActiveModal('')}
				/>
			);
		}
		if (activeModal === 'edit') {
			return (
				<BoardFormModal
					isVisible
					cancelHandler={() => setActiveModal('')}
					submitHandler={(newBoard) => { updateBoard(newBoard); setActiveModal(''); }}
					prevData={data}
					title="Editing Board"
				/>
			);
		}
		return null;
	};

	return (
		<View style={styles.boardItem}>
			<TouchableHighlight
				onLongPress={() => setActiveModal('option')}
				onPress={() => navigate('Lists', { id: data.id })}
				underlayColor="rgba(0,0,0,0.1)"
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
			{modalToShow()}
		</View>
	);
};

export default connect(null, { deleteBoard, updateBoard })(withNavigation(BoardItem));