import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Logout() {
    const navigate = useNavigate();
    const { onLogoutAdmin } = useAuth();

    onLogoutAdmin();
    navigate('/');
    return null;
}