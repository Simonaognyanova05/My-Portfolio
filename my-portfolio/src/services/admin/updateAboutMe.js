import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"; 

export async function updateAboutMe(name, specialty, location, education, description, profileImage) {
    try {
        const docRef = doc(db, "aboutMe", "admin");

        await setDoc(docRef, {
            name,
            specialty,
            location,
            education,
            description,
            profileImage,
        });

        return { status: 200, message: "About Me updated successfully" };
    } catch (error) {
        console.error("Error updating About Me:", error);
        return { status: 500, message: error.message };
    }
}
