// Set up dependencies.
const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api.js');

// Set the viewing engine.
app.set("view engine", "ejs");

// Set up body-parser for those POST requests.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Connect to the database.
mongoose.connect('mongodb://localhost/efc-fcc-exercise-tracker');
mongoose.Promise = global.Promise;

// Initialize routes.
app.use("/api", routes);

app.get("/", function(req, res) {
    res.render("index", {host: req.hostname, port: port});
});

//Listen for requests.
app.listen(port, () => console.log(`The server is listening on port ${port}.`));