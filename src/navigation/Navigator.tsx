import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen';
import { AppRoutes } from './AppRoutes';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={AppRoutes.FEED_SCREEN} component={FeedScreen} />
        </Stack.Navigator>
    );
}

export default StackNav;