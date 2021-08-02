import React from "react";
import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import { TextInput, Title, Subheading, Button, Paragraph } from 'react-native-paper';

import { palette } from '../../../styles/base';
import { globalStyles } from "../../../styles/global";

import RestaurantCard from "../../components/RestaurantCard";

import { useQuery } from "react-query";
import { getRestaurants } from "../../api/FeedRestaurants";

const FeedScreen = () => {
    const { isLoading, isError, data, error } = useQuery('restaurants', getRestaurants);
    if (isLoading) {
        return <Text>Loading...</Text>
    }

    if (isError) {
        return <Text>Error: {error.message}</Text>
    }

    const renderItem = ({ item }) => (
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
            />
        </SafeAreaView>
    );
};

export default FeedScreen;