import PinsData from '../assets/data/pins';
import MasonryList from "../components/MasonryList";
import {useEffect} from "react";

const HomeScreen =({ navigation }) => {
    const fetchPins = async () => {
        const { data, error } = await nhost.graphql.request(`
            query { pins {
                     id
                     image
                     created_at
                     title
                     user_id
            } }
        `); };
    useEffect(() => { fetchPins(); }, []);

  return (
      <>
        <MasonryList pins={PinsData} />
      </>
  );
}

export default HomeScreen;

