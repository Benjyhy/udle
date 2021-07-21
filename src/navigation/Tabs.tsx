import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FeedScreen from '../screens/tabs/FeedScreen';
import SearchScreen from '../screens/tabs/SearchScreen';
import ProfileScreen from '../screens/tabs/ProfileScreen';
import CartScreen from '../screens/tabs/CartScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Accueil" component={FeedScreen} />
            <Tab.Screen name="Rechercher" component={SearchScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen} />
            <Tab.Screen name="Panier" component={CartScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;