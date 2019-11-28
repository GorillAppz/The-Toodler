import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { deleteTask } from '../../actions/taskActions';
import OptionModal from '../OptionModal';

const TaskItem = ({ data, deleteTask, updateIsFinished }) => {
	const [showOptions, toggleOptions] = useState(false);
	return (
		<View>
			<TouchableHighlight
				onLongPress={() => toggleOptions(true)}
			>
				<View style={styles.item}>
					<View style={styles.nameWrapper}>
						<Text style={styles.name}>
							{data.name}
						</Text>
						<CheckBox
							title={data.name}
							checked={data.isFinished}
							onLongPress={() => toggleOptions(true)}
							onPress={() => updateIsFinished(data.id)}
						/>
					</View>
				</View>
			</TouchableHighlight>
			<OptionModal
				title={data.name}
				isVisible={showOptions}
				deleteHandler={() => { deleteTask(data.id); toggleOptions(false); }}
				editHandler={() => toggleOptions(false)}
				cancelHandler={() => toggleOptions(false)}
			/>
		</View>
	);
};


TaskItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		isFinished: PropTypes.bool.isRequired,
		listId: PropTypes.number.isRequired
	}).isRequired
};

export default connect(null, { deleteTask })(TaskItem);