import React, { useState } from 'react';
import { View, FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Title, Button } from 'react-native-paper';
import CartItemCard from '../../components/CartItemCard';
import PopinPayment from '../../components/PopinPayment';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { typo, palette } from '../../../styles/base';
import { globalStyles } from '../../../styles/global';

interface CartItem {
    price: number,
    img: string,
    title: string,
    restauName: string,
    id: string
}

const CartScreen = () => {
    const cart = useSelector((state: RootState) => state.cart);
    let isFilled = cart.length > 0;

    const [popinIsToggled, setPopinIsToggled] = useState(false);
    const [total, setTotal] = useState(0);

    const clearTotal = () => {
        setTotal(0);
    }

    const makeTotal = () => {
        setTotal(total => total + cart.map(item => total + item.price).reduce((prev, next) => prev + next));
    }
    const handlePayButton = () => {
        clearTotal();
        makeTotal();
        setPopinIsToggled(true);

    };

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
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    style={styles.listItem}
                    ListHeaderComponent={isFilled ? () => <Title style={styles.listItemHeader}>Panier</Title> : () => <Text style={styles.listItemHeaderEmpty}>Vous n'avez pas d'article dans votre panier.</Text>}
                />
            </SafeAreaView>
            {isFilled && popinIsToggled === false
                ? <Button icon="cart" color={"white"} style={[globalStyles.button, styles.primaryButton]} onPress={handlePayButton}>
                    <Text style={globalStyles.noTextTransform}>Payer</Text>
                </Button>
                : ''
            }
            {isFilled && popinIsToggled === true
                ? <PopinPayment total={total} toggled={popinIsToggled} togglePopin={(value: any) => setPopinIsToggled(value)} />
                : ''
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative'
    },
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
    },
    primaryButton: {
        backgroundColor: palette.darkGreen,
        width: 200,
        margin: "auto",
        paddingVertical: 5,
        marginTop: 15,
        position: 'absolute',
        bottom: 100,
        left: "calc(50% - 100px)"
    },
});

export default CartScreen;