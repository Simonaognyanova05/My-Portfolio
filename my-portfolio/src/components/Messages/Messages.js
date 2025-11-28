import './Messages.css';
import MessageItem from "./MessageItem";
import { getMessages } from '../../services/getMessages';
import { useEffect, useState } from "react";


export default function Messages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages()
            .then(res => {
                setMessages(res);
            })
            .catch(err => {
                alert(err);
            })
    }, []);
    return (
        <section className="section my-services" data-section="section2">
            <div className="container">
                <div className="section-heading">
                    <h2>Messages</h2>
                    <div className="line-dec"></div>
                    <span>All messages from users are here.</span>
                </div>
                <div className="row">
                    {messages.map(x => <MessageItem key={x.id} message={x} />)}
                </div>
            </div>
        </section>
    );
}