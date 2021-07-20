import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavStack from '../navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAHzf4Q4RbL8Zu0nZ-tDIBhKog5XfdYA1g",
    authDomain: "udle-c3db5.firebaseapp.com",
    projectId: "udle-c3db5",
    storageBucket: "udle-c3db5.appspot.com",
    messagingSenderId: "329469301017",
    appId: "1:329469301017:web:9b3555937fe389e317f588"
};

firebase.initializeApp(firebaseConfig);

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