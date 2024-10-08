import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../services/admin/loginAdmin';

export default function Login() {
    const navigate = useNavigate();
    const { onLoginAdmin } = useAuth();

    const loginHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { username, password } = Object.fromEntries(formData);

        let adminResult = await loginAdmin(username, password);

        if (adminResult.status === 400) {
            alert('Admin does not exist!');
            return;
        };
        if (adminResult.status === 401) {
            alert('Incorrect password!');
            return;
        };

        let data = await adminResult.json();
        onLoginAdmin(data);
        navigate('/admin/');
    }
    return (
        <section id="admin">
            <div className="content">
                <h2>Admin Login</h2>
                <form onSubmit={loginHandler}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />

                    <input type="submit" value="Login" />
                </form>
            </div>
        </section>
    );
}