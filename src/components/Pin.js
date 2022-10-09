import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const Pin = ({pin: {id, title, image}}) => {
    const [ratio, setRatio] = useState(1);

    const onLine = () => {

    }

    return (
        <View style={styles.pin}>
            <View className="relative">
                <Image style={[styles.image, {aspectRatio: ratio}]} className="" source={{uri: image}} />
                <TouchableOpacity className="absolute bg-[#D3CFD4] rounded-full p-1 bottom-[10px] right-[13px]" onPres={onLine} activeOpacity={0.7}>
                    <AntDesign name="hearto" size={17} color="black" />
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
    },
    image: {
        width: '100%',
        borderRadius: 25,
    }
})
