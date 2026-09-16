const url = "http://localhost:2001/auth/register"





const user = {
    email: "tony@gmail.com",
    username: "tony",
    password: "1234"
    }


fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }, body: JSON.stringify(user)
    }).then(response => response.json())
    .then(data => console.log(JSON.stringify(data, null, 2)))
    .catch(error => console.error("Error:", error));