import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TaskList from '../../components/TaksList';
import styles from './styles';

const Tasks = ({ navigation, tasks }) => {
	const { id } = navigation.state.params;
	return (
		<View style={styles.main}>
			<TaskList tasks={tasks.filter((task) => task.listId === id)} />
		</View>
	);
};

Tasks.propTypes = {
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

const mapStateToProps = (state) => ({
	tasks: state.tasks
});

export default connect(mapStateToProps)(Tasks);