import { Text, View } from '../components/Themed';
import {StatusBar} from "expo-status-bar";
import {Image} from "react-native";
import {StyleSheet} from "react-native";

const HomeScreen =({ navigation }) => {
  return (
      <View className="flex-1" style={styles.container}>
        <View style={styles.pin}>
            <Image style={styles.image} className="" source={{uri: 'https://ih1.redbubble.net/image.966976056.3207/ssrco,mhoodiez,mens,101010:01c5ca27c6,front,square_product,600x600-bg,f8f8f8.jpg'}} />
            <Text className="font-bold text-[18px] m-3 text-black">rookas Hoodie</Text>
        </View>
        <StatusBar style="auto" />
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
