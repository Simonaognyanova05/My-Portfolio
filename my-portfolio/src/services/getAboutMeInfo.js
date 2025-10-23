import { db } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export async function getAboutMeInfo() {
    try {
        const q = collection(db, "aboutMe");
        const querySnapshot = await getDocs(q);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        // Връща първия (ако е само един документ)
        return items[0] || null;
    } catch (error) {
        console.error("Error while getting aboutMe info: ", error);
        return null;
    }
}
