import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AdminEditForm from "./AdminEditForm";
import { getAboutMeInfo } from "../services/getAboutMeInfo";
import { editAboutMe } from "../services/editAboutMe";

const fields = [
    { name: "subject", label: "Profile headline", placeholder: "Your professional headline", group: "content" },
    { name: "description", label: "About description", placeholder: "Tell visitors about your experience and focus", group: "content", multiline: true },
    { name: "link", label: "Profile URL", placeholder: "https://...", group: "media" },
    { name: "img", label: "Portrait image URL", placeholder: "https://images.com/portrait.jpg", group: "media" }
];

export default function EditAbout() {
    const navigate = useNavigate();
    const loadItem = useCallback(() => getAboutMeInfo(), []);
    const saveItem = useCallback((data) => {
        const { id, ...updates } = data;
        if (!id) return Promise.resolve({ status: 400 });
        return editAboutMe(id, updates);
    }, []);
    return <AdminEditForm kind="Profile" fields={fields} loadItem={loadItem} saveItem={saveItem} onCancel={() => navigate("/")} />;
}
