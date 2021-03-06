import React from 'react';
import { Input } from 'react-native-elements';

import StyledModal from '../StyledModal';
import ModalActionButtons from '../ModalActionButtons';

import styles from './styles';

import { taskType, numberType, funcType, boolType, stringType } from '../../types';

const initState = {
	fields: {
		name: '',
		description: '',
		listId: '',
		isFinished: false
	},
	errors: {
		name: '',
		description: '',
		color: ''
	}
};

class TaskFormModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initState };
	}

	setStateOnModalShow() {
		const { prevTask, listId } = this.props;
		if (prevTask) {
			this.setState({ fields: { ...prevTask } });
		} else {
			this.setState({ fields: { ...initState.fields, listId }, errors: { ...initState.errors } });
		}
	}

	submitForm() {
		const { submitHandler } = this.props;
		const { fields } = this.state;
		if (!this.validateForm()) { return; }
		submitHandler(fields);
	}

	validateForm() {
		const errors = {};
		const { fields } = this.state;

		if (fields.name.length < 3) {
			errors.name = 'Name must be atleast 3 characters!';
		}

		if (fields.description.length <= 0) {
			errors.description = 'Please enter a description';
		}

		this.setState({ errors: { ...initState.errors, ...errors } });

		return !(Object.keys(errors).length > 0);
	}

	inputHandler(name, value) {
		const { fields } = this.state;
		this.setState({ fields: { ...fields, [name]: value } });
	}

	render() {
		const { fields, errors } = this.state;
		const { isVisible, cancelHandler, title } = this.props;

		return (
			<StyledModal
				title={title}
				isVisible={isVisible}
				onModalShow={() => this.setStateOnModalShow()}
				onBackdropPress={() => cancelHandler()}
				onBackButtonPress={() => cancelHandler()}
			>
				<Input
					label="Name"
					placeholder="Enter task name"
					value={fields.name}
					errorStyle={{ color: 'red' }}
					errorMessage={errors.name}
					maxLength={40}
					onChangeText={(text) => this.inputHandler('name', text)}
					containerStyle={styles.inputContainer}
				/>

				<Input
					label="Description"
					placeholder="Enter description"
					value={fields.description}
					errorStyle={{ color: 'red' }}
					errorMessage={errors.description}
					maxLength={100}
					multiline
					blurOnSubmit
					onChangeText={(text) => this.inputHandler('description', text)}
					containerStyle={styles.inputContainer}
				/>

				<ModalActionButtons
					cancelHandler={() => cancelHandler()}
					submitHandler={() => this.submitForm()}
				/>
			</StyledModal>
		);
	}
}

TaskFormModal.propTypes = {
	title: stringType.isRequired,
	isVisible: boolType.isRequired,
	prevTask: taskType,
	listId: numberType,
	submitHandler: funcType.isRequired,
	cancelHandler: funcType.isRequired
};

export default TaskFormModal;