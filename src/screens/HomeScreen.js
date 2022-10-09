import { Text, View } from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import {FlatList, Image, ScrollView} from "react-native";
import {StyleSheet} from "react-native";
import Pin from "../components/Pin";
import PinsData from '../assets/data/pins';

const HomeScreen =({ navigation }) => {
  return (
      <ScrollView contentContainerStyle={{paddingBottom: 100}} showsVerticalScrollIndicator={false}>
          <View className="flex-1" style={styles.container}>
              <View style={{backgroundColor: '#94ffa955', flex: 1}}>
                  <Pin pin={PinsData[0]} />
                  <Pin pin={PinsData[1]} />
                  <Pin pin={PinsData[2]} />
                  <Pin pin={PinsData[3]} />
                  <Pin pin={PinsData[4]} />
                  <Pin pin={PinsData[5]} />
                  <Pin pin={PinsData[6]} />
              </View>
              <View style={{backgroundColor: '#94ffa9', flex: 1}}>
                  <Pin pin={PinsData[1]} />
                  <Pin pin={PinsData[2]} />
                  <Pin pin={PinsData[3]} />
                  <Pin pin={PinsData[4]} />
                  <Pin pin={PinsData[5]} />
                  <Pin pin={PinsData[6]} />
              </View>
          </View>
      </ScrollView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
    },
});
