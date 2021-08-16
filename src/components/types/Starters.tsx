import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/RestaurantProducts';

const Starters = (restauId: any) => {
    const { status, data, error } = useQuery(['starters', restauId], () => getProducts(restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }
    return (
        <View>
            <Text>Starters</Text>
            {/* <Text>{data}</Text> */}
        </View>
    );
}

export default Starters;