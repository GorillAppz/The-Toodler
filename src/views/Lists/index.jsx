import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import ListList from '../../components/ListList';
import styles from './styles';
import ListFormModal from '../../components/ListFormModal';
import { createList } from '../../actions/listActions';
import { createListType } from '../../types';

const Lists = ({ navigation, createList }) => {
	const { id } = navigation.state.params;

	const [showForm, setFormVisibility] = useState(false);

	const submitHandler = (data) => { createList(data); setFormVisibility(false); };

	return (
		<View style={styles.container}>
			<ScrollView style={styles.main}>
				<ListList boardId={id} />
			</ScrollView>

			<View style={styles.bottom}>
				<Button
					onPressOut={() => setFormVisibility(true)}
					buttonStyle={styles.addButton}
					iconRight
					icon={{ name: 'add-circle-outline', color: 'white', size: 45 }}
					title="New List"
					titleStyle={styles.buttonTitleStyle}
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
	createList: createListType.isRequired
};

Lists.navigationOptions = {
	title: 'Lists'
};

export default connect(null, { createList })(Lists);