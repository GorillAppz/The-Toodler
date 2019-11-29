import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import styles from './styles';
import { deleteTask } from '../../actions/taskActions';
import OptionModal from '../OptionModal';
import { taskType, deleteTaskType, updateIsFinishedType } from '../../types';

const TaskItem = ({ task, deleteTask, updateIsFinished }) => {
	const [showOptions, toggleOptions] = useState(false);
	return (
		<View>
			<TouchableHighlight
				onLongPress={() => toggleOptions(true)}
			>
				<View style={styles.item}>
					<View style={styles.nameWrapper}>
						<Text style={styles.name}>
							{task.name}
						</Text>
						<CheckBox
							title={task.name}
							checked={task.isFinished}
							onLongPress={() => toggleOptions(true)}
							onPress={() => updateIsFinished(task.id)}
						/>
					</View>
				</View>
			</TouchableHighlight>
			<OptionModal
				title={task.name}
				isVisible={showOptions}
				deleteHandler={() => { deleteTask(task.id); toggleOptions(false); }}
				editHandler={() => toggleOptions(false)}
				cancelHandler={() => toggleOptions(false)}
			/>
		</View>
	);
};


TaskItem.propTypes = {
	task: taskType.isRequired,
	deleteTask: deleteTaskType.isRequired,
	updateIsFinished: updateIsFinishedType.isRequired
};

export default connect(null, { deleteTask })(TaskItem);