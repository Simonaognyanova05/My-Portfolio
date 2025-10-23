import { db } from '../config/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export async function editProject(id, updatedData) {
    try {
        const productRef = doc(db, "projects", id);
        await updateDoc(productRef, {
            ...updatedData,
            updatedAt: new Date()
        });

        console.log("Project was updated successfuly!.");
        return { status: 200, message: "Successfuly updated!" };
    } catch (error) {
        console.error("Error while editing projects: ", error.message);
        return { status: 500, message: "Error while editing!" };
    }
}