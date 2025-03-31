import { getMessages } from '../services/messageService'
import { useEffect, useState } from 'react';
import { MessageList } from "../components/MessageList";
import { Link, useNavigate } from "react-router-dom";
import PageHeader from '../components/PageHeader';

function MessageListPage(props) {

    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();
    
    // periodically refresh (timer)
    useEffect(() => {
        const fetchMessages = () => {
            getMessages()
                .then((messages) => {
                    setMessages(messages);
                    props.setError('');                    
                })
                .catch((error) => {
                    console.log(error.message);
                    props.setError(error.message);
                    setMessages([]);
                    if (error.message === 'Not authenticated') {
                        navigate("/");
                    }
                })
        };
        fetchMessages();
        const fetchMessagesInterval = setInterval(fetchMessages, 10000);
        return () => clearInterval(fetchMessagesInterval);
    }, [navigate]);

    return (
        <>
            <PageHeader error={props.error} />
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