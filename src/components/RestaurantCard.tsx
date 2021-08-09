import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, } from 'react-native-paper';
import { borderRadius } from '../../styles/base';
import { globalStyles } from '../../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../navigation/AppRoutes';

interface RestaurantCardProps {
    category: string,
    distance: string,
    img: string,
    name: string,
    id_doc: string
}

const RestaurantCard = ({ category, distance, img, name, id_doc }: RestaurantCardProps) => {

    const navigation = useNavigation();

    const handleRestaurantCardClick = () => {
        navigation.navigate(AppRoutes.RESTAURANT_SCREEN, { restauId: id_doc });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleRestaurantCardClick}>
                <ImageBackground source={{ uri: img }} resizeMode="cover" style={styles.image}>
                    <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 0, y: 1 }} colors={['#5454542b', '#00000094']} style={styles.linearG}>
                        <Title style={globalStyles.title_emphasis_light}>{name}</Title>
                        <View style={styles.infos}>
                            <Paragraph style={globalStyles.p_light}>{distance} m</Paragraph>
                            <Paragraph style={[globalStyles.p_light, styles.cat]}>{category}</Paragraph>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: -20,
        paddingTop: 30,
        paddingBottom: 30,
        shadowColor: 'rgba(124, 124, 124, 0.856)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
    image: {
        justifyContent: "center",
        width: 300,
        height: 200,
        borderRadius: borderRadius,
        overflow: "hidden",
    },
    linearG: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 10
    },
    infos: {
        flexDirection: "row"
    },
    cat: {
        marginLeft: 10
    }
});

export default RestaurantCard;