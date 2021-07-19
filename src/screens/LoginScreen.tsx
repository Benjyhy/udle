
import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Title, Subheading, Button, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../navigation/AppRoutes'
import { palette } from '../../styles/base';
import { globalStyles } from "../../styles/global";

const LoginScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate(AppRoutes.FEED_SCREEN);
    }
    return (
        <View style={styles.container} >
            <Title style={[globalStyles.title_emphasis, globalStyles.title_classic, styles.title]}>Lorem ipsum</Title>
            <Subheading style={[globalStyles.p, styles.alignSelfStart]}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Subheading>
            <TextInput underlineColor={"transparent"} style={globalStyles.textInput} placeholder={"E-mail"} />
            <TextInput underlineColor={"transparent"} style={globalStyles.textInput} placeholder={"Mot de passe"} />
            <Paragraph>Mot de passe oublié&nbsp;?</Paragraph>
            <View style={styles.btns}>
                <Button color={"white"} style={[globalStyles.button, styles.primaryButton]} onPress={handleLogin}>
                    <Text style={globalStyles.noTextTransform}>Se connecter</Text>
                </Button>
                <Paragraph style={styles.ou}>ou</Paragraph>
                <Button icon="apple" color={"white"} style={[globalStyles.button, styles.secondaryButton]}>
                    <Text style={globalStyles.noTextTransform}>Sign in with Apple</Text>
                </Button>
                <Button mode="outlined" icon="google" color={palette.grey} style={[globalStyles.button, styles.secondaryButtonBis]}>
                    <Text style={globalStyles.noTextTransform}>Sign in with Google</Text>
                </Button>
            </View>
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

export default LoginScreen;