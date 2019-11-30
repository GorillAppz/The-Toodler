import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

const ModalActionButtons = ({ cancelHandler, submitHandler }) => (
	<View style={styles.buttonsContainer}>
		<Button
			title="Cancel"
			onPress={() => cancelHandler()}
			buttonStyle={styles.button}
			containerStyle={styles.buttonContainer}
		/>
		<Button
			title="Save"
			onPress={() => submitHandler()}
			buttonStyle={{ ...styles.button, ...styles.saveButton }}
			containerStyle={styles.buttonContainer}
		/>
	</View>
);


export default ModalActionButtons;