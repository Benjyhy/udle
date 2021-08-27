import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { ChevronRightIcon } from './SVGIcons';
import { borderRadius, palette } from '../../styles/base';

const PaymentMethod = () => {
    return (
        <View style={styles.container}>
            <View style={styles.methodContainer}>
                <Image style={styles.imgMethod} source={require("../assets/visa.png")} />
                <View>
                    <Paragraph>VISA CB</Paragraph>
                    <Paragraph>****-4862</Paragraph>
                </View>
            </View>
            <View style={styles.arrow}>
                <ChevronRightIcon />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: palette.lightGrey,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    methodContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '75%'
    },
    imgMethod: {
        width: 90,
        height: 44
    },
    arrow: {
        position: 'absolute',
        right: 20,
        top: "calc(50% - 6px)"
    }
});

export default PaymentMethod;