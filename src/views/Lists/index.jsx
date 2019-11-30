import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import ListList from '../../components/ListList';
import styles from './styles';
import ListFormModal from '../../components/ListFormModal';
import { createList } from '../../actions/listActions';
import { createListType, boolType } from '../../types';
import { getBackgroundColor, getLargeAddButtonColor } from '../../helpers/themeColors';

const Lists = ({ navigation, createList, isDarkTheme }) => {
	const { id } = navigation.state.params;

	const [showForm, setFormVisibility] = useState(false);

	const submitHandler = (data) => { createList(data); setFormVisibility(false); };

	return (
		<View style={{ ...styles.container, backgroundColor: getBackgroundColor(isDarkTheme) }}>
			<ScrollView style={styles.main}>
				<ListList boardId={id} />
			</ScrollView>

			<View style={styles.bottom}>
				<Button
					onPress={() => setFormVisibility(true)}
					buttonStyle={{ ...styles.addButton, backgroundColor: getLargeAddButtonColor(isDarkTheme) }}
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
				title="Creating new List"
				boardId={id}
			/>
		</View>
	);
};

Lists.propTypes = {
	createList: createListType.isRequired,
	isDarkTheme: boolType.isRequired
};

Lists.navigationOptions = {
	title: 'Lists & Tasks'
};

const mapStateToProps = ({ theme }) => ({
	isDarkTheme: theme.isDarkTheme
});

export default connect(mapStateToProps, { createList })(Lists);