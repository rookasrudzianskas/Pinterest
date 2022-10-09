import { Text, View } from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import {Image, ScrollView} from "react-native";
import {StyleSheet} from "react-native";
import Pin from "../components/Pin";
import PinsData from '../assets/data/pins';

const HomeScreen =({ navigation }) => {
  return (
      <View className="flex-1" style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}}>
              {PinsData.map((pin) => (
                  <Pin key={pin.id} pin={pin} />
              ))}
          </ScrollView>
      </View>
  );
}

export default HomeScreen;

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
