import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  
import { getDetailsProject } from "../../services/user/getDetailsProject"; 


export default function Details() {
    const { admin } = useAuth();
    const [project, setProject] = useState(null);
    const { projectId } = useParams(); 
    const [loading, setLoading] = useState(true);  

    useEffect(() => {
        if (projectId) {
            const fetchProject = async () => {
                try {
                    const data = await getDetailsProject(projectId);
                    setProject(data);  
                } catch (error) {
                    console.error("Failed to fetch project:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProject(); 
        } else {
            console.error("Invalid projectId.");
        }
    }, [projectId]); 

    if (loading) {
        return <p>Loading project details...</p>;
    }


    if (!project) {
        return <p>Project not found!</p>;
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
                {project.gitLink && (
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                )}

                {Boolean(admin?.email) && (
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
            </main>
        </div>
    );
}
