import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { borderRadius } from '../../styles/base';
import { AddIcon } from '../components/SVGIcons';

interface ProductCardProps {
    price: number,
    img: string,
    title: string,
    id: string
}

const ProductCard = ({ price, img, title, id }: ProductCardProps) => {
    return (
        <View style={styles.listItem}>
            <TouchableOpacity>
                <Image source={{ uri: img }} resizeMode="cover" style={styles.image} />
                <View>
                    <Text>{title}</Text>
                    <Text>{price}</Text>
                    <AddIcon />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: "47.5%",
        borderRadius: borderRadius,
        shadowColor: 'rgba(124, 124, 124, 0.856)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
    image: {
        justifyContent: "center",
        width: "100%",
        height: 200,
        overflow: "hidden",
    },
});

export default ProductCard;