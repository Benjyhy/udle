import React from 'react';
import { View, Text, ScrollView, SafeAreaView, SectionList, StyleSheet, FlatList } from 'react-native';
import { Title } from 'react-native-paper'
import ProductCard from '../components/ProductCard';
import { useQuery } from 'react-query';
import { getProducts } from '../api/RestaurantProducts';
import { globalStyles } from '../../styles/global';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

interface Menu {
    title: "string",
    img: "string",
    id: "string",
    price: number
}

const RestaurantScreen = ({ route }: any) => {

    const { status, data, error } = useQuery(['meals', route.params.restauId], () => getProducts(route.params.restauId));

    if (status === "loading") {
        return <Text>Loading...</Text>
    }

    const renderSection = ({ item }: any) => {
        return (
            <SafeAreaView>
                <FlatList
                    data={item.list}
                    numColumns={2}
                    renderItem={renderListItem}
                    keyExtractor={item => item.title}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginLeft: '5%', marginRight: '5%' }}
                />
            </SafeAreaView>
        )
    }

    const renderListItem = ({ item }: { item: Menu }) => (
        <ProductCard
            title={item.title}
            id={item.id}
            img={item.img}
            price={item.price}
        />
    );

    const meals = data[0].meals;
    const desserts = data[0].desserts;
    const starters = data[0].starters;
    const best_sellers = data[0].best_sellers;

    return (
        <View style={styles.container}>
            <SectionList
                sections={(() => [
                    { title: 'Meilleures ventes', data: [{ title: 'Meilleures ventes', list: best_sellers }] },
                    { title: 'Les entrées', data: [{ title: 'Les entrées', list: starters }] },
                    { title: 'Les plats', data: [{ title: 'Les plats', list: meals }] },
                    { title: 'Les desserts', data: [{ title: 'Les desserts', list: desserts }] }
                ])()}
                renderItem={renderSection}
                renderSectionHeader={({ section }) => <Title style={[globalStyles.title_emphasis, styles.headSections]}>{section.title}</Title>}
                keyExtractor={section => section.title}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    padding: 0,
                    margin: 0
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headSections: {
        backgroundColor: "#fafafa7d",
        paddingLeft: "5%"
    }
});

export default RestaurantScreen;