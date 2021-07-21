import React, { useEffect } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../navigation/AppRoutes';

const LoadingScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            navigation.navigate(user ? AppRoutes.TAB_NAVIGATOR : AppRoutes.SIGNUP_SCREEN);
        })
    });
    return (
        <View>
            <Text>Loading</Text>
            <ActivityIndicator />
            <Image source={require("../../assets/logo.png")} />
        </View>
    );
}

export default LoadingScreen;