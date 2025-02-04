import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export default function DeleteProject() {
    const navigate = useNavigate();
    const { projectId } = useParams();

    useEffect(() => {
        const deleteProjectFromFirebase = async () => {
            try {
                const projectRef = doc(db, "projects", projectId);

                await deleteDoc(projectRef);

                navigate('/');
            } catch (error) {
                console.error("Error deleting project:", error);
                alert("Неуспешно изтриване на проекта!");
            }
        };

        deleteProjectFromFirebase();
    }, [projectId, navigate]);

    return null;
}
