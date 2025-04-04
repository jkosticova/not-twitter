import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addMessage } from "../services/messageService";

function NewMessagePage(props) {
    const navigate = useNavigate();
    const messageText = useRef(null);
    
    function publishNewMessage() {
        addMessage({
            "message_id": crypto.randomUUID(),
            "text": messageText.current.value
        })
            .then(() => {
                props.setError('');
                // navigate back to messages page
                navigate("/messages")
            })
            .catch((error) => {
                console.log(error.message);
                props.setError(error.message);
                // not authenticated - navigate to login page 
                if (error.message === 'Not authenticated') {
                    props.setAuthStatus(false);
                    navigate("/");
                }
            })
    }
    
    // navigate to login page if not authenticated (based on React authState, not DB state) 
    useEffect(() => {
        if (! props.authStatus) {
            props.setError("Not authenticated"),            
            navigate('/')
        }
    }, 
    [props.authStatus]);
    
    return (
        <>
            <div className="row">
                <div className="col">
                    <textarea
                        ref={messageText}
                        id="message-text"></textarea>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary"
                        onClick={publishNewMessage}>Submit</button>
                </div>
            </div>
        </>)
}

export default NewMessagePage;