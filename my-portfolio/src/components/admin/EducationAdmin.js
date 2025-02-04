import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../config/firebaseConfig"; 

export default function EducationAdmin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const createHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { title, subtitle, years, description} = Object.fromEntries(formData);

        try {
            setLoading(true);

            const docRef = await addDoc(collection(db, "education"), {
                title,
                subtitle,
                years,
                description,
                createdAt: new Date(), 
            });

            console.log("Education created with ID: ", docRef.id);
            alert("The edication was created successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error creating project:", error);
            alert("Failed to create education. Please try again.");
        } finally {
            setLoading(false);
            e.target.reset();
        }
    };

    return (
        <section id="admin">
            <div className="content">
                <h2>Create Education</h2>
                <form onSubmit={createHandler}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="subtitle">Subtitle:</label>
                    <input type="text" id="subtitle" name="subtitle" required />

                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" required />

                    <label htmlFor="years">Years of studying:</label>
                    <input type="text" id="years" name="years" required />

                    <button type="submit" disabled={loading}>
                        {loading ? "Creating..." : "Create"}
                    </button>
                </form>
            </div>
        </section>
    );
}