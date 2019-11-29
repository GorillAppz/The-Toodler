import React, { useState } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import ListList from '../../components/ListList';
import styles from './styles';
import ListFormModal from '../../components/ListFormModal';
import { createList } from '../../actions/listActions';

const Lists = ({ navigation, lists, createList }) => {
	const { id } = navigation.state.params;

	const [showForm, setFormVisibility] = useState(false);

	const submitHandler = (data) => { createList(data); setFormVisibility(false); };

	return (
		<View style={styles.main}>
			<ListList lists={lists.filter((list) => list.boardId === id)} />

			<View style={styles.bottom}>
				<Button
					onPressOut={() => setFormVisibility(true)}
					buttonStyle={styles.addButton}
					iconRight
					icon={{ name: 'add-circle', color: 'white', size: 75 }}
				/>
			</View>

			<ListFormModal
				isVisible={showForm}
				cancelHandler={() => setFormVisibility(false)}
				submitHandler={submitHandler}
				title="Creating new list"
				boardId={id}
			/>
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

export default connect(mapStateToProps, { createList })(Lists);