import React, { useEffect, useState } from 'react';
import { FlatList, Text, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import TaskItem from '../TaskItem';
import { createTask, updateTask } from '../../actions/taskActions';
import styles from './styles';
import { tasksType, updateTaskType, numberType, createTaskType } from '../../types';
import TaskFormModal from '../TaskFormModal';

const TaskList = ({ tasks, createTask, updateTask, listId }) => {
	const filteredTasks = tasks.filter((t) => t.listId === listId);
	const [expandAnim] = useState(new Animated.Value(0));
	const [displayCreateModal, setDisplayCreateModal] = useState(false);

	useEffect(() => {
		Animated.spring(
			expandAnim,
			{
				toValue: 1,
				speed: 50
			}
		).start();
	}, []);

	const updateIsFinishedHandler = (id) => {
		const newTask = tasks.find((task) => task.id === id);
		newTask.isFinished = !newTask.isFinished;
		updateTask(newTask);
	};


	return (
		<Animated.View
			style={{ transform: [{ scaleY: expandAnim }] }}
		>
			<Button
				onPressOut={() => setDisplayCreateModal(true)}
				buttonStyle={styles.addButton}
				iconRight
				icon={{ name: 'add-circle-outline', color: 'white', size: 20 }}
				title="New Task"
				titleStyle={styles.addButtonTitle}
			/>
			<FlatList
				contentContainerStyle={styles.container}
				data={filteredTasks}
				renderItem={({ item }) => (
					<TaskItem task={item} updateIsFinished={(id) => updateIsFinishedHandler(id)} />
				)}
				keyExtractor={(task) => `${task.name}_${task.id}`}
				ListEmptyComponent={(
					<Text h3 style={styles.emptyTaskText}>
						You have no tasks... add one!
					</Text>
				)}
			/>
			<TaskFormModal
				isVisible={displayCreateModal}
				cancelHandler={() => setDisplayCreateModal(false)}
				submitHandler={(newTask) => { createTask(newTask); setDisplayCreateModal(false); }}
				title="Creating New Task"
				listId={listId}
			/>
		</Animated.View>
	);
};

TaskList.propTypes = {
	tasks: tasksType.isRequired,
	createTask: createTaskType.isRequired,
	updateTask: updateTaskType.isRequired,
	listId: numberType.isRequired
};

const mapStateToProps = (state) => ({
	tasks: state.tasks
});

export default connect(mapStateToProps, { updateTask, createTask })(TaskList);