const express = require("express");  //step 2
const cors = require("cors"); //step 3
const app = express(); // step 4


app.use(express.json());// step 5
app.use(cors());

app.get("/api/users", (req, res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
  }); // step 7


app.get("/weather/:temperature", (req, res) => {
    const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
    res.status(200).send(phrase);
  });  // step 8




  

app.listen(4000, () => console.log("Server running on port 4000"));  // step6



