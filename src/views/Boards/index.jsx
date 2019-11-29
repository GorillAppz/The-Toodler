import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import BoardList from '../../components/BoardList';
import BoardFormModal from '../../components/BoardFormModal';
import { createBoard } from '../../actions/boardActions';

import styles from './styles';
import { createBoardType } from '../../types/index';

const Boards = ({ createBoard }) => {
	const [showForm, setFormVisibility] = useState(false);

	const submitHandler = (data) => { createBoard(data); setFormVisibility(false); };

	return (
		<View style={styles.container}>
			<ScrollView style={styles.main}>
				<BoardList />
			</ScrollView>

			<View style={styles.bottom}>
				<Button
					onPressOut={() => setFormVisibility(true)}
					buttonStyle={styles.addButton}
					iconRight
					icon={{ name: 'add-circle', color: 'white', size: 65 }}
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
	createBoard: createBoardType.isRequired
};

export default connect(null, { createBoard })(Boards);