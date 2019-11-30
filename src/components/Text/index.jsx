import React from 'react';
import { ViewPropTypes } from 'react-native';
import { Text } from 'react-native-elements';

import styles from './styles';
import { nodeType } from '../../types';

const CustomText = ({ children, style, ...props }) => (
	<Text {...props} style={{ ...style, ...styles.text }}>
		{children}
	</Text>
);

CustomText.propTypes = {
	children: nodeType,
	style: ViewPropTypes.style
};

export default CustomText;