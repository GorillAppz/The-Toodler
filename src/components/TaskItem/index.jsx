import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

import OptionModal from '../OptionModal';
import TaskFormModal from '../TaskFormModal';
import MoveTaskModal from '../MoveTaskModal';

import { GREEN } from '../../styles/colors';

import { deleteTask, updateTask } from '../../actions/taskActions';
import { taskType, deleteTaskType, updateIsFinishedType, updateTaskType } from '../../types';

const TaskItem = ({ task, deleteTask, updateTask, updateIsFinished }) => {
	const [activeModal, setActiveModal] = useState('');

	const updateTaskListId = (newListId) => {
		const newTask = {
			...task,
			listId: newListId
		};
		updateTask(newTask);
	};

	const modalToShow = () => {
		if (activeModal === 'option') {
			return (
				<OptionModal
					title={task.name}
					isVisible
					deleteHandler={() => { deleteTask(task.id); setActiveModal(''); }}
					editHandler={() => { setActiveModal('edit'); }}
					moveHandler={() => { setActiveModal('move'); }}
					cancelHandler={() => setActiveModal('')}
				/>
			);
		}
		if (activeModal === 'edit') {
			return (
				<TaskFormModal
					isVisible
					cancelHandler={() => setActiveModal('')}
					submitHandler={(newTask) => { updateTask(newTask); setActiveModal(''); }}
					prevTask={task}
					title="Editing Task"
				/>
			);
		}
		if (activeModal === 'move') {
			return (
				<MoveTaskModal
					isVisible
					currentListId={task.listId}
					cancelHandler={() => setActiveModal('')}
					submitHandler={(newListId) => { updateTaskListId(newListId); setActiveModal(''); }}
				/>
			);
		}
		return null;
	};

	return (
		<View>
			<View>
				<View>
					<CheckBox
						title={`${task.name} \n- ${task.description}`}
						checked={task.isFinished}
						onPress={() => updateIsFinished(task.id)}
						onLongPress={() => setActiveModal('option')}
						checkedColor={GREEN}
					/>
				</View>
			</View>
			{modalToShow()}
		</View>
	);
};


TaskItem.propTypes = {
	task: taskType.isRequired,
	deleteTask: deleteTaskType.isRequired,
	updateTask: updateTaskType.isRequired,
	updateIsFinished: updateIsFinishedType.isRequired
};

export default connect(null, { deleteTask, updateTask })(TaskItem);