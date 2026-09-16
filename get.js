const url = "http://localhost:2001/game/getGames";


fetch(url, {
    method: "GET"
}).then(response => response.json())
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error("Error:", error));
