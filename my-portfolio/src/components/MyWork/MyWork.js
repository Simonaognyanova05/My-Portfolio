import './MyWork.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjects } from '../../services/getProjects';
import MyWorkItem from './MyWorkITem';

export default function MyWork() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjects()
            .then(res => {
                setProjects(res);
            })
            .catch(err => {
                alert(err);
            })
    }, []);
    return (
        <section className="section my-work" data-section="section3">
            <div className="container">
                <div className="section-heading">
                    <h2>My Work</h2>
                    <div className="line-dec"></div>
                    <span>These are all of my projects</span>
                </div>

                {projects.map(x => <MyWorkItem key={x.id} project={x}/>)}
                
            </div>
        </section>
    );
}