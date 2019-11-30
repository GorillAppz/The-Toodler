import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import BoardList from '../../components/BoardList';
import BoardFormModal from '../../components/BoardFormModal';
import { createBoard } from '../../actions/boardActions';
import styles from './styles';
import { createBoardType, boolType } from '../../types';

const Boards = ({ createBoard, isDarkTheme }) => {
	const [showForm, setFormVisibility] = useState(false);

	const submitHandler = (data) => { createBoard(data); setFormVisibility(false); };

	const getBackgroundColor = () => (isDarkTheme ? 'black' : 'white');
	const getButtonColor = () => (isDarkTheme ? '#3f5745' : '#65b879');

	return (
		<View style={{ ...styles.container, backgroundColor: getBackgroundColor() }}>
			<ScrollView style={styles.main}>
				<BoardList />
			</ScrollView>

			<View style={styles.bottom}>
				<Button
					onPressOut={() => setFormVisibility(true)}
					buttonStyle={{ ...styles.addButton, backgroundColor: getButtonColor() }}
					iconRight
					icon={{ name: 'add-circle-outline', color: 'white', size: 45 }}
					title="New Board"
					titleStyle={styles.buttonTitleStyle}
				/>
			</View>

			<BoardFormModal
				isVisible={showForm}
				cancelHandler={() => setFormVisibility(false)}
				submitHandler={submitHandler}
				title="Creating new Board"
			/>
		</View>
	);
};

Boards.propTypes = {
	createBoard: createBoardType.isRequired,
	isDarkTheme: boolType.isRequired
};

Boards.navigationOptions = {
	title: 'Boards'
};

const mapStateToProps = (state) => ({
	isDarkTheme: state.isDarkTheme
});

export default connect(mapStateToProps, { createBoard })(Boards);