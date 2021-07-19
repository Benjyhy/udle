import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavStack from '../navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const RootScreen = () => {

    let [fontsLoaded] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold,
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <NavigationContainer>
                <NavStack />
            </ NavigationContainer>
        );
    }
}

export default RootScreen;