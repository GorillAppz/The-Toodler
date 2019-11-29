import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import TaskList from '../../components/TaksList';
import styles from './styles';
import { tasksType } from '../../types';

const Tasks = ({ navigation, tasks }) => {
	const [showForm, setFormVisibility] = useState(false);

	const submitHandler = (data) => { createList(data); setFormVisibility(false); };

	const { id } = navigation.state.params;
	return (
		<View style={styles.container}>
			<ScrollView>
				<TaskList tasks={tasks.filter((task) => task.listId === id)} />
			</ScrollView>
			<View style={styles.bottom}>
				<Button
					onPressOut={() => setFormVisibility(true)}
					buttonStyle={styles.addButton}
					iconRight
					icon={{ name: 'add-circle', color: 'white', size: 65 }}
				/>
			</View>
		</View>
	);
};

Tasks.propTypes = {
	tasks: tasksType.isRequired
};

const mapStateToProps = (state) => ({
	tasks: state.tasks
});

export default connect(mapStateToProps)(Tasks);