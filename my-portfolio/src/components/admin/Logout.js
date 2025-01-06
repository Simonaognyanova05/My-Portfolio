import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; 
import { auth } from "../../config/firebaseConfig"; 
import { useAuth } from "../../contexts/AuthContext";

export default function Logout() {
    const navigate = useNavigate();
    const { onLogoutAdmin } = useAuth();

    useEffect(() => {
        const handleLogout = async () => {
            try {
                await signOut(auth);
                onLogoutAdmin();
                navigate('/');
            } catch (error) {
                console.error("Error logging out:", error);
                alert("Failed to log out. Please try again.");
            }
        };

        handleLogout();
    }, [onLogoutAdmin, navigate]);

    return null;
}
