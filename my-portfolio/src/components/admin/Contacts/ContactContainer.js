import { Link } from 'react-router-dom';

export default function ContactContainer({ message }) {
    return (
        <div id="message-container" style={{ margin: '50px' }}>
            <h3>Тема: {message.name}</h3>
            <p>{message.message}</p>
            <p><strong>From:</strong> {message.email}</p>
            <div style={{ marginTop: '50px' }}>
                <Link className="readedMessage" to={`/admin/contacts/${message.id}`}>Mark as read</Link>
            </div>
        </div>
    );
}