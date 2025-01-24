import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // За извличане на projectId
import { getDetailsProject } from "../../services/user/getDetailsProject";  // Импортиране на service функцията

export default function Details() {
    const [project, setProject] = useState(null);  // Стейт за проекта
    const { projectId } = useParams();  // Извличане на projectId от URL
    const [loading, setLoading] = useState(true);  // За показване на loading състояние

    // Проверка дали projectId е валиден
    useEffect(() => {
        if (projectId) {
            const fetchProject = async () => {
                try {
                    // Извикваме service функцията за да получим данни за проекта
                    const data = await getDetailsProject(projectId);
                    setProject(data);  // Записваме данни в стейта
                } catch (error) {
                    console.error("Failed to fetch project:", error);
                } finally {
                    setLoading(false);  // След като заредим данни, премахваме "loading"
                }
            };

            fetchProject();  // Извикваме функцията
        } else {
            console.error("Invalid projectId.");
        }
    }, [projectId]);  // Стартира отново при промяна на projectId

    // Ако още зареждаме данни
    if (loading) {
        return <p>Loading project details...</p>;
    }

    // Ако проектът не е намерен
    if (!project) {
        return <p>Project not found!</p>;
    }

    return (
        <div className="container-details">
            <header className="header-details">
                <h1 id="details-title">{project.title}</h1>  {/* Показваме заглавието на проекта */}
            </header>
            <main style={{ marginBottom: "30px" }}>
                <div className="project-image">
                    <img src={project.img} alt="Project Image" />  {/* Показваме изображение на проекта */}
                </div>
                <div className="project-description">
                    <p id="desc">{project.description}</p>  {/* Показваме описание */}
                </div>
                {project.gitLink && (
                    <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                )}
            </main>
        </div>
    );
}
