import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ImageThumbnail = ({ thumbnailPhoto }) => (
	<Image
		style={styles.image}
		resizeMode="cover"
		source={{ uri: thumbnailPhoto }}
	/>
);

ImageThumbnail.propTypes = {
	thumbnailPhoto: PropTypes.string.isRequired
};

export default ImageThumbnail;