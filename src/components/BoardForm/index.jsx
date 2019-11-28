import React from 'react';
import Modal from 'react-native-modal';
import { Input, Button } from 'react-native-elements';
import { View } from 'react-native';
import styles from './styles';

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

class BoardForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = initState;
	}

	componentDidMount() {
		const { prevData } = this.props;
		if (prevData) {
			this.setState(prevData);
		} else {
			this.setState(initState);
		}
	}

	validateForm() {
		const errors = {};
		const { fields } = this.state;
		if (fields.name.length < 1) {
			errors.name = 'Please enter a name for the board!';
		}

		if (fields.description.length > 100) {
			errors.description = 'Description too long! Must be 100 characters or less!';
		}

		// if (fields.thumbnailPhoto) {

		// }

		this.setState({ errors });

		return !(Object.keys(errors).length > 0);
	}

	inputHandler(name, value) {
		const { fields } = this.state;
		this.setState({ fields: { ...fields, [name]: value } });
	}

	submitForm() {
		const { submitHandler } = this.props;
		const { fields } = this.state;
		if (this.validateForm()) {
			submitHandler(fields);
		}
	}


	render() {
		const { fields, errors } = this.state;
		const { isVisible, submitHandler, cancelHandler } = this.props;

		return (
			<View style={styles.modal}>
				<Modal
					isVisible={isVisible}
				>
					<View>
						<Input
							label="Name"
							placeholder="Enter board name"
							value={fields.name}
							errorStyle={{ color: 'red' }}
							errorMessage={errors.name}
							onChangeText={(text) => this.inputHandler('name', text)}
						/>
						<Input
							label="Description"
							placeholder="Enter description"
							value={fields.description}
							errorStyle={{ color: 'red' }}
							errorMessage={errors.name}
							onChangeText={(text) => this.inputHandler('description', text)}
						/>
						<Input
							label="Thumbnail Photo URL"
							placeholder="Enter image URL"
							value={fields.thumbnailPhoto}
							errorStyle={{ color: 'red' }}
							errorMessage={errors.name}
							onChangeText={(text) => this.inputHandler('thumbnailPhoto', text)}
						/>

						<View>
							<Button
								title="Cancel"
								onPress={() => cancelHandler()}
							/>

							<Button
								title="Submit"
								onPress={() => submitHandler(fields)}
							/>
						</View>
					</View>

				</Modal>
			</View>
		);
	}
}

export default BoardForm;