import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { markAsRead } from '../../services/admin/markAsRead';

export default function MarkAsRead() {
    const navigate = useNavigate();
    const { messageId } = useParams();

    useEffect(() => {
        markAsRead(messageId)
            .then(() => {
                navigate('/admin/contacts');
                alert('The message has been read and deleted!');
            })
            .catch((error) => {
                alert('Failed to process the message.');
                console.error(error);
            });
    }, [messageId, navigate]);

    return null;
}
