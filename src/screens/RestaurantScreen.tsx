import React from 'react';
import { View, Text, ScrollView, SafeAreaView, SectionList, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Title, Paragraph } from 'react-native-paper'
import ProductCard from '../components/ProductCard';
import { useQuery } from 'react-query';
import { getProducts } from '../api/RestaurantProducts';
import { globalStyles } from '../../styles/global';
import { HeartIcon, StarIcon, WalkingIcon, GeoIcon } from '../components/SVGIcons'
import { borderRadius } from '../../styles/base';

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
                    keyExtractor={item => item.id}
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
            restauId={route.params.restauId}
            restauName={route.params.restauName}
        />
    );

    const DATA = data[0];
    const meals = DATA.meals;
    const desserts = DATA.desserts;
    const starters = DATA.starters;
    const best_sellers = DATA.best_sellers;

    return (
        <ScrollView style={styles.container}>
            <View>
                <ImageBackground source={{ uri: DATA.img }} resizeMode="cover" style={styles.header__img}>
                    <View style={styles.heartContainer}>
                        <HeartIcon on="true" />
                    </View>
                </ImageBackground>
                <View style={styles.header__infos}>
                    <Title style={[globalStyles.title_emphasis, globalStyles.title_classic]}>{DATA.name}</Title>
                    <View style={[styles.tagsContainer, styles.row]}>
                        {DATA.tags.map((tag: string, key: number) => {
                            return (
                                <View style={styles.tags}>
                                    <Paragraph style={[globalStyles.p, styles.overflowHidden]} key={key}>{tag}</Paragraph>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.row, styles.miniCardInfos]}>
                            <StarIcon />
                            <Paragraph style={styles.miniCardInfos__paragraph}>{DATA.grade}</Paragraph>
                        </View>
                        <View style={styles.row}>
                            <WalkingIcon />
                            <Paragraph style={styles.miniCardInfos__paragraph}>{DATA.distance_time} min ({DATA.distance}m)</Paragraph>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.row}>
                            <GeoIcon />
                            <Paragraph style={styles.miniCardInfos__paragraph}>{DATA.address}</Paragraph>
                        </View>
                    </View>
                </View>
            </View>
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
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    header__img: {
        position: "relative",
        width: "100%",
        height: 150
    },
    headSections: {
        backgroundColor: "#fafafa7d",
        paddingLeft: "5%",
        marginBottom: 5
    },
    heartContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 50,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: -20,
        right: 20,
        zIndex: 5
    },
    header__infos: {
        paddingLeft: "5%",
        paddingRight: "5%",
        marginTop: 10,
        marginBottom: 10
    },
    tagsContainer: {
        flexWrap: "wrap"
    },
    tags: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "white",
        marginRight: 10,
        shadowColor: 'rgba(66, 60, 60, 0.11)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        borderRadius: borderRadius
    },
    overflowHidden: {
        overflow: "hidden",
        borderRadius: borderRadius,
    },
    row: {
        flexDirection: "row",
        marginTop: 5
    },
    miniCardInfos: {
        marginRight: 30,
        marginLeft: -2
    },
    miniCardInfos__paragraph: {
        marginLeft: 5
    }
});

export default RestaurantScreen;