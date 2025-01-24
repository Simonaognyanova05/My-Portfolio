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
        <section id="contact">
            <div className="content">
                <h2>Contact Me</h2>
                <form onSubmit={messageHandler}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <input type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
}
