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

