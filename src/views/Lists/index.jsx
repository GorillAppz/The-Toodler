import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ListList from '../../components/ListList';
import data from '../../resources/data.json';
import styles from './styles';

const Lists = ( navigate ) => {
	const { id }  = navigate.navigation.state.params
	return (
		<View style={styles.main}>
			<ListList lists={data.lists.filter((list) => list.boardId === id )} />
		</View>
	);
}

Lists.propTypes = {
	boardId: PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired
};

export default Lists;