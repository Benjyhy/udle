import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RestaurantCard = ({ category, distance, img, name }) => {
    return (
        <View>
            <Text>{category}</Text>
            <Text>{distance}</Text>
            <Text>{img}</Text>
            <Text>{name}</Text>
        </View>
    );
}

export default RestaurantCard;