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
            id={item.id}
        />
    );

    return (
        <View style={styles.container}>
            <Title>Restaurants à proximité</Title>
            <SafeAreaView>
                <FlatList
                    style={styles.proximite}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20
    },
    proximite: {
        marginLeft: -20,
        marginRight: -20
    }
});

export default FeedScreen;