import React, { useEffect, useState } from 'react';
import { FlatList, Text, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import TaskItem from '../TaskItem';
import { updateTask } from '../../actions/taskActions';
import styles from './styles';
import { tasksType, updateTaskType, numberType } from '../../types';

const TaskList = ({ tasks, updateTask, listId }) => {
	const filteredTasks = tasks.filter((t) => t.listId === listId);
	const [fadeAnim] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.timing(
			fadeAnim,
			{
				toValue: 1,
				duration: 500
			}
		).start();
	}, []);

	const updateIsFinishedHandler = (id) => {
		const newTask = tasks.find((task) => task.id === id);
		newTask.isFinished = !newTask.isFinished;
		updateTask(newTask);
	};


	return (
		<Animated.View style={{ opacity: fadeAnim }}>
			<Button
				onPressOut={() => true}
				buttonStyle={styles.addButton}
				iconRight
				icon={{ name: 'add-circle', color: 'white', size: 15 }}
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
					<Text h3>
						You have no tasks, add some!
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