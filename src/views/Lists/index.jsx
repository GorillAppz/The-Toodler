import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ListList from '../../components/ListList';
import styles from './styles';

const Lists = ({ navigation, lists }) => {
	const { id } = navigation.state.params;
	return (
		<View style={styles.main}>
			<ListList lists={lists.filter((list) => list.boardId === id)} />
		</View>
	);
};

Lists.propTypes = {
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			color: PropTypes.string.isRequired,
			boardId: PropTypes.number.isRequired
		}).isRequired
	).isRequired
};

const mapStateToProps = (state) => ({
	lists: state.lists
});

export default connect(mapStateToProps)(Lists);