import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Pin from "./Pin";

const MasonryList = ({pins}) => {
    const numRows = 2;
    return (
        <ScrollView contentContainerStyle={{paddingBottom: 0}} showsVerticalScrollIndicator={false}>
            <View className="flex-1 bg-white" style={styles.container}>

                {Array.from(Array(numRows)).map((col, colIndex) => (
                    <View key={colIndex} style={styles.colOne}>
                        {pins.filter((item, index) => index % numRows === colIndex).map((pin, index) => (<Pin key={pin.id} pin={pin} />))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default MasonryList;

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
