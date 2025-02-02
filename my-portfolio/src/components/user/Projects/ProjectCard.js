import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export default function ProjectCard({ project }) {
    const { admin } = useAuth();

    return (
        <>
            <div class="position-relative mb-4">
                <i class="far fa-dot-circle text-primary position-absolute" style={{ top: '2px;', left: '-32px;' }}></i>
                <h5 class="font-weight-bold mb-1">{project.title}</h5>
                <p class="mb-2">{project.subtitle}</p>
                <p>{project.description}</p>
                <a href={project.gitLink} target="_blank" rel="noopener noreferrer">
                    View on GitHub
                </a>
                <p>


                    {Boolean(admin?.email) && (
                        <>
                            <Link
                                className="readedMessage"
                                to={`/update/${project.id}`}
                                style={{ margin: "10px" }}
                            >
                                Edit
                            </Link>
                            <Link
                                className="readedMessage"
                                to={`/delete/${project.id}`}
                                style={{ margin: "10px" }}
                            >
                                Delete
                            </Link>
                        </>
                    )}
                </p>
            </div>

        </>
    );
}