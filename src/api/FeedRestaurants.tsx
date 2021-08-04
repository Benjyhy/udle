import firebase from "firebase";

export async function getRestaurants() {

    let restaurantsList: any = [];

    const snapshot = await firebase.firestore()
        .collection('restaurants')
        .get()

    snapshot.forEach(doc => restaurantsList.push(doc.data()));
    return restaurantsList;
}