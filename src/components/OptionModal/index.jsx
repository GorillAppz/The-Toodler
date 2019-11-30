import React from 'react';
import { Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome5';
import StyledModal from '../StyledModal';

import styles from './styles';
import { stringType, boolType, funcType } from '../../types';

const OptionModal = ({ title, isVisible, deleteHandler, editHandler, cancelHandler, moveHandler }) => (
	<StyledModal
		title={title}
		style={styles.modal}
		isVisible={isVisible}
		animationIn="tada"
		onBackdropPress={() => cancelHandler()}
		onBackButtonPress={() => cancelHandler()}
	>
		<Button
			title="Delete"
			titleStyle={styles.buttonText}
			icon={(
				<Icon
					name="trash-alt"
					size={30}
					color="white"
				/>
			)}
			buttonStyle={{ ...styles.button, ...styles.delete }}
			onPress={() => deleteHandler()}
		/>
		<Button
			title="Edit"
			titleStyle={styles.buttonText}
			buttonStyle={{ ...styles.button, ...styles.edit }}
			icon={(
				<Icon
					name="edit"
					size={30}
					color="white"
				/>
			)}
			onPress={() => editHandler()}
		/>
		{
			moveHandler
				? (
					<Button
						title="Move to other list"
						titleStyle={styles.buttonText}
						buttonStyle={{ ...styles.button, ...styles.move }}
						onPress={() => moveHandler()}
						icon={(
							<Icon
								name="people-carry"
								size={30}
								color="white"
							/>
						)}
					/>
				)
				: null
		}
		<Button
			title="Cancel"
			titleStyle={styles.buttonText}
			buttonStyle={styles.button}
			icon={(
				<Icon
					name="ban"
					size={30}
					color="white"
				/>
			)}
			onPress={() => cancelHandler()}
		/>
	</StyledModal>
);

OptionModal.propTypes = {
	title: stringType.isRequired,
	isVisible: boolType.isRequired,
	deleteHandler: funcType.isRequired,
	cancelHandler: funcType.isRequired,
	editHandler: funcType.isRequired,
	moveHandler: funcType
};

export default OptionModal;