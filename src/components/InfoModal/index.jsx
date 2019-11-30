import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-elements';

import StyledModal from '../StyledModal';
import Text from '../Text';

import { boolType, funcType } from '../../types';

import howToText from '../../resources/readme.json';
import styles from './styles';

const infoModal = ({ isVisible, cancelHandler }) => (
	<StyledModal
		title="The Toodler"
		isVisible={isVisible}
		onBackdropPress={() => cancelHandler()}
		onBackButtonPress={() => cancelHandler()}
	>
		<ScrollView style={styles.container}>

			<Text style={styles.sectionTitle}>About</Text>
			{
				howToText.About.map((x) => (
					<Text style={styles.sectionText} key={x}>
						{`${x}`}
					</Text>
				))
			}

			<Text style={styles.sectionTitle}>Welcome screen</Text>

			{
				howToText.Home.map((x) => (
					<Text style={styles.sectionText} key={x}>
						{`${x}`}
					</Text>
				))
			}

			<Text style={styles.sectionTitle}>Boards Screen</Text>

			{
				howToText.Boards.map((x) => (
					<Text style={styles.sectionText} key={x}>
						{`${x}`}
					</Text>
				))
			}

			<Text style={styles.sectionTitle}>Task List & Tasks</Text>

			{
				howToText.TaskLists.map((x) => (
					<Text style={styles.sectionText} key={x}>
						{`${x}`}
					</Text>
				))
			}

			<Button
				title="Close"
				style={styles.closeButton}
			/>
		</ScrollView>
	</StyledModal>
);

infoModal.propTypes = {
	isVisible: boolType.isRequired,
	cancelHandler: funcType.isRequired
};

export default infoModal;