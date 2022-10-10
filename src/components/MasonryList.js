import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Pin from "./Pin";

const MasonryList = ({pins}) => {
    return (
        <ScrollView contentContainerStyle={{paddingBottom: 0}} showsVerticalScrollIndicator={false}>
            <View className="flex-1 bg-white" style={styles.container}>
                <View style={styles.colOne}>
                    {pins.filter((item, index) => index % 2 === 0).map((pin, index) => (<Pin key={pin.id} pin={pin} />))}
                </View>
                <View style={styles.colTwo}>
                    {pins.filter((item, index) => index % 2 === 1).map((pin, index) => (<Pin key={pin.id} pin={pin} />))}
                </View>
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
