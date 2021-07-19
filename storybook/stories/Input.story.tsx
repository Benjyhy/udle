import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { borderRadius, palette } from "../../styles/base";

import { storiesOf } from '@storybook/react-native';

storiesOf('Input', module)
    .add('default', () => (
        <TextInput underlineColor={"transparent"} style={styles.defaultInput} placeholder={"E-mail"} />
    ));

const styles = StyleSheet.create({
    defaultInput: {
        width: "100%",
        borderRadius: borderRadius,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: palette.lightGrey,
        height: 40,
        marginBottom: 10,
        marginTop: 10
    }
});