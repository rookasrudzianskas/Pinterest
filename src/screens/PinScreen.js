import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useNhostClient} from "@nhost/react";

const GET_PIN_QUERY = `
query MyQuery ($id: uuid!) {
              pins_by_pk(id: $id) {
                created_at
                id
                image
                title
                user_id
                user {
                  avatarUrl
                  displayName
                  id
                }
              }
            }`;

const PinScreen = () => {
    const [ratio, setRatio] = useState(1);
    const [clicked, setClicked] = useState(false);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();
    const pinId = route?.params?.id;
    const [pin, setPin] = useState(null);
    const nhost = useNhostClient();
    const [imageUri, setImageUri] = useState('');

    useEffect(() => {
        if(imageUri) {
            // Here we are using the Image.getSize() method to get the width and height of the image and calculate the ratio.
            Image.getSize(imageUri, (width, height) => setRatio(width / height));
        }
    }, [pin]);

    const goBack = () => {
        navigation.goBack();
    }


    const fetchImage = async () => {
        const result = await nhost.storage.getPresignedUrl({
            fileId: pin.image,
        });
        if(result.presignedUrl?.url) {
            setImageUri(result.presignedUrl.url);
        }
        console.log(result);
    }


    const fetchPin = async (pinId) => {
        const {data, error } = await nhost.graphql.request(GET_PIN_QUERY, {id: pinId});
        if(error) {
            // console.log(error);
            Alert.alert('Error', 'Whoops! Something went wrong.');
        } else {
            setPin(data.pins_by_pk);
        }
    }

    useEffect(() => { fetchPin(pinId) ; }, [pinId]);
    useEffect(() => { fetchImage() ; }, [pin]);

    return (
        <SafeAreaView className="bg-black">
            <View className="h-screen bg-black relative">
                <View className="bg-black mt-4">
                    <Image style={[styles.image, {borderTopLeftRadius: 35, borderTopRightRadius: 35, aspectRatio: ratio}]} source={{uri: imageUri}} />
                    <TouchableOpacity onPress={goBack} className="absolute top-5 left-5" activeOpacity={0.7}>
                        <Ionicons className="" name="chevron-back-outline" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View className="bg-gray-100 flex-1 items-center justify-start pt-4">
                    <Text className="text-xl font-bold mx-8 tracking-wider" style={{lineHeight: 35}}>
                        {pin?.title}
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PinScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
    }
});
