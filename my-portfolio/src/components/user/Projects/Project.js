import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebaseConfig";
import ProjectCard from "./ProjectCard";
import EducationCard from "./EducationCard";

export default function Project() {
    const [projects, setProjects] = useState([]);
    const [education, setEducations] = useState([]);
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

        const fetchEducation = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "education"));
                const edicationList = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setEducations(edicationList);
            } catch (error) {
                console.error("Error fetching education:", error);
                alert("Failed to fetch education. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
        fetchEducation();
    }, []);

    return (
        <div class="container-fluid py-5" id="qualification">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6;' }}>Quality</h1>
                    <h1 class="position-absolute text-uppercase text-primary">Education & Expericence</h1>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h3 class="mb-4">My Education</h3>
                        <div class="border-left border-primary pt-2 pl-4 ml-2">
                            {loading ? (
                                <h2>Loading projects...</h2>
                            ) : education.length > 0 ? (
                                education.map(education => (
                                    <EducationCard key={education.id} education={education} />
                                ))
                            ) : (
                                <h2>There are no existing educations!</h2>
                            )}
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <h3 class="mb-4">My Expericence</h3>
                        <div class="border-left border-primary pt-2 pl-4 ml-2">
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
                </div>
            </div>
        </div>
    );
}
