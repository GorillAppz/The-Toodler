import React, { useState } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import tinyColor from 'tinycolor2';

import Text from '../Text';
import ListFormModal from '../ListFormModal';
import OptionModal from '../OptionModal';
import TaskList from '../TaskList/index';

import styles from './styles';
import { LIGHT, DARK } from '../../styles/colors';
import { deleteList, updateList } from '../../actions/listActions';

import { deleteListType, listType, funcType, boolType, updateListType } from '../../types';

const ListItem = ({ list, deleteList, updateList, expandHandler, expanded, isDarkTheme }) => {
	const [activeModal, setActiveModal] = useState('');

	const getTextColor = () => (tinyColor(list.color).isDark() ? LIGHT : DARK);

	const modalToShow = () => {
		if (activeModal === 'option') {
			return (
				<OptionModal
					title={list.name}
					isVisible
					deleteHandler={() => { deleteList(list.id); setActiveModal(''); }}
					editHandler={() => { setActiveModal('edit'); }}
					cancelHandler={() => setActiveModal('')}
				/>
			);
		}
		if (activeModal === 'edit') {
			return (
				<ListFormModal
					isVisible
					cancelHandler={() => setActiveModal('')}
					submitHandler={(newList) => { updateList(newList); setActiveModal(''); }}
					prevList={list}
					title="Editing List"
				/>
			);
		}
		return null;
	};

	return (
		<View style={{ ...styles.container, backgroundColor: list.color }}>
			<TouchableHighlight
				onLongPress={() => setActiveModal('option')}
				onPress={() => expandHandler(list.id)}
			>
				<View style={styles.nameWrapper}>
					<Text style={{ ...styles.name, color: getTextColor() }}>
						{list.name}
					</Text>
					<Icon
						name={expanded ? 'caret-up' : 'caret-down'}
						type="font-awesome"
						color={getTextColor(isDarkTheme)}
					/>
				</View>
			</TouchableHighlight>
			{expanded ? <TaskList listId={list.id} listColor={list.color} /> : null}
			{modalToShow()}
		</View>
	);
};


ListItem.propTypes = {
	list: listType.isRequired,
	deleteList: deleteListType.isRequired,
	updateList: updateListType.isRequired,
	expandHandler: funcType.isRequired,
	expanded: boolType.isRequired,
	isDarkTheme: boolType.isRequired
};

const mapStateToProps = ({ theme }) => ({
	isDarkTheme: theme.isDarkTheme
});

export default connect(mapStateToProps, { deleteList, updateList })(withNavigation(ListItem));