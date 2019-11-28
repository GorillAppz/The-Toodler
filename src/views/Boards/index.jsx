import React, { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import BoardList from '../../components/BoardList';
import BoardForm from '../../components/BoardForm';
import { createBoard } from '../../actions/boardActions';

import styles from './styles';

const Boards = ({ createBoard }) => {
	const [showForm, setFormVisibility] = useState(false);

	return (
		<View style={styles.main}>
			<BoardList />

			<Button
				title="Add new!"
				onPress={() => setFormVisibility(true)}
			/>

			<BoardForm
				isVisible={showForm}
				cancelHandler={() => setFormVisibility(false)}
				submitHandler={(data) => createBoard(data)}
			/>
		</View>
	);
};

export default connect(null, { createBoard })(Boards);