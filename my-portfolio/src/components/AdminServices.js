import { useNavigate } from "react-router-dom";
import { createProject } from "../services/createProject";

export default function AdminServices() {
    const navigate = useNavigate();

    const createHandler = async(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {title, description, img, link} = Object.fromEntries(formData);

        let res = await createProject(title, description, img, link);

        if(res.status == 200){
            alert("Project was added successfuly!");
            navigate('/');
        }else{
            alert("Error!");
        }
    }
    return (
        <section className="section contact-me" data-section="section4">
            <div className="container">
                <div className="section-heading">
                    <h2>Add project</h2>
                    <div className="line-dec"></div>
                    <span>You can add a new project here</span>
                </div>
                <div className="row">
                    <div className="right-content">
                        <div className="container">
                            <form id="contact" onSubmit={createHandler}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="title" type="text" className="form-control" id="title" placeholder="Title..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <textarea name="description" rows="6" className="form-control" id="description" placeholder="Your description..."
                                                required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="link" type="text" className="form-control" id="link" placeholder="Link..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <input name="img" type="text" className="form-control" id="img" placeholder="Image Link..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="button">
                                                Add Project
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