import { Link } from "react-router-dom";

export default function Header() {
    return (

        <header>
            <div class="container">
                <nav class="glass">
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <div class="logo">
                            <span>Glossy Touch</span>
                        </div>
                    </Link>
                    <div class="nav-links">
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/contact'>Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}