import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export default function EducationCard({ education }) {
    const { admin } = useAuth();

    return (
        <div class="border-left border-primary pt-2 pl-4 ml-2">
            <div class="position-relative mb-4">
                <i class="far fa-dot-circle text-primary position-absolute" style={{ top: '2px;', left: '-32px;' }}></i>
                <h5 class="font-weight-bold mb-1">{education.title}</h5>
                <p class="mb-2"><strong>{education.subtitle}</strong> | <small>{education.years}</small></p>
                <p>
                {education.description}
                   { Boolean(admin?.email) && (
                    <>
                        <Link
                            className="readedMessage"
                            to={`/update/${education.id}`}
                            style={{ margin: "10px" }}
                        >
                            Edit
                        </Link>
                        <Link
                            className="readedMessage"
                            to={`/delete/${education.id}`}
                            style={{ margin: "10px" }}
                        >
                            Delete
                        </Link>
                    </>
                    )}

                </p>
            </div>
        </div>

    );
}