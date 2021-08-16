import React from 'react';
import { View, Text } from 'react-native';
import Meals from '../components/types/Meals';
import Desserts from '../components/types/Desserts';
import BestSellers from '../components/types/BestSellers';
import Starters from '../components/types/Starters';
// interface meals {
//     id: number,
//     img: string,
//     price: number,
//     title: string
// }

const RestaurantScreen = ({ route }: any) => {
    const restauId = route.params.restauId;
    console.log("route params", restauId);
    return (
        <View>
            <BestSellers restauId={route.params.restauId} />
            <Starters restauId={route.params.restauId} />
            <Meals restauId={route.params.restauId} />
            <Desserts restauId={route.params.restauId} />
        </View>
    );
}

export default RestaurantScreen;