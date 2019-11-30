import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from './styles';
import logo from '../../resources/logo.png';
import SettingsModal from '../../components/SettingsModal';

const Main = ({ navigation: { navigate } }) => {
	const [showModal, setShowModal] = useState(false);
	return (
		<ImageBackground source={logo} style={styles.logo} resizeMode="stretch">
			<View>
				<View style={styles.settingContainer}>
					<Button
						onPress={() => setShowModal(true)}
						icon={<Icon name="settings" size={55} color="#33312d" iconStyle={styles.icon} />}
						buttonStyle={{ backgroundColor: 'transparent' }}
					/>
				</View>
				<View style={styles.visitButtonContainer}>
					<Button
						onPress={() => navigate('Boards')}
						buttonStyle={styles.button}
						title="Visit The Toodler!"
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
	headerStyle: {
		backgroundColor: '#7F2982',
		borderBottomColor: 'transparent',
		borderBottomWidth: 0,
		shadowColor: 0,
		elevation: 0
	}
};
export default Main;