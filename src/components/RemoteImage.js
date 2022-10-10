import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const RemoteImage = () => {
    return (
        <Image style={[styles.image, {borderTopLeftRadius: 35, borderTopRightRadius: 35, aspectRatio: ratio}]} source={{uri: imageUri}} />
    );
};

export default RemoteImage;
