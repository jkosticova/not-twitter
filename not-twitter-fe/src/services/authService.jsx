function login(username, password) {
  return fetch("/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include"
  })
    .then((response) => {  // promise is resolved
      if (!response.ok) {
        if (response.status === 401 || response.status === 403) {
          throw new Error("Unauthorized"); // Custom error for authentication
        }
        throw new Error("Error logging in");
      }
      //return response.json();
    })
    .catch((error) => {               // promise is rejected              
      throw error;
    })

}

export { login };