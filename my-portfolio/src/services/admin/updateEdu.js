import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"; 

export async function updateEdu(title, subtitle, years, description, eduId) {
    try {
        const eduRef = doc(db, "education", eduId);

        await updateDoc(eduRef, {
            title,
            subtitle,
            years,
            description,
        });

        return { status: 200, message: 'Education updated successfully!' }; 
    } catch (error) {
        console.error("Error updating education:", error);
        return { status: 500, message: 'Failed to update education. Please try again.' }; 
    }
}
