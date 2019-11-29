import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import tinyColor from 'tinycolor2';
import styles from './styles';
import { deleteList } from '../../actions/listActions';
import OptionModal from '../OptionModal';
import { deleteListType, listType, funcType, boolType } from '../../types';
import TaskList from '../TaskList/index';

const ListItem = ({ list, deleteList, expandHandler, expanded }) => {
	const [showOptions, toggleOptions] = useState(false);

	const getTextColor = () => (tinyColor(list.color).isDark() ? 'white' : 'black');

	return (
		<View style={styles.container}>
			<TouchableHighlight
				onLongPress={() => toggleOptions(true)}
				onPress={() => expandHandler(list.id)}
			>
				<View style={{ backgroundColor: list.color }}>
					<View style={styles.nameWrapper}>
						<Text style={{ ...styles.name, color: getTextColor() }}>
							{list.name}
						</Text>
						<Icon name={expanded ? 'caret-up' : 'caret-down'} type="font-awesome" color={getTextColor()} />
					</View>
				</View>
			</TouchableHighlight>
			{expanded ? <TaskList listId={list.id} /> : null}
			<OptionModal
				title={list.name}
				isVisible={showOptions}
				deleteHandler={() => { deleteList(list.id); toggleOptions(false); }}
				editHandler={() => toggleOptions(false)}
				cancelHandler={() => toggleOptions(false)}
			/>
		</View>
	);
};


ListItem.propTypes = {
	list: listType.isRequired,
	deleteList: deleteListType.isRequired,
	expandHandler: funcType.isRequired,
	expanded: boolType.isRequired
};

export default connect(null, { deleteList })(withNavigation(ListItem));