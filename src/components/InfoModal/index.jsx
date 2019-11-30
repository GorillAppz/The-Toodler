import React from 'react';
import { ScrollView } from 'react-native';

import StyledModal from '../StyledModal';
import Text from '../Text';

import { boolType, funcType } from '../../types';

import howToText from '../../resources/how-to.yml';

const infoModal = ({ isVisible, cancelHandler }) => (
	<StyledModal
		title="Toodler How To"
		isVisible={isVisible}
		onBackdropPress={() => cancelHandler()}
		onBackButtonPress={() => cancelHandler()}
	>
		<ScrollView>

			<Text h3>About</Text>
			{
				howToText.About.map((x) => (
					<Text>
						{x}
					</Text>
				))
			}

			<Text h4>Welcome screen</Text>

			{
				howToText.Home.map((x) => (
					<Text>
						{x}
					</Text>
				))
			}

			<Text h4>Boards Screen</Text>

			{
				howToText.Boards.map((x) => (
					<Text>
						{x}
					</Text>
				))
			}

			<Text h4>Task List & Tasks</Text>

			{
				howToText.TaskLists.map((x) => (
					<Text>
						{x}
					</Text>
				))
			}

		</ScrollView>
	</StyledModal>
);

infoModal.propTypes = {
	isVisible: boolType.isRequired,
	cancelHandler: funcType.isRequired
};

export default infoModal;