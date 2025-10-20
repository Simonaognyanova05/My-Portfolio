import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function AboutItem({ education }) {
    const { admin } = useAuth();


    return (
        <div className="left-image-post">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-image">
                        <img src={education.img} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-text">
                        <h4>{education.subject}</h4>
                        <p>
                            {education.description}
                        </p>
                        {
                            education.link !== ""
                                ? <div className="white-button">
                                    <a href={education.link}>My GitHub</a>
                                </div>
                                : ""
                        }
                        {
                            Boolean(admin.email)
                                ? <>
                                    <div className="white-button">
                                        <Link to={`/editEdu/${education.id}`}>Edit</Link>
                                        <a href={education.link}>Delete</a>

                                    </div>
                                </>
                                : ""
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}