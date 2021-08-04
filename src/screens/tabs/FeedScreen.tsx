import React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList, StatusBar } from 'react-native';
import { TextInput, Title, Subheading, Button, Paragraph } from 'react-native-paper';

import { palette } from '../../../styles/base';
import { globalStyles } from "../../../styles/global";

import RestaurantCard from "../../components/RestaurantCard";

import { useQuery } from "react-query";
import { getRestaurants } from "../../api/FeedRestaurants";
interface Restaurant {
    category: string,
    distance: string,
    img: string,
    name: string,
    id: string
}
const FeedScreen = () => {
    const { status, data } = useQuery('restaurants', getRestaurants);
    if (status === "loading") {
        return <Text>Loading...</Text>
    }

    const renderItem = ({ item }: { item: Restaurant }) => (
        <RestaurantCard
            category={item.category}
            distance={item.distance}
            img={item.img}
            name={item.name}
        />
    );

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
            />
        </SafeAreaView>
    );
};

export default FeedScreen;