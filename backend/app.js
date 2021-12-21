const app = require('express')();
const mongoose = require('mongoose');
const db = "mongodb+srv://amir:aamir123@cluster0.0fib0.mongodb.net/first-db?retryWrites=true&w=majority"
const port = process.env.PORT || 5000
const Router = require("./router/router");
const cors = require("cors");
const express = require("express")

mongoose
.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/", Router);

app.listen(port, () => {
    console.log(`App listening on prot ${port}`)
})