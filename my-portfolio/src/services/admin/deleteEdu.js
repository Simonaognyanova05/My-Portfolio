import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"; 

export async function deleteEdu(eduId) {
    try {
        const eduRef = doc(db, "education", eduId);

        await deleteDoc(eduRef);

        console.log("Education successfully deleted!");
        return { status: 200 };
    } catch (error) {
        console.error("Error deleting education:", error);
        throw new Error("Failed to delete education");
    }
}
