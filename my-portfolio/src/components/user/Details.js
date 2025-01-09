import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { doc, getDoc } from "firebase/firestore"; // Firebase функции
import { db } from "../../config/firebaseConfig"; // Конфигурация на Firebase

export default function Details() {
    const [project, setProject] = useState(null);
    const { projectId } = useParams();
    const { admin } = useAuth();

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const projectRef = doc(db, "projects", projectId);
                const projectSnap = await getDoc(projectRef);

                console.log("Project Snapshot:", projectSnap.exists());  // Проверка дали проектът съществува
                if (projectSnap.exists()) {
                    setProject(projectSnap.data());
                } else {
                    alert("Project not found!");
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
                alert("Failed to fetch project details. Please try again.");
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    if (!project) {
        return <p>Loading project details...</p>;
    }

    return (
        <div className="container-details">
            <header className="header-details">
                <h1 id="details-title">{project.title}</h1>
            </header>
            <main style={{ marginBottom: "30px" }}>
                <div className="project-image">
                    <img src={project.img} alt="Project Image" />
                </div>
                <div className="project-description">
                    <p id="desc">{project.description}</p>
                </div>
                <a href={project.gitLink}>GitHub Link</a>
            </main>
            {Boolean(admin?.username) && (
                <>
                    <Link
                        className="readedMessage"
                        to={`/update/${projectId}`}
                        style={{ margin: "10px" }}
                    >
                        Edit
                    </Link>
                    <Link
                        className="readedMessage"
                        to={`/delete/${projectId}`}
                        style={{ margin: "10px" }}
                    >
                        Delete
                    </Link>
                </>
            )}
        </div>
    );
}
