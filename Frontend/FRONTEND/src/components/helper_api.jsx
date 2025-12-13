
const api_url = 'http://localhost:4500'

export const api = {
    // HEre it takes two things complete url and data you are sending to server
    // its a helper which helps us to writec ode once not rewrite thecode
    // and the url and data we get form the frontend 
    post: async (url, data) => {
        const res = await fetch(api_url + url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        return res.json()
    },

    getAuth: async (url) => {
        // Takes token fomr localstorege
        const token = localStorage.getItem("token"); // lowercase 'token'
        if (!token) throw new Error("No token found, user not logged in");
        // Send them to backend to show thersultss
        const res = await fetch(api_url + url, {
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }
        });
        return res.json(); // must call the function
    }
}


