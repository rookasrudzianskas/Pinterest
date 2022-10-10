import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import pinsData from '../assets/data/pins';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";

const PinScreen = () => {
    const [ratio, setRatio] = useState(1);
    const [clicked, setClicked] = useState(false);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();
    const pinId = route?.params?.id;

    const pin = pinsData.find(pin => pin.id === pinId);


    useEffect(() => {
        if(pin?.image) {
            // Here we are using the Image.getSize() method to get the width and height of the image and calculate the ratio.
            Image.getSize(pin.image, (width, height) => setRatio(width / height));
        }
    }, [pin.image]);

    const goBack = () => {
        // console.warn('Go back');
        navigation.goBack();
    }

    return (
        <SafeAreaView className="bg-black">
            <View className="h-screen bg-black relative">
                <View className="bg-black mt-4">
                    <Image style={[styles.image, {borderTopLeftRadius: 35, borderTopRightRadius: 35, aspectRatio: ratio}]} source={{uri: pin.image}} />
                    <TouchableOpacity onPress={goBack} className="absolute top-5 left-5" activeOpacity={0.7}>
                        <Ionicons className="" name="chevron-back-outline" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View className="bg-gray-100 flex-1 items-center justify-start pt-4">
                    <Text className="text-xl font-bold mx-8 tracking-wider" style={{lineHeight: 35}}>
                        {pin.title}
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