import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/RestaurantProducts';

const Desserts = (restauId: any) => {
    console.log(restauId);
    const { status, data, error } = useQuery(['desserts', restauId], () => getProducts(restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }

    return (
        <View>
            <Text>Desserts</Text>
            {/* <Text>{data}</Text> */}
        </View>
    );
}

export default Desserts;