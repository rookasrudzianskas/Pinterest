import {StyleSheet} from "react-native";
import PinsData from '../assets/data/pins';
import MasonryList from "../components/MasonryList";

const HomeScreen =({ navigation }) => {
  return (
      <>
        <MasonryList pins={PinsData} />
      </>
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
