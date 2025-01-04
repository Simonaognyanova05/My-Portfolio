import { Link } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {

    const { admin } = useAuth();

    const userHeader = (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/admin/login">Admin</Link></li>
        </ul>
    );

    const adminHeader = (
        <ul>
            <li><Link to="/admin/">Home</Link></li>
            <li><Link to="/admin/welcome">Welcome</Link></li>
            <li><Link to="/admin/about">About Me</Link></li>
            <li><Link to="/admin/projects">Projects</Link></li>
            <li><Link to="/admin/contacts">Contact</Link></li>
            <li><Link to="/admin/logout">Logout</Link></li>
        </ul>
    ); 
    return (
        <header>
            <nav>
                {
                    Boolean(admin.email)
                        ? adminHeader
                        : userHeader
                }
            </nav>
        </header>
    );
}