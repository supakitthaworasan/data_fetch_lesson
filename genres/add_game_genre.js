const fs = require('fs');

const rawData = fs.readFileSync('game_and_genre.json', 'utf-8');
const url = "http://localhost:2001/genre/addGNG";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzg5NTQxMDQ5LCJleHAiOjE3OTAxNDU4NDl9.mmFFKwBj3jTAqr6v8eI_qOMlTxik8TpHB2FOxQXMu0Y";

const game_set = JSON.parse(rawData);

const insertAllGame = async ()=>{
    for (const game of game_set){

        await fetch(url, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }, body: JSON.stringify(game)
        }).then(response => response.json())
        .then(data => console.log(JSON.stringify(data, null, 2)))
        .catch(error => console.error("Error:", error));

    }
}

insertAllGame();


