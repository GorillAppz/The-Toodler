import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { View, Switch } from 'react-native';

import Text from '../Text';
import StyledModal from '../StyledModal';

import styles from './styles';
import { toggleDarkTheme } from '../../actions/themeActions';
import { boolType, funcType } from '../../types';

const SettingsModal = ({ isVisible, cancelHandler, toggleDarkTheme, isDarkTheme }) => (
	<StyledModal
		isVisible={isVisible}
		title="Settings"
		onBackdropPress={() => cancelHandler()}
		onBackButtonPress={() => cancelHandler()}
	>
		<View style={styles.darkThemeContainer}>
			<Text style={styles.darkThemeText}> Toggle Dark Theme! </Text>
			<Switch
				style={styles.switch}
				onValueChange={(value) => toggleDarkTheme(value)}
				value={isDarkTheme}
			/>
		</View>
		<View>
			<Button
				title="Save"
				style={styles.GoButton}
				onPress={() => cancelHandler()}
			/>
		</View>
	</StyledModal>
);

const mapSateToProps = ({ theme }) => ({
	isDarkTheme: theme.isDarkTheme
});

SettingsModal.propTypes = {
	isVisible: boolType,
	cancelHandler: funcType,
	toggleDarkTheme: funcType,
	isDarkTheme: boolType
};

export default connect(mapSateToProps, { toggleDarkTheme })(SettingsModal);