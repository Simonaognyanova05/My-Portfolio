import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/loginAdmin";

export default function Login() {
    const navigate = useNavigate();

    const loginHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {email, password} = Object.fromEntries(formData);

        const result = await loginAdmin(email, password);

        if(result.status == 200){
            alert('Successful login!');
            navigate('/');
        }else{
            alert('Invalid email or password!');
        }
    }
    return (
        <section className="section contact-me" data-section="section4">
            <div className="container">
                <div className="section-heading">
                    <h2>Login</h2>
                    <div className="line-dec"></div>
                    <span>This is admin login page</span>
                </div>
                <div className="row">
                    <div className="right-content">
                        <div className="container">
                            <form id="contact" onSubmit={loginHandler}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <fieldset>
                                            <input name="email" type="text" className="form-control" id="email" placeholder="Your email..."
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <input name="password" type="password" className="form-control" id="password" placeholder="Your password..."
                                                required="" />
                                        </fieldset>
                                    </div>

                                    <div className="col-md-12">
                                        <fieldset>
                                            <button type="submit" id="form-submit" className="button">
                                               Login
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