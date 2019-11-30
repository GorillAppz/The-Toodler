import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import SettingsModal from '../../components/SettingsModal';
import InfoModal from '../../components/InfoModal';

import logo from '../../resources/menu_screen.png';
import styles from './styles';
import { LIGHT } from '../../styles/colors';

const Main = ({ navigation: { navigate } }) => {
	const [activeModal, setActiveModal] = useState('');

	const modalToShow = () => {
		if (activeModal === 'readMe') {
			return (
				<InfoModal
					isVisible
					cancelHandler={() => setActiveModal('')}
				/>
			);
		}
		if (activeModal === 'settings') {
			return (
				<SettingsModal
					isVisible
					cancelHandler={() => setActiveModal('')}
				/>
			);
		}
		return null;
	};

	return (
		<ImageBackground source={logo} style={styles.logo} resizeMode="cover">
			<View style={styles.container}>
				<View style={styles.settingContainer}>
					<Button
						onPress={() => setActiveModal('settings')}
						icon={<Icon name="settings" size={55} color={LIGHT} iconStyle={styles.icon} />}
						buttonStyle={{ backgroundColor: 'transparent' }}
					/>
				</View>
				<View style={styles.bottomButtonContainer}>
					<Button
						onPress={() => navigate('Boards')}
						buttonStyle={styles.button}
						title="Enter The Toodler!"
						titleStyle={styles.buttonTitle}
					/>
					<Button
						onPress={() => setActiveModal('readMe')}
						buttonStyle={styles.readMeButton}
						title="Read Me!"
					/>
				</View>
				{modalToShow()}
			</View>
		</ImageBackground>
	);
};

Main.navigationOptions = {
	navigationOptions: {
		headerShown: false
	},
	headerShown: false
};
export default Main;