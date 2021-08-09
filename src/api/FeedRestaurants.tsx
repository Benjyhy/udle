import firebase from "firebase";

export async function getRestaurants() {

    let restaurantsList: any = [];

    const snapshot = await firebase.firestore()
        .collection('restaurants')
        .get()

    snapshot.forEach(doc => {
        let currentData = doc.data();
        currentData.id_doc = doc.id;
        restaurantsList.push(currentData);
    });
    return restaurantsList;
}