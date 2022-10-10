import {ActivityIndicator, Alert, Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import PinsData from '../assets/data/pins';
import { Text, View } from '../components/Themed';
import {Feather} from "@expo/vector-icons";
import MasonryList from "../components/MasonryList";
import {useNhostClient, useSignOut, useUserId} from "@nhost/react";
import {useEffect, useState} from "react";

const GET_USER_QUERY = `
query MyQuery($id: uuid!) {
  user(id: $id) {
    id
    avatarUrl
    displayName
    pins {
      id
      image
      title
      created_at
    }
  }
}
`;


export default function ProfileScreen() {
    const nhost = useNhostClient();
    const {signOut} = useSignOut();
    const userId = useUserId();
    const [user, setUser] = useState(null);

    const fetchUserData = async () => {
        const result = await nhost.graphql.request(GET_USER_QUERY, { id: userId });
        console.log(result);
        if (result.error) {
            Alert.alert("Error fetching the user");
        } else {
            setUser(result.data.user);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    if (!user) {
        return <ActivityIndicator />;
    }

  return (
    <ScrollView className="bg-white pt-5 pb-4 w-[100%]">
      <View className="items-center">
          <Image className="w-40 h-40 bg-blue-600 rounded-full align-center" source={{uri: user.avatarUrl}} />
      </View>
      <View className="text-center items-center justify-center space-y-2 mt-4">
        <Text className='text-lg font-bold text-gray-800'>{user?.displayName}</Text>
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
