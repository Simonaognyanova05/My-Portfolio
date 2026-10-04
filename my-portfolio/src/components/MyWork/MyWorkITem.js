import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export default function MyWorkItem({ project, index, onDelete }) {
    const { admin } = useAuth();
    const [imageFailed, setImageFailed] = useState(false);
    const hasImage = Boolean(project.img?.trim()) && !imageFailed;
    const hasLink = Boolean(project.link?.trim());
    const initials = (project.title || "Project").split(/\s+/).slice(0, 2).map((word) => word[0]).join("").toUpperCase();

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            await deleteDoc(doc(db, "projects", project.id));
            onDelete?.();
        } catch {
            alert("The project could not be deleted.");
        }
    };

    const preview = <>
        {hasImage
            ? <img src={project.img} alt={`${project.title} preview`} loading="lazy" onError={() => setImageFailed(true)} />
            : <div className="work-image-placeholder" aria-hidden="true"><span>{initials}</span><small>PROJECT · {String(index + 1).padStart(2, "0")}</small><i>&lt;/&gt;</i></div>}
        {hasLink && <span className="work-view-project">View project ↗</span>}
    </>;

    return <article className={`work-card ${hasImage ? "has-image" : "no-image"}`} style={{ '--card-index': index % 6 }}>
        {hasLink
            ? <a className="work-image" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`}>{preview}</a>
            : <div className="work-image">{preview}<span className="work-no-link">Case study</span></div>}
        <div className="work-card-content">
            <div className="work-card-number">{String(index + 1).padStart(2, '0')}</div>
            <div><h2>{project.title}</h2><p>{project.description}</p></div>
        </div>
        {Boolean(admin.email) && <div className="work-admin-actions"><Link to={`/editProject/${project.id}`}>Edit</Link><button onClick={handleDelete}>Delete</button></div>}
    </article>;
}
