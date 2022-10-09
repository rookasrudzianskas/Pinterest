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
              <View style={styles.colOne}>
                  {PinsData.filter((item, index) => index % 2 === 0).map((pin, index) => (<Pin key={pin.id} pin={pin} />))}
              </View>
              <View style={styles.colTwo}>
                  {PinsData.filter((item, index) => index % 2 === 1).map((pin, index) => (<Pin key={pin.id} pin={pin} />))}
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
    colOne: {
        flex: 1,
    },
    colTwo: {
        flex: 1,
    }
});
