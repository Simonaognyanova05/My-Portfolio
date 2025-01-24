import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"; 

export async function updateProject(title, subtitle, description, gitLink, img, projectId) {
    try {
        const projectRef = doc(db, "projects", projectId);

        await updateDoc(projectRef, {
            title,
            subtitle,
            description,
            gitLink,
            img
        });

        return { status: 200, message: 'Project updated successfully!' }; 
    } catch (error) {
        console.error("Error updating project:", error);
        return { status: 500, message: 'Failed to update project. Please try again.' }; 
    }
}
