import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/RestaurantProducts';

const Meals = (restauId: any) => {
    const { status, data, error } = useQuery(['meals', restauId], () => getProducts(restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }
    return (
        <View>
            <Text>Meals</Text>
            {/* <Text>{data}</Text> */}
        </View>
    );
}

export default Meals;