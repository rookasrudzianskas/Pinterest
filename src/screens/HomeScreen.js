import PinsData from '../assets/data/pins';
import MasonryList from "../components/MasonryList";
import {useEffect, useState} from "react";
import {useNhostClient} from "@nhost/react";
import {Alert} from "react-native";

const HomeScreen =({ navigation }) => {
    const [pins, setPins] = useState([]);
    const nhost = useNhostClient();
    const [loading, setLoading] = useState(false);

    const fetchPins = async () => {
        // const response = nhost.graphql.getUrl();
        // console.log(response);
        setLoading(true);
        const { data, error } = await nhost.graphql.request(`
            query { pins {
                     id
                     image
                     created_at
                     title
                     user_id
            } }
        `);
        // console.log(data);
        if(error) {
            Alert.alert('Error', error.message);
        } else {
            setPins(data.pins);
        }
        setLoading(false);
    };
    useEffect(() => { fetchPins(); }, []);

  return (
      <>
        <MasonryList onRefresh={fetchPins} refreshing={loading} pins={pins} />
      </>
  );
}

export default HomeScreen;

