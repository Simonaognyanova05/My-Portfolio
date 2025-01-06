import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebaseConfig"; 
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
    const navigate = useNavigate();
    const { onLoginAdmin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { email, password } = Object.fromEntries(formData);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            onLoginAdmin({
                _id: user.uid,
                email: user.email
            });

            navigate("/admin/");
        } catch (error) {
            if (error.code === "auth/user-not-found") {
                alert("Admin does not exist!");
            } else if (error.code === "auth/wrong-password") {
                alert("Incorrect password!");
            } else {
                console.error("Login failed:", error);
                alert("Failed to log in. Please try again later.");
            }
        }
    };

    return (
        <section id="admin">
            <div className="content">
                <h2>Admin Login</h2>
                <form onSubmit={loginHandler}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}
