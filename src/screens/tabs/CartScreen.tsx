import React from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Title } from 'react-native-paper';
import CartItemCard from '../../components/CartItemCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { typo, palette } from '../../../styles/base';

interface CartItem {
    price: number,
    img: string,
    title: string,
    restauName: string,
    id: string
}

const CartScreen = () => {
    const cart = useSelector((state: RootState) => state.cart);

    const renderItem = ({ item }: { item: CartItem }) => (
        <CartItemCard
            price={item.price}
            img={item.img}
            title={item.title}
            restauName={item.restauName}
            item={item}
        />
    );

    return (
        <View>
            <SafeAreaView>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.listItem}
                    ListHeaderComponent={cart.length > 0 ? () => <Title style={styles.listItemHeader}>Panier</Title> : () => <Text style={styles.listItemHeaderEmpty}>Vous n'avez pas d'article dans votre panier.</Text>}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemHeader: {
        alignSelf: 'center',
        paddingVertical: 10,
        fontFamily: typo.emphasis,
        fontWeight: "bold",
        color: palette.grey,
        fontSize: 25
    },
    listItemHeaderEmpty: {
        alignSelf: 'center',
        marginTop: '50%',
        fontSize: 14,
        lineHeight: 18
    },
    listItem: {
        marginHorizontal: 20,
        marginBottom: 150,
        height: '100%'
    }
});

export default CartScreen;