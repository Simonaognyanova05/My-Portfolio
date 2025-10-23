import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export default function AboutItem({ information }) {
    const { admin } = useAuth();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this education??");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "education", information.id));
            alert("Education was successfully deleted..");
            window.location.reload();
        } catch (error) {
            console.error("Error while deleting:", error);
            alert("Error while deleting.");
        }
    };
    return (
        <div className="left-image-post">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-image">
                        <img src={information.img} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-text">
                        <h4>{information.subject}</h4>
                        <p>
                            {information.description}
                        </p>
                        {
                            information.link !== ""
                                ? <div className="white-button">
                                    <a href={information.link}>Read More</a>
                                </div>
                                : ""
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}