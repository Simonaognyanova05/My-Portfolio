import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export default function MyWorkItem({ project }) {
    const { admin } = useAuth();


    const handleDelete = async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this project??");
        if (!confirmDelete) return;

        try {
            await deleteDoc(doc(db, "projects", project.id));
            alert("Project was successfully deleted..");
            window.location.reload();
        } catch (error) {
            console.error("Error while deleting:", error);
            alert("Error while deleting.");
        }
    };
    return (
        <div className="project-card glass">
            <img
                src={project.img}
                alt=""
                className="project-image"
            />
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                >
                    Виж проекта →
                </a>
            </div>

            {
                Boolean(admin.email)
                    ?
                    <div className="white-button mt-auto">
                        <Link to={`/editProject/${project.id}`}>Edit</Link>
                        <Link to="" onClick={handleDelete}>Delete</Link>
                    </div>
                    : ""
            }


        </div>
    );
}