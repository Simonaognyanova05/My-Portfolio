import './MyWork.css';
import { Link } from 'react-router-dom';

export default function MyWork() {
    return (
        <section className="section my-work" data-section="section3">
            <div className="container">
                <div className="section-heading">
                    <h2>My Work</h2>
                    <div className="line-dec"></div>
                    <span>Проект от базата данни</span>
                </div>

                <div className="project-card glass">
                    <img
                        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                        alt=""
                        className="project-image"
                    />
                    <div className="project-info">
                        <h3>асдасдасд</h3>
                        <p>садасдсад</p>
                        <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            Виж проекта →
                        </a>
                    </div>
                    <div className="white-button mt-auto">
                        <Link to="">Edit</Link>
                        <Link to="">Delete</Link>
                    </div>

                </div>
            </div>
        </section>
    );
}