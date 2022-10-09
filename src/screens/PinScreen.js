import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import pinsData from '../assets/data/pins';
import {useSafeAreaInsets} from "react-native-safe-area-context";

const PinScreen = () => {
    const [ratio, setRatio] = useState(1);
    const [clicked, setClicked] = useState(false);
    const insets = useSafeAreaInsets();
    const image = pinsData[1].image;
    // const navigation = useNavigation();


    useEffect(() => {
        if(image) {
            // Here we are using the Image.getSize() method to get the width and height of the image and calculate the ratio.
            Image.getSize(image, (width, height) => setRatio(width / height));
        }
    }, [image]);

    const goBack = () => {
        // console.warn('Go back');
    }


    return (
        <SafeAreaView className="bg-black">
            <View className="h-screen bg-black relative">
                <View className="bg-black mt-4">
                    <Image style={[styles.image, {borderTopLeftRadius: 35, borderTopRightRadius: 35, aspectRatio: ratio}]} source={{uri: image}} />
                    <TouchableOpacity onPress={goBack} className="absolute top-5 left-5" activeOpacity={0.7}>
                        <Ionicons className="" name="chevron-back-outline" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View className="bg-gray-100 flex-1 items-center justify-start pt-4">
                    <Text className="text-xl font-bold mx-8 tracking-wider" style={{lineHeight: 35}}>
                        Harley Davidson Sportster Iron
                        883 Custom ~ Rider & Helmet
                        ModifiedX
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
