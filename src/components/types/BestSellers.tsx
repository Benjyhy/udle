import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/RestaurantProducts';

const BestSellers = (restauId: any) => {
    console.log('IIDDD', restauId.restauId);
    const { status, data, error } = useQuery(['best_sellers', restauId.restauId], () => getProducts(restauId.restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }
    console.log("DATAAAAAAAAAAAAAAAA", data[0].meals);
    return (
        <View>
            <Text>Best Sellers</Text>
            {/* <Text>{data.map()}</Text> */}
        </View>
    );
}

export default BestSellers;