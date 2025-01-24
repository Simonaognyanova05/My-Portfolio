import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
export async function getHomeData() {
    try {
        const docRef = doc(db, "homePage", "welcomeUser");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.error("No such document in Firestore!");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data from Firestore:", error);
        throw error;
    }
}
