import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from './styles';
import { deleteTask, updateTask } from '../../actions/taskActions';
import OptionModal from '../OptionModal';
import { taskType, deleteTaskType, updateIsFinishedType } from '../../types';
import TaskFormModal from '../TaskFormModal';

const TaskItem = ({ task, deleteTask, updateIsFinished }) => {
	const [activeModal, setActiveModal] = useState('');

	const modalToShow = () => {
		if (activeModal === 'option') {
			return (
				<OptionModal
					title={task.name}
					isVisible
					deleteHandler={() => { deleteTask(task.id); setActiveModal(''); }}
					editHandler={() => { setActiveModal('edit'); }}
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
		return null;
	};

	return (
		<View>
			<TouchableHighlight
				onLongPress={() => setActiveModal('option')}
			>
				<View style={styles.item}>
					<View style={styles.nameWrapper}>
						<Text style={styles.name}>
							{task.name}
						</Text>
						<CheckBox
							title={task.name}
							checked={task.isFinished}
							onLongPress={() => setActiveModal('edit')}
							onPress={() => updateIsFinished(task.id)}
						/>
					</View>
				</View>
			</TouchableHighlight>
			{modalToShow()}
		</View>
	);
};


TaskItem.propTypes = {
	task: taskType.isRequired,
	deleteTask: deleteTaskType.isRequired,
	updateIsFinished: updateIsFinishedType.isRequired
};

export default connect(null, { deleteTask })(TaskItem);