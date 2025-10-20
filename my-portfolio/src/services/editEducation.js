import { db } from '../config/firebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';

export async function editEducation(id, updatedData) {
    try {
        const productRef = doc(db, "education", id);
        await updateDoc(productRef, {
            ...updatedData,
            updatedAt: new Date()
        });

        console.log("Education was created successfuly!.");
        return { status: 200, message: "Successfuly updated!" };
    } catch (error) {
        console.error("Error while editing education: ", error.message);
        return { status: 500, message: "Error while editing!" };
    }
}