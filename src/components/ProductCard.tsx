import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { Title } from 'react-native-paper';
import { globalStyles } from '../../styles/global';
import { borderRadius } from '../../styles/base';
import { AddIcon, RemoveIcon } from '../components/SVGIcons';
import { palette } from '../../styles/base'

interface ProductCardProps {
    price: number,
    img: string,
    title: string,
    id: string
}

const ProductCard = (props: any) => {
    const [active, setActive] = useState(false);

    const handlePressProduct = () => {
        setActive(!active);
        if (!active) {
            props.updateCartAdd(props.id);
        } else if (active) {
            props.updateCartRemove(props.id);
        }

    };

    return (
        <Animated.View style={active ? [styles.container, styles.containerActiveBG] : [styles.container, styles.containerBG]}>
            <TouchableOpacity style={styles.overflowHidden} onPress={handlePressProduct}>
                <Image source={{ uri: props.img }} resizeMode="cover" style={styles.image} />
                <Title style={[active ? globalStyles.title_emphasis_light : globalStyles.title_emphasis, globalStyles.fontSizeXS, styles.title]}>{props.title}</Title>
                <View style={styles.infoContainer}>
                    <Text style={[active ? globalStyles.p_light : globalStyles.p, globalStyles.fontSizeXS]}>{props.price}€</Text>
                    <View>
                        {active ? (
                            <RemoveIcon />
                        ) : (
                            <AddIcon />
                        )
                        }
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
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
    },
    containerBG: {
        backgroundColor: "white"
    },
    containerActiveBG: {
        backgroundColor: palette.darkGreen
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