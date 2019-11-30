import React from 'react';
import { Text } from 'react-native-elements';

import styles from './styles';

const CustomText = ({ children, style, ...props }) => (
	<Text {...props} style={{ ...style, ...styles.text }}>
		{children}
	</Text>
)

export default CustomText;