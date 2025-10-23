import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAboutMeInfo } from "../services/getAboutMeInfo";
import { editAboutMe } from "../services/editAboutMe";

export default function EditAbout() {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        subject: "",
        description: "",
        link: "",
        img: "",
    });

    useEffect(() => {
        getAboutMeInfo().then((res) => {
            if (res) setInfo(res);
        });
    }, []);

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value,
        });
    };

    const editHandler = async (e) => {
        e.preventDefault();

        if (!info.id) {
            alert("Document ID not found!");
            return;
        }

        const { id, ...data } = info;
        const result = await editAboutMe(id, data);

        alert(result.message);
        if (result.status === 200) navigate("/");
    };

    return (
        <section className="section contact-me" data-section="section4">
            <div className="container">
                <div className="section-heading">
                    <h2>Edit About Me</h2>
                    <div className="line-dec"></div>
                    <span>You can edit your About Me info here</span>
                </div>
                <div className="row">
                    <div className="right-content">
                        <div className="container">
                            <form id="contact" onSubmit={editHandler}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input
                                                name="subject"
                                                type="text"
                                                className="form-control"
                                                id="subject"
                                                value={info.subject || ""}
                                                onChange={handleChange}
                                                placeholder="Subject..."
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <textarea
                                                name="description"
                                                rows="6"
                                                className="form-control"
                                                id="description"
                                                value={info.description || ""}
                                                onChange={handleChange}
                                                placeholder="Your description..."
                                                required
                                            ></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input
                                                name="link"
                                                type="text"
                                                className="form-control"
                                                id="link"
                                                value={info.link || ""}
                                                onChange={handleChange}
                                                placeholder="Link..."
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input
                                                name="img"
                                                type="text"
                                                className="form-control"
                                                id="img"
                                                value={info.img || ""}
                                                onChange={handleChange}
                                                placeholder="Image Link..."
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="button">
                                                Save Changes
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
