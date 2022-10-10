import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CreatePinScreen = () => {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.6,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} className="mx-5">
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <View className={`${image && 'border border-blue-200 border-[2px] rounded-xl w-full'}`}>
                {image && <Image source={{ uri: image }} style={{ width: "100%", aspectRatio: 1, borderRadius: 10 }} />}
            </View>
            <TextInput placeholder="Title..." className="py-2 bg-white w-full rounded-lg px-3 mt-5 border border-blue-200 border-[2px]"/>
        </View>
    );
};

export default CreatePinScreen;
