import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import { borderRadius } from '../../styles/base';
import { DeleteIcon } from './SVGIcons';
import { globalStyles } from '../../styles/global';
import { useDispatch } from 'react-redux';
import { removeItem, unactiveItem } from '../actions';

interface CartItemCardProps {
    price: number,
    img: string,
    title: string,
    restauName: string,
    item: {}
}

const CartItemCard = ({ price, img, title, restauName, item }: CartItemCardProps) => {

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeItem(item));
        dispatch(unactiveItem(item));
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: img }} />
            </View>
            <View style={styles.infosContainer}>
                <Title style={[globalStyles.title_emphasis, globalStyles.p]}>{title}</Title>
                <Paragraph style={globalStyles.fontSizeXS}>{`Chez ${restauName}`}</Paragraph>
                <Paragraph style={globalStyles.fontSizeXS}>{price} €</Paragraph>
            </View>
            <TouchableOpacity style={styles.deleteIconContainer} onPress={handleDelete}>
                <DeleteIcon />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 20,
        shadowColor: 'rgba(66, 60, 60, 0.11)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderRadius: borderRadius,
        position: 'relative'
    },
    imgContainer: {
        borderRadius: borderRadius,
        overflow: 'hidden'
    },
    img: {
        width: 120,
        height: 120
    },
    infosContainer: {
        paddingLeft: 10
    },
    deleteIconContainer: {
        position: 'absolute',
        right: 10,
        bottom: 20
    }
});

export default CartItemCard;