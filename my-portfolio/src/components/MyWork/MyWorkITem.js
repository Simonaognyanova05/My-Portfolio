import { Link } from "react-router-dom";

export default function MyWorkItem({project}) {
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
            <div className="white-button mt-auto">
                <Link to="">Edit</Link>
                <Link to="">Delete</Link>
            </div>

        </div>
    );
}