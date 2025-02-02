import { useNavigate } from 'react-router-dom';
import { sentMessage } from "../../services/user/sentMessage";

export default function Contact() {
    const navigate = useNavigate();

    const messageHandler = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);
        let { name, email, message } = Object.fromEntries(formData);

        let result = await sentMessage(name, email, message);

        if (result.status === 200) {
            alert('Your message has been sent successfully!');
            navigate('/admin');
            e.target.reset();
        } else {
            alert(result.message);
        }
    };

    return (
        //     <section id="contact">
        //         <div className="content">
        //             <h2>Contact Me</h2>
        //             <form onSubmit={messageHandler}>
        //                 <label htmlFor="name">Name:</label>
        //                 <input type="text" id="name" name="name" required />

        //                 <label htmlFor="email">Email:</label>
        //                 <input type="email" id="email" name="email" required />

        //                 <label htmlFor="message">Message:</label>
        //                 <textarea id="message" name="message" required></textarea>

        //                 <input type="submit" value="Send" />
        //             </form>
        //         </div>
        //     </section>

        <div class="container-fluid py-5" id="contact">
            <div class="container">
                <div class="position-relative d-flex align-items-center justify-content-center">
                    <h1 class="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6;'}}>Contact</h1>
                    <h1 class="position-absolute text-uppercase text-primary">Contact Me</h1>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form text-center">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" novalidate="novalidate" onSubmit={messageHandler}>
                                <div class="form-row">
                                    <div class="control-group col-sm-6">
                                        <input type="text" class="form-control p-4" id="name" name='name' placeholder="Your Name"
                                            required="required" data-validation-required-message="Please enter your name" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                    <div class="control-group col-sm-6">
                                        <input type="email" class="form-control p-4" id="email" name='email' placeholder="Your Email"
                                            required="required" data-validation-required-message="Please enter your email" />
                                        <p class="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div class="control-group">
                                    <input type="text" class="form-control p-4" id="subject" name='subject' placeholder="Subject"
                                        required="required" data-validation-required-message="Please enter a subject" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group">
                                    <textarea class="form-control py-3 px-4" rows="5" id="message" name="message" placeholder="Message"
                                        required="required"
                                        data-validation-required-message="Please enter your message"></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div>
                                    <button class="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
