import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/RestaurantProducts';
import ProductCard from '../ProductCard';

interface Product {
    price: number,
    title: string,
    img: string,
    id: string
}

const BestSellers = (restauId: any) => {

    const { status, data, error } = useQuery(['best_sellers', restauId.restauId], () => getProducts(restauId.restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }

    const bestSellers = data[0].best_sellers;

    const renderItem = ({ item }: { item: Product }) => (
        <ProductCard
            price={item.price}
            img={item.img}
            title={item.title}
            id={item.id}
        />
    );

    return (
        <View style={styles.container}>
            <Title>Best sellers</Title>
            <SafeAreaView>
                <FlatList
                    data={bestSellers}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    scrollEnabled={false}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: "5%",
        marginRight: "5%"
    }
});

export default BestSellers;