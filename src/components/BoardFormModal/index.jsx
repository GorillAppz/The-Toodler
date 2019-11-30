import React from 'react';
import { Input } from 'react-native-elements';
import { View } from 'react-native';

import StyledModal from '../StyledModal';
import ThumbnailInput from '../ThumbnailInput';
import ModalActionButtons from '../ModalActionButtons';

import styles from './styles';

import { boardType, submitHandlerType, cancelHandlerType, isVisibleType, stringType } from '../../types';

const initState = {
	fields: {
		name: '',
		description: '',
		thumbnailPhoto: ''
	},
	errors: {
		name: '',
		description: '',
		thumbnailPhoto: ''
	}
};

class BoardFormModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = initState;
	}

	setStateOnModalShow() {
		const { prevBoard } = this.props;
		if (prevBoard) {
			this.setState({ fields: prevBoard });
		} else {
			this.setState({ ...initState });
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

		if (fields.thumbnailPhoto.length <= 0 || !fields.thumbnailPhoto) {
			errors.thumbnailPhoto = 'Please enter a thumbnail!';
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
			<View>
				<StyledModal title={title} isVisible={isVisible} onModalShow={() => this.setStateOnModalShow()}>
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
						blurOnSubmit
						onChangeText={(text) => this.inputHandler('description', text)}
						containerStyle={styles.inputContainer}
					/>

					<ThumbnailInput
						currImage={fields.thumbnailPhoto}
						errorMsg={errors.thumbnailPhoto}
						inputHandler={async (image) => this.inputHandler('thumbnailPhoto', image)}
					/>

					<ModalActionButtons
						cancelHandler={() => cancelHandler()}
						submitHandler={() => this.submitForm()}
					/>
				</StyledModal>
			</View>
		);
	}
}

BoardFormModal.propTypes = {
	prevBoard: boardType,
	submitHandler: submitHandlerType.isRequired,
	cancelHandler: cancelHandlerType.isRequired,
	isVisible: isVisibleType.isRequired,
	title: stringType.isRequired
};

export default BoardFormModal;