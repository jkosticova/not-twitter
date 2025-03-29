import { MessageList } from "../components/MessageList";
import { Link } from "react-router-dom";
import { clearMessages } from "../services/messageService";

function MessageListPage({ messages }) {
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