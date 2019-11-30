import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import styles from './styles';
import { boolType, stringType, numberType, funcType, listsType } from '../../types';

const MoveTaskModal = ({ isVisible, title, currentListId, submitHandler, cancelHandler, lists }) => {
	const [selectedList, setSelectedList] = useState(currentListId);

	const currentListObj = lists.find((l) => l.id === currentListId);
	const filteredLists = lists.filter((list) => list.boardId === currentListObj.boardId);

	return (
		<Modal
			isVisible={isVisible}
		>
			<View style={styles.modal}>
				<View style={styles.infoContainer}>
					<Text h4 style={styles.title}>{title}</Text>
					<Text h5 style={styles.oldListName}>
						Moving from:
						{` ${currentListObj.name}`}
					</Text>
				</View>
				<Picker
					selectedValue={selectedList}
					onValueChange={(listId) => setSelectedList(listId)}
				>
					{filteredLists.map((x) => (
						<Picker.Item label={x.name} value={x.id} key={`${x.name}_${x.id}_picker`} />
					))}
				</Picker>

				<Button title="Cancel" onPress={() => cancelHandler()} />
				<Button title="Save" onPress={() => submitHandler(selectedList)} />
			</View>

		</Modal>
	);
};

const mapStateToProps = (state) => ({
	lists: state.lists
});

MoveTaskModal.propTypes = {
	isVisible: boolType.isRequired,
	title: stringType.isRequired,
	currentListId: numberType.isRequired,
	submitHandler: funcType.isRequired,
	cancelHandler: funcType.isRequired,
	lists: listsType.isRequired
};

export default connect(mapStateToProps)(MoveTaskModal);