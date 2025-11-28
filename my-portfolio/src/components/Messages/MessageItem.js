import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export default function MessageItem({ message }) {
    const { admin } = useAuth();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this education??");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "messages", message.id));
            alert("Education was successfully deleted..");
            window.location.reload();
        } catch (error) {
            console.error("Error while deleting:", error);
            alert("Error while deleting.");
        }
    };
    return (
        <div className="col-md-6">
            <div className="service-item d-flex flex-column h-100">
                <h4>{message.name}</h4>
                <p>{message.email}</p>
                <div className="flex-grow-1 mb-3">
                    <h5>{message.subject}</h5>
                    <p>
                        {message.message}
                    </p>
                </div>
                {
                    Boolean(admin.email)
                        ? <>
                            <div className="white-button mt-auto">
                                <Link to="" onClick={handleDelete}>Delete</Link>
                            </div>
                        </>
                        : message.link
                            ? <div className="white-button mt-auto">
                                <a href={message.link} target="_blank" rel="noopener noreferrer">
                                    View Certificate
                                </a>
                            </div>
                            : ""
                }
            </div>
        </div>
    );
}
