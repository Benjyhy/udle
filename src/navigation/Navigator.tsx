import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import FeedScreen from '../screens/FeedScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { AppRoutes } from './AppRoutes';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppRoutes.LOADING_SCREEN} component={LoadingScreen} />
            <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={AppRoutes.FEED_SCREEN} component={FeedScreen} />
            <Stack.Screen name={AppRoutes.SIGNUP_SCREEN} component={SignUpScreen} />
        </Stack.Navigator>
    );
}

export default StackNav;