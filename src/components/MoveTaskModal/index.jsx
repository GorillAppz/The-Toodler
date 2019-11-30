import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';

import StyledModal from '../StyledModal';
import ModalActionButtons from '../ModalActionButtons';

import { boolType, numberType, funcType, listsType } from '../../types';

const MoveTaskModal = ({ isVisible, currentListId, submitHandler, cancelHandler, lists }) => {
	const [selectedList, setSelectedList] = useState(currentListId);

	const currentListObj = lists.find((l) => l.id === currentListId);
	const filteredLists = lists.filter((list) => list.boardId === currentListObj.boardId);

	return (
		<StyledModal title={`Moving '${currentListObj.name}' to...`} isVisible={isVisible}>
			<Picker selectedValue={selectedList} onValueChange={(listId) => setSelectedList(listId)}>
				{filteredLists.map((x) => (
					<Picker.Item label={x.name} value={x.id} key={`${x.name}_${x.id}_picker`} />
				))}
			</Picker>

			<ModalActionButtons
				cancelHandler={() => cancelHandler()}
				submitHandler={() => submitHandler(selectedList)}
			/>
		</StyledModal>
	);
};

const mapStateToProps = ({ data }) => ({
	lists: data.lists
});

MoveTaskModal.propTypes = {
	isVisible: boolType.isRequired,
	currentListId: numberType.isRequired,
	submitHandler: funcType.isRequired,
	cancelHandler: funcType.isRequired,
	lists: listsType.isRequired
};

export default connect(mapStateToProps)(MoveTaskModal);