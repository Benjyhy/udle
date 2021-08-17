import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedStackScreen from './FeedStackScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import CartScreen from '../screens/tabs/CartScreen';
import { palette } from '../../styles/base';
import { HomeTabIcon, SearchTabIcon, CartTabIcon, ProfileTabIcon } from '../components/SVGIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    backgroundColor: "#ffffff",
                    borderRadius: 25,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    height: 65,
                    ...styles.shadow
                },
            }}
        >
            <Tab.Screen
                name="Accueil"
                component={FeedStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabItem}>
                            <HomeTabIcon focus={focused} />
                            <Text style={[styles.tabItem__text, { color: focused ? palette.darkGreen : palette.lightGrey }]}>Accueil</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Rechercher"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabItem}>
                            <SearchTabIcon focus={focused} />
                            <Text style={[styles.tabItem__text, { color: focused ? palette.darkGreen : palette.lightGrey }]}>Rechercher</Text>
                        </View>
                    ),
                }}

            />
            <Tab.Screen
                name="Panier"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabItem}>
                            <CartTabIcon focus={focused} />
                            <Text style={[styles.tabItem__text, { color: focused ? palette.darkGreen : palette.lightGrey }]}>Commandes</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profil"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabItem}>
                            <ProfileTabIcon focus={focused} />
                            <Text style={[styles.tabItem__text, { color: focused ? palette.darkGreen : palette.lightGrey }]}>Profil</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "rgba(0, 0,0, 0.3)",
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5
    },
    tabItem: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
    },
    tabItem__text: {
        fontSize: 12,
        marginTop: 5
    }
});

export default Tabs;