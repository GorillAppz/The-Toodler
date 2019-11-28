import React from 'react';
import Modal from 'react-native-modal';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';


import styles from './styles';

const OptionModal = ({ title, isVisible, deleteHandler, editHandler, cancelHandler }) => (
	<Modal isVisible={isVisible} animationIn="tada">
		<View style={styles.modal}>
			<Text h3 style={styles.title}>{title}</Text>
			<Button
				title="DELETE"
				icon={{ name: 'delete', size: 16, color: 'white' }}
				buttonStyle={{ ...styles.button, ...styles.delete }}
				onPress={() => deleteHandler()}
			/>
			<Button
				title="EDIT"
				buttonStyle={{ ...styles.button, ...styles.edit }}
				onPress={() => editHandler()}
			/>
			<Button
				title="cancel"
				buttonStyle={styles.button}
				onPress={() => cancelHandler()}
			/>
		</View>
	</Modal>
);

export default OptionModal;