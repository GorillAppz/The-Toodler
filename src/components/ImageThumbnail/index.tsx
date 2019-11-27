import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const ImageThumbnail = ({ thumbnailPhoto }): any => (
	<Image
	style={ styles.image }
	resizeMode="cover"
	source={{ uri: thumbnailPhoto }}
	/>
);

export default ImageThumbnail;
