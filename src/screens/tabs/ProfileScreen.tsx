import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/core';
import { AppRoutes } from '../../navigation/AppRoutes';
import { palette } from '../../../styles/base'

const ProfileScreen = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => navigation.navigate(AppRoutes.LOGIN_SCREEN));
    }

    return (
        <View style={styles.container}>
            <Button color="white" style={styles.primaryButton} onPress={handleSignOut}>Se déconnecter</Button>
        </View>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    primaryButton: {
        backgroundColor: palette.darkGreen,
        width: 200,
        margin: "auto",
        paddingVertical: 5
    },
});