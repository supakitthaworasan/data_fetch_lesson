const url = "http://localhost:2001/genre/update/4";
const user = { 
    
    genre_name: "Turn-Based" 
    };

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzg4MTU5NDQwLCJleHAiOjE3ODg3NjQyNDB9.yxdvQMz33hsjwHgvqfDhZYTepQH0qn43HqWe_zOMa8M"

fetch(url, {
    method: "PUT",
    headers: {"Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }, body: JSON.stringify(user)
}).then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error("Error:", error));
