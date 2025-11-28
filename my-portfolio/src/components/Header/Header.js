import { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
    const { admin } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const loggedAdmin = (
        <nav className="main-nav" role="navigation">
            <ul className="main-menu">
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/editAbout">Edit About Me</Link></li>
                <li><Link to="/services">My education</Link></li>
                <li><Link to="/adminEdu">Add education</Link></li>
                <li><Link to="/my-work">My Work</Link></li>
                <li><Link to="/adminServices">Add project</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </nav>
    );

    const unloggedAdmin = (
        <nav className="main-nav" role="navigation">
            <ul className="main-menu">
                <li><Link to="/">About Me</Link></li>
                <li><Link to="/services">My education</Link></li>
                <li><Link to="/my-work">My Work</Link></li>
                <li><Link to="/contact">Contact Me</Link></li>
            </ul>
        </nav>
    );

    return (
        <div className="responsive-nav">
            <i
                className="fa fa-bars"
                id="menu-toggle"
                onClick={() => setMenuOpen(true)}
            ></i>

            <div id="menu" className={`menu ${menuOpen ? "open" : ""}`}>
                <i
                    className="fa fa-times"
                    id="menu-close"
                    onClick={() => setMenuOpen(false)}
                ></i>

                <div className="container">
                    <div className="image">
                        <Link to="#"><img src="https://i.imgur.com/nLkpP29.jpeg" alt="" /></Link>
                    </div>
                    <div className="author-content">
                        <h4>Simona Ognyanova</h4>
                        <span>JavaScript Web Developer</span>
                    </div>

                    {Boolean(admin.email) ? loggedAdmin : unloggedAdmin}

                    <div className="social-network">
                        <ul className="social-icons">
                            <li><Link to="https://fb.com/templatemo"><i className="fa fa-facebook"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-dribbble"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-rss"></i></Link></li>
                        </ul>
                    </div>

                    <div className="copyright-text">
                        <p>Copyright 2019 Reflux Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
