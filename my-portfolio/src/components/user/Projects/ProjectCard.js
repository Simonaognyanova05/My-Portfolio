import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <Link id='project-link' to={`/projectDetails/${project.id}`}>
            <div className="project">
                <img src={project.img} alt="Gallery Image 1" style={{ width: '300px', height: '200px' }} />
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
            </div>
        </Link>
    );
}