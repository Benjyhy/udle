import firebase from "firebase";
import "firebase/auth";

export async function sendOrder(inputs: any) {
    let articles = [];
    let user = firebase.auth().currentUser;
    for (let i = 0; i < inputs.length; i++) {
        let currentObj = {};
        // currentMap.set(i, { title: inputs[i].title, price: inputs[i].price });
        currentObj.title = inputs[i].title;
        currentObj.price = inputs[i].price;
        articles.push(currentObj);
    }
    let order = {
        articles,
        idRestau: inputs[0].restauId,
        idCmd: `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-`,
        idClient: user.uid,
        status: 'attente',
        time: Date.now()
    };

    await firebase.firestore()
        .collection('orders')
        .add(order);
}