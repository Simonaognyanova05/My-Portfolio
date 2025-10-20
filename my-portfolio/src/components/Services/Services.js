import './Services.css';
import ServicesItem from "./ServicesItem";
import { getEducations } from "../../services/getEducations";
import { useEffect, useState } from "react";


export default function Services() {
    const [edu, setEdu] = useState([]);

    useEffect(() => {
        getEducations()
            .then(res => {
                setEdu(res);
            })
            .catch(err => {
                alert(err);
            })
    }, []);
    return (
        <section className="section my-services" data-section="section2">
            <div className="container">
                <div className="section-heading">
                    <h2>My education</h2>
                    <div className="line-dec"></div>
                    <span>All the courses and trainings I have completed are described here.</span>
                </div>
                <div className="row">
                    {edu.map(x => <ServicesItem key={x.id} education={x} />)}
                </div>
            </div>
        </section>
    );
}