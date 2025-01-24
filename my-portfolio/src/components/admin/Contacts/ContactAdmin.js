import { useState, useEffect } from "react";
import { getMessages } from "../../../services/admin/getMessages";
import ContactContainer from "./ContactContainer";

export default function ContactAdmin() {
    const [messages, setMessages] = useState([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchMessages = async () => {
            const result = await getMessages();

            if (result.status === 200) {
                setMessages(result.messages); 
            } else {
                console.error(result.message);
            }

            setLoading(false); 
        };

        fetchMessages();
    }, []);
    return (
        <section id="admin">
            <div className="content">
                <h2>Messages from Users</h2>
                {loading ? (
                    <h1>Loading...</h1> 
                ) : (
                    messages.length > 0
                        ? messages.map(message => (
                            <ContactContainer key={message.id} message={message} />
                        ))
                        : <h1>No messages!</h1>
                )}
            </div>
        </section>
    );
}
