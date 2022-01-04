// Load express
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Connect to the database
mongoose.connect("mongodb+srv://ulegaspi:jeQki1-vizdej-dugkih@cluster0@cluster1.wwmua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    console.log("Database is connected -- Customers service");
});

// Load Customer model
require("./customer");
const Customer = mongoose.model("Customer");

app.post("/customer", (req, res) => {
  var newCustomer = {
      name: req.body.name,
      age: req.body.age,
      address: req.body.address
  }

  // Create a new customer
  var customer = new Customer(newCustomer)

  customer.save().then(() => {
      res.send("Customer created");
  }).catch((err) => {
      if (err) {
          throw err;
      }
  })
  res.send("A new Customer created with success!")
})

app.get("/customers", (req, res) => {
  Customer.find().then((customers) => {
      res.json(customers)
  }).catch(err => {
      if (err) {
          throw err;
      }
  })
})

app.get("/customer/:id", (req, res) => {
  Customer.findById(req.params.id).then((customer) => {
      if (customer) {
          // Customer data
          console.log("Returning Customer data");
          res.json(customer);
      } else {
          res.send("Invalid ID!");
      }
  }).catch(err => {
      if (err) {
          throw err;
      }
  })
})

app.delete("/customer/:id", (req, res) => {
  Customer.findOneAndRemove(req.params.id).then(() => {
      res.send("Customer deleted with success")
  }).catch(err => {
      if (err) {
          throw err;
      }
  })
})

app.listen(5555, () => {
  console.log("Up and running! -- Customer service");
})