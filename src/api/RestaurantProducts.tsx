import firebase from "firebase";

export async function getProducts(id: string, type: string) {

    let productsList: any = [];

    const snapshot = await firebase.firestore()
        .collection('restaurants')
        .doc(id)
        .collection(type)
        .get()

    snapshot.forEach(doc => productsList.push(doc.data()));
    return productsList;
}