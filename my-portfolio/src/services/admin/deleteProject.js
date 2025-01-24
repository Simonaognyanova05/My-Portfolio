import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"; 

export async function deleteProject(projectId) {
    try {
        const projectRef = doc(db, "projects", projectId);

        await deleteDoc(projectRef);

        console.log("Project successfully deleted!");
        return { status: 200 };
    } catch (error) {
        console.error("Error deleting project:", error);
        throw new Error("Failed to delete project");
    }
}
