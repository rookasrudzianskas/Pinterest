import {Image, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {Feather} from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View className="items-center justify-center flex-1">
      <Image className="w-40 h-40 rounded-full" source={{uri: 'https://yt3.ggpht.com/-CDERLAq3BNY7murpWzg3z9Qde3c9ZrRx59LlLEb1UzKDKZ_ckpTAOlYVQ5TJo9XTgJl2kh9bw=s900-c-k-c0x00ffffff-no-rj'}} />
      <View className="text-center items-center justify-center space-y-2 mt-4">
        <Text className='text-lg font-bold text-gray-800'>Rokas Rudzianskas</Text>
        <Text className="font-[600]">110 followers | 256 following</Text>
      </View>
      <View className="absolute top-5 left-3 flex-row items-center justify-end px-7 space-x-2 w-full">
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="share" size={21} color="black" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather name="more-horizontal" size={21} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({

});
