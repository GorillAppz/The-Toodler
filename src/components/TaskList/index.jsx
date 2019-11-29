import React, { useEffect, useState } from 'react';
import { FlatList, Text, Animated, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import TaskItem from '../TaskItem';
import { updateTask } from '../../actions/taskActions';
import styles from './styles';
import { tasksType, updateTaskType, numberType } from '../../types';

const TaskList = ({ tasks, updateTask, listId }) => {
	const filteredTasks = tasks.filter((t) => t.listId === listId);
	const [fadeAnim] = useState(new Animated.Value(0));
	const [maxHeight, setMaxHeight] = useState(0);

	useEffect(() => {
		Animated.spring(
			fadeAnim,
			{
				toValue: 1,
				duration: 1000
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
			style={{ transform: [{ scaleY: fadeAnim }] }}
		>
			<Button
				onPressOut={() => true}
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
				keyExtractor={(task) => task.name}
				ListEmptyComponent={(
					<Text h3 style={styles.emptyTaskText}>
						You have no tasks... add one!
					</Text>
				)}
			/>
		</Animated.View>
	);
};

TaskList.propTypes = {
	tasks: tasksType.isRequired,
	updateTask: updateTaskType.isRequired,
	listId: numberType.isRequired
};

const mapStateToProps = (state) => ({
	tasks: state.tasks
});

export default connect(mapStateToProps, { updateTask })(TaskList);