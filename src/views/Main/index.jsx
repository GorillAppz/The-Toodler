import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from './styles';
import logo from '../../resources/menu_screen.png';
import SettingsModal from '../../components/SettingsModal';
import { LIGHT } from '../../styles/colors';

const Main = ({ navigation: { navigate } }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<ImageBackground source={logo} style={styles.logo} resizeMode="cover">
			<View>
				<View style={styles.settingContainer}>
					<Button
						onPress={() => setShowModal(true)}
						icon={<Icon name="settings" size={55} color={LIGHT} iconStyle={styles.icon} />}
						buttonStyle={{ backgroundColor: 'transparent' }}
					/>
				</View>
				<View style={styles.visitButtonContainer}>
					<Button
						onPress={() => navigate('Boards')}
						buttonStyle={styles.button}
						title="Enter The Toodler!"
						titleStyle={styles.buttonTitle}
					/>
				</View>
			</View>
			<SettingsModal
				isVisible={showModal}
				cancelHandler={() => setShowModal(false)}
			/>
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