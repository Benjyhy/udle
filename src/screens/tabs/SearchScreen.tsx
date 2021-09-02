import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Title style={styles.text}>Google Map</Title>
        </View>

    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    text: {
        fontSize: 30
    }
});