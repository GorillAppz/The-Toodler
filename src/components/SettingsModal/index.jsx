import React from 'react';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import { Button, Text } from 'react-native-elements';
import { View, Switch } from 'react-native';
import { toggleDarkTheme } from '../../actions/themeActions';
import styles from './styles';

const SettingsModal = ({ isVisible, cancelHandler, toggleDarkTheme, isDarkTheme }) => (
	<Modal isVisible={isVisible}>
		<View style={styles.darkThemeContainer}>
			<Text style={styles.darkThemeText}> DarkTheme! </Text>
			<Switch
				style={styles.switch}
				onValueChange={(value) => toggleDarkTheme(value)}
				value={isDarkTheme}
			/>
		</View>
		<View>
			<Button
				title="Close Modal"
				style={styles.GoButton}
				onPress={() => cancelHandler()}
			/>
		</View>
	</Modal>
);

const mapSateToProps = (state) => ({
	isDarkTheme: state.isDarkTheme
});

export default connect(mapSateToProps, { toggleDarkTheme })(SettingsModal);