import { useEffect, useState } from "react";
import AboutItem from "./AboutItem";
import { getEducations } from "../../services/getEducations";

export default function About() {
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
        <section className="section about-me" data-section="section1">
            <div className="container">
                <div className="section-heading">
                    <h2>About Me</h2>
                    <div className="line-dec"></div>
                    <span>Let me tell you about my skills and competencies.</span>
                </div>

                {edu.map(x => <AboutItem key={x.id} education={x} />)}
                
            </div>
        </section>
    );
}
