import React, { useEffect, useState } from 'react';
import { FlatList, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import tinyColor from 'tinycolor2';

import Text from '../Text';
import TaskItem from '../TaskItem';
import TaskFormModal from '../TaskFormModal';

import styles from './styles';
import { DARK, LIGHT } from '../../styles/colors';

import { createTask, updateTask } from '../../actions/taskActions';
import { tasksType, updateTaskType, numberType, createTaskType } from '../../types';

const TaskList = ({ tasks, createTask, updateTask, listId, listColor }) => {
	const filteredTasks = tasks.filter((t) => t.listId === listId);
	const [expandAnim] = useState(new Animated.Value(0));
	const [displayCreateModal, setDisplayCreateModal] = useState(false);

	const getTextColor = () => (tinyColor(listColor).isDark() ? LIGHT : DARK)

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
				onPress={() => setDisplayCreateModal(true)}
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
					<Text h5 style={{ ...styles.emptyTaskText, color: getTextColor() }}>
						This list has no tasks... add one!
					</Text>
				)}
			/>
			<TaskFormModal
				isVisible={displayCreateModal}
				cancelHandler={() => setDisplayCreateModal(false)}
				submitHandler={(newTask) => { createTask(newTask); setDisplayCreateModal(false); }}
				title="Creating new Task"
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

const mapStateToProps = ({ data }) => ({
	tasks: data.tasks
});

export default connect(mapStateToProps, { updateTask, createTask })(TaskList);