import React, { useRef, useEffect } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import { Title, Button, Paragraph } from 'react-native-paper';
import { typo, palette } from '../../styles/base';
import { globalStyles } from '../../styles/global';
import PaymentMethod from './PaymentMethod';

interface PopinPaymentProps {
    toggled: boolean,
    togglePopin: any,
    total: number
}

const PopinPayment = ({ toggled, togglePopin, total }: PopinPaymentProps) => {

    const translateYAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            translateYAnim,
            {
                toValue: toggled ? 430 : 0,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }, [translateYAnim]);

    return (
        <TouchableOpacity style={styles.container} onPress={() => togglePopin(false)}>
            <View style={styles.relative}>
                <Animated.View style={[styles.popin, {
                    transform: [{
                        translateY: translateYAnim.interpolate({
                            inputRange: [0, 430],
                            outputRange: ['430px', '0px']
                        })
                    }]
                }]}>
                    <View style={styles.infosContainer}>
                        <PaymentMethod />
                        <Title style={[globalStyles.title_emphasis, globalStyles.title_classic, styles.marginBot]}>Infos commande</Title>
                        <View style={styles.totaux}>
                            <Paragraph style={globalStyles.p}>Sous total</Paragraph>
                            <Paragraph style={globalStyles.p}>{total} €</Paragraph>
                        </View>
                        <View style={styles.totaux}>
                            <Paragraph style={globalStyles.p}>Frais de commande</Paragraph>
                            <Paragraph style={globalStyles.p}>0.50 €</Paragraph>
                        </View>
                        <View style={[styles.totaux, styles.marginVert]}>
                            <Paragraph style={globalStyles.p}>Total</Paragraph>
                            <Paragraph style={styles.totalFinal}>{total + 0.50} €</Paragraph>
                        </View>
                        <Button color={"white"} style={[globalStyles.button, styles.primaryButton]} >
                            <Text style={globalStyles.noTextTransform}>Commander</Text>
                        </Button>
                    </View>

                </Animated.View>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
    relative: {
        position: 'relative',
        height: '100%'
    },
    popin: {
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 430,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        shadowColor: 'rgba(66, 60, 60, 0.11)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    infosContainer: {
        width: "80%",
        marginHorizontal: "auto",
        marginVertical: 0
    },
    primaryButton: {
        backgroundColor: palette.darkGreen,
        width: 200,
        margin: "auto",
        paddingVertical: 5,
        marginTop: 15
    },
    totaux: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    totalFinal: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: typo.labor
    },
    marginVert: {
        marginVertical: 15
    },
    marginBot: {
        marginBottom: 15
    }
});

export default PopinPayment;