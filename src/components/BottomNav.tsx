import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomepageRoute = () => <Text>Accueil</Text>;

const SearchRoute = () => <Text>Rechercher</Text>;

const ProfileRoute = () => <Text>Profil</Text>;

const CartRoute = () => <Text>Panier</Text>;

const BottomNav = () => {
    const [index, setIndex] = useState(0);
    const [routes] = React.useState([
        { key: 'homepage', title: 'Accueil', icon: 'queue-music' },
        { key: 'search', title: 'Rechercher', icon: 'album' },
        { key: 'profile', title: 'Profil', icon: 'queue-music' },
        { key: 'cart', title: 'Panier', icon: 'queue-music' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        homepage: HomepageRoute,
        search: SearchRoute,
        profile: ProfileRoute,
        cart: CartRoute
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
}

export default BottomNav;