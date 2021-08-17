import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoadingScreen from '../screens/LoadingScreen';
import Tabs from './Tabs';
import { AppRoutes } from './AppRoutes';

const Stack = createStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={AppRoutes.LOADING_SCREEN} component={LoadingScreen} />
            <Stack.Screen name={AppRoutes.LOGIN_SCREEN} component={LoginScreen} />
            <Stack.Screen name={AppRoutes.TAB_NAVIGATOR} component={Tabs} />
            <Stack.Screen name={AppRoutes.SIGNUP_SCREEN} component={SignUpScreen} />
        </Stack.Navigator>
    );
}

export default StackNav;