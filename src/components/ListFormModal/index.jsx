import React from 'react';
import Modal from 'react-native-modal';
import { Input, Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';

import styles from './styles';

const initState = {
	fields: {
		name: '',
		description: '',
		color: '',
		boardId: null
	},
	errors: {
		name: '',
		description: '',
		color: ''
	}
};

class ListFormModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initState, boardId: props.boardId };
	}

	setStateOnModalShow() {
		const { prevData, boardId } = this.props;
		if (prevData) {
			this.setState({ fields: { ...prevData, boardId } });
		} else {
			this.setState({ fields: { ...initState.fields, boardId }, errors: { ...initState.errors } });
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

		this.setState({ errors: { ...initState.errors, ...errors } });

		return !(Object.keys(errors).length > 0);
	}

	inputHandler(name, value) {
		const { fields } = this.state;
		this.setState({ fields: { ...fields, [name]: value } });
	}

	colorChangeHandler(value) {
		this.inputHandler('color', fromHsv(value));
	}

	render() {
		const { fields, errors } = this.state;
		const { isVisible, cancelHandler, title } = this.props;

		return (
			<View>
				<Modal isVisible={isVisible} onModalShow={() => this.setStateOnModalShow()}>
					<View style={styles.modal}>
						<Text h3 style={styles.title}>{title}</Text>
						<Input
							label="Name"
							placeholder="Enter board name"
							value={fields.name}
							errorStyle={{ color: 'red' }}
							errorMessage={errors.name}
							maxLength={40}
							onChangeText={(text) => this.inputHandler('name', text)}
							containerStyle={styles.inputContainer}
						/>


						<Input
							label="Description"
							placeholder="Enter description (optional)"
							value={fields.description}
							errorStyle={{ color: 'red' }}
							errorMessage={errors.description}
							maxLength={100}
							multiline
							onChangeText={(text) => this.inputHandler('description', text)}
							containerStyle={styles.inputContainer}
						/>

						<TriangleColorPicker
							color={fields.color}
							onColorChange={(value) => this.colorChangeHandler(value)}
							style={{ height: 200 }}
						/>

						<View style={styles.buttonsContainer}>
							<Button title="Cancel" onPress={() => cancelHandler()} />
							<Button
								title="Submit"
								buttonStyle={styles.submitButton}
								onPress={() => this.submitForm()}
							/>
						</View>
					</View>

				</Modal>
			</View>
		);
	}
}

export default ListFormModal;