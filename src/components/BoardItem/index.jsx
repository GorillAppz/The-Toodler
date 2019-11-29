import React, { useState } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import styles from './styles';
import { deleteBoard, updateBoard } from '../../actions/boardActions';
import OptionModal from '../OptionModal';
import BoardFormModal from '../BoardFormModal';
import { boardType, deleteBoardType, updateBoardType } from '../../types';

const BoardItem = ({
	board, deleteBoard, updateBoard, navigation: { navigate }
}) => {
	const [activeModal, setActiveModal] = useState('');

	const modalToShow = () => {
		if (activeModal === 'option') {
			return (
				<OptionModal
					title={board.name}
					isVisible
					deleteHandler={() => { deleteBoard(board.id); setActiveModal(''); }}
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
					prevBoard={board}
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
				onPress={() => navigate('Lists', { id: board.id })}
				underlayColor="rgba(0,0,0,0.1)"
			>
				<View style={styles.item}>
					<Image source={{ uri: board.thumbnailPhoto }} style={styles.thumbnail} />
					<View style={styles.infoWrapper}>
						<Text style={styles.name}>
							{board.name}
						</Text>
						<Text style={styles.description}>
							{board.description}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
			{modalToShow()}
		</View>
	);
};

BoardItem.propTypes = {
	board: boardType.isRequired,
	deleteBoard: deleteBoardType.isRequired,
	updateBoard: updateBoardType.isRequired
};


export default connect(null, { deleteBoard, updateBoard })(withNavigation(BoardItem));