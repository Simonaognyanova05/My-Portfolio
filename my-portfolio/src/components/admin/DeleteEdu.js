import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export default function DeleteEdu() {
    const navigate = useNavigate();
    const { eduId } = useParams();

    useEffect(() => {
        const deleteEduFromFirebase = async () => {
            try {
                const eduRef = doc(db, "education", eduId);

                await deleteDoc(eduRef);

                navigate('/');
            } catch (error) {
                console.error("Error deleting education:", error);
                alert("Неуспешно изтриване на образованието!");
            }
        };

        deleteEduFromFirebase();
    }, [eduId, navigate]);

    return null;
}
