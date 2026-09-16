const url = "http://localhost:2001/contributor/addContributor";
const user = { 
    contributor_name: "TENCENT",
    img_icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5RDvMIjJ8cpGeTcsL2wOlUojC3TwkQ-AeqJoeIrT7qAHBpmWQAdPSNQ&s=10",
    website_url: "https://www.tencent.com/"
    };

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzg4MTU5NDQwLCJleHAiOjE3ODg3NjQyNDB9.yxdvQMz33hsjwHgvqfDhZYTepQH0qn43HqWe_zOMa8M"

fetch(url, {
    method: "POST",
    headers: {"Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }, body: JSON.stringify(user)
}).then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error("Error:", error));
