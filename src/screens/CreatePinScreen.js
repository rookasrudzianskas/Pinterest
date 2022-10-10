import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, TextInput, Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {useNhostClient} from "@nhost/react";
import {useNavigation} from "@react-navigation/native";

const CREATE_PIN_MUTATION = `
mutation MyMutation ($image: String!, $title: String) {
  insert_pins(objects: {image: $image, title: $title}) {
    returning {
      created_at
      id
      image
      title
      user_id
    }
  }
}

`;

const CreatePinScreen = () => {
    const [imageUri, setImageUri] = useState(null);
    const [title, setTitle] = useState('');
    const nhost = useNhostClient();
    const navigation = useNavigation();
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 0.6,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    const onSubmit = async () => {
        // @TODO upload the image to the storage bucket
        uploadFile();
        // console.warn('Submit');
        const uploadResult = await uploadFile();
        if(uploadResult.error) {
            Alert.alert('Error', 'Whoops! Uploading the image failed.');
            return;
        }
        const {data, error } = await nhost.graphql.request(CREATE_PIN_MUTATION, { title, image: uploadResult.fileMetadata.id });
        if(error) {
            // console.log(error);
            Alert.alert('Error', 'Whoops! Something went wrong.');
        } else {
            navigation.goBack('');
        }
        console.log(data);
    }

    const uploadFile = async () => {
        if(!imageUri) return { error: { message: 'No image selected' } };
        const parts = imageUri.split('/');
        const name = parts[parts.length - 1];
        const nameParts = name.split('.');
        // this should be fixed
        const extension = nameParts[nameParts.length - 1];
        const uri = Platform.OS === "ios" ? imageUri.replace("file://", "") : imageUri;
        const result = await nhost.storage.upload({
            file: {
                name: name,
                type: `image/${extension}`,
                uri: uri,
            }
        });
        // console.log(result);
        return result;
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} className="mx-5">
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            <View className={`${imageUri && 'border border-blue-200 border-[2px] rounded-xl w-full'}`}>
                {imageUri && <Image source={{ uri: imageUri }} style={{ width: "100%", aspectRatio: 1, borderRadius: 10 }} />}
            </View>
            <TextInput value={title} onChangeText={setTitle} placeholder="Title..." className="py-2 bg-white w-full rounded-lg px-3 mt-5 border border-blue-200 border-[2px]"/>
            <Button title="Submit pin" className="bg-blue-500" onPress={onSubmit} />
        </View>
    );
};

export default CreatePinScreen;
