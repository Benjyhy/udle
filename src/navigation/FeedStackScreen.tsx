import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RestaurantScreen from '../screens/RestaurantScreen';
import { AppRoutes } from './AppRoutes';
import FeedScreen from '../screens/tabs/FeedScreen';

const FeedStack = createStackNavigator();

function FeedStackScreen() {
    return (
        <FeedStack.Navigator>
            <FeedStack.Screen name={AppRoutes.FEED_SCREEN} component={FeedScreen} />
            <FeedStack.Screen name={AppRoutes.RESTAURANT_SCREEN} component={RestaurantScreen} />
        </FeedStack.Navigator>
    );
}

export default FeedStackScreen;