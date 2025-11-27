
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
        // Here it takes token form localstorage
        const token = localStorage.getItem("Token")
        // Then taht token is send to the backend to get th dtaa form the route like the items
        const res = await fetch(api_url + url, {
            headers: { Authorization: "Bearer " + token }
        });
        return res.json
    }
}