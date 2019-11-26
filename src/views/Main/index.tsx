import React from 'react';
import { View, Text, Image } from 'react-native';
import logo from '../../resources/pen-2294478_1280.jpg';
import styles from './styles';

const Main = () => {
    return (
        <View style={ styles.container }>
            <Image style={ styles.logo } source={ logo } />
            <Text>Reorganize your life with The-Toodler!</Text>
        </View>
    );
}

export default Main;
