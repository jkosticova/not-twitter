function addMessage(message) {
    return fetch("/api/v1/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "include"
        },
        body: JSON.stringify(message)
    })
        .then((response) => {  // promise is resolved
            if (!response.ok) {
                // "unauthorized" or "unauthenticated" HTTP status
                if (response.status === 401 || response.status === 403) {
                    throw new Error("Not authenticated");
                }   
                // other error HTTP status
                throw new Error("Error adding new message");
            }
            //return response.json();
        })
        .catch((error) => {               // promise is rejected                          
            throw error;
        })
}


function getMessages() {

    return fetch("/api/v1/messages", { "credentials": "include" })
        .then((response) => {  // promise is resolved
            if (!response.ok) {
                // "unauthorized" or "unauthenticated" HTTP status
                if (response.status === 401 || response.status === 403) {
                    throw new Error("Not authenticated");
                }
                // other error HTTP status
                throw new Error("Error getting messages");
            }
            return response.json();
        })
        .catch((error) => {               // promise is rejected              
            throw error;
        });
}

export { addMessage, getMessages };