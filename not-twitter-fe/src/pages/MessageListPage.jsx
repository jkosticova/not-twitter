import { getMessages } from '../services/messageService'
import { useEffect, useState } from 'react';
import { MessageList } from "../components/MessageList";
import { Link } from "react-router-dom";

function MessageListPage() {
    
    const [messages, setMessages] = useState([]);  

    // periodically refresh (timer)
    useEffect(() => {
      getMessages().then(
        (messages) => setMessages(messages)
      );
  
      const fetchMessagesInterval = setInterval(() => {
          getMessages().then(
            (messages) => setMessages(messages)
          );
        }, 10000);
      return () => clearInterval(fetchMessagesInterval);
    }, []); 
  
    
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