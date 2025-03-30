import { getMessages } from '../services/messageService'
import { useEffect, useState } from 'react';
import { MessageList } from "../components/MessageList";
import { Link, useNavigate } from "react-router-dom";

function MessageListPage() {

    const [messages, setMessages] = useState([]);    
    const navigate = useNavigate();

    // periodically refresh (timer)
    useEffect(() => {
        const fetchMessages = () => {
            getMessages()
                .then((messages) => setMessages(messages))
                .catch((error) => {
                    if (error.message === "AUTH_ERROR") {
                        navigate("/"); // Redirect to home/login
                    }
                });
        };

        fetchMessages(); // Initial fetch

        const fetchMessagesInterval = setInterval(fetchMessages, 10000);

        return () => clearInterval(fetchMessagesInterval);
    }, [navigate]); // Include navigate in dependencies



    return (
        <>
            <div className="row">
                <div className="col-md-3 mb-2">
                    <Link className="btn btn-primary" to="/compose">
                        Add new message
                    </Link>
                </div>
            </div>

            <MessageList messages={messages}></MessageList>

        </>
    );
}

export default MessageListPage;  