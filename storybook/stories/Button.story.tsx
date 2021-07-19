import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { borderRadius, palette } from "../../styles/base";

storiesOf('Button', module)
  .add('primary button', () => (
    <Button color={"white"} style={[styles.defaultButton, styles.primaryButton]}>
      <Text>Se connecter</Text>
    </Button>
  ))
  .add('secondary button', () => (
    <Button icon="apple" color={"white"} style={[styles.defaultButton, styles.secondaryButton]}>
      <Text>Sign in with Apple</Text>
    </Button>
  ));

const styles = StyleSheet.create({
  defaultButton: {
    width: "100%",
    borderRadius: borderRadius,
    textTransform: "none",
  },
  primaryButton: {
    backgroundColor: palette.darkGreen
  },
  secondaryButton: {
    backgroundColor: "black"
  }
});
