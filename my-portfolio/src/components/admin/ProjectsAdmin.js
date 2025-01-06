import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebaseConfig"; 

export default function ProjectsAdmin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const createHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, subtitle, description, gitLink, img } = Object.fromEntries(formData);

        try {
            setLoading(true);

            const docRef = await addDoc(collection(db, "projects"), {
                title,
                subtitle,
                description,
                gitLink,
                img,
                createdAt: new Date(), 
            });

            console.log("Project created with ID: ", docRef.id);
            alert("The project was created successfully!");
            navigate("/admin/projects");
        } catch (error) {
            console.error("Error creating project:", error);
            alert("Failed to create project. Please try again.");
        } finally {
            setLoading(false);
            e.target.reset();
        }
    };

    return (
        <section id="admin">
            <div className="content">
                <h2>Create Project</h2>
                <form onSubmit={createHandler}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="subtitle">Subtitle:</label>
                    <input type="text" id="subtitle" name="subtitle" required />

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" required />

                    <label htmlFor="gitLink">GitHub Link:</label>
                    <input type="text" id="gitLink" name="gitLink" required />

                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="img" required />

                    <button type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create"}
                    </button>
                </form>
            </div>
        </section>
    );
}