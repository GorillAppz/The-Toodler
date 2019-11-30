import React from 'react';
import { Input } from 'react-native-elements';
import { View } from 'react-native';
import { ColorPicker, fromHsv } from 'react-native-color-picker';

import Text from '../Text';
import StyledModal from '../StyledModal';
import ModalActionButtons from '../ModalActionButtons';

import styles from './styles';

import { listType, numberType, funcType, boolType, stringType } from '../../types';

const initState = {
	fields: {
		name: '',
		description: '',
		color: 'blue',
		boardId: null
	},
	errors: {
		name: '',
		description: ''
	}
};

class ListFormModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...initState };
	}

	setStateOnModalShow() {
		const { prevList, boardId } = this.props;
		if (prevList) {
			this.setState({ fields: { ...prevList } });
		} else {
			this.setState({ fields: { ...initState.fields, boardId: boardId || '' }, errors: { ...initState.errors } });
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
			<StyledModal
				title={title}
				isVisible={isVisible}
				onModalShow={() => this.setStateOnModalShow()}
				onBackdropPress={() => cancelHandler()}
				onBackButtonPress={() => cancelHandler()}
			>
				<Input
					label="Name"
					placeholder="Enter list name"
					value={fields.name}
					errorStyle={{ color: 'red' }}
					errorMessage={errors.name}
					maxLength={40}
					onChangeText={(text) => this.inputHandler('name', text)}
					containerStyle={styles.inputContainer}
				/>
				<View style={styles.colorPickerContainer}>
					<Text h5 style={styles.colorPickerTitle}>
						Choose your List Color
					</Text>
					<ColorPicker
						color={fields.color}
						onColorChange={(value) => this.colorChangeHandler(value)}
						style={styles.colorPicker}
					/>
				</View>

				<ModalActionButtons
					submitHandler={() => this.submitForm()}
					cancelHandler={() => cancelHandler()}
				/>
			</StyledModal>
		);
	}
}

ListFormModal.propTypes = {
	title: stringType,
	prevList: listType,
	boardId: numberType,
	submitHandler: funcType.isRequired,
	cancelHandler: funcType.isRequired,
	isVisible: boolType.isRequired
};

export default ListFormModal;