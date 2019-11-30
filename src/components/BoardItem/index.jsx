import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { View, TouchableHighlight, Image } from 'react-native';

import Text from '../Text';
import OptionModal from '../OptionModal';
import BoardFormModal from '../BoardFormModal';

import styles from './styles';

import { deleteBoard, updateBoard } from '../../actions/boardActions';

import { boardType, deleteBoardType, updateBoardType, boolType } from '../../types';

const BoardItem = ({
	board, deleteBoard, updateBoard, isDarkTheme, navigation: { navigate }
}) => {
	const [activeModal, setActiveModal] = useState('');
	const getTextColor = () => (isDarkTheme ? 'white' : 'black');

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
		<View>
			<TouchableHighlight
				onLongPress={() => setActiveModal('option')}
				onPress={() => navigate('Lists', { id: board.id })}
				underlayColor="rgba(0,0,0,0.1)"
			>
				<View style={styles.item}>
					<Image source={{ uri: board.thumbnailPhoto }} style={styles.thumbnail} />
					<View style={styles.infoWrapper}>
						<Text style={{ ...styles.name, color: getTextColor() }}>
							{board.name}
						</Text>
						<Text style={{ ...styles.description, color: getTextColor() }}>
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
	updateBoard: updateBoardType.isRequired,
	isDarkTheme: boolType.isRequired
};

const mapStateToProps = ({ theme }) => ({
	isDarkTheme: theme.isDarkTheme
});

export default connect(mapStateToProps, { deleteBoard, updateBoard })(withNavigation(BoardItem));