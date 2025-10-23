import { db } from '../config/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export async function getProjectById(id) {
    try {
        const docRef = doc(db, 'projects', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.warn("No project with this ID:", id);
            return null;
        }
    } catch (error) {
        console.error("Error while getting project with this ID:", error);
        return null;
    }
}