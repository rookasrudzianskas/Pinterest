import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import PinsData from '../assets/data/pins';
import { Text, View } from '../components/Themed';
import {Feather} from "@expo/vector-icons";
import MasonryList from "../components/MasonryList";
import {useNhostClient, useSignOut} from "@nhost/react";

export default function ProfileScreen() {
    const nhost = useNhostClient();
    const {signOut} = useSignOut();
  return (
    <ScrollView className="bg-white pt-5 pb-4 w-[100%]">
      <View className="items-center">
          <Image className="w-40 h-40 bg-blue-600 rounded-full align-center" source={{uri: 'https://yt3.ggpht.com/-CDERLAq3BNY7murpWzg3z9Qde3c9ZrRx59LlLEb1UzKDKZ_ckpTAOlYVQ5TJo9XTgJl2kh9bw=s900-c-k-c0x00ffffff-no-rj'}} />
      </View>
      <View className="text-center items-center justify-center space-y-2 mt-4">
        <Text className='text-lg font-bold text-gray-800'>Rokas Rudzianskas</Text>
        <Text className="font-[600]">110 followers | 256 following</Text>
      </View>
      <View className="absolute top-0 right-1 flex-row items-center justify-end px-7 space-x-2">
        <TouchableOpacity activeOpacity={0.7} onPress={signOut}>
          <Feather name="share" size={21} color="black" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="more-horizontal" size={21} color="black" />
        </TouchableOpacity>
      </View>
        <MasonryList pins={PinsData} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({

});
