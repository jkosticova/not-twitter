function addMessage(message) {
    return fetch("/api/v1/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },    
        body: JSON.stringify(message)
    });
    // add handling reponse or error
}


function getMessages() {
    
    return fetch("/api/v1/messages")
        .then(  // promise is resolved
        (response) => {
            if (!response.ok) {
                if (response.status === 401 || response.status === 403) {
                    throw new Error("AUTH_ERROR"); // Custom error for authentication
                }
                throw new Error("Error getting messages");
            }
            return response.json();
        }).catch((error) => {               // promise is rejected  
            // Better way would be to throw error here and let the 
            // client handle (e.g. show error message)
            // Returning empty array for simplicity only!
            //console.log("Error getting messages");            
            throw error;                        
        });
}

function clearMessages() {
    return storage.removeItem(MESSAGES_STORAGE_KEY);
}

export { addMessage, getMessages, clearMessages };