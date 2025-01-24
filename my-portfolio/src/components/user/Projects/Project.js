import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../../config/firebaseConfig"; 
import ProjectCard from "./ProjectCard";

export default function Project() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProjects(projectList);
            } catch (error) {
                console.error("Error fetching projects:", error);
                alert("Failed to fetch projects. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects">
            <div className="content">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {loading ? (
                        <h2>Loading projects...</h2>
                    ) : projects.length > 0 ? (
                        projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <h2>There are no existing projects!</h2>
                    )}
                </div>
            </div>
        </section>
    );
}
