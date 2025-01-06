import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../config/firebaseConfig';

export default function About() {
    const [data, setData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, "aboutMe", "admin"); 
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setData(docSnap.data());
                } else {
                    throw new Error("Document does not exist!");
                }
            } catch (err) {
                console.error("Error fetching About Me data:", err);
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section id="about">
            <div className="content">
                <h1>About Me</h1>
                <img src={data.profileImage} alt="Your Photo" className="profile-photo" />
                <p><strong>Name:</strong> {data.name}</p>
                <p><strong>Specialty:</strong> {data.specialty}</p>
                <p><strong>Location:</strong> {data.location}</p>
                <p><strong>Education:</strong> {data.education}</p>
                <p>{data.description}</p>
                <a href="assets/CV.pdf" download className="btn">Download CV</a>
                <a href="https://github.com/Simonaognyanova05" target="_blank" rel="noopener noreferrer" className="btn">View My GitHub</a>
            </div>
        </section>
    );
}
