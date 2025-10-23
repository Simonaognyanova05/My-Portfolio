import { useEffect, useState } from "react";
import AboutItem from "./AboutItem";
import { getAboutMeInfo } from "../../services/getAboutMeInfo";

export default function About() {
    const [info, setInfo] = useState({});

    useEffect(() => {
        getAboutMeInfo()
        .then(res => {
            setInfo(res);
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

                <AboutItem key={info.id} information={info} />
                
            </div>
        </section>
    );
}
