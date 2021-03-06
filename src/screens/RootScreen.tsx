import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from '../navigation/Navigator';
import AppLoading from 'expo-app-loading';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { QueryClient, QueryClientProvider } from 'react-query';
import firebase from 'firebase';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { allReducers } from '../reducers';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const firebaseConfig = {
    apiKey: "AIzaSyAHzf4Q4RbL8Zu0nZ-tDIBhKog5XfdYA1g",
    authDomain: "udle-c3db5.firebaseapp.com",
    projectId: "udle-c3db5",
    storageBucket: "udle-c3db5.appspot.com",
    messagingSenderId: "329469301017",
    appId: "1:329469301017:web:9b3555937fe389e317f588"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}


const queryClient = new QueryClient();

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
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <NavigationContainer>
                        <StackNav />
                    </ NavigationContainer>
                </Provider>
            </QueryClientProvider>
        );
    }
}

export default RootScreen;