import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editEducation } from "../services/editEducation";
import { getProjectById } from "../services/getProjectById";
import { editProject } from "../services/editProject";

export default function EditProject() {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [project, setProject] = useState({});

    useEffect(() => {
        getProjectById(projectId).then(res => {
            setProject(res);
        });
    }, [projectId]);

    const handleChange = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value,
        });
    };


    const editHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const result = await editProject(projectId, data);

        if (result.status === 200) {
            alert(result.message);
            navigate('/');
        } else {
            alert(result.message);
        }
    };
    return (
        <section className="section contact-me" data-section="section4">
            <div className="container">
                <div className="section-heading">
                    <h2>Edit project</h2>
                    <div className="line-dec"></div>
                    <span>You can edit your project here</span>
                </div>
                <div className="row">
                    <div className="right-content">
                        <div className="container">
                            <form id="contact" onSubmit={editHandler}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="title" type="text" className="form-control" id="title" value={project.title} onChange={handleChange} placeholder="Title..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <textarea name="description" rows="6" className="form-control" id="description" value={project.description} onChange={handleChange} placeholder="Your description..."
                                                required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="link" type="text" className="form-control" id="link" value={project.link} onChange={handleChange} placeholder="Link..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="img" type="text" className="form-control" id="img" value={project.img} onChange={handleChange} placeholder="Image Link..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="button">
                                                Edit Project
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}