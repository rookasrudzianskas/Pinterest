import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, useWindowDimensions, RefreshControl} from 'react-native';
import Pin from "./Pin";

const MasonryList = ({pins, refreshing = false, onRefresh = () => {}}) => {
    const width = useWindowDimensions().width;
    const numColumns = width < 500 ? 2 : 3;
    // const numColumns = Math.ceil(width / 350);
    return (
        <ScrollView contentContainerStyle={{paddingBottom: 0}} showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <View className="flex-1 bg-white" style={styles.container}>
                {Array.from(Array(numColumns)).map((col, colIndex) => (
                    <View key={`column_${colIndex}`} style={styles.colOne}>
                        {pins.filter((item, index) => index % numColumns === colIndex).map((pin, index) => (<Pin key={pin.id} pin={pin} />))}
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


