import { Text, View } from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import {FlatList, Image, ScrollView} from "react-native";
import {StyleSheet} from "react-native";
import Pin from "../components/Pin";
import PinsData from '../assets/data/pins';

const HomeScreen =({ navigation }) => {
  return (
      <View className="flex-1" style={styles.container}>
          <View style={{backgroundColor: '#94ffa955', flex: 1}}>

          </View>
          <View style={{backgroundColor: '#94ffa9', flex: 1}}>

          </View>
      </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
    },
});
