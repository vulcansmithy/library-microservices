// Load express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Load mongoose
const mongoose = require("mongoose");

// connect
mongoose.connect("mongodb+srv://ulegaspi:jeQki1-vizdej-dugkih@cluster0.stndn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    console.log("Database is connected!");
});

app.get("/", (req, res) => {
    res.send("This is our main endpoint!");
})

app.post("/book", (req, res) => {
    console.log(req.body);
    res.send("Testing our book routes!");
})

app.listen(4545, () => {
    console.log("Up and running! -- This is our Books service");
})