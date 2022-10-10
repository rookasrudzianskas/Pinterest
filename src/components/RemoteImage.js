import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNhostClient} from "@nhost/react";

const RemoteImage = ({fileId}) => {
    const [ratio, setRatio] = useState(1);
    const insets = useSafeAreaInsets();
    const nhost = useNhostClient();
    const [imageUri, setImageUri] = useState('');

    const fetchImage = async () => {
        const result = await nhost.storage.getPresignedUrl({
            fileId: fileId,
        });
        if(result.presignedUrl?.url) {
            setImageUri(result.presignedUrl.url);
        }
        console.log(result);
    }

    useEffect(() => { fetchImage() ; }, [fileId]);

    useEffect(() => {
        if(imageUri) {
            // Here we are using the Image.getSize() method to get the width and height of the image and calculate the ratio.
            Image.getSize(imageUri, (width, height) => setRatio(width / height));
        }
    }, [imageUri]);

    if(!imageUri) {
        return (
            <ActivityIndicator />
        )
    }

    return (
        <Image
            source={{
                uri: imageUri,
            }}
            style={[styles.image, { aspectRatio: ratio }]}
        />
    );
};

export default RemoteImage;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        borderRadius: 15,
    }
});
