import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ImageThumbnail = ({ thumbnailPhoto, style }) => (
	<View style={style}>
		<Image
			style={styles.image}
			resizeMode="cover"
			source={{ uri: thumbnailPhoto }}
		/>
	</View>
);

ImageThumbnail.propTypes = {
	thumbnailPhoto: PropTypes.string.isRequired
};

export default ImageThumbnail;