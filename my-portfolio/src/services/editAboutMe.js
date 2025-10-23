import { db } from '../config/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export async function editAboutMe(id, data) {
    try {
        const ref = doc(db, "aboutMe", id);
        await updateDoc(ref, data);
        return { status: 200, message: "Successfully updated About Me!" };
    } catch (error) {
        console.error("Error updating About Me:", error);
        return { status: 500, message: "Error updating document." };
    }
}
