import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminEditForm from "./AdminEditForm";
import { getProjectById } from "../services/getProjectById";
import { editProject } from "../services/editProject";

const fields = [
    { name: "title", label: "Project title", placeholder: "Project name", group: "content" },
    { name: "description", label: "Project description", placeholder: "Describe the project, your role, and the outcome", group: "content", multiline: true },
    { name: "link", label: "Project URL", placeholder: "https://your-project.com", group: "media" },
    { name: "img", label: "Cover image URL", placeholder: "https://images.com/project.jpg", group: "media" }
];

export default function EditProject() {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const loadItem = useCallback(() => getProjectById(projectId), [projectId]);
    const saveItem = useCallback((data) => editProject(projectId, data), [projectId]);
    return <AdminEditForm kind="Project" fields={fields} loadItem={loadItem} saveItem={saveItem} onCancel={() => navigate("/my-work")} />;
}
