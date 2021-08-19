import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { useQuery } from 'react-query';
import { getProducts } from '../../api/RestaurantProducts';
import ProductCard from '../ProductCard';
import { globalStyles } from '../../../styles/global';

interface Product {
    price: number,
    title: string,
    img: string,
    id: string
}

const Desserts = (restauId: any) => {

    const { status, data, error } = useQuery(['desserts', restauId.restauId], () => getProducts(restauId.restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }

    const desserts = data[0].desserts;
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
            <Title style={globalStyles.title_emphasis}>Desserts</Title>
            <SafeAreaView>
                <FlatList
                    data={desserts}
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

export default Desserts;