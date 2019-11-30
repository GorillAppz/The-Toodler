import React, { useState } from 'react';
import { View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from './styles';
import { deleteTask, updateTask } from '../../actions/taskActions';
import OptionModal from '../OptionModal';
import { taskType, deleteTaskType, updateIsFinishedType, updateTaskType } from '../../types';
import TaskFormModal from '../TaskFormModal';
import MoveTaskModal from '../MoveTaskModal';

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
					title="Moving Task"
				/>
			);
		}
		return null;
	};

	return (
		<View>
			<View style={styles.item}>
				<View style={styles.nameWrapper}>
					<CheckBox
						title={task.name}
						checked={task.isFinished}
						onPress={() => updateIsFinished(task.id)}
						onLongPress={() => setActiveModal('option')}
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