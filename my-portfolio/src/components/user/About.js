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
        <div class="container-fluid py-5" id="about">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6;'}}>About</h1>
                    <h1 class="position-absolute text-uppercase text-primary">About Me</h1>
                </div>
                <div class="row align-items-center">
                    <div class="col-lg-5 pb-4 pb-lg-0">
                        <img class="img-fluid rounded w-100" src={data.profileImage} alt="" />
                    </div>
                    <div class="col-lg-7">
                        <h3 class="mb-4">{data.specialty}</h3>
                        <p>{data.description}</p>
                        <div class="row mb-3">
                            <div class="col-sm-6 py-2"><h6>Name: <span class="text-secondary">{data.name}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Specialty: <span class="text-secondary">{data.specialty}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Location: <span class="text-secondary">{data.location}</span></h6></div>
                            <div class="col-sm-6 py-2"><h6>Education: <span class="text-secondary">{data.education}</span></h6></div>
                        </div>
                        <a href="https://github.com/Simonaognyanova05" class="btn btn-outline-primary">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
