import React from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import Text from '../Text';

import styles from './styles.js'

import { stringType, nodeType } from '../../types/index.js';

const StyledModal = ({ title, children, style, ...other }) => (
	<Modal {...other}>
		<View style={{ ...styles.modalContainer, ...style }}>
			<Text h3 style={styles.modalHeader}>
				{title}
			</Text>
			{children}
		</View>
	</Modal>
);

StyledModal.propTypes = {
	title: stringType,
	children: nodeType
}

export default StyledModal;