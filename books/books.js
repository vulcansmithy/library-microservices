// Load express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Load mongoose
const mongoose = require("mongoose");
const res = require("express/lib/response");

// Load Book model
require("./Book");
const Book = mongoose.model("Book");

// connect
mongoose.connect("mongodb+srv://ulegaspi:jeQki1-vizdej-dugkih@cluster0.stndn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    console.log("Database is connected!");
});

app.get("/", (req, res) => {
    res.send("This is our main endpoint!");
})

app.post("/book", (req, res) => {
    var newBook = {
        title: req.body.title,
        author: req.body.author,
        numberOfPages: req.body.numberOfPages,
        publisher: req.body.publisher
    }

    // Create a new book
    var book = new Book(newBook)

    book.save().then(() => {
        console.log("New book created!")
    }).catch((err) => {
        if (err) {
            throw err;
        }
    })
    res.send("A new book created with success!")
})

app.get("/books", (req, res) => {
    Book.find().then((books) => {
        res.json(books)
    }).catch(err => {
        if (err) {
            throw err;
        }
    })
})

app.get("/book/:id", (req, res) => {
    Book.findById(req.params.id).then((book) => {
        if (book) {
            // Book data
            console.log("Returning Book data");
            res.json(book);
        } else {
            res.sendStatus(404)
        }
    }).catch(err => {
        if (err) {
            throw err;
        }
    })
})

app.delete("/book/:id", (req, res) => {
    Book.findOneAndRemove(req.params.id).then(() => {
        res.send("Book removed with success")
    }).catch(err => {
        if (err) {
            throw err;
        }
    })
})

app.listen(4545, () => {
    console.log("Up and running! -- This is our Books service");
})