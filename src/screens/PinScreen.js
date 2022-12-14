import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Alert} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useNhostClient} from "@nhost/react";
import RemoteImage from "../components/RemoteImage";

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
    const [clicked, setClicked] = useState(false);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const route = useRoute();
    const pinId = route?.params?.id;
    const [pin, setPin] = useState(null);
    const nhost = useNhostClient();
    const [imageUri, setImageUri] = useState('');

    const goBack = () => {
        navigation.goBack();
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

    return (
        <SafeAreaView className="bg-black">
            <View className="h-screen bg-black relative">
                <View className="bg-black mt-4">
                    <RemoteImage fileId={pin?.image} />
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
