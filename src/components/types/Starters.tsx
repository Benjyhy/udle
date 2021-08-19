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

const Starters = (restauId: any) => {

    const { status, data, error } = useQuery(['starters', restauId.restauId], () => getProducts(restauId.restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }

    const starters = data[0].starters;
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
            <Title style={globalStyles.title_emphasis}>Starters</Title>
            <SafeAreaView>
                <FlatList
                    data={starters}
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

export default Starters;