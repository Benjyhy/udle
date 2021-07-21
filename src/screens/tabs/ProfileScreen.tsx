import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/core';
import { AppRoutes } from '../../navigation/AppRoutes';

const ProfileScreen = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => navigation.navigate(AppRoutes.LOGIN_SCREEN));
    }

    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button onPress={handleSignOut}>Se déconnecter</Button>
        </View>
    )
}

export default ProfileScreen;