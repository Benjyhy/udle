import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Title } from 'react-native-paper';
import { globalStyles } from '../../styles/global';
import { borderRadius } from '../../styles/base';
import { AddIcon } from '../components/SVGIcons';

interface ProductCardProps {
    price: number,
    img: string,
    title: string,
    id: string
}

const ProductCard = (item: ProductCardProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.overflowHidden}>
                <Image source={{ uri: item.img }} resizeMode="cover" style={styles.image} />
                <Title style={[globalStyles.title_emphasis, globalStyles.fontSizeXS, styles.title]}>{item.title}</Title>
                <View style={styles.infoContainer}>
                    <Text style={[globalStyles.p, globalStyles.fontSizeXS]}>{item.price}€</Text>
                    <View>
                        <AddIcon />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        width: "47.5%",
        borderRadius: borderRadius,
        shadowColor: 'rgba(66, 60, 60, 0.11)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        backgroundColor: "white"
    },
    overflowHidden: {
        overflow: "hidden",
        borderRadius: borderRadius,
    },
    infoContainer: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    image: {
        justifyContent: "center",
        width: "100%",
        height: 150,
        overflow: "hidden",
    },
    title: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10
    }
});

export default ProductCard;