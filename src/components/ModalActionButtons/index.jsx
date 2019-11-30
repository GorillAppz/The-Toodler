import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

import { funcType } from '../../types';

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

ModalActionButtons.propTypes = {
	cancelHandler: funcType.isRequired,
	submitHandler: funcType.isRequired
};

export default ModalActionButtons;