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

        <nav class="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 display-5"><span class="text-primary">Free</span>Folio</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse px-lg-3" id="navbarCollapse">
                <div class="navbar-nav m-auto py-0">
                    <a href="#home" class="nav-item nav-link active">Home</a>
                    <a href="#about" class="nav-item nav-link">About</a>
                    <a href="#qualification" class="nav-item nav-link">Quality</a>
                    <a href="#skill" class="nav-item nav-link">Skill</a>
                    <a href="#service" class="nav-item nav-link">Service</a>
                    <a href="#portfolio" class="nav-item nav-link">Portfolio</a>
                    <a href="#testimonial" class="nav-item nav-link">Review</a>
                    <a href="#blog" class="nav-item nav-link">Blog</a>
                    <a href="#contact" class="nav-item nav-link">Contact</a>
                </div>
                <a href="" class="btn btn-outline-primary d-none d-lg-block">Hire Me</a>
            </div>
        </nav>
    );
}