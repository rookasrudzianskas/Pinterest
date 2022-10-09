import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const Pin = ({pin: {id, title, image}}) => {
    const onLine = () => {

    }

    return (
        <View style={styles.pin}>
            <Image style={styles.image} className="relative" source={{uri: image}} />
            <TouchableOpacity className="absolute bg-[#D3CFD4] rounded-full p-1 bottom-[60px] right-[20px]" onPres={onLine} activeOpacity={0.7}>
                <AntDesign name="hearto" size={22} color="black" />
            </TouchableOpacity>
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
        height: 200,
        borderRadius: 25
    }
})
