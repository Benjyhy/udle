
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Title, Subheading, Button, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../navigation/AppRoutes'
import { palette } from '../../styles/base';
import { globalStyles } from "../../styles/global";
import firebase from "firebase";

const SignUpScreen = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(mail, pwd)
            .then(() => navigation.navigate(AppRoutes.FEED_SCREEN))
            .catch(error => setErrorMessage(error.message));
    }

    const handleTowardsSignIn = () => {
        navigation.navigate(AppRoutes.LOGIN_SCREEN);
    }

    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMessage, setErrorMessage] = useState();

    return (
        <View style={styles.container} >
            {errorMessage && (
                <Text style={{ color: "red" }}>{errorMessage}</Text>
            )}
            <Title style={[globalStyles.title_emphasis, globalStyles.title_classic, styles.title]}>Lorem ipsum</Title>
            <Subheading style={[globalStyles.p, styles.alignSelfStart]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Subheading>
            <TextInput
                underlineColor={"transparent"}
                style={globalStyles.textInput}
                placeholder={"Nom"}
                value={name}
                onChangeText={value => setName(value)}
            />
            <TextInput
                underlineColor={"transparent"}
                style={globalStyles.textInput}
                placeholder={"E-mail"}
                value={mail}
                onChangeText={value => setMail(value)}
            />
            <TextInput
                secureTextEntry
                underlineColor={"transparent"}
                style={globalStyles.textInput}
                placeholder={"Mot de passe"}
                value={pwd}
                onChangeText={value => setPwd(value)}
            />
            <View style={styles.btns}>
                <Button color={"white"} style={[globalStyles.button, styles.primaryButton]} onPress={handleSignUp}>
                    <Text style={globalStyles.noTextTransform}>S'inscrire</Text>
                </Button>
                <Paragraph style={styles.ou}>ou</Paragraph>
                <Button icon="apple" color={"white"} style={[globalStyles.button, styles.secondaryButton]}>
                    <Text style={globalStyles.noTextTransform}>Sign up with Apple</Text>
                </Button>
                <Button mode="outlined" icon="google" color={palette.grey} style={[globalStyles.button, styles.secondaryButtonBis]}>
                    <Text style={globalStyles.noTextTransform}>Sign up with Google</Text>
                </Button>
            </View>
            <TouchableOpacity onPress={handleTowardsSignIn}>
                <Paragraph>Déjà inscrit sur Udle&nbsp;? Se connecter</Paragraph>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: "15%",
        paddingRight: "15%"
    },
    primaryButton: {
        backgroundColor: palette.darkGreen
    },
    secondaryButton: {
        backgroundColor: "black",
    },
    secondaryButtonBis: {
        backgroundColor: "transparent",
        marginTop: 15
    },
    title: {
        alignSelf: "baseline"
    },
    btns: {
        marginTop: 20,
        width: "100%",
        alignItems: "center"
    },
    ou: {
        marginTop: 15,
        marginBottom: 15
    },
    alignSelfStart: {
        alignSelf: "baseline"
    }
});

export default SignUpScreen;