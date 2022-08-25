import app from "./app.js";
import { addDoc, collection, getFirestore, getDocs } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js"

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app)
    const hellfireClubCollection = collection(db, "hellfire-club")
    const docRef = await addDoc(hellfireClubCollection, subscription)
    return docRef.id
}


// Retornando dados que estão lá no Database
export async function getHellfireClubSubscriptions() {
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, "hellfire-club");
    const hellfireClubCollectionSnapshot = await getDocs(hellfireClubCollection);
    const subscriptionsList = hellfireClubCollectionSnapshot.docs.map(doc => doc.data());
    return subscriptionsList;
}
