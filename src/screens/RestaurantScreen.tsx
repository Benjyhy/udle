import React from 'react';
import { View, Text } from 'react-native';

const RestaurantScreen = ({ route }: any) => {
    const { restauId } = route.params
    return (
        <View>
            <Text>restaurant screen{restauId}</Text>
        </View>
    );
}

export default RestaurantScreen;