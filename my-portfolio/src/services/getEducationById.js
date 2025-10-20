import { db } from '../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export async function getEducationById(id) {
    try {
        const docRef = doc(db, 'education', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.warn("No education with this ID:", id);
            return null;
        }
    } catch (error) {
        console.error("Error while getting education with this ID:", error);
        return null;
    }
}