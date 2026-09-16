const url = "http://localhost:2001/game/addGame";
const game = { 
    game_name: "Mario", 
    img_game_url: "https://s.isanook.com/ga/0/ud/204/1020097/rov_img01.jpg?ip/crop/w670h402/q80/jpg", 
    description: "มาริโอ้ สนุกจังโว้ย...", 
    price: 200, 
    release_date: "2012-02-21", 
    publisher_id: 2, 
    developer_id: 2, 
    download_url: "https://play.google.com/store/apps/details?id=com.garena.game.kgth"};

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzg5NTQxMDQ5LCJleHAiOjE3OTAxNDU4NDl9.mmFFKwBj3jTAqr6v8eI_qOMlTxik8TpHB2FOxQXMu0Y"

fetch(url, {
    method: "POST",
    headers: {"Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
    }, body: JSON.stringify(game)
}).then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error("Error:", error));
