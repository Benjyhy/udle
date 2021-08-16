import firebase from "firebase";

export async function getProducts(id: string) {

    let productsList: any = [];

    const snapshot = await firebase.firestore()
        .collection('restaurants')
        .where("id", "==", id)
        .get()

    snapshot.forEach(doc => productsList.push(doc.data()));
    return productsList;
}