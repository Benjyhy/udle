import React from 'react';
import { Title, Subheading, Paragraph } from 'react-native-paper';
import { Text, StyleSheet } from 'react-native';
import { palette, typo } from "../../styles/base";

import { storiesOf } from '@storybook/react-native';

storiesOf('Text', module)
    .add('Default Text', () => (
        <Paragraph style={[styles.defaultText, styles.fontM]}>
            Sign in with Apple
        </Paragraph>
    ))
    .add('Small Text', () => (
        <Text style={[styles.defaultText, styles.fontS]}>
            <Text>Sign in with Apple</Text>
        </Text>
    ))
    .add('Emphasis Text', () => (
        <Title style={[styles.defaultText, styles.title_emphasis, styles.fontL]}>
            Lorem ipsum
        </Title>
    ))
    .add('Sub Title', () => (
        <Subheading style={[styles.defaultText, styles.fontM]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Subheading>
    ));

const styles = StyleSheet.create({
    defaultText: {
        textTransform: "none",
        color: palette.grey,
        fontFamily: typo.labor
    },
    title_emphasis: {
        fontFamily: typo.emphasis,
        fontWeight: "bold"
    },
    fontXL: {
        fontSize: 35
    },
    fontL: {
        fontSize: 25
    },
    fontM: {
        fontSize: 16
    },
    fontS: {
        fontSize: 14
    }
});