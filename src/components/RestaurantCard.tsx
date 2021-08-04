import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface RestaurantCardProps {
    category: string,
    distance: string,
    img: string,
    name: string,
}

const RestaurantCard = ({ category, distance, img, name }: RestaurantCardProps) => {
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