import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminEditForm from "./AdminEditForm";
import { getEducationById } from "../services/getEducationById";
import { editEducation } from "../services/editEducation";

const fields = [
    { name: "subject", label: "Course or qualification", placeholder: "Course name", group: "content" },
    { name: "description", label: "Description", placeholder: "Describe what you studied and learned", group: "content", multiline: true },
    { name: "link", label: "Certificate URL", placeholder: "https://certificate.com/...", group: "media" },
    { name: "img", label: "Image URL", placeholder: "https://images.com/cover.jpg", group: "media" }
];

export default function EditEducation() {
    const navigate = useNavigate();
    const { eduId } = useParams();
    const loadItem = useCallback(() => getEducationById(eduId), [eduId]);
    const saveItem = useCallback((data) => editEducation(eduId, data), [eduId]);
    return <AdminEditForm kind="Education" fields={fields} loadItem={loadItem} saveItem={saveItem} onCancel={() => navigate("/services")} />;
}
