import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const Pin = ({pin: {id, title, image}}) => {
    const [ratio, setRatio] = useState(1);
    const [clicked, setClicked] = useState(false);
    const onLine = () => {

    }

    useEffect(() => {
        if(image) {
            // Here we are using the Image.getSize() method to get the width and height of the image and calculate the ratio.
            Image.getSize(image, (width, height) => setRatio(width / height));
        }
    }, [image]);

    return (
        <View style={styles.pin}>
            <View className="relative">
                <Image style={[styles.image, {aspectRatio: ratio}]} className="" source={{uri: image}} />
                <TouchableOpacity onPress={() => setClicked(!clicked)} className="absolute bg-[#D3CFD4] rounded-full p-1 bottom-[10px] right-[13px]" onPres={onLine} activeOpacity={0.7}>
                    {clicked ? <AntDesign name="heart" size={17} color="red" /> : <AntDesign name="hearto" size={17} color="black" />}
                </TouchableOpacity>
            </View>
            <Text className="font-bold text-[18px] m-3 text-black">{title}</Text>
        </View>
    );
};

export default Pin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    pin:{
        width: '100%',
        padding: 4,
    },
    image: {
        width: '100%',
        borderRadius: 25,
    }
})
