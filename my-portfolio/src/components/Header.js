import { Link } from "react-router-dom";

export default function Header() {
    return (

        <div className="responsive-nav">
            <i className="fa fa-bars" id="menu-toggle"></i>
            <div id="menu" className="menu">
                <i className="fa fa-times" id="menu-close"></i>
                <div className="container">
                    <div className="image">
                        <Link to="#"><img src="https://i.imgur.com/nLkpP29.jpeg" alt="" /></Link>
                    </div>
                    <div className="author-content">
                        <h4>Simona Ognyanova</h4>
                        <span>JavaScript Web Developer</span>
                    </div>
                    <nav className="main-nav" role="navigation">
                        <ul className="main-menu">
                            <li><Link to="/about">About Me</Link></li>
                            <li><Link to="/services">What I’m good at</Link></li>
                            <li><Link to="/my-work">My Work</Link></li>
                            <li><Link to="/contact">Contact Me</Link></li>
                            <li><Link to="/login">Login</Link></li>

                        </ul>
                    </nav>
                    <div className="social-network">
                        <ul className="soial-icons">
                            <li>
                                <Link to="https://fb.com/templatemo"><i className="fa fa-facebook"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-linkedin"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-dribbble"></i></Link>
                            </li>
                            <li>
                                <Link to="#"><i className="fa fa-rss"></i></Link>
                            </li>
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