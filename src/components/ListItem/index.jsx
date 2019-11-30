import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';
import tinyColor from 'tinycolor2';
import styles from './styles';
import { deleteList, updateList } from '../../actions/listActions';
import OptionModal from '../OptionModal';
import ListFormModal from '../ListFormModal';
import { deleteListType, listType, funcType, boolType, updateListType } from '../../types';
import TaskList from '../TaskList/index';

<<<<<<< HEAD
const ListItem = ({ list, deleteList, updateList, expandHandler, expanded }) => {
	const [activeModal, setActiveModal] = useState('');

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
=======
const ListItem = ({ list, deleteList, expandHandler, expanded, isDarkTheme }) => {
	const [showOptions, toggleOptions] = useState(false);
>>>>>>> 68575c23c7944b179aa8290040d4ee81f9b3a2ee

	const getTextColor = () => (tinyColor(list.color).isDark() ? 'white' : 'black');

	const getBackgroundColor = () => (isDarkTheme ? 'black' : 'white');
	const getInfoColor = () => (isDarkTheme ? 'white' : 'black');

	return (
		<View style={{ ...styles.container, backgroundColor: getBackgroundColor() }}>
			<TouchableHighlight
				onLongPress={() => setActiveModal('option')}
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

<<<<<<< HEAD
export default connect(null, { deleteList, updateList })(withNavigation(ListItem));
=======
const mapStateToProps = (state) => ({
	isDarkTheme: state.isDarkTheme
});

export default connect(mapStateToProps, { deleteList })(withNavigation(ListItem));
>>>>>>> 68575c23c7944b179aa8290040d4ee81f9b3a2ee
