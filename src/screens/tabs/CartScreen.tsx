import React from 'react';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

const CartScreen = () => {
    const cart = useSelector((state: RootState) => state.cart);
    console.log(cart);
    return (
        <Text>CartScreen {cart[0].id}</Text>
    )
}

export default CartScreen;