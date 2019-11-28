import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';
import { deleteList } from '../../actions/listActions';
import OptionModal from '../OptionModal';

const ListItem = ({ data, deleteList, navigation: { navigate } }) => {
	const [showOptions, toggleOptions] = useState(false);
	return (
		<View>
			<TouchableHighlight
				onLongPress={() => toggleOptions(true)}
				onPress={() => navigate('Tasks', { id: data.id })}
			>
				<View style={styles.item}>
					<View style={styles.nameWrapper}>
						<Text style={styles.name}>
							{data.name}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
			<OptionModal
				title={data.name}
				isVisible={showOptions}
				deleteHandler={() => { deleteList(data.id); toggleOptions(false); }}
				editHandler={() => toggleOptions(false)}
				cancelHandler={() => toggleOptions(false)}
			/>
		</View>
	);
};


ListItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		color: PropTypes.string.isRequired,
		boardId: PropTypes.number.isRequired
	}).isRequired
};

export default connect(null, { deleteList })(withNavigation(ListItem));