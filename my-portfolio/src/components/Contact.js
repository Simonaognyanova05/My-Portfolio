import { useState } from 'react';
import { sendMessage } from '../services/sendMessage';

export default function Contact() {
    const [status, setStatus] = useState('idle');

    const sendHandler = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const form = e.currentTarget;
        const { name, email, subject, message } = Object.fromEntries(new FormData(form));
        try {
            const res = await sendMessage(name, email, subject, message);
            if (res.status !== 200) throw new Error('Message could not be sent');
            form.reset();
            setStatus('success');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section className="section contact-page">
            <div className="container">
                <div className="contact-heading">
                    <p className="kicker">04 · LET'S WORK TOGETHER</p>
                    <h1>Have an idea?<br/><em>Let’s make it real.</em></h1>
                    <p>Tell me a little about your project, challenge, or opportunity. I’ll get back to you as soon as possible.</p>
                </div>

                <div className="contact-layout">
                    <aside className="contact-details">
                        <span className="contact-status"><i /> Available for new projects</span>
                        <div>
                            <small>EMAIL ME DIRECTLY</small>
                            <a href="mailto:simonaognanova05@gmail.com">simonaognanova05@gmail.com</a>
                        </div>
                        <div>
                            <small>CONNECT</small>
                            <a href="https://www.linkedin.com/in/simona-ognyanova-364435316/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
                            <a href="https://github.com/Simonaognyanova05" target="_blank" rel="noreferrer">GitHub ↗</a>
                        </div>
                        <p>Based in Bulgaria<br/>Working worldwide</p>
                    </aside>

                    <form className="contact-form" onSubmit={sendHandler}>
                        <div className="form-grid">
                            <label><span>Your name</span><input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required /></label>
                            <label><span>Email address</span><input name="email" type="email" placeholder="jane@company.com" autoComplete="email" required /></label>
                        </div>
                        <label><span>What can I help you with?</span><input name="subject" type="text" placeholder="Website, AI optimization, collaboration..." required /></label>
                        <label><span>Tell me about your project</span><textarea name="message" rows="6" placeholder="A few details about the project, goals, and timeline..." required /></label>
                        <div className="form-footer">
                            <p>{status === 'success' ? '✓ Message sent successfully. I’ll be in touch soon.' : status === 'error' ? 'Something went wrong. Please email me directly.' : 'I usually reply within 1–2 business days.'}</p>
                            <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send message ↗'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
