import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEducationById } from "../services/getEducationById";
import { editEducation } from "../services/editEducation";

export default function EditEducation() {
    const navigate = useNavigate();
    const { eduId } = useParams();
    const [education, setEducation] = useState({});

    useEffect(() => {
        getEducationById(eduId).then(res => {
            setEducation(res);
        });
    }, [eduId]);

    const handleChange = (e) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value,
        });
    };


    const editHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        const result = await editEducation(eduId, data);

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
                    <h2>Edit education</h2>
                    <div className="line-dec"></div>
                    <span>You can edit your education here</span>
                </div>
                <div className="row">
                    <div className="right-content">
                        <div className="container">
                            <form id="contact" onSubmit={editHandler}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="subject" type="text" className="form-control" id="subject" value={education.subject} onChange={handleChange} placeholder="Subject..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <textarea name="description" rows="6" className="form-control" id="description" value={education.description} onChange={handleChange} placeholder="Your description..."
                                                required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="link" type="text" className="form-control" id="link" value={education.link} onChange={handleChange} placeholder="Link..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="img" type="text" className="form-control" id="img" value={education.img} onChange={handleChange} placeholder="Image Link..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="button">
                                                Edit Education
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