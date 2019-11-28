import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import TaskItem from '../TaskItem';
import { updateTask } from '../../actions/taskActions';
import styles from './styles';

class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: props.tasks
		};
	}

	updateIsFinished(id) {
		const { tasks } = this.state;
		const { updateTask } = this.props;
		const newTask = tasks.find((task) => task.id === id);
		newTask.isFinished = !newTask.isFinished;
		updateTask(newTask);
	}

	render() {
		const { tasks } = this.props;
		return (
			<View>
				<Button
					icon={{
						name: 'add-circle-outline',
						size: 20,
						color: 'white'
					}}
					buttonStyle={styles.addButton}
					title="Add Task"
				/>
				{tasks.length
					? (
						<View>
							<Text>
								{`List #${tasks[0].listId}`}
							</Text>
							<FlatList
								contentContainerStyle={styles.container}
								data={tasks}
								renderItem={({ item }) => (
									<TaskItem data={item} updateIsFinished={(id) => this.updateIsFinished(id)} />
								)}
								keyExtractor={(task) => task.name}
							/>
						</View>
					)
					: (
						<Text h3>
							You have no tasks, add some!
						</Text>
					)}
			</View>
		);
	}
}

TaskList.propTypes = {
	tasks: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			isFinished: PropTypes.bool.isRequired,
			listId: PropTypes.number.isRequired
		}).isRequired
	).isRequired
};

export default connect(null, { updateTask })(TaskList);